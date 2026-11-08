import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { MainLayout } from "@/components/layout/MainLayout";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Home } from "@/pages/Home";

const Services = lazy(() =>
  import("@/pages/Services").then((m) => ({ default: m.Services })),
);
const Labs = lazy(() => import("@/pages/Labs").then((m) => ({ default: m.Labs })));
const Privacy = lazy(() =>
  import("@/pages/privacy").then((m) => ({ default: m.Privacy })),
);
const Cookies = lazy(() =>
  import("@/pages/cookies").then((m) => ({ default: m.Cookies })),
);
const Terms = lazy(() => import("@/pages/terms").then((m) => ({ default: m.Terms })));
const NotFound = lazy(() =>
  import("@/pages/NotFound").then((m) => ({ default: m.NotFound })),
);

function RouteFallback() {
  return (
    <div className="flex h-screen w-full items-center justify-center text-primary">
      Loading...
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route
            path="services"
            element={
              <Suspense fallback={<RouteFallback />}>
                <Services />
              </Suspense>
            }
          />
          <Route
            path="labs"
            element={
              <Suspense fallback={<RouteFallback />}>
                <Labs />
              </Suspense>
            }
          />
          <Route path="contact" element={<Navigate to="/" replace />} />
          <Route
            path="privacy"
            element={
              <Suspense fallback={<RouteFallback />}>
                <Privacy />
              </Suspense>
            }
          />
          <Route
            path="cookies"
            element={
              <Suspense fallback={<RouteFallback />}>
                <Cookies />
              </Suspense>
            }
          />
          <Route
            path="terms"
            element={
              <Suspense fallback={<RouteFallback />}>
                <Terms />
              </Suspense>
            }
          />
          <Route
            path="404"
            element={
              <Suspense fallback={<RouteFallback />}>
                <NotFound />
              </Suspense>
            }
          />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
