import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { ResponsiveImage, handleImageError } from "@/components/ResponsiveImage";
import { getCollection } from "@/data/collections";
import { artworkByImage } from "@/data/artworks";
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
  artworkAltText,
  abs,
  SHOP_URL,
  SITE_NAME,
  ARTIST_NAME,
} from "@/lib/seo";

const PATH = "/fuerteventura-art-prints";
const HERO = "/images/Fuerteventura Chapel.jpg";
const PUBLISHED = "2026-09-03";

const TITLE = "Fuerteventura Art Prints | Canary Islands Wall Art Guide | GAK Creations";
const DESCRIPTION =
  "Shop Fuerteventura art prints by Gerald Allen Knowles, from volcanic landscapes and whitewashed chapels to Atlantic shorelines, with sizing and framing advice.";

const KEYWORDS = [
  "Fuerteventura art print",
  "Canary Islands wall art",
  "Fuerteventura wall art",
  "volcanic landscape print",
  "Canary Island landscape art",
  "Atlantic island art print",
  "Spanish island art",
];

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: "What makes Fuerteventura a distinctive subject for wall art?",
    a: "Fuerteventura is an island stripped back to its bones — volcanic ridges, dry riverbeds, whitewashed chapels and an enormous sky. There is almost no visual clutter, so the drawings become studies of form and light rather than scenery. That restraint is why they hang well in contemporary interiors.",
  },
  {
    q: "Are these prints of real places on the island?",
    a: "Yes. Every Fuerteventura sheet in the archive was drawn from observation on the island — a chapel above the shore, the volcanic ground inland, a boat resting on the sand. Nothing is invented from photographs.",
  },
  {
    q: "Which room suits a Fuerteventura landscape print?",
    a: "Rooms with warm, natural materials: oak, linen, plaster, terracotta. The ochre and dust palette sits comfortably in a living room or hallway, and the horizontal compositions work particularly well above a sideboard, console or low bookcase.",
  },
  {
    q: "What size should I order?",
    a: "For a wall on its own, choose a print roughly two thirds the width of the furniture beneath it — usually 50–70 cm for a console and 70–100 cm above a sofa. For a pair, two 40–50 cm sheets hung a hand's width apart read as one work.",
  },
  {
    q: "Do you ship Canary Island prints internationally?",
    a: "Yes. Each print is made to order and dispatched from the production facility nearest the delivery address — typically 2–7 business days to produce and 4–20 business days in transit.",
  },
  {
    q: "Are these limited editions?",
    a: "They are open-edition fine art prints on museum-grade matte paper with archival pigment inks, produced to order rather than held in stock, so nothing sits in a warehouse fading.",
  },
];

export const Route = createFileRoute("/fuerteventura-art-prints")({
  component: FuerteventuraLandingPage,
  head: () => ({
    meta: seoMeta({
      title: TITLE,
      description: DESCRIPTION,
      path: PATH,
      image: HERO,
      type: "article",
      publishedTime: PUBLISHED,
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
        { name: "Fuerteventura Art Prints", path: PATH },
      ]),
      {
        "@type": "Article",
        "@id": `${abs(PATH)}#article`,
        headline: "Fuerteventura Art Prints: Volcanic Ground, White Chapels and Atlantic Light",
        description: DESCRIPTION,
        url: abs(PATH),
        datePublished: PUBLISHED,
        dateModified: PUBLISHED,
        image: abs(HERO),
        keywords: KEYWORDS.join(", "),
        articleSection: "Buying Guides",
        author: { "@id": `${abs("/")}#artist` },
        publisher: { "@id": `${abs("/")}#organization` },
        mainEntityOfPage: { "@type": "WebPage", "@id": `${abs(PATH)}#webpage` },
      },
      {
        "@type": "FAQPage",
        "@id": `${abs(PATH)}#faq`,
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "ItemList",
        "@id": `${abs(PATH)}#itemlist`,
        name: "Fuerteventura art prints",
        itemListElement: getCollection("fuerteventura")!.works.map((w, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: productNode(w, {
            collectionName: "Fuerteventura",
            keywords: KEYWORDS,
            pageUrl: abs(PATH),
            offerUrl: SHOP_URL,
          }),
        })),
      },
      {
        "@type": "Place",
        "@id": `${abs(PATH)}#place`,
        name: "Fuerteventura, Canary Islands, Spain",
        address: {
          "@type": "PostalAddress",
          addressRegion: "Canary Islands",
          addressCountry: "ES",
        },
      },
      imageObjectNode(
        HERO,
        "Fuerteventura Chapel Above the Shore",
        "Fuerteventura art print of a whitewashed chapel above the Atlantic shore",
      ),
    ]),
  }),
});

