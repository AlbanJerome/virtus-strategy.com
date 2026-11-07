import { Placeholder } from "@/components/ui/placeholder";

const steps = [
  "home-methodology-step-1",
  "home-methodology-step-2",
  "home-methodology-step-3",
  "home-methodology-step-4",
] as const;

export function Methodology() {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Placeholder
          label="home-methodology-section-title"
          as="h2"
          className="text-center text-3xl font-bold md:text-4xl"
        />
        <Placeholder
          label="home-methodology-section-intro"
          as="p"
          className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground"
        />
        <ol className="mt-16 space-y-10 md:space-y-12">
          {steps.map((label, index) => (
            <li key={label} className="flex gap-6 md:gap-8">
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-sm font-bold text-primary"
                aria-hidden
              >
                {index + 1}
              </span>
              <div>
                <Placeholder
                  label={`${label}-title`}
                  as="h3"
                  className="text-xl font-bold md:text-2xl"
                />
                <Placeholder
                  label={`${label}-body`}
                  as="p"
                  className="mt-2 text-muted-foreground"
                />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
