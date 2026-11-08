import { Placeholder } from "@/components/ui/placeholder";

export function LabsIntro() {
  return (
    <header className="max-w-4xl">
      <Placeholder label="labs-page-title" as="h1" className="text-3xl font-bold md:text-4xl lg:text-5xl">
        Virtus Labs.
      </Placeholder>
      <Placeholder
        label="labs-page-lead"
        as="p"
        className="mt-4 text-lg text-foreground md:text-xl"
      >
        Where ideas are tested, assumptions challenged, and better systems engineered.
      </Placeholder>
      <Placeholder
        label="labs-page-intro"
        as="p"
        className="mt-6 text-lg leading-relaxed text-muted-foreground"
      >
        Virtus Labs is our research and development space. Here, we explore new approaches, build
        technical prototypes, and investigate the problems shaping secure intake systems.
      </Placeholder>
      <Placeholder
        label="labs-page-intro-secondary"
        as="p"
        className="mt-4 text-lg leading-relaxed text-muted-foreground"
      >
        We share our findings because innovation shouldn&apos;t be a black box. Our clients and partners
        deserve to understand not only what we build, but the thinking, research, and engineering behind
        it.
      </Placeholder>
    </header>
  );
}
