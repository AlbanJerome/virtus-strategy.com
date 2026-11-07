import { Link } from "react-router-dom";

import { clearCookieConsent } from "@/lib/cookie-consent";

const LOGO_SRC = "/assets/Virtus_Logo_1767236260261-UkapBSLX.png";

function openCookieSettings() {
  clearCookieConsent();
  window.location.reload();
}

const footerLinks = [
  { to: "/services", label: "Services" },
  { to: "/labs", label: "R&D" },
  { to: "/privacy", label: "Privacy" },
  { to: "/cookies", label: "Cookies" },
  { to: "/terms", label: "Terms" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-40 border-t border-border py-8 md:py-10">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-between md:gap-8">
          <div className="flex flex-col items-center gap-1.5 text-center md:items-start md:text-left">
            <img
              src={LOGO_SRC}
              alt="Virtus-Strategy"
              className="h-8 max-w-full object-contain md:h-9"
            />
            <p className="text-xs text-muted-foreground">
              © {year} 1001486026 Ontario Inc. o/a Virtus-Strategy. All rights reserved.
            </p>
          </div>

          <nav
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-muted-foreground"
            aria-label="Footer"
          >
            {footerLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={openCookieSettings}
              className="transition-colors hover:text-primary"
            >
              Cookie Settings
            </button>
          </nav>

          <a
            href="mailto:contact@virtus-strategy.com"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            contact@virtus-strategy.com
          </a>
        </div>
      </div>
    </footer>
  );
}
