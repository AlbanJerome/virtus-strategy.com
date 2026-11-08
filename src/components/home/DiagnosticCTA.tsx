import { Button } from "@/components/ui/button";
import { Placeholder } from "@/components/ui/placeholder";
import { openIntakeWidget } from "@/lib/open-intake-widget";

const DEFAULT_BODY =
  "Let's map your workflow. Book an Intake & Risk Review to see if our approach is a fit for your firm.";

type DiagnosticCTAProps = {
  body?: string;
  bodyLabel?: string;
};

export function DiagnosticCTA({
  body = DEFAULT_BODY,
  bodyLabel = "home-diagnostic-cta-body",
}: DiagnosticCTAProps = {}) {
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
        <Placeholder label={bodyLabel} as="p" className="mt-3 text-balance text-lg leading-snug text-[#E0E0E0]">
          {body}
        </Placeholder>
        <div className="mt-5 flex flex-wrap justify-center gap-4">
          <Button type="button" size="lg" onClick={openIntakeWidget}>
            <Placeholder label="home-diagnostic-cta-primary">Book an Intake & Risk Review</Placeholder>
          </Button>
        </div>
      </div>
    </section>
  );
}
