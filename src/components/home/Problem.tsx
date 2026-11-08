import { Placeholder } from "@/components/ui/placeholder";

const problems = [
  {
    titleLabel: "home-problem-point-a-title",
    bodyLabel: "home-problem-point-a-body",
    title: "Regulatory Exposure",
    body: "Relying on unstructured email threads and manual KYC questions creates gaps in your audit trail and invites malpractice claims.",
  },
  {
    titleLabel: "home-problem-point-b-title",
    bodyLabel: "home-problem-point-b-body",
    title: "Lost Billable Hours",
    body: "Partners and advisors spend up to 70% of their day chasing basic documents and qualifying unvetted prospects instead of doing the work they were hired to do.",
  },
  {
    titleLabel: "home-problem-point-c-title",
    bodyLabel: "home-problem-point-c-body",
    title: "The Generic AI Trap",
    body: "Generic AI tools guess. Sandboxed AI extracts.",
  },
] as const;

export function Problem() {
  return (
    <section className="border-t border-border py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Placeholder
          label="home-problem-eyebrow"
          as="p"
          className="text-center text-xs uppercase tracking-wider text-primary"
        >
          The Cost of Manual Processes
        </Placeholder>
        <Placeholder
          label="home-problem-section-title"
          as="h2"
          className="mt-4 text-center text-2xl font-bold md:text-3xl lg:text-4xl"
        >
          An unmanaged intake process fails in three ways.
        </Placeholder>
        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {problems.map((problem) => (
            <li
              key={problem.titleLabel}
              className="rounded-lg border border-border bg-card/50 p-6 metallic-border"
            >
              <Placeholder
                label={problem.titleLabel}
                as="h3"
                className="text-lg font-bold text-foreground"
              >
                {problem.title}
              </Placeholder>
              <Placeholder
                label={problem.bodyLabel}
                as="p"
                className="mt-3 text-muted-foreground"
              >
                {problem.body}
              </Placeholder>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
