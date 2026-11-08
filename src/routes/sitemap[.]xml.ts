import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { collections } from "@/data/collections";
import { journal } from "@/data/journal";
import { artworks } from "@/data/artworks";
import { guides } from "@/data/guides";
import { SITE_URL } from "@/lib/site";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

// Only include real, indexable routes. Publication dates are not modification dates.
export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const homeEntries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
        ];

        const collectionEntries: SitemapEntry[] = [
          // Collection landing pages that organize the site's artwork.
          { path: "/collections", changefreq: "weekly", priority: "0.9" },
          { path: "/architectural-art-prints", changefreq: "monthly", priority: "0.9" },
          { path: "/coastal-wall-art", changefreq: "monthly", priority: "0.9" },
          { path: "/travel-collage-prints", changefreq: "monthly", priority: "0.9" },
          { path: "/fuerteventura-art-prints", changefreq: "monthly", priority: "0.9" },

          // Room-by-room and gift buying guides.
          ...guides.map((g) => ({
            path: `/${g.slug}`,
            changefreq: "monthly" as const,
            priority: "0.8",
          })),

          ...collections.map((c) => ({
            path: `/collections/${c.slug}`,
            changefreq: "monthly" as const,
            priority: "0.8",
          })),
        ];

        const artworkEntries: SitemapEntry[] = [
          // Individual, indexable artwork pages.
          { path: "/artwork", changefreq: "weekly", priority: "0.8" },
          ...artworks.map((a) => ({
            path: `/artwork/${a.slug}`,
            changefreq: "monthly" as const,
            priority: "0.7",
          })),
        ];

        const journalEntries: SitemapEntry[] = [
          // Journal index and individual posts.
          { path: "/journal", changefreq: "weekly", priority: "0.7" },
          ...journal.map((j) => ({
            path: `/journal/${j.slug}`,
            changefreq: "monthly" as const,
            priority: "0.6",
          })),
        ];

        const policyEntries: SitemapEntry[] = [
          // Static contact and legal pages that should remain indexable.
          { path: "/about", changefreq: "yearly", priority: "0.7" },
          { path: "/contact", changefreq: "yearly", priority: "0.5" },

          { path: "/shipping-policy", changefreq: "yearly", priority: "0.4" },
          { path: "/refund-policy", changefreq: "yearly", priority: "0.4" },
          { path: "/terms", changefreq: "yearly", priority: "0.3" },
          { path: "/privacy-policy", changefreq: "yearly", priority: "0.3" },
        ];

        const entries: SitemapEntry[] = [
          ...homeEntries,
          ...collectionEntries,
          ...artworkEntries,
          ...journalEntries,
          ...policyEntries,
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${`${SITE_URL}${e.path}`.replace(/&/g, "&amp;")}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
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