function FuerteventuraLandingPage() {
  const island = getCollection("fuerteventura")!;

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
            <li>Fuerteventura Art Prints</li>
          </ol>
        </nav>

        <header className="border-b border-ink/15">
          <div className="mx-auto max-w-3xl px-6 py-14 md:px-12 md:py-20">
            <p className="eyebrow">Island guide · {ARTIST_NAME}</p>
            <h1 className="mt-6 font-display text-4xl leading-[1.02] md:text-6xl">
              Fuerteventura Art Prints
            </h1>
            <div className="rule-line mt-8 w-16" />
            <p className="mt-8 text-lg leading-relaxed text-ink-soft">
              Volcanic ground, whitewashed chapels and the flat Atlantic horizon — Canary Island wall art
              drawn on location, and how to choose and hang it so the island's quiet does the work.
            </p>
          </div>
        </header>

        <figure className="mx-auto max-w-[1400px] px-6 pt-12 md:px-12">
          <ResponsiveImage
            src={HERO}
            alt="Fuerteventura art print of a whitewashed chapel standing above the Atlantic shore under bleached island light"
            width={787}
            height={1105}
            fetchPriority="high"
            sizes="(min-width: 1024px) 900px, 100vw"
            className="mx-auto max-h-[70vh] w-auto"
            onError={handleImageError}
          />
          <figcaption className="mt-4 text-center text-[0.7rem] uppercase tracking-[0.2em] text-ink-soft">
            Fuerteventura Chapel Above the Shore · ink and wash on paper
          </figcaption>
        </figure>

        <article className="mx-auto max-w-3xl px-6 py-16 md:px-12 md:py-24">
          <div className="space-y-6 text-base leading-relaxed text-ink-soft">
            <p>
              Fuerteventura is the oldest of the Canary Islands and it looks it. Wind has taken the edges off
              the volcanoes, rain almost never comes, and what is left is ground: ochre, rust, ash grey, laid
              out in long ridges under a sky that occupies two thirds of every view. For an architect used to
              reading structure, it is an unusually honest place to draw. There is nothing to hide behind.
            </p>
            <p>
              These prints come out of repeated visits to the island — chapels above the shore, the volcanic
              interior, boats resting on sand at the edge of the Atlantic. They are landscape works with an
              architect's discipline: the horizon set first, the masses measured, the colour kept to what the
              island actually offers.
            </p>
          </div>

          <section className="mt-14">
            <h2 className="font-display text-2xl md:text-3xl">A palette the island decides</h2>
            <div className="mt-5 space-y-5 text-base leading-relaxed text-ink-soft">
              <p>
                Nothing here is invented. The range runs from bleached paper white through warm dust and ochre
                into the deep rust of oxidised basalt, with a single band of Atlantic blue holding the top of
                the sheet. That narrow palette is the practical reason Fuerteventura wall art is so easy to
                place: it belongs beside oak, linen, plaster, rattan and terracotta without any negotiation.
              </p>
              <p>
                It also means these prints behave in changing daylight. A drawing built from earth tones does
                not flatten out at dusk the way a saturated photographic print does — it simply warms.
              </p>
            </div>
          </section>

          <section className="mt-14">
            <h2 className="font-display text-2xl md:text-3xl">Small architecture, enormous landscape</h2>
            <div className="mt-5 space-y-5 text-base leading-relaxed text-ink-soft">
              <p>
                The island's buildings are modest — a whitewashed chapel, a low wall, a flat-roofed house — and
                they are always outnumbered by the ground around them. That relationship is the subject of most
                of these sheets. A single white volume placed against a volcanic slope tells you the scale of
                the island more accurately than any panorama could.
              </p>
              <p>
                Compositionally it produces artwork with a great deal of calm, open space, which is exactly
                what a busy room needs. Hung above a console or a bed, a Fuerteventura landscape gives the eye
                somewhere to rest.
              </p>
            </div>
          </section>

          <section className="mt-14">
            <h2 className="font-display text-2xl md:text-3xl">Framing and hanging Canary Island prints</h2>
            <div className="mt-5 space-y-5 text-base leading-relaxed text-ink-soft">
              <p>
                Natural oak or pale ash with a warm off-white mount of 5–7 cm suits these works best; the wood
                picks up the ochre in the ground. Avoid stark black frames, which pull the drawing towards
                graphic poster territory and lose the dust in the washes.
              </p>
              <p>
                For a pair, hang a volcanic landscape beside a chapel study at a shared centre line — the
                horizontal and the vertical balance each other. For a group of three, add a coastal boat study
                and you have the island read from inland, shore and water.
              </p>
            </div>
          </section>

          <section className="mt-14">
            <h2 className="font-display text-2xl md:text-3xl">Paper, inks and how prints are made</h2>
            <div className="mt-5 space-y-5 text-base leading-relaxed text-ink-soft">
              <p>
                Every print is produced on heavyweight museum-grade matte fine art stock using archival pigment
                inks, which hold the granulating volcanic texture without gloss glare. Prints are made to order
                at the production facility nearest your delivery address, then shipped worldwide with tracking.
                Sizes, paper options and prices are shown at checkout in the {SITE_NAME} shop.
              </p>
            </div>
          </section>

          <section className="mt-16" aria-labelledby="picks">
            <h2 id="picks" className="font-display text-2xl md:text-3xl">
              Fuerteventura prints to start with
            </h2>
            <ul className="mt-8 grid gap-10 sm:grid-cols-2">
              {island.works.map((w) => {
                const art = artworkByImage(w.image);
                return (
                  <li key={w.sku}>
                    <ResponsiveImage
                      src={w.image}
                      alt={artworkAltText(w, island.name)}
                      width={600}
                      height={750}
                      loading="lazy"
                      sizes="(min-width: 640px) 45vw, 100vw"
                      className="w-full"
                      onError={handleImageError}
                    />
                    <h3 className="mt-4 font-display text-lg">
                      {art ? (
                        <Link to="/artwork/$slug" params={{ slug: art.slug }} className="hover:underline">
                          {w.title}
                        </Link>
                      ) : (
                        w.title
                      )}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{w.description}</p>
                  </li>
                );
              })}
            </ul>
          </section>

          <section className="mt-16" aria-labelledby="faq">
            <h2 id="faq" className="font-display text-2xl md:text-3xl">
              Questions buyers ask
            </h2>
            <dl className="mt-8 space-y-8">
              {FAQS.map((f) => (
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
            <h2 className="font-display text-2xl md:text-3xl">Browse the island work</h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              See the full{" "}
              <Link
                to="/collections/$slug"
                params={{ slug: "fuerteventura" }}
                className="underline hover:text-ink"
              >
                Fuerteventura collection
              </Link>
              , the related{" "}
              <Link to="/coastal-wall-art" className="underline hover:text-ink">
                coastal wall art guide
              </Link>
              , or the{" "}
              <Link to="/artwork" className="underline hover:text-ink">
                complete artwork archive
              </Link>
              . The journal note on{" "}
              <Link
                to="/journal/$slug"
                params={{ slug: "fuerteventura-landscapes-drawing-volcanic-ground" }}
                className="underline hover:text-ink"
              >
                drawing volcanic ground
              </Link>{" "}
              explains how these sheets are made.
            </p>
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noopener"
              className="mt-8 inline-block border border-ink px-8 py-4 text-[0.7rem] uppercase tracking-[0.25em] transition-colors hover:bg-ink hover:text-paper"
            >
              Shop Fuerteventura prints
            </a>
          </section>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
