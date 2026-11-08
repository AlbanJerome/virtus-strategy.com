import { Placeholder } from "@/components/ui/placeholder";

export function LabsStratumNote() {
  return (
    <Placeholder
      label="labs-page-stratum-note"
      as="p"
      className="text-base leading-relaxed text-muted-foreground md:text-lg"
    >
      Stratum Monitor (2023-2024) was an R&D prototype into jurisdictional classification and
      regulatory early warning. It was not a production platform; that work informed our current focus
      on Sandboxed AI and bounded execution.
    </Placeholder>
  );
}
