import { Lock, MapPin, ShieldCheck } from "lucide-react";

const trustItems = [
  {
    icon: MapPin,
    title: "Canadian Data Residency",
    text: "Hosted in Montreal (Canada Central).",
  },
  {
    icon: ShieldCheck,
    title: "PIPEDA & Law 25 Compliant",
    text: "Strict adherence to federal and provincial privacy laws.",
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
            <div key={item.title} className="flex flex-col text-center md:text-left">
              <item.icon className="mx-auto mb-2 h-6 w-6 text-primary md:mx-0" aria-hidden />
              <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
