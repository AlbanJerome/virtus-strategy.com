import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Placeholder } from "@/components/ui/placeholder";
import { Seo } from "@/components/seo";
import { openIntakeWidget } from "@/lib/open-intake-widget";

export function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center px-6 py-24 text-center">
      <Seo
        title="Page not found | Virtus-Strategy"
        description="The page you are looking for does not exist or has been moved."
        url="/404"
      />
      <Placeholder label="not-found-title" as="h1" className="text-3xl font-bold">
        Page not found.
      </Placeholder>
      <Placeholder label="not-found-body" as="p" className="mt-4 text-muted-foreground">
        The page you are looking for does not exist or has been moved.
      </Placeholder>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button type="button" onClick={openIntakeWidget}>
          <Placeholder label="not-found-cta-review">Book an Intake & Risk Review</Placeholder>
        </Button>
        <Button asChild variant="outline">
          <Link to="/">
            <Placeholder label="not-found-cta">Return to Home</Placeholder>
          </Link>
        </Button>
      </div>
    </div>
  );
}
