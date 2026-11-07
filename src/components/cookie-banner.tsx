import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { initGA } from "@/lib/analytics";
import { getCookieConsent, setCookieConsent } from "@/lib/cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getCookieConsent();
    if (consent === "true") {
      initGA();
      setVisible(false);
      return;
    }
    if (consent === "false") {
      setVisible(false);
      return;
    }
    setVisible(true);
  }, []);

  const onAccept = () => {
    setCookieConsent(true);
    initGA();
    setVisible(false);
  };

  const onDecline = () => {
    setCookieConsent(false);
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[90] border-t border-primary/40 bg-[#0A0A0A] px-4 py-4 shadow-lg md:px-6"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm leading-relaxed text-foreground">
          We use cookies to analyze traffic and ensure secure functionality. Read our{" "}
          <Link to="/cookies" className="text-primary underline-offset-4 hover:underline">
            Cookie Policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 flex-wrap gap-2">
          <Button type="button" size="sm" onClick={onAccept}>
            Accept
          </Button>
          <Button type="button" size="sm" variant="outline" onClick={onDecline}>
            Decline
          </Button>
        </div>
      </div>
    </div>
  );
}
