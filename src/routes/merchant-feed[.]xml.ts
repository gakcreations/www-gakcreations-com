import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { artworks } from "@/data/artworks";
import { imageManifest } from "@/lib/image-manifest";
import { SHOP_URL, SITE_NAME, ARTIST_NAME } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

const GOOGLE_CATEGORY =
  "Home & Garden > Decor > Artwork > Posters, Prints, & Visual Artwork";

function xmlEscape(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/** Absolute, crawlable URL for an image path in /public. */
function imageUrl(path: string) {
  const entry = imageManifest[path];
  const best = entry?.variants.at(-1)?.jpg ?? path;
  return `${SITE_URL}${encodeURI(best)}`;
}

/**
 * Google Merchant Center product feed (RSS 2.0 with the Google Shopping
 * namespace). Only artwork with a verified Printify listing and price is
 * included, so every item in the feed has a real, purchasable landing page.
 */
export const Route = createFileRoute("/merchant-feed.xml")({
  server: {
    handlers: {
      GET: async () => {
        const items = artworks
          .filter((a) => a.productPath && a.price && a.priceCurrency)
          .map((a) => {
            const description = `${a.description} ${a.medium} artwork of ${a.place} by ${ARTIST_NAME}, reproduced as a museum-quality fine art print.`;
            const extraImages = (imageManifest[a.image]?.variants ?? [])
              .slice(0, -1)
              .map((v) => `      <g:additional_image_link>${xmlEscape(`${SITE_URL}${encodeURI(v.jpg)}`)}</g:additional_image_link>`);

            return [
              `    <item>`,
              `      <g:id>${xmlEscape(a.sku)}</g:id>`,
              `      <g:title>${xmlEscape(`${a.title} — Fine Art Print`)}</g:title>`,
              `      <g:description>${xmlEscape(description)}</g:description>`,
              `      <g:link>${xmlEscape(`${SHOP_URL}${a.productPath}`)}</g:link>`,
              `      <g:image_link>${xmlEscape(imageUrl(a.image))}</g:image_link>`,
              ...extraImages,
              `      <g:availability>in_stock</g:availability>`,
              `      <g:condition>new</g:condition>`,
              `      <g:price>${a.price} ${a.priceCurrency}</g:price>`,
              `      <g:brand>${xmlEscape(SITE_NAME)}</g:brand>`,
              `      <g:identifier_exists>no</g:identifier_exists>`,
              `      <g:google_product_category>${xmlEscape(GOOGLE_CATEGORY)}</g:google_product_category>`,
              `      <g:product_type>${xmlEscape(`Art Prints > ${a.medium}`)}</g:product_type>`,
              `      <g:custom_label_0>${xmlEscape(a.place)}</g:custom_label_0>`,
              `    </item>`,
            ].join("\n");
          });

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">`,
          `  <channel>`,
          `    <title>${xmlEscape(`${SITE_NAME} — Fine Art Prints`)}</title>`,
          `    <link>${SITE_URL}</link>`,
          `    <description>Museum-quality fine art prints of architecture, coastline and travel collage by ${xmlEscape(ARTIST_NAME)}.</description>`,
          ...items,
          `  </channel>`,
          `</rss>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
