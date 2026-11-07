import { Link } from "react-router-dom";

import { Placeholder } from "@/components/ui/placeholder";

const LOGO_SRC = "/assets/Virtus_Logo_1767236260261-UkapBSLX.png";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="flex max-w-sm flex-col items-center gap-2 md:items-start">
            <img
              src={LOGO_SRC}
              alt="Virtus-Strategy"
              className="h-12 w-auto object-contain"
            />
            <Placeholder
              label="footer-tagline"
              as="span"
              className="text-sm text-muted-foreground"
            >
              Secure client intake infrastructure for regulated professional services.
            </Placeholder>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
            <div>
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
                  <Link to="/contact" className="transition-colors hover:text-primary">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/labs" className="transition-colors hover:text-primary">
                    R&D
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <Placeholder
                label="footer-nav-legal-title"
                as="p"
                className="text-sm font-semibold text-foreground"
              >
                Legal
              </Placeholder>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="transition-colors hover:text-primary">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-primary">
                    Terms of Service
                  </a>
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
            <span className="text-xs text-muted-foreground">
              © {year} Virtus-Strategy. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
