import { Outlet } from "react-router-dom";

import { CookieBanner } from "@/components/cookie-banner";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { LeadQualificationWidget } from "@/components/lead-qualification-widget";

export function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background pb-24 md:pb-6">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
      <LeadQualificationWidget />
    </div>
  );
}
