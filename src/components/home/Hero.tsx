import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Placeholder } from "@/components/ui/placeholder";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 grid-lines opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <Placeholder
            label="home-hero-eyebrow"
            as="p"
            className="text-xs uppercase tracking-wider text-primary"
          />
          <Placeholder
            label="home-hero-headline"
            as="h1"
            className="mt-4 text-4xl font-bold md:text-6xl"
          />
          <Placeholder
            label="home-hero-subhead"
            as="p"
            className="mt-6 text-lg text-muted-foreground"
          />
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link to="/contact">
                <Placeholder label="home-hero-cta-primary" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/services">
                <Placeholder label="home-hero-cta-secondary" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
