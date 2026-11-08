import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Placeholder } from "@/components/ui/placeholder";

const PROJECTS = {
  "labs-legacy-stratum": {
    title: "Stratum Monitor (2023-2024)",
    summary:
      "Stratum Monitor was an R&D prototype into automated jurisdictional classification and regulatory early warning. We built it to test automated cross-border compliance mapping, then set it aside because generic LLMs could not guarantee the deterministic accuracy required for enterprise compliance. That outcome directly inspired our current focus on Sandboxed AI and bounded execution.",
  },
} as const;

type LegacyProjectCardProps = {
  id: keyof typeof PROJECTS;
};

export function LegacyProjectCard({ id }: LegacyProjectCardProps) {
  const project = PROJECTS[id];

  return (
    <Card className="metallic-border">
      <CardHeader>
        <CardTitle className="font-sans text-lg">
          <Placeholder label={`${id}-title`}>{project.title}</Placeholder>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Placeholder label={`${id}-summary`} as="p" className="text-muted-foreground">
          {project.summary}
        </Placeholder>
      </CardContent>
    </Card>
  );
}
