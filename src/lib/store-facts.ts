import { buyableArtworks, formatFromPrice } from "@/data/artworks";

/**
 * Store facts shared by the FAQ page and llms.txt so they never drift apart.
 * Delivery and returns figures mirror the shipping and refund policy pages.
 */
export const PRODUCTION_DAYS = "2–7 business days";
export const DELIVERY_TIMES = [
  { region: "United States", days: "4–8 business days after production" },
  { region: "Canada", days: "5–10 business days after production" },
  { region: "Europe & United Kingdom", days: "5–10 business days after production" },
  { region: "Australia & New Zealand", days: "10–20 business days after production" },
  { region: "Rest of the world", days: "10–30 business days after production" },
];
export const DEFECT_CLAIM_DAYS = 30;
export const CANCELLATION_HOURS = 12;

/** Lowest and highest verified "from" prices across all shop listings. */
export function priceRange() {
  const listed = buyableArtworks();
  const sorted = [...listed].sort((a, b) => Number(a.price) - Number(b.price));
  return {
    count: listed.length,
    lowest: sorted[0] ? formatFromPrice(sorted[0])!.replace("From ", "") : null,
    highest: sorted.at(-1) ? formatFromPrice(sorted.at(-1)!)!.replace("From ", "") : null,
  };
}
