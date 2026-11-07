import { Placeholder } from "@/components/ui/placeholder";

const phases = [
  {
    key: "1",
    title: "Governance & Workflow Diagnostic",
    duration: "Week 1",
    bullets: [
      "Map current intake flow and compliance requirements.",
      "Identify operational bottlenecks and capacity leaks.",
    ],
    deliverable: "A documented system architecture and routing logic map.",
  },
  {
    key: "2",
    title: "Build",
    duration: "Week 2",
    bullets: [
      "Deploy the web presence and intake interface.",
      "Implement Sandboxed AI and Deterministic Routing.",
    ],
    deliverable: "A fully functional, secure client intake system.",
  },
  {
    key: "3",
    title: "Stress Test",
    duration: "Week 2-3",
    bullets: [
      "Run simulated malicious, incomplete, and edge-case inputs.",
      "Verify deterministic routing against compliance rules.",
    ],
    deliverable: "Test results and an audit-trail verification report.",
  },
  {
    key: "4",
    title: "Handover",
    duration: "Week 3",
    bullets: [
      "Transfer administrative access and documentation.",
      "Train the team on workflow management.",
    ],
    deliverable: "A live asset and a standard operating procedure manual.",
  },
] as const;

export function SprintPhases() {
  return (
    <section className="mt-16 border-t border-border pt-16">
      <Placeholder
        label="services-sprint-phases-title"
        as="h2"
        className="text-xl font-bold md:text-2xl lg:text-3xl"
      >
        The four-phase sprint.
      </Placeholder>
      <Placeholder
        label="services-sprint-phases-intro"
        as="p"
        className="mt-3 max-w-2xl text-muted-foreground"
      >
        No open-ended retainers. A strict timeline from diagnostic to handover.
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
