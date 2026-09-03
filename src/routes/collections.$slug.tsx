import { ResponsiveImage } from "@/components/ResponsiveImage";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, handleImageError } from "@/components/SiteChrome";
import type { Collection } from "@/data/collections";
import { collections, getCollection } from "@/data/collections";
import { journal } from "@/data/journal";
import {
  artworkAltText,
  artworkKeywords,
  seoMeta,
  canonical,
  ldJson,
  websiteNode,
  organizationNode,
  artistNode,
  webPageNode,
  breadcrumbNode,
  imageObjectNode,
  productNode,
  abs,
  SHOP_URL,
} from "@/lib/seo";

export const Route = createFileRoute("/collections/$slug")({
  loader: ({ params }) => {
    const collection = getCollection(params.slug);
    if (!collection) throw notFound();
    return { collection };
  },
  component: CollectionPage,
  head: ({ loaderData }) => {
    const c = loaderData?.collection;
    if (!c) return {};
    const path = `/collections/${c.slug}`;
    return {
      meta: seoMeta({
        title: c.seoTitle,
        description: c.seoDescription,
        path,
        image: c.hero,
        keywords: c.keywords,
      }),
      links: canonical(path),
      scripts: ldJson([
        websiteNode,
        organizationNode,
        artistNode,
        webPageNode(path, c.seoTitle, c.seoDescription),
        breadcrumbNode([
          { name: "Home", path: "/" },
          { name: "Collections", path: "/collections" },
          { name: c.name, path },
        ]),
        {
          "@type": "CollectionPage",
          "@id": `${abs(path)}#collection`,
          name: `${c.name} art prints`,
          url: abs(path),
          mainEntity: {
            "@type": "ItemList",
            itemListElement: c.works.map((w, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: productNode(w, {
                collectionName: c.name,
                keywords: artworkKeywords(w, c.keywords),
                pageUrl: abs(`/collections/${c.slug}#${w.sku.toLowerCase()}`),
                offerUrl: SHOP_URL,
              }),
            })),
          },
        },
        ...c.works.map((w) => imageObjectNode(w.image, w.title, artworkAltText(w, c.name))),
      ]),
    };
  },
});

function CollectionPage() {
  const { collection: c } = Route.useLoaderData() as { collection: Collection };
  const related = c.related
    .map((slug: string) => collections.find((x) => x.slug === slug))
    .filter(Boolean) as Collection[];
  const posts = journal.filter((p) => p.relatedCollection === c.slug);

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
            <li>
              <Link to="/collections" className="hover:text-ink">
                Collections
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-ink">
              {c.name}
            </li>
          </ol>
        </nav>

        <section className="border-b border-ink/15">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 py-14 md:grid-cols-12 md:px-12 md:py-20">
            <div className="md:col-span-5">
              <p className="eyebrow">{c.eyebrow}</p>
              <h1 className="mt-6 font-display text-5xl leading-[0.98] md:text-7xl">
                {c.heading} <em className="font-light">art prints</em>
              </h1>
              <p className="mt-8 max-w-md text-base leading-relaxed text-ink-soft md:text-lg">
                {c.lede}
              </p>
              <a
                href={SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-3 bg-ink px-7 py-4 text-sm font-medium uppercase tracking-[0.2em] text-paper transition hover:bg-ink-soft"
              >
                Shop this collection <span>→</span>
              </a>
            </div>
            <figure className="md:col-span-7">
              <ResponsiveImage
                src={c.hero}
                alt={c.heroAlt}
                width={1400}
                height={1600}
                fetchPriority="high"
                className="w-full object-cover"
                onError={handleImageError}
              />
            </figure>
          </div>
        </section>

        <section className="border-b border-ink/15">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 py-16 md:grid-cols-12 md:px-12 md:py-24">
            <div className="md:col-span-4">
              <h2 className="font-display text-3xl md:text-4xl">
                About the <em className="font-light">{c.name}</em> collection
              </h2>
              <div className="rule-line mt-6 w-16" />
            </div>
            <div className="space-y-6 text-base leading-relaxed text-ink-soft md:col-span-8 md:text-[1.05rem]">
              {c.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              {c.sections.map((s) => (
                <div key={s.heading} className="pt-4">
                  <h3 className="font-display text-2xl text-ink md:text-3xl">{s.heading}</h3>
                  <div className="mt-4 space-y-4">
                    {s.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-ink/15">
          <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-12 md:py-24">
            <h2 className="font-display text-4xl md:text-5xl">
              Works in this <em className="font-light">collection</em>
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8">
              {c.works.map((w) => {
                const art = artworkByImage(w.image);
                const CardLink = ({ children }: { children: React.ReactNode }) =>
                  art ? (
                    <Link
                      to="/artwork/$slug"
                      params={{ slug: art.slug }}
                      className="group block"
                    >
                      {children}
                    </Link>
                  ) : (
                    <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="group block">
                      {children}
                    </a>
                  );
                return (
                <article key={w.sku} id={w.sku.toLowerCase()}>
                  <CardLink>
                    <div className="overflow-hidden bg-paper-warm">
                      <ResponsiveImage
                        src={w.image}
                        alt={artworkAltText(w, c.name)}
                        width={900}
                        height={1100}
                        loading="lazy"
                        className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.02]"
                        onError={handleImageError}
                      />
                    </div>
                    <div className="mt-5 border-b border-ink/20 pb-5">
                      <h3 className="font-display text-2xl md:text-3xl">{w.title}</h3>
                      <p className="mt-2 text-xs uppercase tracking-[0.2em] text-ink-soft">
                        {w.medium} · {w.place}
                      </p>
                      <p className="mt-4 text-sm leading-relaxed text-ink-soft">{w.description}</p>
                    </div>
                  </CardLink>
                </article>
                );
              })}
            </div>
          </div>
        </section>

        {posts.length > 0 && (
          <section className="border-b border-ink/15 bg-paper-warm">
            <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-12">
              <h2 className="font-display text-3xl md:text-4xl">From the studio journal</h2>
              <ul className="mt-8 space-y-4">
                {posts.map((p) => (
                  <li key={p.slug}>
                    <Link
                      to="/journal/$slug"
                      params={{ slug: p.slug }}
                      className="font-display text-2xl underline decoration-ink/30 underline-offset-8 hover:decoration-ink md:text-3xl"
                    >
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <section className="border-b border-ink/15">
          <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-12">
            <h2 className="font-display text-3xl md:text-4xl">Explore related collections</h2>
            <div className="mt-8 flex flex-wrap gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to="/collections/$slug"
                  params={{ slug: r.slug }}
                  className="border border-ink/25 px-6 py-3 text-sm uppercase tracking-[0.2em] hover:bg-ink hover:text-paper"
                >
                  {r.name}
                </Link>
              ))}
              <Link
                to="/collections"
                className="border border-ink/25 px-6 py-3 text-sm uppercase tracking-[0.2em] hover:bg-ink hover:text-paper"
              >
                All collections
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
