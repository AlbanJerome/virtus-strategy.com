import { Placeholder } from "@/components/ui/placeholder";

export function LabsIntro() {
  return (
    <header className="max-w-3xl">
      <Placeholder label="labs-page-title" as="h1" className="text-4xl font-bold md:text-5xl" />
      <Placeholder
        label="labs-page-intro"
        as="p"
        className="mt-4 text-lg text-muted-foreground"
      />
      <Placeholder
        label="labs-archive-notice"
        as="p"
        className="mt-6 text-sm text-muted-foreground"
      />
    </header>
  );
}
