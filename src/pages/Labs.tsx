import { LabsIntro } from "@/components/labs/LabsIntro";
import { LegacyProjectCard } from "@/components/labs/LegacyProjectCard";
import { Seo } from "@/components/seo";

export function Labs() {
  return (
    <>
      <Seo
        title="Applied Research | Virtus-Strategy"
        description="Exploring the engineering limits of secure intake systems. Read our research on governed AI extraction, rules-based controls, and traceable execution."
        url="/labs"
      />
      <div className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <LabsIntro />
          <div className="mt-12 max-w-3xl">
            <LegacyProjectCard id="labs-legacy-stratum" />
          </div>
        </div>
      </div>
    </>
  );
}
