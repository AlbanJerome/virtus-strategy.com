import { Lock, MapPin, ShieldCheck } from "lucide-react";

import { Container } from "@/components/layout/Container";

const trustItems = [
  {
    icon: MapPin,
    title: "Canadian Data Residency",
    text: "Hosted in the Montreal Region (ca-central-1).",
  },
  {
    icon: ShieldCheck,
    title: "PIPEDA & Law 25 Compliant",
    text: "Strict adherence to PIPEDA, Quebec's Law 25, and Ontario's PHIPA for health data.",
  },
  {
    icon: Lock,
    title: "Zero Data Training",
    text: "Your data is never used to train public AI models.",
  },
] as const;

export function TrustBar() {
  return (
    <section aria-labelledby="trust-bar-heading" className="border-t border-border/40">
      <Container>
        <div className="flex flex-col gap-2.5 py-3 md:flex-row md:items-start md:justify-between md:gap-4 lg:gap-8">
          <h2 id="trust-bar-heading" className="sr-only">
            Trust &amp; Compliance
          </h2>
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="flex min-w-0 flex-1 items-start gap-2 text-left md:max-w-none"
            >
              <item.icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" aria-hidden />
              <p className="min-w-0 text-[11px] leading-snug text-muted-foreground/80">
                <span className="font-medium text-muted-foreground">{item.title}. </span>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
