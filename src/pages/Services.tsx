import { SprintPhases } from "@/components/services/SprintPhases";
import { ScopeTable } from "@/components/services/ScopeTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Placeholder } from "@/components/ui/placeholder";

const offerings = [
  { title: "Sandboxed AI", bodyLabel: "services-offering-sandboxed-ai-body" },
  { title: "Deterministic Routing", bodyLabel: "services-offering-deterministic-routing-body" },
  { title: "Bounded Execution", bodyLabel: "services-offering-bounded-execution-body" },
  { title: "Client Intake Infrastructure", bodyLabel: "services-offering-client-intake-body" },
] as const;

export function Services() {
  return (
    <div className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Placeholder
          label="services-page-title"
          as="h1"
          className="text-4xl font-bold md:text-5xl"
        />
        <Placeholder
          label="services-page-intro"
          as="p"
          className="mt-4 max-w-2xl text-lg text-muted-foreground"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {offerings.map((offering) => (
            <Card key={offering.title} className="metallic-border">
              <CardHeader>
                <CardTitle className="font-sans">{offering.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Placeholder label={offering.bodyLabel} as="p" className="text-muted-foreground" />
              </CardContent>
            </Card>
          ))}
        </div>

        <SprintPhases />
        <ScopeTable />
      </div>
    </div>
  );
}
