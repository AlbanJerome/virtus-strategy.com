import { Button } from "@/components/ui/button";
import { Placeholder } from "@/components/ui/placeholder";
import { openIntakeWidget } from "@/lib/open-intake-widget";

export function DiagnosticCTA() {
  return (
    <section className="border-t border-border py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
        <Placeholder
          label="home-diagnostic-cta-title"
          as="h2"
          className="text-2xl font-bold md:text-3xl lg:text-4xl"
        >
          Stop losing billable hours to manual intake.
        </Placeholder>
        <Placeholder
          label="home-diagnostic-cta-body"
          as="p"
          className="mt-4 text-lg text-muted-foreground"
        >
          Book a 30-minute diagnostic to map your front door and identify where your capacity is
          leaking.
        </Placeholder>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button type="button" size="lg" onClick={openIntakeWidget}>
            <Placeholder label="home-diagnostic-cta-primary">Book a Diagnostic</Placeholder>
          </Button>
        </div>
      </div>
    </section>
  );
}
