import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const ALLOWED_ORIGINS = new Set([
  "https://virtus-strategy.com",
  "http://localhost:5173",
]);

const ALLOWED_VERTICALS = new Set([
  "Wealth/Insurance",
  "Legal",
  "Accounting/Tax",
  "Healthcare",
]);

const ALLOWED_BOTTLENECKS = new Set([
  "Manual data entry",
  "Compliance/KYC risk",
  "Chasing documents",
  "Too many unqualified leads",
]);

const ALLOWED_SIZES = new Set(["1-5", "6-20", "20+"]);

const ALLOWED_TIMELINES = new Set([
  "Next 30 days",
  "This quarter",
  "Just exploring",
]);

const CORS_EXTRA_HEADERS: Record<string, string> = {
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

function corsHeadersForRequest(req: Request): Record<string, string> {
  const origin = req.headers.get("Origin");
  const headers = { ...CORS_EXTRA_HEADERS };
  if (origin && ALLOWED_ORIGINS.has(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
    headers.Vary = "Origin";
  }
  return headers;
}

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

function leadEnumFieldsValid(payload: LeadBody): boolean {
  const { vertical, bottleneck, size, timeline } = payload;
  return (
    typeof vertical === "string" &&
    ALLOWED_VERTICALS.has(vertical) &&
    typeof bottleneck === "string" &&
    ALLOWED_BOTTLENECKS.has(bottleneck) &&
    typeof size === "string" &&
    ALLOWED_SIZES.has(size) &&
    typeof timeline === "string" &&
    ALLOWED_TIMELINES.has(timeline)
  );
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
  const cors = corsHeadersForRequest(req);

  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: cors });
  }

  if (req.method !== "POST") {
    return new Response("method not allowed", { status: 405, headers: cors });
  }

  const turnstileSecret = Deno.env.get("TURNSTILE_SECRET");
  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  const expectedHostnames = parseHostnames();

  if (!turnstileSecret || !supabaseUrl || !serviceRoleKey || expectedHostnames.size === 0) {
    return new Response("forbidden", { status: 403, headers: cors });
  }

  let payload: LeadBody;
  try {
    payload = (await req.json()) as LeadBody;
  } catch {
    return new Response("forbidden", { status: 403, headers: cors });
  }

  const token = payload["cf-turnstile-response"];
  if (typeof token !== "string" || token.length === 0 || token.length > 2048) {
    return new Response("forbidden", { status: 403, headers: cors });
  }

  let verification;
  try {
    verification = await verifyTurnstile(token, turnstileSecret, clientIp(req));
  } catch {
    return new Response("forbidden", { status: 403, headers: cors });
  }

  if (
    !verification.success ||
    verification.action !== EXPECTED_ACTION ||
    !verification.hostname ||
    !expectedHostnames.has(verification.hostname)
  ) {
    return new Response("forbidden", { status: 403, headers: cors });
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
    return new Response("forbidden", { status: 403, headers: cors });
  }

  if (!leadEnumFieldsValid(payload)) {
    return new Response("bad request", { status: 400, headers: cors });
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
    return new Response("forbidden", { status: 403, headers: cors });
  }

  return new Response(null, { status: 204, headers: cors });
});
