import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { artworks, formatFromPrice } from "@/data/artworks";
import { collections } from "@/data/collections";
import { guides } from "@/data/guides";
import { journal } from "@/data/journal";
import {
  SITE_URL,
  SHOP_URL,
  PINTEREST_URL,
  CONTACT_EMAIL,
  ARTIST_NAME,
  BUSINESS_ADDRESS_TEXT,
} from "@/lib/seo";
import {
  CANCELLATION_HOURS,
  DEFECT_CLAIM_DAYS,
  DELIVERY_TIMES,
  PRODUCTION_DAYS,
  priceRange,
} from "@/lib/store-facts";

/** Plain-text site summary for AI assistants, generated from the same records as the pages. */
export function buildLlmsTxt() {
  const range = priceRange();
  const listed = artworks.filter((a) => a.productPath && a.price);
  const archive = artworks.filter((a) => !a.productPath);
  const lines: string[] = [
    "# GAK Creations",
    "",
    `> GAK Creations is the art print studio of ${ARTIST_NAME}, an architect and artist. It sells made-to-order prints of his architectural drawings, coastal artwork, travel collages and Fuerteventura (Canary Islands) landscapes, fulfilled worldwide through Printify.`,
    "",
    `- Website: ${SITE_URL}`,
    `- Shop: ${SHOP_URL}`,
    `- Contact: ${CONTACT_EMAIL}`,
    `- Address: ${BUSINESS_ADDRESS_TEXT}`,
    `- Pinterest: ${PINTEREST_URL}`,
    "",
    "## Prints for sale",
    "",
    `${range.count} prints are listed in the shop, priced from ${range.lowest} to ${range.highest} (USD starting prices; the final price depends on size and frame). Each line gives the artwork page, which links to its exact shop listing.`,
    "",
    ...listed.map((a) => {
      const bits = [
        formatFromPrice(a),
        a.productFormat,
        a.printMaterial,
        a.listingSizes?.length
          ? `sizes ${a.listingSizes[0]} to ${a.listingSizes[a.listingSizes.length - 1]}`
          : null,
      ].filter(Boolean);
      return `- [${a.title}](${SITE_URL}/artwork/${a.slug}): ${a.place}. ${bits.join("; ")}.`;
    }),
    "",
    "## Drawings not yet in the shop",
    "",
    `Prints of these can be requested by email (${CONTACT_EMAIL}).`,
    "",
    ...archive.map((a) => `- [${a.title}](${SITE_URL}/artwork/${a.slug}): ${a.medium}, ${a.place}.`),
    "",
    "## Collections",
    "",
    ...collections.map((c) => `- [${c.name}](${SITE_URL}/collections/${c.slug}): ${c.seoDescription}`),
    "",
    "## Buying guides",
    "",
    `- [Architectural art prints](${SITE_URL}/architectural-art-prints)`,
    `- [Coastal wall art](${SITE_URL}/coastal-wall-art)`,
    `- [Travel collage prints](${SITE_URL}/travel-collage-prints)`,
    `- [Fuerteventura art prints](${SITE_URL}/fuerteventura-art-prints)`,
    ...guides.map((g) => `- [${g.h1}](${SITE_URL}/${g.slug})`),
    "",
    "## Journal",
    "",
    ...journal.map((j) => `- [${j.title}](${SITE_URL}/journal/${j.slug}): ${j.excerpt}`),
    "",
    "## Ordering, delivery and returns",
    "",
    `- Every print is made to order. Production takes ${PRODUCTION_DAYS}.`,
    ...DELIVERY_TIMES.map((d) => `- ${d.region}: ${d.days}.`),
    "- Shipping is calculated at checkout. Duties and import taxes are paid by the recipient.",
    `- Damaged, defective or misprinted items are replaced or refunded if reported within ${DEFECT_CLAIM_DAYS} days of delivery. Change-of-mind returns are not accepted.`,
    `- Orders can be changed or cancelled within ${CANCELLATION_HOURS} hours of purchase.`,
    "",
    "## Key pages",
    "",
    `- [All artwork](${SITE_URL}/artwork)`,
    `- [Frequently asked questions](${SITE_URL}/faq)`,
    `- [About the artist](${SITE_URL}/about)`,
    `- [Contact](${SITE_URL}/contact)`,
    `- [Shipping policy](${SITE_URL}/shipping-policy)`,
    `- [Refund & returns policy](${SITE_URL}/refund-policy)`,
    `- [Accessibility](${SITE_URL}/accessibility)`,
    "",
  ];
  return lines.join("\n");
}

export const Route = createFileRoute("/llms.txt")({
  server: {
    handlers: {
      GET: async () =>
        new Response(buildLlmsTxt(), {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        }),
    },
  },
});
