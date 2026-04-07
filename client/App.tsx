import "./global.css";

import { createRoot } from "react-dom/client";
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

const NotFound      = lazy(() => import("./pages/NotFound"));
const ServicePage   = lazy(() => import("./pages/ServicePage"));
const ServicesPage  = lazy(() => import("./pages/ServicesPage"));
const TrainingPage  = lazy(() => import("./pages/TrainingPage"));
const PrivacyPage   = lazy(() => import("./pages/PrivacyPage"));
const TermsPage     = lazy(() => import("./pages/TermsPage"));

const App = () => (
  <BrowserRouter
    future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}
  >
    <Suspense fallback={null}>
      <Routes>
        <Route path="/"                   element={<Index />} />
        <Route path="/services"           element={<ServicesPage />} />
        <Route path="/services/:slug"     element={<ServicePage />} />
        <Route path="/training"           element={<TrainingPage />} />
        <Route path="/privacy"            element={<PrivacyPage />} />
        <Route path="/terms"              element={<TermsPage />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*"                   element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

createRoot(document.getElementById("root")!).render(<App />);