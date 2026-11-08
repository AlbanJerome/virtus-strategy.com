import { DiagnosticCTA } from "@/components/home/DiagnosticCTA";
import { Faq, SERVICES_FAQ_GROUPS } from "@/components/faq";
import { Seo } from "@/components/seo";
import { TrustBar } from "@/components/layout/TrustBar";
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
    <div className="py-16 md:py-24">
      <Seo
        title="The Intake & Risk Diagnostic | Virtus-Strategy"
        description="A fixed-scope advisory engagement. We diagnose your intake workflow, map compliance risks, and deliver a board-ready capacity recovery model. Implementation is optional."
        url="/services"
      />
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Placeholder
          label="services-page-title"
          as="h1"
          className="text-3xl font-bold md:text-4xl lg:text-5xl"
        >
          The Intake & Risk Diagnostic.
        </Placeholder>
        <Placeholder
          label="services-page-intro"
          as="p"
          className="mt-4 max-w-2xl text-lg text-muted-foreground"
        >
          A fixed-scope advisory engagement. We diagnose your intake workflow, map the compliance risks,
          and deliver a board-ready capacity recovery model. Implementation is optional.
        </Placeholder>
        <p className="mt-4 max-w-2xl text-sm font-bold text-foreground">
          Fixed-scope pricing is provided after the diagnostic to ensure alignment with your specific
          infrastructure needs.
        </p>

        <section className="mt-16" aria-labelledby="services-offerings-heading">
          <h2
            id="services-offerings-heading"
            className="text-xl font-bold md:text-2xl lg:text-3xl"
          >
            What we deliver
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
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
        </section>

        <div className="mt-8 w-full leading-none">
          <img
            src="/services-diagram.png"
            alt="Engagement phases: Workflow Diagnostic, Intake Architecture, Controlled Build, and System Handover"
            className="block h-auto w-full max-w-full object-contain object-top"
          />
        </div>

        <SprintPhases />
        <ScopeTable />
      </div>
      <DiagnosticCTA
        body="Request a diagnostic briefing to review your operational risks and capacity leaks."
        bodyLabel="services-diagnostic-cta-body"
      />
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <section className="border-t border-border py-16 md:py-24">
          <h2 className="mb-8 font-serif text-2xl md:text-3xl">Engagement Questions</h2>
          <Faq groups={SERVICES_FAQ_GROUPS} />
        </section>
        <div className="mt-16">
          <TrustBar />
        </div>
      </div>
    </div>
  );
}
