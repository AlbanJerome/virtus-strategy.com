import { Placeholder } from "@/components/ui/placeholder";

const phases = [
  "services-sprint-phase-1",
  "services-sprint-phase-2",
  "services-sprint-phase-3",
] as const;

export function SprintPhases() {
  return (
    <section className="mt-16 border-t border-border pt-16">
      <Placeholder
        label="services-sprint-phases-title"
        as="h2"
        className="text-2xl font-bold md:text-3xl"
      />
      <Placeholder
        label="services-sprint-phases-intro"
        as="p"
        className="mt-3 max-w-2xl text-muted-foreground"
      />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {phases.map((label, index) => (
          <div
            key={label}
            className="rounded-lg border border-border bg-card/50 p-6 metallic-border"
          >
            <span className="text-xs font-medium uppercase tracking-wider text-primary">
              <Placeholder label={`${label}-label`} />
            </span>
            <Placeholder
              label={`${label}-title`}
              as="h3"
              className="mt-3 text-lg font-bold"
            />
            <Placeholder
              label={`${label}-body`}
              as="p"
              className="mt-2 text-sm text-muted-foreground"
            />
            <span className="sr-only">{index + 1}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
