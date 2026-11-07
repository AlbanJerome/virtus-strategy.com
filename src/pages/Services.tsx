import { DiagnosticCTA } from "@/components/home/DiagnosticCTA";
import { Faq, VIRTUS_FAQ_GROUPS } from "@/components/faq";
import { Seo } from "@/components/seo";
import { SprintPhases } from "@/components/services/SprintPhases";
import { ScopeTable } from "@/components/services/ScopeTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Placeholder } from "@/components/ui/placeholder";

const offerings = [
  {
    title: "Sandboxed AI",
    bodyLabel: "services-offering-sandboxed-ai-body",
    body: "The model is confined to data extraction. It parses intent and contact info without making qualification decisions.",
  },
  {
    title: "Deterministic Routing",
    bodyLabel: "services-offering-deterministic-routing-body",
    body: "Hard-coded logic processes the extracted data against your regulatory criteria. No guesses, no hallucinations.",
  },
  {
    title: "Bounded Execution",
    bodyLabel: "services-offering-bounded-execution-body",
    body: "The system performs specific tasks within strict constraints, preventing scope creep or data leakage.",
  },
  {
    title: "Client Intake Infrastructure",
    bodyLabel: "services-offering-client-intake-body",
    body: "A structured, auditable boundary between the public and your practice, deployed and tested for your specific compliance environment.",
  },
] as const;

export function Services() {
  return (
    <div className="py-20 md:py-28">
      <Seo
        title="The Intake Infrastructure Sprint | Virtus-Strategy"
        description="A fixed-scope, three-week engagement. We diagnose the leak, build the secure system, stress test the logic, and hand over the keys for your firm."
        url="/services"
      />
      <div className="mx-auto max-w-7xl px-6">
        <Placeholder
          label="services-page-title"
          as="h1"
          className="text-4xl font-bold md:text-5xl"
        >
          The Intake Infrastructure Sprint.
        </Placeholder>
        <Placeholder
          label="services-page-intro"
          as="p"
          className="mt-4 max-w-2xl text-lg text-muted-foreground"
        >
          A fixed-scope, three-week engagement. We diagnose the leak, build the secure system, stress
          test the logic, and hand over the keys.
        </Placeholder>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {offerings.map((offering) => (
            <Card key={offering.title} className="metallic-border">
              <CardHeader>
                <CardTitle className="font-sans">{offering.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Placeholder label={offering.bodyLabel} as="p" className="text-muted-foreground">
                  {offering.body}
                </Placeholder>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="my-8 w-full">
          <img
            src="/services-diagram.png"
            alt="Intake Infrastructure Sprint process flow"
            className="h-auto w-full object-contain"
          />
        </div>

        <SprintPhases />
        <ScopeTable />

        <section className="mt-16 border-t border-border pt-16">
          <h2 className="text-3xl font-serif mb-8">Engagement Questions</h2>
          <Faq groups={VIRTUS_FAQ_GROUPS} />
        </section>
      </div>
      <DiagnosticCTA />
    </div>
  );
}
