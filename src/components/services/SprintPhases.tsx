import { Placeholder } from "@/components/ui/placeholder";

const phases = [
  {
    key: "1",
    title: "Workflow Review",
    duration: "Advisory",
    bullets: [
      "Map current intake flow and compliance requirements.",
      "Identify operational bottlenecks and capacity leaks.",
    ],
    deliverable: "Board-ready risk register and capacity recovery model.",
  },
  {
    key: "2",
    title: "Intake Architecture",
    duration: "Strategy",
    bullets: [
      "Define rules-based controls and qualification logic.",
      "Specify secure data routing and compliance boundaries.",
    ],
    deliverable: "Specification of rules-based controls and data routing.",
  },
  {
    key: "3",
    title: "Controlled Implementation",
    duration: "Implementation (Optional)",
    bullets: [
      "Deploy the secure intake interface.",
      "Install controlled extraction and rules-based routing.",
    ],
    deliverable: "Deployment of the secure intake layer.",
  },
  {
    key: "4",
    title: "System Handover",
    duration: "Handover",
    bullets: [
      "Transfer administrative access and documentation.",
      "Train the team on workflow management.",
    ],
    deliverable: "Full IP transfer, documentation, and standard operating procedures.",
  },
] as const;

export function SprintPhases() {
  return (
    <section className="mt-6 border-t border-border pt-10 md:mt-8 md:pt-12">
      <Placeholder
        label="services-sprint-phases-title"
        as="h2"
        className="text-xl font-bold md:text-2xl lg:text-3xl"
      >
        The engagement phases.
      </Placeholder>
      <Placeholder
        label="services-sprint-phases-intro"
        as="p"
        className="mt-3 max-w-2xl text-muted-foreground"
      >
        Advisory and strategy are fixed-scope. Implementation proceeds only when you choose Phase 3.
      </Placeholder>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {phases.map((phase) => (
          <div
            key={phase.key}
            className="rounded-lg border border-border bg-card/50 p-6 metallic-border"
          >
            <span className="text-xs font-medium uppercase tracking-wider text-primary">
              <Placeholder label={`services-sprint-phase-${phase.key}-duration`}>
                {phase.duration}
              </Placeholder>
            </span>
            <Placeholder
              label={`services-sprint-phase-${phase.key}-title`}
              as="h3"
              className="mt-3 text-lg font-bold"
            >
              {phase.title}
            </Placeholder>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              {phase.bullets.map((bullet, index) => (
                <li key={index}>
                  <Placeholder label={`services-sprint-phase-${phase.key}-bullet-${index + 1}`}>
                    {bullet}
                  </Placeholder>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs font-medium uppercase tracking-wider text-primary">
              Deliverable
            </p>
            <Placeholder
              label={`services-sprint-phase-${phase.key}-deliverable`}
              as="p"
              className="mt-2 text-sm text-muted-foreground"
            >
              {phase.deliverable}
            </Placeholder>
          </div>
        ))}
      </div>
    </section>
  );
}
