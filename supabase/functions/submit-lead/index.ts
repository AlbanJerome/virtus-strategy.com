import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const corsHeaders: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const EXPECTED_ACTION = "lead_intake";

type LeadBody = {
  first_name?: string;
  last_name?: string;
  company?: string;
  email?: string;
  phone?: string;
  vertical?: string;
  bottleneck?: string;
  size?: string;
  timeline?: string;
  status?: string;
  "cf-turnstile-response"?: string;
};

function parseHostnames(): Set<string> {
  const raw = Deno.env.get("TURNSTILE_HOSTNAMES") ?? "virtus-strategy.com";
  return new Set(
    raw
      .split(",")
      .map((hostname) => hostname.trim())
      .filter(Boolean),
  );
}

function clientIp(req: Request): string | undefined {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim();
  }
  return req.headers.get("cf-connecting-ip") ?? undefined;
}

async function verifyTurnstile(
  token: string,
  secret: string,
  remoteIp: string | undefined,
): Promise<{ success: boolean; action?: string; hostname?: string }> {
  const body = new URLSearchParams({
    secret,
    response: token,
  });
  if (remoteIp) {
    body.set("remoteip", remoteIp);
  }

  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      signal: AbortSignal.timeout(10_000),
      body,
    },
  );

  if (!response.ok) {
    return { success: false };
  }

  return (await response.json()) as {
    success: boolean;
    action?: string;
    hostname?: string;
  };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response("method not allowed", { status: 405, headers: corsHeaders });
  }

  const turnstileSecret = Deno.env.get("TURNSTILE_SECRET");
  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  const expectedHostnames = parseHostnames();

  if (!turnstileSecret || !supabaseUrl || !serviceRoleKey || expectedHostnames.size === 0) {
    return new Response("forbidden", { status: 403, headers: corsHeaders });
  }

  let payload: LeadBody;
  try {
    payload = (await req.json()) as LeadBody;
  } catch {
    return new Response("forbidden", { status: 403, headers: corsHeaders });
  }

  const token = payload["cf-turnstile-response"];
  if (typeof token !== "string" || token.length === 0 || token.length > 2048) {
    return new Response("forbidden", { status: 403, headers: corsHeaders });
  }

  let verification;
  try {
    verification = await verifyTurnstile(token, turnstileSecret, clientIp(req));
  } catch {
    return new Response("forbidden", { status: 403, headers: corsHeaders });
  }

  if (
    !verification.success ||
    verification.action !== EXPECTED_ACTION ||
    !verification.hostname ||
    !expectedHostnames.has(verification.hostname)
  ) {
    return new Response("forbidden", { status: 403, headers: corsHeaders });
  }

  const {
    first_name,
    last_name,
    company,
    email,
    phone,
    vertical,
    bottleneck,
    size,
    timeline,
    status,
  } = payload;

  if (
    !first_name?.trim() ||
    !last_name?.trim() ||
    !company?.trim() ||
    !email?.trim() ||
    !phone?.trim() ||
    !vertical ||
    !bottleneck ||
    !size ||
    !timeline ||
    !status
  ) {
    return new Response("forbidden", { status: 403, headers: corsHeaders });
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey);

  const { error } = await supabase.from("leads").insert({
    first_name: first_name.trim(),
    last_name: last_name.trim(),
    company: company.trim(),
    email: email.trim(),
    phone: phone.trim(),
    vertical,
    bottleneck,
    size,
    timeline,
    status,
  });

  if (error) {
    console.error("lead insert failed", error.message);
    return new Response("forbidden", { status: 403, headers: corsHeaders });
  }

  return new Response(null, { status: 204, headers: corsHeaders });
});
