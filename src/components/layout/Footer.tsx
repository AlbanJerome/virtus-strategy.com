import { Link } from "react-router-dom";

import { clearCookieConsent } from "@/lib/cookie-consent";

const LOGO_SRC = "/assets/Virtus_Logo_1767236260261-UkapBSLX.png";

function openCookieSettings() {
  clearCookieConsent();
  window.location.reload();
}

const primaryLinks = [
  { to: "/services", label: "Services" },
  { to: "/labs", label: "R&D" },
] as const;

const legalLinks = [
  { to: "/privacy", label: "Privacy" },
  { to: "/terms", label: "Terms" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-40 border-t border-border py-4 md:py-5">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link to="/" className="shrink-0" aria-label="Virtus-Strategy home">
              <img src={LOGO_SRC} alt="" className="h-10 w-auto object-contain md:h-12" />
            </Link>
            <nav
              className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground md:text-sm"
              aria-label="Footer"
            >
              {primaryLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex w-full flex-wrap items-center justify-between gap-x-4 gap-y-2 text-[10px] leading-snug text-muted-foreground">
            <div className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1">
              <Link to="/cookies" className="transition-colors hover:text-primary">
                Cookies
              </Link>
              <button
                type="button"
                onClick={openCookieSettings}
                className="transition-colors hover:text-primary"
              >
                Cookie Settings
              </button>
              <span className="text-muted-foreground/90">
                © {year} 1001486026 Ontario Inc. o/a Virtus-Strategy. All rights reserved.
              </span>
            </div>
            <nav className="flex shrink-0 items-center gap-x-3" aria-label="Legal">
              {legalLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
