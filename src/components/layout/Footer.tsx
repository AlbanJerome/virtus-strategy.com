import { Link } from "react-router-dom";

import { Container } from "@/components/layout/Container";
import { clearCookieConsent } from "@/lib/cookie-consent";
import { openIntakeWidget } from "@/lib/open-intake-widget";

const legalClassName =
  "text-xs text-muted-foreground/70 transition-colors hover:text-primary";

function openCookieSettings() {
  clearCookieConsent();
  window.location.reload();
}

const primaryLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/labs", label: "Research" },
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
        <div className="flex flex-col items-center justify-center gap-4 border-t border-border/40 py-6 text-center md:flex-row md:justify-between md:py-8 md:text-left">
          <div className="flex flex-col items-center gap-2 md:flex-row md:items-center md:gap-4">
            <p className="text-xs text-muted-foreground/70">
              © {year} 1001486026 Ontario Inc. o/a Virtus-Strategy. All rights reserved.
            </p>
            <button
              type="button"
              onClick={openIntakeWidget}
              className="text-xs font-medium text-primary transition-colors hover:text-primary/80"
            >
              Request a Briefing
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:justify-end">
            {primaryLinks.map((item) => (
              <Link key={item.to} to={item.to} className={legalClassName}>
                {item.label}
              </Link>
            ))}
            {legalLinks.map((item) => (
              <Link key={item.to} to={item.to} className={legalClassName}>
                {item.label}
              </Link>
            ))}
            <button type="button" onClick={openCookieSettings} className={legalClassName}>
              Cookie Settings
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
