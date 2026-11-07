import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Placeholder } from "@/components/ui/placeholder";

export function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center px-6 py-24 text-center">
      <Placeholder label="not-found-title" as="h1" className="text-3xl font-bold">
        Page not found.
      </Placeholder>
      <Placeholder label="not-found-body" as="p" className="mt-4 text-muted-foreground">
        The page you are looking for does not exist or has been moved.
      </Placeholder>
      <Button asChild className="mt-8">
        <Link to="/">
          <Placeholder label="not-found-cta">Return to Home</Placeholder>
        </Link>
      </Button>
    </div>
  );
}
