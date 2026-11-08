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
    <section aria-labelledby="trust-bar-heading">
      <h2 id="trust-bar-heading" className="sr-only">
        Trust &amp; Compliance
      </h2>
      <div className="grid grid-cols-1 gap-8 border-t border-border/40 py-12 md:grid-cols-3">
        {trustItems.map((item) => (
          <div key={item.title} className="flex flex-col text-center md:text-left">
            <item.icon className="mx-auto mb-2 h-6 w-6 text-primary md:mx-0" aria-hidden />
            <h3 className="text-base font-semibold">
              <Link
                to="/privacy"
                className="text-foreground underline decoration-primary/30 underline-offset-4 transition-colors hover:text-primary"
              >
                {item.title}
              </Link>
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
          </div>
        ))}
      </div>
      <Link
        to="/privacy"
        className="mt-6 inline-block text-sm text-primary hover:underline"
      >
        Read our full Privacy Policy →
      </Link>
    </section>
  );
}
