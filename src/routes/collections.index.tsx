import { ResponsiveImage } from "@/components/ResponsiveImage";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, handleImageError } from "@/components/SiteChrome";
import { collections } from "@/data/collections";
import {
  seoMeta,
  canonical,
  ldJson,
  websiteNode,
  organizationNode,
  artistNode,
  webPageNode,
  breadcrumbNode,
  abs,
  SHOP_URL,
} from "@/lib/seo";

const TITLE = "Art Print Collections — Architecture, Coastal & Travel | GAK Creations";
const DESCRIPTION =
  "Browse the GAK Creations art print collections by Gerald Allen Knowles: architecture, coastal, travel collages, Fuerteventura, Gaudí and nature. Shipped worldwide.";

export const Route = createFileRoute("/collections/")({
  component: CollectionsIndex,
  head: () => ({
    meta: seoMeta({
      title: TITLE,
      description: DESCRIPTION,
      path: "/collections",
      image: collections[0]!.hero,
      keywords: [
        "art print collections",
        "architectural art prints",
        "coastal art prints",
        "travel art prints",
        "fine art prints online",
      ],
    }),
    links: canonical("/collections"),
    scripts: ldJson([
      websiteNode,
      organizationNode,
      artistNode,
      webPageNode("/collections", TITLE, DESCRIPTION),
      breadcrumbNode([
        { name: "Home", path: "/" },
        { name: "Collections", path: "/collections" },
      ]),
      {
        "@type": "CollectionPage",
        "@id": `${abs("/collections")}#collection`,
        name: "Art Print Collections",
        url: abs("/collections"),
        mainEntity: {
          "@type": "ItemList",
          itemListElement: collections.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.name,
            url: abs(`/collections/${c.slug}`),
          })),
        },
      },
    ]),
  }),
});

function CollectionsIndex() {
  return (
    <div className="min-h-screen bg-paper text-ink font-body">
      <SiteHeader />
      <main>
        <section className="border-b border-ink/15">
          <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-12 md:py-24">
            <p className="eyebrow">The Archive</p>
            <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1] md:text-7xl">
              Art print <em className="font-light">collections</em> by Gerald Allen Knowles
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
              Six bodies of work drawn across Europe and the islands of the Atlantic — architecture,
              coastal scenes, travel collages, volcanic landscapes and the modern landmarks that
              refuse the right angle. Every piece is available as a museum-quality fine art print,
              made to order and shipped worldwide.
            </p>
          </div>
        </section>

        <section className="border-b border-ink/15">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 py-16 md:grid-cols-2 md:gap-10 md:px-12 md:py-24">
            {collections.map((c) => (
              <article key={c.slug}>
                <Link to="/collections/$slug" params={{ slug: c.slug }} className="group block">
                  <div className="overflow-hidden bg-paper-warm">
                    <ResponsiveImage
                      src={c.hero}
                      alt={c.heroAlt}
                      width={900}
                      height={1100}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.02]"
                      onError={handleImageError}
                    />
                  </div>
                  <div className="mt-5 border-b border-ink/20 pb-5">
                    <p className="eyebrow">{c.eyebrow}</p>
                    <h2 className="mt-2 font-display text-3xl md:text-4xl">{c.name}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">{c.lede}</p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="border-b border-ink/15 bg-paper-warm">
          <div className="mx-auto max-w-3xl px-6 py-20 text-center md:px-12">
            <h2 className="font-display text-4xl md:text-5xl">
              Every collection is <em className="font-light">available as prints</em>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-soft">
              Printed on museum-grade matte fine art paper with pigment inks, made to order and
              posted worldwide through our Printify storefront.
            </p>
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 bg-ink px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-paper transition hover:bg-ink-soft"
            >
              Shop the Collection <span>→</span>
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
