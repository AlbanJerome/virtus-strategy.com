import { Placeholder } from "@/components/ui/placeholder";

export function Methodology() {
  return (
    <section className="border-t border-border py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Placeholder
              label="home-methodology-section-title"
              as="h2"
              className="text-2xl font-bold md:text-3xl lg:text-4xl"
            >
              Strategy before code.
            </Placeholder>
            <Placeholder
              label="home-methodology-section-intro"
              as="p"
              className="mt-4 text-lg text-muted-foreground"
            >
              Every sprint begins with a Governance and Workflow Diagnostic. We audit your operational
              and regulatory realities first. We do not write a line of code until the strategy is
              sound.
            </Placeholder>
            <Placeholder
              label="home-methodology-phase-1-title"
              as="h3"
              className="mt-8 text-xl font-bold md:text-2xl"
            >
              Governance & Workflow Diagnostic
            </Placeholder>
            <Placeholder
              label="home-methodology-phase-1-body"
              as="p"
              className="mt-2 text-muted-foreground"
            >
              We map the exact data flow, identify compliance gaps, and design the routing logic
              before the build phase begins.
            </Placeholder>
          </div>
          <div className="w-full">
            <img
              src="/home-diagram.png"
              alt="Flowchart showing deterministic routing for client intake"
              className="h-auto w-full max-w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
