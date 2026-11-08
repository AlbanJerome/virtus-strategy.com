import { Placeholder } from "@/components/ui/placeholder";

export function LabsIntro() {
  return (
    <header className="w-full lg:pr-4">
      <Placeholder
        label="labs-page-eyebrow"
        as="p"
        className="text-xs uppercase tracking-wider text-primary"
      >
        R&D
      </Placeholder>
      <Placeholder label="labs-page-title" as="h1" className="mt-4 text-3xl font-bold md:text-4xl lg:text-5xl">
        Virtus Labs.
      </Placeholder>
      <Placeholder
        label="labs-page-intro"
        as="p"
        className="mt-4 text-lg leading-relaxed text-muted-foreground"
      >
        This is where we document internal research and technical prototypes: the experiments that
        inform how we design secure intake systems. We publish what we learn so partners can see how
        we think, not just what we ship.
      </Placeholder>
    </header>
  );
}
