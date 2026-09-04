import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { ResponsiveImage, handleImageError } from "@/components/ResponsiveImage";
import { StudioListSection } from "@/components/StudioListForm";

import { getArtwork, getArtwork as findArtwork, artworks } from "@/data/artworks";
import type { Artwork } from "@/data/artworks";
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
  productNode,
  imageObjectNode,
  abs,
  ARTIST_NAME,
} from "@/lib/seo";
import { getShopUrl, trackPrintifyClick } from "@/lib/analytics";

export const Route = createFileRoute("/artwork/$slug")({
  loader: ({ params }) => {
    const artwork = getArtwork(params.slug);
    if (!artwork) throw notFound();
    return { artwork };
  },
  component: ArtworkPage,
  head: ({ loaderData }) => {
    const a = loaderData?.artwork;
    if (!a) {
      return { meta: [{ title: "Artwork not found" }, { name: "robots", content: "noindex" }] };
    }
    const path = `/artwork/${a.slug}`;
    return {
      meta: seoMeta({
        title: a.seoTitle,
        description: a.seoDescription,
        path,
        image: { path: a.image, alt: a.alt },
        type: "product",
        keywords: a.keywords,
      }),
      links: canonical(path),
      scripts: ldJson([
        websiteNode,
        organizationNode,
        artistNode,
        webPageNode(path, a.seoTitle, a.seoDescription),
        breadcrumbNode([
          { name: "Home", path: "/" },
          { name: "Artwork", path: "/artwork" },
          { name: a.title, path },
        ]),
        productNode(a, {
          keywords: a.keywords,
          pageUrl: abs(path),
          offerUrl: getShopUrl(a.slug),
        }),
        imageObjectNode(a.image, a.title, a.alt),
        {
          "@type": "VisualArtwork",
          "@id": `${abs(path)}#artwork`,
          name: a.title,
          url: abs(path),
          image: abs(a.image),
          artMedium: a.medium,
          artform: "Drawing",
          contentLocation: { "@type": "Place", name: a.place },
          creator: { "@id": `${abs("/")}#artist` },
          description: a.description,
        },
      ]),
    };
  },
});

