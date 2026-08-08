import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { collections } from "@/data/collections";
import { journal } from "@/data/journal";

const BASE_URL = "https://www.gakcreations.com";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
  lastmod?: string;
}

// This sitemap only publishes routes that exist in this application.
// Search engines should crawl the home page, collection pages, journal content,
// and policy/contact pages listed below. Product and category URLs are
// intentionally excluded because this site does not define those routes.
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
          { path: "/architectural-art-prints", changefreq: "monthly", priority: "0.9", lastmod: "2026-08-05" },
          ...collections.map((c) => ({
            path: `/collections/${c.slug}`,
            changefreq: "monthly" as const,
            priority: "0.8",
          })),
        ];

        const journalEntries: SitemapEntry[] = [
          // Journal index and individual posts.
          { path: "/journal", changefreq: "weekly", priority: "0.7" },
          ...journal.map((j) => ({
            path: `/journal/${j.slug}`,
            changefreq: "monthly" as const,
            priority: "0.6",
            lastmod: j.published,
          })),
        ];

        const policyEntries: SitemapEntry[] = [
          // Static contact and legal pages that should remain indexable.
          { path: "/contact", changefreq: "yearly", priority: "0.5" },
          { path: "/shipping-policy", changefreq: "yearly", priority: "0.4" },
          { path: "/refund-policy", changefreq: "yearly", priority: "0.4" },
          { path: "/terms", changefreq: "yearly", priority: "0.3" },
          { path: "/privacy-policy", changefreq: "yearly", priority: "0.3" },
        ];

        const entries: SitemapEntry[] = [
          ...homeEntries,
          ...collectionEntries,
          ...journalEntries,
          ...policyEntries,
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
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
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
