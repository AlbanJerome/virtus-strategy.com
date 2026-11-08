import { Lock, MapPin, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

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
    <section
      className="border-t border-border bg-card/30 py-12"
      aria-labelledby="trust-bar-heading"
    >
      <h2 id="trust-bar-heading" className="sr-only">
        Trust &amp; Compliance
      </h2>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {trustItems.map((item) => (
            <Link
              key={item.title}
              to="/privacy"
              className="group flex flex-col rounded-lg border border-transparent p-6 text-center transition-colors hover:border-border/50 hover:bg-card/50 md:text-left"
            >
              <item.icon className="mx-auto mb-2 h-6 w-6 text-primary md:mx-0" aria-hidden />
              <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
              <span className="mt-2 text-xs text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Read Policy →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
