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

const PATH = "/coastal-wall-art";
const HERO = "/images/The Boat That Dreams Of Sea.jpg";
const PUBLISHED = "2026-09-03";

const TITLE = "Coastal Wall Art & Harbour Prints — Atlantic Light | GAK Creations";
const DESCRIPTION =
  "Coastal wall art by Gerald Allen Knowles: harbour studies, fishing boats and Atlantic light, hand-drawn in ink and wash. Museum-quality coastal art prints, shipped worldwide.";

const KEYWORDS = [
  "coastal wall art",
  "coastal art prints",
  "harbour wall art",
  "boat art print",
  "seaside wall art",
  "Atlantic seascape print",
  "nautical watercolour print",
];

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: "What makes coastal wall art work in a room?",
    a: "Restraint. Coastal prints hold a room best when the palette stays narrow — indigo, Payne's grey, warm stone and paper white — so one blue hull or one lit wall carries the whole picture. Wide, calm images suit bedrooms, bathrooms and living rooms where you want the wall to lower the volume rather than raise it.",
  },
  {
    q: "Which size suits a coastal print above a bed or sofa?",
    a: "Aim for artwork spanning roughly two thirds of the furniture below it. Above a double bed that usually means a single print of 70–100 cm wide, or a pair of 40–50 cm sheets hung a hand's width apart with a shared centre line.",
  },
  {
    q: "How should coastal art be framed?",
    a: "Pale oak, ash or off-white frames with a generous 5–7 cm mount. Wood tones echo the boat timber and harbour decking in the drawings; heavy black frames tend to fight the soft washes. Use UV glazing in bright, sun-facing coastal rooms.",
  },
  {
    q: "Will sea air or sunlight damage the print?",
    a: "Prints are made on museum-grade matte paper with archival pigment inks, which are far more stable than dye inks. Frame behind glazing, keep the work out of direct midday sun and away from unventilated bathrooms, and it will hold its colour for decades.",
  },
  {
    q: "Do you ship coastal prints worldwide?",
    a: "Yes. Each print is made to order and dispatched from the production facility nearest you — typically 2–7 business days to produce and 4–20 business days to deliver, depending on destination.",
  },
];

export const Route = createFileRoute("/coastal-wall-art")({
  component: CoastalLandingPage,
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
        { name: "Coastal Wall Art", path: PATH },
      ]),
      {
        "@type": "Article",
        "@id": `${abs(PATH)}#article`,
        headline: "Coastal Wall Art: Choosing Harbour and Atlantic Prints for the Home",
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
        name: "Coastal wall art prints",
        itemListElement: getCollection("coastal")!.works.map((w, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: productNode(w, {
            collectionName: "Coastal",
            keywords: KEYWORDS,
            pageUrl: abs(PATH),
            offerUrl: SHOP_URL,
          }),
        })),
      },
      imageObjectNode(
        HERO,
        "The Boat That Dreams of Sea",
        "Coastal wall art print of a resting fishing boat under Atlantic light",
      ),
    ]),
  }),
});

