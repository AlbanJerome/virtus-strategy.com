import { Link } from "react-router-dom";

import { Container } from "@/components/layout/Container";
import { clearCookieConsent } from "@/lib/cookie-consent";

const LOGO_SRC = "/assets/Virtus_Logo_1767236260261-UkapBSLX.png";

const linkClassName =
  "text-sm text-muted-foreground transition-colors hover:text-primary";

function openCookieSettings() {
  clearCookieConsent();
  window.location.reload();
}

const primaryLinks = [
  { to: "/services", label: "Services" },
  { to: "/labs", label: "R&D" },
] as const;

const legalLinks = [
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/cookies", label: "Cookie Policy" },
  { to: "/terms", label: "Terms of Service" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-40">
      <Container>
        <div className="grid grid-cols-1 gap-8 border-t border-border/40 py-12 md:grid-cols-3 md:gap-12">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <Link to="/" className="shrink-0" aria-label="Virtus-Strategy home">
              <img
                src={LOGO_SRC}
                alt="Virtus-Strategy"
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="max-w-xs text-xs text-muted-foreground/60">
              © {year} 1001486026 Ontario Inc. o/a Virtus-Strategy. All rights reserved.
            </p>
          </div>

          <nav
            className="flex flex-col items-center space-y-3 md:items-center"
            aria-label="Footer navigation"
          >
            {primaryLinks.map((item) => (
              <Link key={item.to} to={item.to} className={linkClassName}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col items-center space-y-3 md:items-end">
            <nav className="flex flex-col items-center space-y-3 md:items-end" aria-label="Legal">
              {legalLinks.map((item) => (
                <Link key={item.to} to={item.to} className={linkClassName}>
                  {item.label}
                </Link>
              ))}
            </nav>
            <button
              type="button"
              onClick={openCookieSettings}
              className="text-xs text-muted-foreground/60 transition-colors hover:text-primary"
            >
              Cookie Settings
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
