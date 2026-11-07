import { Placeholder } from "@/components/ui/placeholder";

export function Problem() {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Placeholder
          label="home-problem-section-title"
          as="h2"
          className="text-center text-3xl font-bold md:text-4xl"
        />
        <Placeholder
          label="home-problem-section-intro"
          as="p"
          className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground"
        />
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {(["home-problem-point-a", "home-problem-point-b", "home-problem-point-c"] as const).map(
            (label) => (
              <li
                key={label}
                className="rounded-lg border border-border bg-card/50 p-6 metallic-border"
              >
                <Placeholder label={label} as="p" className="text-muted-foreground" />
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
}
