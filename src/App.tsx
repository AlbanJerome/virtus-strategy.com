import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { MainLayout } from "@/components/layout/MainLayout";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Cookies } from "@/pages/cookies";
import { Home } from "@/pages/Home";
import { Labs } from "@/pages/Labs";
import { NotFound } from "@/pages/NotFound";
import { Privacy } from "@/pages/privacy";
import { Services } from "@/pages/Services";
import { Terms } from "@/pages/terms";

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="labs" element={<Labs />} />
          <Route path="contact" element={<Navigate to="/" replace />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="cookies" element={<Cookies />} />
          <Route path="terms" element={<Terms />} />
          <Route path="404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
