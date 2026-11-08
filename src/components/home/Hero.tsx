import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Placeholder } from "@/components/ui/placeholder";
import { openIntakeWidget } from "@/lib/open-intake-widget";

export function Hero() {
  return (
    <section className="relative w-full max-w-full overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 grid-lines opacity-40" aria-hidden />
      <div className="relative mx-auto w-full min-w-0 max-w-7xl px-4 md:px-6">
        <div className="grid min-w-0 grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="min-w-0 lg:pr-4">
            <Placeholder
              label="home-hero-eyebrow"
              as="p"
              className="text-balance break-words text-xs uppercase tracking-wider text-primary"
            >
              Strategic Intake & Risk Advisory
            </Placeholder>
            <Placeholder
              label="home-hero-headline"
              as="h1"
              className="mt-4 text-balance break-words text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Your intake layer is your largest unmanaged liability.
            </Placeholder>
          </div>
          <div className="flex min-w-0 flex-col gap-8 lg:pt-10">
            <Placeholder
              label="home-hero-subhead"
              as="p"
              className="text-balance break-words text-lg leading-relaxed text-muted-foreground md:text-xl md:leading-relaxed"
            >
              Manual intake exposes regulated firms to compliance risk and drains billable capacity.
              Virtus-Strategy reviews your intake workflow and installs secure, rules-based controls so
              your team can stop chasing documents and start practising.
            </Placeholder>
            <div className="flex flex-wrap gap-4">
              <Button type="button" size="lg" onClick={openIntakeWidget}>
                <Placeholder label="home-hero-cta-primary">Book an Intake & Risk Review</Placeholder>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">
                  <Placeholder label="home-hero-cta-secondary">How It Works</Placeholder>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