function CoastalLandingPage() {
  const coastal = getCollection("coastal")!;

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
            <li>Coastal Wall Art</li>
          </ol>
        </nav>

        <header className="border-b border-ink/15">
          <div className="mx-auto max-w-3xl px-6 py-14 md:px-12 md:py-20">
            <p className="eyebrow">Buying guide · {ARTIST_NAME}</p>
            <h1 className="mt-6 font-display text-4xl leading-[1.02] md:text-6xl">
              Coastal Wall Art for Quiet Rooms
            </h1>
            <div className="rule-line mt-8 w-16" />
            <p className="mt-8 text-lg leading-relaxed text-ink-soft">
              Harbour walls, resting boats and the flat grey shine of Atlantic water — coastal art prints
              drawn on location, and how to choose, frame and hang them so they calm a room instead of
              decorating it.
            </p>
          </div>
        </header>

        <figure className="mx-auto max-w-[1400px] px-6 pt-12 md:px-12">
          <ResponsiveImage
            src={HERO}
            alt="Coastal wall art print of a blue fishing boat pulled onto the shore under soft Atlantic light, ink and watercolour wash"
            width={1181}
            height={1191}
            fetchPriority="high"
            sizes="(min-width: 1024px) 1100px, 100vw"
            className="mx-auto max-h-[70vh] w-auto"
            onError={handleImageError}
          />
          <figcaption className="mt-4 text-center text-[0.7rem] uppercase tracking-[0.2em] text-ink-soft">
            The Boat That Dreams of Sea · ink and wash on paper
          </figcaption>
        </figure>

        <article className="mx-auto max-w-3xl px-6 py-16 md:px-12 md:py-24">
          <div className="space-y-6 text-base leading-relaxed text-ink-soft">
            <p>
              Atlantic light is not the light of holiday posters. It arrives through moving cloud, softens
              every edge and pulls colour back by half a step. Coastal artwork made under that light behaves
              differently on a wall: less spectacle, more weather. It is the reason these prints sit
              comfortably in a bedroom or a bathroom, where a bright, high-contrast seascape would be
              exhausting after a week.
            </p>
          </div>

          <section className="mt-14">
            <h2 className="font-display text-2xl md:text-3xl">Structure first, atmosphere second</h2>
            <div className="mt-5 space-y-5 text-base leading-relaxed text-ink-soft">
              <p>
                A hull is a built form. It has a spine, a rhythm of ribs and a curve that has to resolve at
                both ends, and it is drawn here with the same seriousness an architect gives a roof. A harbour
                wall becomes geometry rather than decoration; a slipway becomes a ramp with a measured fall.
                That underlying structure is what keeps the wash from turning sentimental.
              </p>
              <p>
                For a buyer it also has a practical consequence: these prints hold their composition at a
                distance. From across a room you read the shape of the boat and the line of the wall, and only
                on approach do the granulating washes and pencil marks come forward.
              </p>
            </div>
          </section>

          <section className="mt-14">
            <h2 className="font-display text-2xl md:text-3xl">Where coastal prints belong in a house</h2>
            <div className="mt-5 space-y-5 text-base leading-relaxed text-ink-soft">
              <p>
                Bedrooms and bathrooms first — rooms where the palette is already soft and the artwork can do
                the last ten per cent. Coastal work also carries a hallway well when hung as a run of two or
                three sheets at a consistent centre height, turning the corridor into an approach rather than
                a passage.
              </p>
              <p>
                In a living room, treat one larger harbour study as the anchor and let the rest of the wall
                stay empty. A single 70–100 cm print above a sideboard says more than four small frames
                arranged in a block.
              </p>
            </div>
          </section>

          <section className="mt-14">
            <h2 className="font-display text-2xl md:text-3xl">Palette, framing and pairing</h2>
            <div className="mt-5 space-y-5 text-base leading-relaxed text-ink-soft">
              <p>
                These works live in a narrow range of indigo, Payne's grey, warm stone and paper white, which
                is precisely why they pair so easily with oak, linen, plaster and neutral walls. Frame in pale
                oak or ash with an off-white mount of 5–7 cm; keep the moulding narrow so nothing competes
                with the drawn line.
              </p>
              <p>
                Pair a boat study with a volcanic Atlantic landscape from the{" "}
                <Link
                  to="/collections/$slug"
                  params={{ slug: "fuerteventura" }}
                  className="underline hover:text-ink"
                >
                  Fuerteventura collection
                </Link>{" "}
                and you have an argument about the same ocean seen from two sides — water and the rock it
                works against.
              </p>
            </div>
          </section>

          <section className="mt-14">
            <h2 className="font-display text-2xl md:text-3xl">Paper, ink and longevity</h2>
            <div className="mt-5 space-y-5 text-base leading-relaxed text-ink-soft">
              <p>
                Every coastal print is produced on heavyweight matte fine art stock with archival pigment
                inks. Matte is essential for wash drawings: gloss throws glare across the soft gradients that
                give the water its depth. Prints are made to order at the facility nearest the delivery
                address, so nothing sits in a warehouse fading.
              </p>
            </div>
          </section>

          <section className="mt-16" aria-labelledby="picks">
            <h2 id="picks" className="font-display text-2xl md:text-3xl">
              Coastal prints to start with
            </h2>
            <ul className="mt-8 grid gap-10 sm:grid-cols-2">
              {coastal.works.map((w) => {
                const art = artworkByImage(w.image);
                return (
                  <li key={w.sku}>
                    <ResponsiveImage
                      src={w.image}
                      alt={artworkAltText(w, coastal.name)}
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
            <h2 className="font-display text-2xl md:text-3xl">Browse the coastal prints</h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              See the full{" "}
              <Link to="/collections/$slug" params={{ slug: "coastal" }} className="underline hover:text-ink">
                Coastal collection
              </Link>
              , or the{" "}
              <Link to="/artwork" className="underline hover:text-ink">
                complete artwork archive
              </Link>
              . Every drawing is available as a made-to-order print through the {SITE_NAME} shop, with sizes,
              paper options and worldwide delivery shown at checkout.
            </p>
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noopener"
              className="mt-8 inline-block border border-ink px-8 py-4 text-[0.7rem] uppercase tracking-[0.25em] transition-colors hover:bg-ink hover:text-paper"
            >
              Shop coastal prints
            </a>
          </section>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
