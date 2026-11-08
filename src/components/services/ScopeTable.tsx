import { Placeholder } from "@/components/ui/placeholder";

const rows = [
  {
    itemLabel: "services-scope-included-item",
    detailLabel: "services-scope-included-detail",
    item: "What's included",
    detail:
      "Governance Diagnostic, Web/UI Build, Intake Logic Design, Deterministic Routing Setup, Stress Testing, Handover Documentation. Full system ownership and IP transfer upon handover.",
  },
  {
    itemLabel: "services-scope-excluded-item",
    detailLabel: "services-scope-excluded-detail",
    item: "What's not included",
    detail:
      "Ongoing monthly retainer, generic LLM licensing, custom CRM development, third-party API subscription costs.",
  },
] as const;

export function ScopeTable() {
  return (
    <section className="mt-16 border-t border-border pb-16 pt-16 md:pb-24">
      <Placeholder
        label="services-scope-table-title"
        as="h2"
        className="text-xl font-bold md:text-2xl lg:text-3xl"
      >
        Sprint scope.
      </Placeholder>
      <Placeholder
        label="services-scope-table-intro"
        as="p"
        className="mt-3 max-w-2xl text-muted-foreground"
      >
        We stay within these bounds to protect your budget and our delivery timeline.
      </Placeholder>
      <div className="mt-8 overflow-x-auto rounded-lg border border-border metallic-border">
        <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-card/80">
              <th className="px-4 py-3 font-sans font-medium text-foreground">
                <Placeholder label="services-scope-col-item">What&apos;s included</Placeholder>
              </th>
              <th className="px-4 py-3 font-sans font-medium text-foreground">
                <Placeholder label="services-scope-col-detail">
                  What&apos;s not included
                </Placeholder>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.itemLabel} className="border-b border-border last:border-0">
                <td className="px-4 py-4 align-top font-medium text-foreground">
                  <Placeholder label={row.itemLabel}>{row.item}</Placeholder>
                </td>
                <td className="px-4 py-4 align-top text-muted-foreground">
                  <Placeholder label={row.detailLabel}>{row.detail}</Placeholder>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
