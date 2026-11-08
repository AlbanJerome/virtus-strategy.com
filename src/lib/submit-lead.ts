import type { LeadPayload } from "@/lib/lead-qualification";

export async function submitLead(
  payload: LeadPayload,
  turnstileToken: string,
): Promise<void> {
  const url = import.meta.env.VITE_SUPABASE_URL;
  const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    throw new Error("missing-supabase-config");
  }

  if (!turnstileToken) {
    throw new Error("missing-turnstile-token");
  }

  const endpoint = `${url.replace(/\/$/, "")}/functions/v1/submit-lead`;
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      apikey: anonKey,
      Authorization: `Bearer ${anonKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      first_name: payload.first_name,
      last_name: payload.last_name,
      company: payload.company,
      email: payload.email,
      phone: payload.phone,
      vertical: payload.vertical,
      bottleneck: payload.bottleneck,
      size: payload.size,
      timeline: payload.timeline,
      status: payload.status,
      "cf-turnstile-response": turnstileToken,
    }),
  });

  if (!response.ok) {
    throw new Error("submit-failed");
  }
}
