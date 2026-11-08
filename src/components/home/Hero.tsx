import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Placeholder } from "@/components/ui/placeholder";
import { openIntakeWidget } from "@/lib/open-intake-widget";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 grid-lines opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="lg:pr-4">
            <Placeholder
              label="home-hero-eyebrow"
              as="p"
              className="text-xs uppercase tracking-wider text-primary"
            >
              Regulated Client Intake Infrastructure
            </Placeholder>
            <Placeholder
              label="home-hero-headline"
              as="h1"
              className="mt-4 text-4xl font-bold md:text-5xl lg:text-6xl"
            >
              Your intake layer is your largest unmanaged liability.
            </Placeholder>
          </div>
          <div className="flex flex-col gap-8 lg:pt-10">
            <Placeholder
              label="home-hero-subhead"
              as="p"
              className="text-lg leading-relaxed text-muted-foreground md:text-xl md:leading-relaxed"
            >
              Manual intake exposes regulated firms to compliance risk and drains billable capacity.
              Virtus-Strategy designs and deploys secure, deterministic intake infrastructure so your team
              can stop chasing documents and start practising.
            </Placeholder>
            <div className="flex flex-wrap gap-4">
              <Button type="button" size="lg" onClick={openIntakeWidget}>
                <Placeholder label="home-hero-cta-primary">Book a Diagnostic</Placeholder>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">
                  <Placeholder label="home-hero-cta-secondary">View the Sprint</Placeholder>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
