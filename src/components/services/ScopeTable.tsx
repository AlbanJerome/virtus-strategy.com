import { Placeholder } from "@/components/ui/placeholder";

const rows = [
  "services-scope-row-included-a",
  "services-scope-row-included-b",
  "services-scope-row-included-c",
  "services-scope-row-excluded-a",
] as const;

export function ScopeTable() {
  return (
    <section className="mt-16 border-t border-border pt-16">
      <Placeholder
        label="services-scope-table-title"
        as="h2"
        className="text-2xl font-bold md:text-3xl"
      />
      <Placeholder
        label="services-scope-table-intro"
        as="p"
        className="mt-3 max-w-2xl text-muted-foreground"
      />
      <div className="mt-8 overflow-x-auto rounded-lg border border-border metallic-border">
        <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-card/80">
              <th className="px-4 py-3 font-sans font-medium text-foreground">
                <Placeholder label="services-scope-col-item" />
              </th>
              <th className="px-4 py-3 font-sans font-medium text-foreground">
                <Placeholder label="services-scope-col-detail" />
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((label) => (
              <tr key={label} className="border-b border-border last:border-0">
                <td className="px-4 py-4 align-top text-foreground">
                  <Placeholder label={`${label}-item`} />
                </td>
                <td className="px-4 py-4 align-top text-muted-foreground">
                  <Placeholder label={`${label}-detail`} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
