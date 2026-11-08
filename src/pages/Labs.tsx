import { LabsIntro } from "@/components/labs/LabsIntro";
import { LabsStratumNote } from "@/components/labs/LabsStratumNote";
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
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <LabsIntro />
            <div className="flex w-full flex-col gap-8 lg:pt-12">
              <LabsStratumNote />
              <LegacyProjectCard id="labs-legacy-stratum" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
