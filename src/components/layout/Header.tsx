import { Link, NavLink } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Placeholder } from "@/components/ui/placeholder";
import { cn } from "@/lib/utils";

const LOGO_SRC = "/assets/Virtus_Logo_1767236260261-UkapBSLX.png";

const navItems = [
  { to: "/", label: "home", text: "Home" },
  { to: "/services", label: "services", text: "Services" },
  { to: "/contact", label: "contact", text: "Contact" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-[#0A0A0A]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6 md:h-20">
        <Link to="/" className="flex items-center">
          <img
            src={LOGO_SRC}
            alt="Virtus-Strategy"
            className="h-10 w-auto object-contain md:h-12"
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

        <Button asChild size="sm" className="hidden md:inline-flex">
          <Link to="/contact">
            <Placeholder label="header-cta">Book a Diagnostic</Placeholder>
          </Link>
        </Button>
      </div>
    </header>
  );
}
