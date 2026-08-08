// Production GA4 stream for www.gakcreations.com.
const DEFAULT_GA_MEASUREMENT_ID = "G-FNF4XTQ40M";

const envMeasurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();

export const GA_MEASUREMENT_ID =
  envMeasurementId || (import.meta.env.PROD ? DEFAULT_GA_MEASUREMENT_ID : "");
export const GA_IS_ENABLED = GA_MEASUREMENT_ID.length > 0;
export const GA_SCRIPT_SRC = GA_IS_ENABLED
  ? `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  : null;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackPageView(path: string) {
  if (!GA_IS_ENABLED || typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
    send_to: GA_MEASUREMENT_ID,
  });
}

export function initializeAnalytics() {
  if (!GA_IS_ENABLED || typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer || [];

  if (typeof window.gtag !== "function") {
    window.gtag = (...args: unknown[]) => {
      window.dataLayer.push(args);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA_MEASUREMENT_ID, { send_page_view: false });
  }
}
