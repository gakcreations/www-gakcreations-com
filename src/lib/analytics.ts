import { SHOP_URL } from "@/lib/seo";

const GA_ID = import.meta.env.VITE_LOVABLE_CONNECTOR_GOOGLE_ANALYTICS_API_KEY as
  | string
  | undefined;

export const GA_IS_ENABLED = Boolean(GA_ID);
export const GA_SCRIPT_SRC = GA_ID
  ? `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  : null;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __gaConfigured?: boolean;
  }
}

export function initializeAnalytics() {
  if (typeof window === "undefined" || !GA_ID) return;

  window.dataLayer = window.dataLayer || [];

  if (!window.gtag) {
    window.gtag = function (...args: unknown[]) {
      window.dataLayer!.push(args);
    };
    window.gtag("js", new Date());
  }

  if (!window.__gaConfigured) {
    window.gtag("config", GA_ID, { send_page_view: false });
    window.__gaConfigured = true;
  }
}

export function trackPageView(page: string) {
  initializeAnalytics();
  window.gtag?.("event", "page_view", {
    page_path: page,
    page_title: document.title,
  });
}

export function getShopUrl(artworkSlug?: string, productPath?: string) {
  const params = new URLSearchParams({
    utm_source: "gakcreations-site",
    utm_medium: "referral",
    utm_campaign: "artwork-page",
  });
  if (artworkSlug) params.set("utm_content", artworkSlug);

  const base = productPath ? `${SHOP_URL}${productPath}` : SHOP_URL;
  const separator = base.includes("?") ? "&" : "?";
  return `${base}${separator}${params.toString()}`;
}


export function trackPrintifyClick(artwork: { slug: string; title: string }) {
  initializeAnalytics();

  const payload = {
    event_category: "ecommerce",
    event_label: artwork.title,
    artwork_slug: artwork.slug,
    link_url: getShopUrl(artwork.slug),
    transport_type: "beacon",
  };

  // Push a structured event for Google Tag Manager as well
  window.dataLayer?.push({
    event: "printify_click",
    ...payload,
  });

  window.gtag?.("event", "outbound_click", payload);
}
