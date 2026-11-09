import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { ResponsiveImage, handleImageError } from "@/components/ResponsiveImage";
import { artworks, formatFromPrice } from "@/data/artworks";
import { collections } from "@/data/collections";
import { FORMAT_FILTERS, filterArtworks, type ArtworkFilters, type FormatFilter } from "@/lib/artwork-search";
import {
  seoMeta,
  canonical,
  ldJson,
  websiteNode,
  organizationNode,
  artistNode,
  webPageNode,
  breadcrumbNode,
  productNode,
  abs,
  ARTIST_NAME,
} from "@/lib/seo";

const PATH = "/artwork";
const TITLE = "Shop All Art Prints by Gerald Allen Knowles | GAK Creations";
const DESCRIPTION =
  "Browse every GAK Creations art print by Gerald Allen Knowles: architectural drawings, coastal artwork, travel collages and Canary Islands landscapes.";
const KEYWORDS = [
  "fine art prints",
  "architectural drawings",
  "coastal art prints",
  "travel collage art",
  "Gerald Allen Knowles artwork",
  "original art prints online",
];

const FORMAT_VALUES = FORMAT_FILTERS.map((f) => f.value) as string[];

export const Route = createFileRoute("/artwork/")({
  validateSearch: (search: Record<string, unknown>): ArtworkFilters => ({
    q: typeof search.q === "string" && search.q.trim() ? search.q.slice(0, 80) : undefined,
    theme:
      typeof search.theme === "string" && collections.some((c) => c.slug === search.theme)
        ? search.theme
        : undefined,
    format:
      typeof search.format === "string" && FORMAT_VALUES.includes(search.format)
        ? (search.format as FormatFilter)
        : undefined,
  }),
  component: ArtworkIndex,
  head: () => ({
    meta: seoMeta({
      title: TITLE,
      description: DESCRIPTION,
      path: PATH,
      image: { path: artworks[0]!.image, alt: artworks[0]!.alt },
      keywords: KEYWORDS,
    }),
    links: canonical(PATH),
    scripts: ldJson([
      websiteNode,
      organizationNode,
      artistNode,
      webPageNode(PATH, TITLE, DESCRIPTION),
      breadcrumbNode([
        { name: "Home", path: "/" },
        { name: "Artwork", path: PATH },
      ]),
      {
        "@type": "CollectionPage",
        "@id": `${abs(PATH)}#collection`,
        name: "All artwork",
        url: abs(PATH),
        mainEntity: {
          "@type": "ItemList",
          itemListElement: artworks.map((a, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: productNode(a, {
              keywords: a.keywords,
              pageUrl: abs(`/artwork/${a.slug}`),
            }),
          })),
        },
      },
    ]),
  }),
});

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`border px-4 py-2 text-[0.7rem] uppercase tracking-[0.18em] transition ${
        active ? "border-ink bg-ink text-paper" : "border-ink/25 text-ink hover:border-ink"
      }`}
    >
      {children}
    </button>
  );
}

