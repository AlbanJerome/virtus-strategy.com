import { Placeholder } from "@/components/ui/placeholder";

const steps = [
  {
    label: "home-solution-step-1",
    text: "Workflow Review. Diagnose operational bottlenecks.",
  },
  {
    label: "home-solution-step-2",
    text: "Architecture. Design rules-based controls.",
  },
  {
    label: "home-solution-step-3",
    text: "Implementation. Deploy secure intake infrastructure.",
  },
] as const;

export function Solution() {
  return (
    <section className="border-t border-border bg-card/20 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <Placeholder
              label="home-solution-section-title"
              as="h2"
              className="text-2xl font-bold md:text-3xl lg:text-4xl"
            >
              Secure the intake layer before a human touches it.
            </Placeholder>
            <Placeholder
              label="home-solution-section-body"
              as="p"
              className="mt-4 text-lg text-muted-foreground"
            >
              We build a structured boundary between the public and your practice. Our systems use
              Controlled AI Extraction to capture data, and Rules-Based Controls to qualify and direct it.
              No guesses, no hallucinations. Just traceable, governed execution.
            </Placeholder>
          </div>
          <ol className="space-y-6 rounded-lg border border-border bg-background/80 p-8 metallic-border">
            {steps.map((step, index) => (
              <li key={step.label} className="flex gap-4">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-sm font-bold text-primary"
                  aria-hidden
                >
                  {index + 1}
                </span>
                <Placeholder label={step.label} as="p" className="text-muted-foreground">
                  {step.text}
                </Placeholder>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
