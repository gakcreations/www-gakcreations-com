import { SHOP_URL } from "@/lib/seo";

const GA_ID = import.meta.env.VITE_LOVABLE_CONNECTOR_GOOGLE_ANALYTICS_API_KEY as
  | string
  | undefined;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function initGa() {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];

  if (!window.gtag) {
    window.gtag = function (...args: unknown[]) {
      window.dataLayer!.push(args);
    };
    window.gtag("js", new Date());
  }

  if (GA_ID && !document.querySelector(`script[src*="gtag/js?id=${GA_ID}"]`)) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);
    window.gtag("config", GA_ID, { send_page_view: false });
  }
}

export function getShopUrl(artworkSlug?: string) {
  const params = new URLSearchParams({
    utm_source: "gakcreations-site",
    utm_medium: "referral",
    utm_campaign: "artwork-page",
  });
  if (artworkSlug) params.set("utm_content", artworkSlug);

  const base = SHOP_URL;
  const separator = base.includes("?") ? "&" : "?";
  return `${base}${separator}${params.toString()}`;
}

export function trackPrintifyClick(artwork: { slug: string; title: string }) {
  initGa();

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
