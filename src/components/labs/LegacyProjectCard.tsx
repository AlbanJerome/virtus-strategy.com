import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Placeholder } from "@/components/ui/placeholder";

type LegacyProjectCardProps = {
  id: string;
};

export function LegacyProjectCard({ id }: LegacyProjectCardProps) {
  return (
    <Card className="metallic-border">
      <CardHeader>
        <CardTitle className="font-sans text-lg">
          <Placeholder label={`${id}-title`} />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Placeholder label={`${id}-summary`} as="p" className="text-muted-foreground" />
        <Placeholder label={`${id}-status`} as="p" className="text-xs uppercase tracking-wider text-primary" />
      </CardContent>
    </Card>
  );
}
