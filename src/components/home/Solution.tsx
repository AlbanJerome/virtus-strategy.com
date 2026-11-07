import { Placeholder } from "@/components/ui/placeholder";

export function Solution() {
  return (
    <section className="border-t border-border bg-card/20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Placeholder
              label="home-solution-section-title"
              as="h2"
              className="text-3xl font-bold md:text-4xl"
            />
            <Placeholder
              label="home-solution-section-body"
              as="p"
              className="mt-4 text-lg text-muted-foreground"
            />
          </div>
          <div className="rounded-lg border border-border bg-background/80 p-8 metallic-border">
            <Placeholder
              label="home-solution-callout"
              as="p"
              className="text-muted-foreground"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
