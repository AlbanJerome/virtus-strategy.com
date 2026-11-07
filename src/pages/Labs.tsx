import { LabsIntro } from "@/components/labs/LabsIntro";
import { LegacyProjectCard } from "@/components/labs/LegacyProjectCard";
import { Seo } from "@/components/seo";

export function Labs() {
  return (
    <>
      <Seo
        title="R&D and Labs | Virtus-Strategy"
        description="Internal research, technical prototypes, and retired projects from Virtus-Strategy. Documenting our exploration into automated regulatory classification."
        url="/labs"
      />
      <div className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <LabsIntro />
          <div className="mt-12 max-w-2xl">
            <LegacyProjectCard id="labs-legacy-stratum" />
          </div>
        </div>
      </div>
    </>
  );
}
