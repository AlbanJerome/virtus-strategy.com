import { Placeholder } from "@/components/ui/placeholder";

export function LabsIntro() {
  return (
    <header className="max-w-3xl">
      <Placeholder
        label="labs-page-eyebrow"
        as="p"
        className="text-xs uppercase tracking-wider text-primary"
      >
        R&D and Archive
      </Placeholder>
      <Placeholder label="labs-page-title" as="h1" className="mt-4 text-3xl font-bold md:text-4xl lg:text-5xl">
        Virtus Labs.
      </Placeholder>
      <Placeholder
        label="labs-page-intro"
        as="p"
        className="mt-4 text-lg text-muted-foreground"
      >
        This is where we document our internal research, technical prototypes, and retired projects.
        We believe in showing our work, even the concepts we ultimately set aside.
      </Placeholder>
    </header>
  );
}
