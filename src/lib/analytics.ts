declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

let gaInitialized = false;

export function initGA(): void {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (!measurementId || gaInitialized) {
    return;
  }

  gaInitialized = true;

  window.dataLayer = window.dataLayer ?? [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };

  window.gtag("js", new Date());
  window.gtag("config", measurementId);

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);
}
