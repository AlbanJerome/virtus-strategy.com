import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Reset window scroll on client-side route changes (SPAs do not do this by default). */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.replace(/^#/, ""));
      if (target) {
        target.scrollIntoView({ block: "start" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
