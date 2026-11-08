import { LabsIntro } from "@/components/labs/LabsIntro";
import { LegacyProjectCard } from "@/components/labs/LegacyProjectCard";
import { Seo } from "@/components/seo";

export function Labs() {
  return (
    <>
      <Seo
        title="R&D | Virtus-Strategy"
        description="Internal research and technical prototypes from Virtus-Strategy: notes from our work on compliance, bounded execution, and client intake infrastructure."
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
