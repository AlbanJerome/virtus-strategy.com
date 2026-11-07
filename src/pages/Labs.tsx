import { LabsIntro } from "@/components/labs/LabsIntro";
import { LegacyProjectCard } from "@/components/labs/LegacyProjectCard";
import { PageMeta } from "@/components/layout/PageMeta";

export function Labs() {
  return (
    <>
      <PageMeta noindex />
      <div className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <LabsIntro />
          <div className="mt-12 max-w-2xl">
            <LegacyProjectCard id="labs-legacy-stratum" />
          </div>
        </div>
      </div>
    </>
  );
}
