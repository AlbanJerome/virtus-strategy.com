import { Suspense, lazy, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { CookieBanner } from "@/components/cookie-banner";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { INTAKE_WIDGET_OPEN_EVENT } from "@/lib/open-intake-widget";
import { cn } from "@/lib/utils";

const LeadQualificationWidget = lazy(() =>
  import("@/components/lead-qualification-widget").then((m) => ({
    default: m.LeadQualificationWidget,
  })),
);

const WIDGET_IDLE_TIMEOUT_MS = 4000;

export function MainLayout() {
  const [loadWidget, setLoadWidget] = useState(false);

  useEffect(() => {
    const onOpen = () => setLoadWidget(true);
    window.addEventListener(INTAKE_WIDGET_OPEN_EVENT, onOpen);

    const idleId =
      typeof window.requestIdleCallback === "function"
        ? window.requestIdleCallback(() => setLoadWidget(true), {
            timeout: WIDGET_IDLE_TIMEOUT_MS,
          })
        : undefined;
    const timeoutId = window.setTimeout(
      () => setLoadWidget(true),
      WIDGET_IDLE_TIMEOUT_MS,
    );

    return () => {
      window.removeEventListener(INTAKE_WIDGET_OPEN_EVENT, onOpen);
      if (idleId !== undefined && typeof window.cancelIdleCallback === "function") {
        window.cancelIdleCallback(idleId);
      }
      window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background pb-20 md:pb-6">
      <a
        href="#main-content"
        className={cn(
          "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200]",
          "focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium",
          "focus:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
          "focus:ring-offset-background",
        )}
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
      {loadWidget && (
        <Suspense fallback={null}>
          <LeadQualificationWidget />
        </Suspense>
      )}
    </div>
  );
}