function ArtworkIndex() {
  const filters = Route.useSearch();
  const navigate = useNavigate({ from: "/artwork/" });
  const [query, setQuery] = useState(filters.q ?? "");
  useEffect(() => setQuery(filters.q ?? ""), [filters.q]);
  const results = filterArtworks(artworks, filters);
  const setFilters = (next: Partial<ArtworkFilters>) =>
    navigate({ search: (prev) => ({ ...prev, ...next }), replace: true, resetScroll: false });
  const hasFilters = Boolean(filters.q || filters.theme || filters.format);

  return (
    <div className="min-h-screen bg-paper text-ink font-body">
      <SiteHeader />
      <main>
        <nav aria-label="Breadcrumb" className="border-b border-ink/15">
          <ol className="mx-auto flex max-w-[1400px] gap-2 px-6 py-4 text-[0.7rem] uppercase tracking-[0.2em] text-ink-soft md:px-12">
            <li>
              <Link to="/" className="hover:text-ink">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-ink">
              Artwork
            </li>
          </ol>
        </nav>

        <header className="border-b border-ink/15">
          <div className="mx-auto max-w-[1400px] px-6 py-14 md:px-12 md:py-20">
            <p className="eyebrow">The archive</p>
            <h1 className="mt-6 font-display text-5xl leading-[0.98] md:text-7xl">
              All <em className="font-light">artwork</em>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
              Every drawing and collage in the {ARTIST_NAME} archive, each with its own story, medium and
              place. Most are available as made-to-order prints, shipped worldwide; the rest can be
              requested by email from their artwork page.
            </p>
          </div>
        </header>

        <section aria-label="Find a print" className="border-b border-ink/15 bg-paper-warm">
          <div className="mx-auto max-w-[1400px] space-y-6 px-6 py-10 md:px-12">
            <form
              role="search"
              onSubmit={(e) => {
                e.preventDefault();
                setFilters({ q: query.trim() || undefined });
              }}
              className="flex max-w-2xl gap-3"
            >
              <label htmlFor="artwork-search" className="sr-only">
                Search the artwork
              </label>
              <input
                id="artwork-search"
                type="search"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  if (!e.target.value) setFilters({ q: undefined });
                }}
                placeholder="Search: beach, cathedral, palm trees, framed…"
                className="w-full border border-ink/25 bg-paper px-4 py-3 text-base text-ink placeholder:text-ink-soft focus:border-ink focus:outline-none"
              />
              <button
                type="submit"
                className="bg-ink px-6 py-3 text-sm font-medium uppercase tracking-[0.2em] text-paper hover:bg-ink-soft"
              >
                Search
              </button>
            </form>
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-2 text-[0.65rem] uppercase tracking-[0.25em] text-ink-soft">Theme</span>
              <FilterChip active={!filters.theme} onClick={() => setFilters({ theme: undefined })}>
                All
              </FilterChip>
              {collections.map((c) => (
                <FilterChip
                  key={c.slug}
                  active={filters.theme === c.slug}
                  onClick={() => setFilters({ theme: filters.theme === c.slug ? undefined : c.slug })}
                >
                  {c.name}
                </FilterChip>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-2 text-[0.65rem] uppercase tracking-[0.25em] text-ink-soft">Format</span>
              <FilterChip active={!filters.format} onClick={() => setFilters({ format: undefined })}>
                Any
              </FilterChip>
              {FORMAT_FILTERS.map((f) => (
                <FilterChip
                  key={f.value}
                  active={filters.format === f.value}
                  onClick={() => setFilters({ format: filters.format === f.value ? undefined : f.value })}
                >
                  {f.label}
                </FilterChip>
              ))}
            </div>
            <p className="text-sm text-ink-soft" aria-live="polite">
              Showing {results.length} of {artworks.length} artworks
              {hasFilters && (
                <>
                  {" · "}
                  <button
                    type="button"
                    onClick={() => {
                      setQuery("");
                      navigate({ search: {}, replace: true, resetScroll: false });
                    }}
                    className="underline hover:text-ink"
                  >
                    Clear filters
                  </button>
                </>
              )}
            </p>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-12 md:py-20">
            {results.length === 0 && (
              <p className="max-w-xl text-base leading-relaxed text-ink-soft">
                Nothing matches that yet. Try a broader word such as “coastal” or “architecture”, or{" "}
                <Link to="/contact" className="underline hover:text-ink">
                  ask the studio
                </Link>{" "}
                about a subject you are looking for.
              </p>
            )}
            <ul className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-10">
              {results.map((a, i) => (
                <li key={a.slug}>
                  <Link to="/artwork/$slug" params={{ slug: a.slug }} className="group block">
                    <div className="overflow-hidden bg-paper-warm">
                      <ResponsiveImage
                        src={a.image}
                        alt={a.alt}
                        width={900}
                        height={1100}
                        loading={i === 0 ? "eager" : "lazy"}
                        fetchPriority={i === 0 ? "high" : undefined}
                        sizes="(min-width: 768px) 45vw, 100vw"
                        className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.02]"
                        onError={handleImageError}
                      />
                    </div>
                    <div className="mt-5 border-b border-ink/20 pb-5">
                      <h2 className="font-display text-2xl md:text-3xl">{a.title}</h2>
                      <p className="mt-2 text-xs uppercase tracking-[0.2em] text-ink-soft">
                        {a.medium} · {a.place}
                      </p>
                      <p className="mt-4 text-sm leading-relaxed text-ink-soft">{a.description}</p>
                      <p className="mt-4 text-sm text-ink">
                        {formatFromPrice(a) ?? "Not in the shop yet · ask about a print"}
                        {a.productFormat && <span className="text-ink-soft"> · {a.productFormat}</span>}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
