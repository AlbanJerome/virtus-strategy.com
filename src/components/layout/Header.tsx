import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Placeholder } from "@/components/ui/placeholder";
import { openIntakeWidget } from "@/lib/open-intake-widget";
import { cn } from "@/lib/utils";

const LOGO_SRC = "/assets/Virtus_Logo_1767236260261-UkapBSLX.png";

const navItems = [
  { to: "/", label: "home", text: "Home" },
  { to: "/services", label: "services", text: "Services" },
  { to: "/labs", label: "labs", text: "R&D" },
] as const;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  const onBookDiagnostic = () => {
    closeMobile();
    openIntakeWidget();
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-[#0A0A0A]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:h-20 md:px-6">
        <Link to="/" className="flex shrink-0 items-center" onClick={closeMobile}>
          <img
            src={LOGO_SRC}
            alt="Virtus-Strategy"
            className="h-9 max-w-full object-contain md:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                cn(
                  "rounded-md px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
                  isActive && "text-primary"
                )
              }
            >
              <Placeholder label={`nav-${item.label}`}>{item.text}</Placeholder>
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button type="button" size="sm" className="hidden md:inline-flex" onClick={onBookDiagnostic}>
            <Placeholder label="header-cta">Book a Diagnostic</Placeholder>
          </Button>

          <Button
            type="button"
            variant="outline"
            size="icon"
            className="md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-primary-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-primary-nav"
          className="border-t border-border bg-background px-4 py-4 md:hidden"
          aria-label="Primary mobile"
        >
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  onClick={closeMobile}
                  className={({ isActive }) =>
                    cn(
                      "block rounded-md px-3 py-3 text-base text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
                      isActive && "text-primary"
                    )
                  }
                >
                  <Placeholder label={`nav-${item.label}`}>{item.text}</Placeholder>
                </NavLink>
              </li>
            ))}
          </ul>
          <Button type="button" className="mt-4 w-full" size="lg" onClick={onBookDiagnostic}>
            <Placeholder label="header-cta">Book a Diagnostic</Placeholder>
          </Button>
        </nav>
      )}
    </header>
  );
}
