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
    <footer className="relative z-40 border-t border-border py-4 md:py-5">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="flex items-start gap-3 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-6">
          <Link
            to="/"
            className="shrink-0 pt-0.5 md:justify-self-start"
            aria-label="Virtus-Strategy home"
          >
            <img
              src={LOGO_SRC}
              alt=""
              className="h-10 w-auto object-contain md:h-12"
            />
          </Link>

          <div className="flex min-w-0 flex-1 flex-col items-center gap-2 md:col-start-2 md:flex-none">
            <nav
              className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-muted-foreground md:text-sm"
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
            <p className="max-w-lg text-center text-[10px] leading-snug text-muted-foreground md:text-xs">
              © {year} 1001486026 Ontario Inc. o/a Virtus-Strategy. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
