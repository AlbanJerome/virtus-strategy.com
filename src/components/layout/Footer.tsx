import { Link } from "react-router-dom";

import { Placeholder } from "@/components/ui/placeholder";

const LOGO_SRC = "/assets/Virtus_Logo_1767236260261-UkapBSLX.png";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <img
              src={LOGO_SRC}
              alt="Virtus-Strategy"
              className="h-12 max-w-full object-contain"
            />
            <Placeholder
              label="footer-tagline"
              as="span"
              className="text-center text-sm text-muted-foreground md:text-left"
            >
              Secure client intake infrastructure for regulated professional services.
            </Placeholder>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="text-center sm:text-left">
              <Placeholder
                label="footer-nav-firm-title"
                as="p"
                className="text-sm font-semibold text-foreground"
              >
                Firm
              </Placeholder>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/services" className="transition-colors hover:text-primary">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/labs" className="transition-colors hover:text-primary">
                    R&D
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <Placeholder
                label="footer-nav-legal-title"
                as="p"
                className="text-sm font-semibold text-foreground"
              >
                Legal
              </Placeholder>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/privacy" className="transition-colors hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/cookies" className="transition-colors hover:text-primary">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="transition-colors hover:text-primary">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 md:items-end">
            <a
              href="mailto:contact@virtus-strategy.com"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              contact@virtus-strategy.com
            </a>
            <span className="text-center text-xs text-muted-foreground md:text-right">
              © {year} 1001486026 Ontario Inc. o/a Virtus-Strategy. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