function ArtworkPage() {
  const { artwork: a } = Route.useLoaderData() as { artwork: Artwork };
  const memberCollections = a.collections
    .map((slug) => collections.find((c) => c.slug === slug))
    .filter(Boolean) as Array<(typeof collections)[number]>;
  const companions = a.related
    .map((slug) => findArtwork(slug))
    .filter(Boolean) as Artwork[];

  return (
    <div className="min-h-screen bg-paper text-ink font-body">
      <SiteHeader />
      <main>
        <nav aria-label="Breadcrumb" className="border-b border-ink/15">
          <ol className="mx-auto flex max-w-[1400px] flex-wrap gap-2 px-6 py-4 text-[0.7rem] uppercase tracking-[0.2em] text-ink-soft md:px-12">
            <li>
              <Link to="/" className="hover:text-ink">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link to="/artwork" className="hover:text-ink">
                Artwork
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-ink">
              {a.title}
            </li>
          </ol>
        </nav>

        <article>
          <section className="border-b border-ink/15">
            <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 py-14 md:grid-cols-12 md:px-12 md:py-20">
              <figure className="md:col-span-7">
                <ResponsiveImage
                  src={a.image}
                  alt={a.alt}
                  width={1100}
                  height={1300}
                  fetchPriority="high"
                  sizes="(min-width: 768px) 55vw, 100vw"
                  className="w-full object-contain"
                  onError={handleImageError}
                />
                <figcaption className="mt-4 text-[0.7rem] uppercase tracking-[0.2em] text-ink-soft">
                  {a.title} · {a.medium} · {a.place}
                </figcaption>
              </figure>

              <div className="md:col-span-5">
                <p className="eyebrow">{a.year}</p>
                <h1 className="mt-6 font-display text-4xl leading-[1.02] md:text-6xl">{a.title}</h1>
                <div className="rule-line mt-8 w-16" />
                <p className="mt-8 text-base leading-relaxed text-ink-soft md:text-lg">
                  {a.description}
                </p>

                <dl className="mt-10 grid grid-cols-2 gap-y-5 border-t border-ink/15 pt-8 text-sm">
                  <dt className="text-[0.65rem] uppercase tracking-[0.25em] text-ink-soft">Medium</dt>
                  <dd>{a.medium}</dd>
                  <dt className="text-[0.65rem] uppercase tracking-[0.25em] text-ink-soft">Place</dt>
                  <dd>{a.place}</dd>
                  <dt className="text-[0.65rem] uppercase tracking-[0.25em] text-ink-soft">Artist</dt>
                  <dd>{ARTIST_NAME}</dd>
                  <dt className="text-[0.65rem] uppercase tracking-[0.25em] text-ink-soft">Paper</dt>
                  <dd>Museum-grade matte, pigment inks</dd>
                </dl>

                <a
                  href={getShopUrl(a.slug)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackPrintifyClick({ slug: a.slug, title: a.title })}
                  className="mt-10 inline-flex items-center gap-3 bg-ink px-7 py-4 text-sm font-medium uppercase tracking-[0.2em] text-paper transition hover:bg-ink-soft"
                >
                  Buy this print <span>→</span>
                </a>
                <p className="mt-4 text-xs leading-relaxed text-ink-soft">
                  Made to order and shipped worldwide. Sizes and framing options are shown at checkout.
                </p>
              </div>
            </div>
          </section>

          <section className="border-b border-ink/15">
            <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 py-16 md:grid-cols-12 md:px-12 md:py-20">
              <div className="md:col-span-4">
                <h2 className="font-display text-3xl md:text-4xl">
                  About this <em className="font-light">drawing</em>
                </h2>
                <div className="rule-line mt-6 w-16" />
              </div>
              <div className="space-y-6 text-base leading-relaxed text-ink-soft md:col-span-8 md:text-[1.05rem]">
                {a.story.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                <h3 className="pt-4 font-display text-2xl text-ink md:text-3xl">
                  Where this print hangs well
                </h3>
                {a.hanging.map((p, i) => (
                  <p key={`h-${i}`}>{p}</p>
                ))}
                <p>
                  For sizing, framing and light, see the{" "}
                  <Link to="/architectural-art-prints" className="underline hover:text-ink">
                    print buying guide
                  </Link>
                  .
                </p>
              </div>
            </div>
          </section>

          {memberCollections.length > 0 && (
            <section className="border-b border-ink/15 bg-paper-warm">
              <div className="mx-auto max-w-[1400px] px-6 py-14 md:px-12">
                <h2 className="font-display text-3xl md:text-4xl">Part of these collections</h2>
                <div className="mt-8 flex flex-wrap gap-4">
                  {memberCollections.map((c) => (
                    <Link
                      key={c.slug}
                      to="/collections/$slug"
                      params={{ slug: c.slug }}
                      className="border border-ink/25 px-6 py-3 text-sm uppercase tracking-[0.2em] hover:bg-ink hover:text-paper"
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}

          {companions.length > 0 && (
            <section className="border-b border-ink/15">
              <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-12">
                <h2 className="font-display text-3xl md:text-4xl">Companion pieces</h2>
                <ul className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2">
                  {companions.map((w) => (
                    <li key={w.slug}>
                      <Link to="/artwork/$slug" params={{ slug: w.slug }} className="group block">
                        <ResponsiveImage
                          src={w.image}
                          alt={w.alt}
                          width={900}
                          height={1100}
                          loading="lazy"
                          sizes="(min-width: 640px) 45vw, 100vw"
                          className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.02]"
                          onError={handleImageError}
                        />
                        <h3 className="mt-5 font-display text-2xl">{w.title}</h3>
                        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-ink-soft">
                          {w.medium} · {w.place}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/artwork"
                  className="mt-10 inline-block border border-ink/25 px-6 py-3 text-sm uppercase tracking-[0.2em] hover:bg-ink hover:text-paper"
                >
                  All artwork ({artworks.length})
                </Link>
              </div>
            </section>
          )}
        </article>
        <StudioListSection source={`artwork/${a.slug}`} />
      </main>
      <SiteFooter />
    </div>
  );
}

