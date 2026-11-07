import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Placeholder } from "@/components/ui/placeholder";

const verticals = [
  { title: "Sandboxed AI", bodyLabel: "home-vertical-sandboxed-ai-body" },
  { title: "Deterministic Routing", bodyLabel: "home-vertical-deterministic-routing-body" },
  { title: "Bounded Execution", bodyLabel: "home-vertical-bounded-execution-body" },
  { title: "Client Intake Infrastructure", bodyLabel: "home-vertical-client-intake-body" },
] as const;

export function Verticals() {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Placeholder
          label="home-verticals-section-title"
          as="h2"
          className="text-center text-3xl font-bold md:text-4xl"
        />
        <Placeholder
          label="home-verticals-section-intro"
          as="p"
          className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {verticals.map((vertical) => (
            <Card key={vertical.title} className="metallic-border">
              <CardHeader>
                <CardTitle className="text-lg font-sans">{vertical.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Placeholder label={vertical.bodyLabel} as="p" className="text-muted-foreground" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
