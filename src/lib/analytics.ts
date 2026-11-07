declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

interface AnalyticsTag {
  id: string | undefined;
  scriptSrc: (id: string) => string;
  configure: (id: string) => void;
}

const analyticsTags: Record<string, AnalyticsTag> = {
  ga4: {
    id: import.meta.env.VITE_GA_MEASUREMENT_ID,
    scriptSrc: (id) => `https://www.googletagmanager.com/gtag/js?id=${id}`,
    configure: (id) => window.gtag("config", id),
  },
  gtm: {
    id: import.meta.env.VITE_GTM_CONTAINER_ID,
    scriptSrc: (id) => `https://www.googletagmanager.com/gtm.js?id=${id}`,
    configure: () => window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" }),
  },
};

let gaInitialized = false;

function loadScript(src: string): void {
  const script = document.createElement("script");
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
}

export function initGA(): void {
  const enabledTags = Object.values(analyticsTags).filter(
    (tag): tag is AnalyticsTag & { id: string } => Boolean(tag.id),
  );
  if (enabledTags.length === 0 || gaInitialized) {
    return;
  }

  gaInitialized = true;

  window.dataLayer = window.dataLayer ?? [];
  // gtag.js only processes Arguments objects; pushing a plain array is ignored.
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());

  for (const tag of enabledTags) {
    tag.configure(tag.id);
    loadScript(tag.scriptSrc(tag.id));
  }
}
