import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { ResponsiveImage, handleImageError } from "@/components/ResponsiveImage";
import { artworks } from "@/data/artworks";
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
  SHOP_URL,
  ARTIST_NAME,
} from "@/lib/seo";

const PATH = "/artwork";
const TITLE = "Shop All Fine Art Prints | Architectural, Coastal & Travel Artwork | GAK Creations";
const DESCRIPTION =
  "Browse every GAK Creations fine art print by Gerald Allen Knowles, including architectural drawings, coastal artwork, travel collages and Canary Islands landscapes.";
const KEYWORDS = [
  "fine art prints",
  "architectural drawings",
  "coastal art prints",
  "travel collage art",
  "Gerald Allen Knowles artwork",
  "original art prints online",
];

export const Route = createFileRoute("/artwork/")({
  component: ArtworkIndex,
  head: () => ({
    meta: seoMeta({
      title: TITLE,
      description: DESCRIPTION,
      path: PATH,
      image: artworks[0]!.image,
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
              offerUrl: SHOP_URL,
            }),
          })),
        },
      },
    ]),
  }),
});

function ArtworkIndex() {
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
              place. All are available as made-to-order fine art prints, shipped worldwide.
            </p>
          </div>
        </header>

        <section>
          <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-12 md:py-20">
            <ul className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-10">
              {artworks.map((a, i) => (
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
