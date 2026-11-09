import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { ResponsiveImage, handleImageError } from "@/components/ResponsiveImage";
import { StudioListSection } from "@/components/StudioListForm";

import { getArtwork, getArtwork as findArtwork, artworks, buyableArtworks, formatFromPrice, otherEditions } from "@/data/artworks";
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
  CONTACT_EMAIL,
} from "@/lib/seo";
import { getShopUrl, trackPrintEnquiry, trackPrintifyClick } from "@/lib/analytics";

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
          includeOffer: true,
        }),
        imageObjectNode(a.image, a.title, a.alt),
        {
          "@type": "VisualArtwork",
          "@id": `${abs(path)}#artwork`,
          name: a.title,
          alternateName: `${a.title} — ${a.place}`,
          url: abs(path),
          mainEntityOfPage: { "@id": `${abs(path)}#webpage` },
          image: { "@id": `${abs(a.image)}#image` },
          artMedium: a.medium,
          copyrightHolder: { "@id": `${abs("/")}#artist` },
          inLanguage: "en",
          genre: a.collections.flatMap((slug) => {
            const collection = collections.find((c) => c.slug === slug);
            return collection ? [collection.name] : [];
          }),
          keywords: a.keywords.join(", "),
          contentLocation: { "@type": "Place", name: a.place },
          about: { "@type": "Thing", name: a.place },
          creator: { "@id": `${abs("/")}#artist` },
          author: { "@id": `${abs("/")}#artist` },
          provider: { "@id": `${abs("/")}#organization` },
          isPartOf: a.collections
            .flatMap((slug) => {
              const c = collections.find((collection) => collection.slug === slug);
              return c ? [{
              "@type": "CollectionPage",
              name: c.name,
              url: abs(`/collections/${c.slug}`),
              }] : [];
            }),
          isRelatedTo: a.related
            .flatMap((slug) => {
              const r = findArtwork(slug);
              return r ? [{
              "@type": "VisualArtwork",
              name: r.title,
              url: abs(`/artwork/${r.slug}`),
              }] : [];
            }),
          subjectOf: {
            "@id": `${abs(path)}#${a.sku}`,
          },
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
  const isListed = Boolean(a.productPath);
  const editions = otherEditions(a);
  const sizes = a.listingSizes ?? [];
  const sizeSummary =
    sizes.length > 1
      ? `${sizes.length} sizes, ${sizes[0]} to ${sizes[sizes.length - 1]}`
      : sizes[0];
  // For drawings without a shop listing, offer prints from the same
  // collections that can be bought today.
  const buyableAlternatives = isListed
    ? []
    : buyableArtworks()
        .filter((b) => b.collections.some((c) => a.collections.includes(c)))
        .slice(0, 3);
  const enquiryHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Print enquiry: ${a.title}`)}`;

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
                  <dt className="text-[0.65rem] uppercase tracking-[0.25em] text-ink-soft">Print material</dt>
                  <dd>{a.printMaterial ?? (isListed ? "As shown in the shop listing" : "Not yet listed in the shop")}</dd>
                  {a.productFormat && <>
                    <dt className="text-[0.65rem] uppercase tracking-[0.25em] text-ink-soft">Presentation</dt>
                    <dd>{a.productFormat}</dd>
                  </>}
                </dl>

                {isListed ? (
                <div className="mt-10 border border-ink/20 bg-paper-warm p-6">
                  <p className="text-[0.65rem] uppercase tracking-[0.25em] text-ink-soft">
                    Made-to-order fine art print
                  </p>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-soft">
                    {a.productFormat ? <>
                      <li>· {a.productFormat}</li>
                      <li>· Printed on {a.printMaterial?.toLowerCase()}</li>
                      <li>· {sizeSummary ? `Sizes: ${sizeSummary}` : "Available sizes are shown in this print’s shop listing"}</li>
                    </> : <>
                      <li>· Size, paper and frame options are shown in this print’s shop listing</li>
                    </>}
                    <li>· Printed 2–7 days, delivered 4–20 days worldwide</li>
                    <li>· Defects reported within 30 days are replaced or refunded</li>
                  </ul>
                  {formatFromPrice(a) && (
                    <p className="mt-5 font-display text-2xl text-ink">
                      {formatFromPrice(a)}{" "}
                      <span className="font-body text-xs uppercase tracking-[0.2em] text-ink-soft">
                        · In stock
                      </span>
                    </p>
                  )}
                  <a
                    href={getShopUrl(a.slug, a.productPath)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackPrintifyClick({ slug: a.slug, title: a.title, productPath: a.productPath })}
                    className="mt-6 inline-flex w-full items-center justify-center gap-3 bg-ink px-7 py-4 text-sm font-medium uppercase tracking-[0.2em] text-paper transition hover:bg-ink-soft"
                  >
                    Buy this print <span>→</span>
                  </a>
                  <p className="mt-4 text-xs leading-relaxed text-ink-soft">
                    {a.price ? "Final price depends on the selected size and frame. " : "Prices and sizes are shown in the shop. "}
                    See{" "}
                    <Link to="/shipping-policy" className="underline hover:text-ink">
                      shipping
                    </Link>{" "}
                    and{" "}
                    <Link to="/refund-policy" className="underline hover:text-ink">
                      returns
                    </Link>
                    .
                  </p>
                  {editions.length > 0 && (
                    <div className="mt-6 border-t border-ink/15 pt-5">
                      <p className="text-[0.65rem] uppercase tracking-[0.25em] text-ink-soft">
                        Also available as
                      </p>
                      <ul className="mt-3 space-y-2 text-sm">
                        {editions.map((e) => (
                          <li key={e.slug}>
                            <Link
                              to="/artwork/$slug"
                              params={{ slug: e.slug }}
                              className="flex items-baseline justify-between gap-4 underline-offset-4 hover:underline"
                            >
                              <span>{e.productFormat ?? e.title}</span>
                              <span className="whitespace-nowrap text-ink-soft">{formatFromPrice(e)}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                ) : (
                <div className="mt-10 border border-ink/20 bg-paper-warm p-6">
                  <p className="text-[0.65rem] uppercase tracking-[0.25em] text-ink-soft">
                    From the sketchbook archive
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                    This drawing is not listed in the shop yet. Email the studio to ask about a print of
                    it, and you will hear back about sizes and availability.
                  </p>
                  <a
                    href={enquiryHref}
                    onClick={() => trackPrintEnquiry({ slug: a.slug, title: a.title })}
                    className="mt-6 inline-flex w-full items-center justify-center gap-3 bg-ink px-7 py-4 text-sm font-medium uppercase tracking-[0.2em] text-paper transition hover:bg-ink-soft"
                  >
                    Ask about this print <span>→</span>
                  </a>
                  {buyableAlternatives.length > 0 && (
                    <div className="mt-8 border-t border-ink/15 pt-6">
                      <p className="text-[0.65rem] uppercase tracking-[0.25em] text-ink-soft">
                        Available to buy now
                      </p>
                      <ul className="mt-4 space-y-4">
                        {buyableAlternatives.map((b) => (
                          <li key={b.slug}>
                            <Link
                              to="/artwork/$slug"
                              params={{ slug: b.slug }}
                              className="group flex items-center gap-4"
                            >
                              <ResponsiveImage
                                src={b.image}
                                alt={b.alt}
                                width={120}
                                height={120}
                                loading="lazy"
                                sizes="64px"
                                className="h-16 w-16 flex-none object-cover"
                                onError={handleImageError}
                              />
                              <span className="text-sm leading-snug">
                                <span className="block font-display text-lg text-ink group-hover:underline">{b.title}</span>
                                <span className="text-ink-soft">{formatFromPrice(b)}</span>
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                )}
                <p className="mt-6 text-xs leading-relaxed text-ink-soft">
                  Not sure which size? Read the guides for the{" "}
                  <Link to="/living-room-wall-art" className="underline hover:text-ink">
                    living room
                  </Link>
                  ,{" "}
                  <Link to="/bedroom-wall-art" className="underline hover:text-ink">
                    bedroom
                  </Link>{" "}
                  or{" "}
                  <Link to="/home-office-wall-art" className="underline hover:text-ink">
                    home office
                  </Link>
                  .
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

          {isListed && (a.listingFeatures?.length || sizes.length > 0) && (
            <section className="border-b border-ink/15">
              <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 py-16 md:grid-cols-12 md:px-12 md:py-20">
                <div className="md:col-span-4">
                  <h2 className="font-display text-3xl md:text-4xl">
                    Print <em className="font-light">details</em>
                  </h2>
                  <div className="rule-line mt-6 w-16" />
                  <p className="mt-6 text-sm leading-relaxed text-ink-soft">
                    Taken from this print’s shop listing, so what you read here is what you order.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-10 text-base leading-relaxed text-ink-soft sm:grid-cols-2 md:col-span-8">
                  {a.listingFeatures && a.listingFeatures.length > 0 && (
                    <div>
                      <h3 className="font-display text-2xl text-ink">What you get</h3>
                      <ul className="mt-4 space-y-2 text-sm">
                        {a.listingFeatures.map((f) => (
                          <li key={f}>· {f}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {sizes.length > 0 && (
                    <div>
                      <h3 className="font-display text-2xl text-ink">Sizes</h3>
                      <ul className="mt-4 flex flex-wrap gap-2 text-sm">
                        {sizes.map((size) => (
                          <li key={size} className="border border-ink/20 px-3 py-1">
                            {size}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-4 text-xs text-ink-soft">Width × height in inches. Prices vary by size.</p>
                    </div>
                  )}
                </div>
              </div>
            </section>
          )}

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
                        {formatFromPrice(w) && <p className="mt-2 text-sm text-ink">{formatFromPrice(w)}</p>}
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
