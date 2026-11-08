import { Placeholder } from "@/components/ui/placeholder";

export function LabsIntro() {
  return (
    <header className="max-w-4xl">
      <Placeholder label="labs-page-title" as="h1" className="text-3xl font-bold md:text-4xl lg:text-5xl">
        Applied Research.
      </Placeholder>
      <Placeholder
        label="labs-page-lead"
        as="p"
        className="mt-4 text-lg text-foreground md:text-xl"
      >
        Where technical assumptions are challenged before they reach the client.
      </Placeholder>
      <Placeholder
        label="labs-page-intro"
        as="p"
        className="mt-6 text-lg leading-relaxed text-muted-foreground"
      >
        Applied Research is our internal R&D space. We build technical prototypes and investigate the
        engineering limits of secure intake systems.
      </Placeholder>
      <Placeholder
        label="labs-page-intro-secondary"
        as="p"
        className="mt-4 text-lg leading-relaxed text-muted-foreground"
      >
        We share our findings because compliance should never be a black box. Our clients deserve to
        understand not only what we build, but the strict engineering standards behind it.
      </Placeholder>
    </header>
  );
}
