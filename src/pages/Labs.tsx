import { LabsIntro } from "@/components/labs/LabsIntro";
import { LegacyProjectCard } from "@/components/labs/LegacyProjectCard";
import { PageMeta } from "@/components/layout/PageMeta";

const legacyProjects = ["labs-legacy-project-a", "labs-legacy-project-b"] as const;

export function Labs() {
  return (
    <>
      <PageMeta noindex />
      <div className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <LabsIntro />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {legacyProjects.map((id) => (
              <LegacyProjectCard key={id} id={id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
