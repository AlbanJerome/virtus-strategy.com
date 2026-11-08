import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Placeholder } from "@/components/ui/placeholder";

export function DiagnosticCTA() {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Placeholder
          label="home-diagnostic-cta-title"
          as="h2"
          className="text-3xl font-bold md:text-4xl"
        >
          Stop losing billable hours to manual intake.
        </Placeholder>
        <Placeholder
          label="home-diagnostic-cta-body"
          as="p"
          className="mt-4 text-lg text-muted-foreground"
        >
          Book a 30-minute intake audit. We will map your current workflow and identify exactly where
          your capacity is leaking.
        </Placeholder>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link to="/contact">
              <Placeholder label="home-diagnostic-cta-primary">Book a 30-minute Intake Audit</Placeholder>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
