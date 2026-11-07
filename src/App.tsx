import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { MainLayout } from "@/components/layout/MainLayout";
import { Contact } from "@/pages/Contact";
import { Home } from "@/pages/Home";
import { Labs } from "@/pages/Labs";
import { NotFound } from "@/pages/NotFound";
import { Privacy } from "@/pages/privacy";
import { Services } from "@/pages/Services";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="labs" element={<Labs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
