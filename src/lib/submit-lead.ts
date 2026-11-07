import type { LeadPayload } from "@/lib/lead-qualification";

export async function submitLead(payload: LeadPayload): Promise<void> {
  const url = import.meta.env.VITE_SUPABASE_URL;
  const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    throw new Error("missing-supabase-config");
  }

  const endpoint = `${url.replace(/\/$/, "")}/rest/v1/leads`;
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      apikey: anonKey,
      Authorization: `Bearer ${anonKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
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
    }),
  });

  if (!response.ok) {
    throw new Error("submit-failed");
  }
}
