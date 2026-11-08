import { Placeholder } from "@/components/ui/placeholder";

const signals = [
  {
    titleLabel: "home-trust-signal-a-title",
    descLabel: "home-trust-signal-a-desc",
    title: "Controlled AI Extraction",
    description:
      "The model is confined to structured data extraction. It parses intent without making qualification decisions.",
  },
  {
    titleLabel: "home-trust-signal-b-title",
    descLabel: "home-trust-signal-b-desc",
    title: "Rules-Based Controls",
    description:
      "Hard-coded logic processes extracted data against your firm's regulatory criteria. No guesses, no hallucinations.",
  },
  {
    titleLabel: "home-trust-signal-c-title",
    descLabel: "home-trust-signal-c-desc",
    title: "Traceable Execution",
    description:
      "The system performs specific tasks within strict operational constraints, providing a complete audit trail.",
  },
] as const;

export function TrustSignals() {
  return (
    <section className="border-t border-border py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
          {signals.map((signal) => (
            <div key={signal.titleLabel} className="text-center md:text-left">
              <Placeholder
                label={signal.titleLabel}
                as="h2"
                className="text-lg font-bold text-foreground"
              >
                {signal.title}
              </Placeholder>
              <Placeholder
                label={signal.descLabel}
                as="p"
                className="mt-3 text-sm text-muted-foreground"
              >
                {signal.description}
              </Placeholder>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
