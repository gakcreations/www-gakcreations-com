import { Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { ResponsiveImage, handleImageError } from "@/components/ResponsiveImage";
import { StudioListSection } from "@/components/StudioListForm";
import type { BuyerGuide as BuyerGuideData } from "@/data/guides";
import { getArtwork } from "@/data/artworks";
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
  SHOP_URL,
  SITE_NAME,
  ARTIST_NAME,
} from "@/lib/seo";
import { getShopUrl } from "@/lib/analytics";

export function guideHead(guide: BuyerGuideData) {
  const path = `/${guide.slug}`;
  const picks = guide.picks.map((slug) => getArtwork(slug)).filter(Boolean);

  return {
    meta: seoMeta({
      title: guide.seoTitle,
      description: guide.seoDescription,
      path,
      image: { path: guide.hero, alt: guide.heroAlt },
      type: "article" as const,
      publishedTime: guide.published,
      keywords: guide.keywords,
    }),
    links: canonical(path),
    scripts: ldJson([
      websiteNode,
      organizationNode,
      artistNode,
      webPageNode(path, guide.seoTitle, guide.seoDescription),
      breadcrumbNode([
        { name: "Home", path: "/" },
        { name: guide.breadcrumb, path },
      ]),
      {
        "@type": "Article",
        "@id": `${abs(path)}#article`,
        headline: guide.h1,
        description: guide.seoDescription,
        url: abs(path),
        datePublished: guide.published,
        dateModified: guide.published,
        image: abs(guide.hero),
        keywords: guide.keywords.join(", "),
        articleSection: "Buying Guides",
        author: { "@id": `${abs("/")}#artist` },
        publisher: { "@id": `${abs("/")}#organization` },
        mainEntityOfPage: { "@type": "WebPage", "@id": `${abs(path)}#webpage` },
      },
      {
        "@type": "FAQPage",
        "@id": `${abs(path)}#faq`,
        mainEntity: guide.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "ItemList",
        "@id": `${abs(path)}#itemlist`,
        name: guide.h1,
        itemListElement: picks.map((a, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: productNode(a!, {
            keywords: guide.keywords,
            pageUrl: abs(`/artwork/${a!.slug}`),
            offerUrl: getShopUrl(a!.slug, a!.productPath),
          }),
        })),
      },
      imageObjectNode(guide.hero, guide.heroCaption, guide.heroAlt),
    ]),
  };
}

export function BuyerGuidePage({ guide }: { guide: BuyerGuideData }) {
  const picks = guide.picks.map((slug) => getArtwork(slug)).filter(Boolean);

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
              {guide.breadcrumb}
            </li>
          </ol>
        </nav>

        <header className="border-b border-ink/15">
          <div className="mx-auto max-w-3xl px-6 py-14 md:px-12 md:py-20">
            <p className="eyebrow">
              {guide.kind} · {ARTIST_NAME}
            </p>
            <h1 className="mt-6 font-display text-4xl leading-[1.02] md:text-6xl">{guide.h1}</h1>
            <div className="rule-line mt-8 w-16" />
            <p className="mt-8 text-lg leading-relaxed text-ink-soft">{guide.lede}</p>
          </div>
        </header>

        <figure className="mx-auto max-w-[1400px] px-6 pt-12 md:px-12">
          <ResponsiveImage
            src={guide.hero}
            alt={guide.heroAlt}
            width={1100}
            height={1300}
            fetchPriority="high"
            sizes="(min-width: 1024px) 1000px, 100vw"
            className="mx-auto max-h-[70vh] w-auto"
            onError={handleImageError}
          />
          <figcaption className="mt-4 text-center text-[0.7rem] uppercase tracking-[0.2em] text-ink-soft">
            {guide.heroCaption}
          </figcaption>
        </figure>

        <article className="mx-auto max-w-3xl px-6 py-16 md:px-12 md:py-24">
          <div className="space-y-6 text-base leading-relaxed text-ink-soft">
            {guide.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {guide.sections.map((section) => (
            <section key={section.heading} className="mt-14">
              <h2 className="font-display text-2xl md:text-3xl">{section.heading}</h2>
              <div className="mt-5 space-y-5 text-base leading-relaxed text-ink-soft">
                {section.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>
          ))}

          <section className="mt-16" aria-labelledby="picks">
            <h2 id="picks" className="font-display text-2xl md:text-3xl">
              Prints to start with
            </h2>
            <ul className="mt-8 grid gap-10 sm:grid-cols-2">
              {picks.map((a) => (
                <li key={a!.slug}>
                  <Link to="/artwork/$slug" params={{ slug: a!.slug }} className="group block">
                    <ResponsiveImage
                      src={a!.image}
                      alt={a!.alt}
                      width={600}
                      height={750}
                      loading="lazy"
                      sizes="(min-width: 640px) 45vw, 100vw"
                      className="aspect-[4/5] w-full object-cover"
                      onError={handleImageError}
                    />
                    <h3 className="mt-4 font-display text-lg group-hover:underline">{a!.title}</h3>
                  </Link>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-ink-soft">
                    {a!.medium} · {a!.place}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{a!.description}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-16" aria-labelledby="faq">
            <h2 id="faq" className="font-display text-2xl md:text-3xl">
              Questions buyers ask
            </h2>
            <dl className="mt-8 space-y-8">
              {guide.faqs.map((f) => (
                <div key={f.q} className="border-t border-ink/15 pt-6">
                  <dt className="font-display text-lg">{f.q}</dt>
                  <dd className="mt-3 text-base leading-relaxed text-ink-soft">{f.a}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-8 text-sm text-ink-soft">
              Full terms are on the{" "}
              <Link to="/shipping-policy" className="underline hover:text-ink">
                shipping policy
              </Link>{" "}
              and{" "}
              <Link to="/refund-policy" className="underline hover:text-ink">
                refund &amp; returns
              </Link>{" "}
              pages.
            </p>
          </section>

          <section className="mt-16 border-t border-ink/15 pt-10">
            <h2 className="font-display text-2xl md:text-3xl">{guide.ctaHeading}</h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              Browse the{" "}
              <Link to="/artwork" className="underline hover:text-ink">
                complete artwork archive
              </Link>{" "}
              or the{" "}
              <Link to="/collections" className="underline hover:text-ink">
                collections
              </Link>
              . Every drawing is available as a made-to-order print from the {SITE_NAME} shop, with
              sizes, paper and framing options shown at checkout.
            </p>
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noopener"
              className="mt-8 inline-block border border-ink px-8 py-4 text-[0.7rem] uppercase tracking-[0.25em] transition-colors hover:bg-ink hover:text-paper"
            >
              {guide.ctaLabel}
            </a>
          </section>
        </article>
        <StudioListSection source={guide.slug} />
      </main>
      <SiteFooter />
    </div>
  );
}
