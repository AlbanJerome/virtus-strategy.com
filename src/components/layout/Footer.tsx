import { Link } from "react-router-dom";

import { Placeholder } from "@/components/ui/placeholder";

const LOGO_SRC = "/assets/Virtus_Logo_1767236260261-UkapBSLX.png";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <img
            src={LOGO_SRC}
            alt="Virtus-Strategy"
            className="h-12 w-auto object-contain"
          />
          <Placeholder
            label="footer-tagline"
            as="span"
            className="text-sm text-muted-foreground"
          />
        </div>

        <div className="flex flex-col items-center gap-3 md:items-end">
          <Link
            to="/labs"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <Placeholder label="footer-labs-link" />
          </Link>
          <a
            href="mailto:contact@virtus-strategy.com"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            contact@virtus-strategy.com
          </a>
          <span className="text-xs text-muted-foreground">
            © {year} Virtus-Strategy. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
