import { Button } from "@/components/ui/button";
import { Placeholder } from "@/components/ui/placeholder";
import { openIntakeWidget } from "@/lib/open-intake-widget";

export function DiagnosticCTA() {
  return (
    <section className="border-t border-border py-6 md:py-10">
      <div className="mx-auto max-w-6xl px-4 text-center md:px-6">
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
          className="mt-3 text-balance text-lg leading-snug text-[#E0E0E0]"
        >
          Let&apos;s assess your needs and identify exactly where your firm is experiencing challenges
          with client intake and qualification process, and find out where your firm&apos;s capacity is
          leaking.
        </Placeholder>
        <div className="mt-5 flex flex-wrap justify-center gap-4">
          <Button type="button" size="lg" onClick={openIntakeWidget}>
            <Placeholder label="home-diagnostic-cta-primary">Book a Diagnostic</Placeholder>
          </Button>
        </div>
      </div>
    </section>
  );
}
