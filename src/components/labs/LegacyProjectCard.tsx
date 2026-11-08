import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Placeholder } from "@/components/ui/placeholder";

const PROJECTS = {
  "labs-legacy-stratum": {
    title: "Stratum Monitor (2024-2025)",
    paragraphs: [
      {
        label: "labs-legacy-stratum-p1",
        text: "We set out to automate regulatory intelligence. We discovered why intelligence needs boundaries.",
      },
      {
        label: "labs-legacy-stratum-p2",
        text: "Stratum Monitor investigated automated jurisdictional classification.",
      },
      {
        label: "labs-legacy-stratum-p3",
        text: "The research revealed a fundamental problem: generic LLMs could interpret information, but could not guarantee the traceable decisions required for enterprise compliance.",
      },
      {
        label: "labs-legacy-stratum-p4",
        text: "We used that finding to shape our next research direction: governed AI extraction and rules-based controls.",
      },
    ],
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
      <CardContent className="space-y-4">
        {project.paragraphs.map((paragraph) => (
          <Placeholder
            key={paragraph.label}
            label={paragraph.label}
            as="p"
            className="text-muted-foreground"
          >
            {paragraph.text}
          </Placeholder>
        ))}
      </CardContent>
    </Card>
  );
}
