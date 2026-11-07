import { Placeholder } from "@/components/ui/placeholder";

const signalLabels = [
  "home-trust-signal-a",
  "home-trust-signal-b",
  "home-trust-signal-c",
] as const;

export function TrustSignals() {
  return (
    <section className="border-t border-border py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <Placeholder
          label="home-trust-section-title"
          as="h2"
          className="text-center text-2xl font-bold md:text-3xl"
        />
        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {signalLabels.map((label) => (
            <Placeholder
              key={label}
              label={label}
              as="span"
              className="text-sm uppercase tracking-wider text-muted-foreground"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
