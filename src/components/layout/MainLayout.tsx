import { Outlet } from "react-router-dom";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { TrustBar } from "@/components/layout/TrustBar";
import { LeadQualificationWidget } from "@/components/lead-qualification-widget";

export function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <TrustBar />
      <Footer />
      <LeadQualificationWidget />
    </div>
  );
}
