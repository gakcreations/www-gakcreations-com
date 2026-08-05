import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { ResponsiveImage, handleImageError } from "@/components/ResponsiveImage";
import { getCollection } from "@/data/collections";
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

const PATH = "/architectural-art-prints";
const HERO = "/images/Abbaye Aux Dames Saintes France.jpg";
const PUBLISHED = "2026-08-05";

const TITLE = "Architectural Art Prints for the Home — A Buyer's Guide | GAK Creations";
const DESCRIPTION =
  "How to choose architectural art prints for your home: sizing, framing, light, pairing and paper. An architect's practical buying guide, with hand-drawn prints shipped worldwide.";

const KEYWORDS = [
  "architectural art prints",
  "architecture wall art",
  "art prints for the home",
  "architectural drawings for wall",
  "fine art prints for living room",
  "travel art prints",
  "how to choose art prints",
];

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: "What size architectural art print should I buy?",
    a: "Measure the wall, then aim for artwork that fills roughly two thirds of the width of the furniture below it. Above a standard three-seat sofa that usually means one print of about 70–100 cm wide, or a pair of 40–50 cm prints hung with a hand's width between them. Architectural drawings carry fine construction lines, so err larger — detail that reads beautifully at 70 cm can disappear at 30 cm.",
  },
  {
    q: "How high should art be hung?",
    a: "Centre the image at about 145–150 cm from the floor, which puts the middle of the picture at average eye level. Over a sofa or sideboard, drop that so there is roughly 20–25 cm of clear wall between the top of the furniture and the bottom of the frame.",
  },
  {
    q: "What frame suits an architectural drawing?",
    a: "A narrow frame in natural oak, black, or white, with a generous off-white mount of 5–7 cm. The mount is doing the real work: it gives the drawing air and stops the wall crowding the line work. Avoid ornate mouldings — they compete with the geometry in the drawing.",
  },
  {
    q: "Will the print fade in a sunny room?",
    a: "The prints are made with pigment inks on museum-grade matte paper, which is far more stable than dye-based printing. Even so, no work on paper enjoys hours of direct midday sun. Hang across from a window rather than in the beam, and use glazing with UV protection in very bright rooms.",
  },
  {
    q: "Do you ship worldwide, and how long does it take?",
    a: "Yes. Every print is made to order and dispatched from the production partner nearest you, so most orders are produced in two to five business days and delivered within roughly one to two weeks. Full details are on the shipping policy page.",
  },
  {
    q: "What if the print arrives damaged or is not what I expected?",
    a: "Damaged or misprinted items are replaced or refunded — send a photo within 30 days of delivery and it is dealt with directly. The refund and returns policy sets out the process in full.",
  },
];

export const Route = createFileRoute("/architectural-art-prints")({
  component: BuyersGuidePage,
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
        { name: "Architectural Art Prints for the Home", path: PATH },
      ]),
      {
        "@type": "Article",
        "@id": `${abs(PATH)}#article`,
        headline: "Architectural Art Prints for the Home: An Architect's Buying Guide",
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
        name: "Architectural art prints for the home",
        itemListElement: getCollection("architecture")!.works.map((w, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: productNode(w, {
            collectionName: "Architecture",
            keywords: KEYWORDS,
            pageUrl: abs(PATH),
            offerUrl: SHOP_URL,
          }),
        })),
      },
      imageObjectNode(HERO, "Abbaye aux Dames, Saintes", "Architectural art print hung as wall art in a home interior"),
    ]),
  }),
});

function BuyersGuidePage() {
  const architecture = getCollection("architecture")!;

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
            <li>Architectural Art Prints</li>
          </ol>
        </nav>

        <header className="border-b border-ink/15">
          <div className="mx-auto max-w-3xl px-6 py-14 md:px-12 md:py-20">
            <p className="eyebrow">Buying guide · {ARTIST_NAME}</p>
            <h1 className="mt-6 font-display text-4xl leading-[1.02] md:text-6xl">
              Architectural Art Prints for the Home
            </h1>
            <div className="rule-line mt-8 w-16" />
            <p className="mt-8 text-lg leading-relaxed text-ink-soft">
              Choosing architecture wall art is less about taste than about fit — the size of the wall, the way
              the light falls, the height of the sofa. This is how an architect goes about it, and how to apply
              the same reasoning to the drawings in this archive.
            </p>
          </div>
        </header>

        <figure className="mx-auto max-w-[1400px] px-6 pt-12 md:px-12">
          <ResponsiveImage
            src={HERO}
            alt="Architectural art print of Abbaye aux Dames, Saintes, in ink and watercolour wash, suitable as framed wall art for a home"
            width={1181}
            height={1191}
            fetchPriority="high"
            sizes="(min-width: 1024px) 1100px, 100vw"
            className="mx-auto max-h-[70vh] w-auto"
            onError={handleImageError}
          />
          <figcaption className="mt-4 text-center text-[0.7rem] uppercase tracking-[0.2em] text-ink-soft">
            Abbaye aux Dames, Saintes · ink and wash on paper
          </figcaption>
        </figure>

        <article className="mx-auto max-w-3xl px-6 py-16 md:px-12 md:py-24">
          <div className="space-y-6 text-base leading-relaxed text-ink-soft">
            <p>
              An architectural drawing behaves differently on a wall than a photograph or an abstract does. It is
              mostly white paper. It has one dense area of line work and a great deal of quiet around it, and that
              quiet is the reason it settles a room rather than shouting at it. Hung well, a single building study
              can hold a whole wall; hung badly — too small, too high, too tightly framed — the same sheet
              disappears.
            </p>
          </div>

          <section className="mt-14">
            <h2 className="font-display text-2xl md:text-3xl">Start with the wall, not the picture</h2>
            <div className="mt-5 space-y-5 text-base leading-relaxed text-ink-soft">
              <p>
                Before choosing an image, measure the space it will live in and decide what the artwork is
                answering to: a sofa, a bed, a stairwell, a long hallway. Art hung above furniture should span
                roughly two thirds of the furniture's width. On an empty wall, the artwork should occupy about
                sixty per cent of the visual field between the skirting and the ceiling line.
              </p>
              <p>
                Those two rules alone settle most decisions. A three-seat sofa wants one print near 70–100 cm
                wide, or a pair of narrower prints read as a single block. A narrow hallway wants a run of small,
                evenly spaced sheets at a consistent centre height, which turns the corridor into a gallery rather
                than a corridor with pictures in it.
              </p>
            </div>
          </section>

          <section className="mt-14">
            <h2 className="font-display text-2xl md:text-3xl">Match the drawing to the light</h2>
            <div className="mt-5 space-y-5 text-base leading-relaxed text-ink-soft">
              <p>
                High-contrast architectural studies — dense ink, strong shadow lines, a Romanesque façade with deep
                reveals — hold up in raking, directional daylight. Put them on the wall the sun crosses, where the
                shifting light plays against the drawn shadow.
              </p>
              <p>
                Soft-wash pieces are the opposite. Granulating watercolour, pale stone and open sky need even,
                indirect light to keep their subtlety; strong sun bleaches them flat. North-facing rooms, landings
                and studies suit them best. If a room has both conditions, use the contrast deliberately: the
                stronger drawing on the lit wall, the quieter one opposite.
              </p>
            </div>
          </section>

          <section className="mt-14">
            <h2 className="font-display text-2xl md:text-3xl">Frame it the way a drawing wants to be framed</h2>
            <div className="mt-5 space-y-5 text-base leading-relaxed text-ink-soft">
              <p>
                A narrow profile in natural oak, matte black or off-white, and a mount of 5–7 cm. The mount is not
                decoration; it is the pause between the drawing and the room. Architectural work is made of thin
                lines, and thin lines need space or they read as noise from three metres away.
              </p>
              <p>
                Use non-reflective or UV glazing in bright rooms. Keep the mount off-white rather than bright
                white so it agrees with the warm tone of the fine art paper, and let a slim margin of the printed
                sheet show if you want the print to read as a work on paper rather than a poster.
              </p>
            </div>
          </section>

          <section className="mt-14">
            <h2 className="font-display text-2xl md:text-3xl">Pairs, sets and the argument between them</h2>
            <div className="mt-5 space-y-5 text-base leading-relaxed text-ink-soft">
              <p>
                Two prints hung together should have a reason to be together. A Romanesque abbey beside the
                titanium curve of the Guggenheim in Bilbao makes an argument about nine centuries of building, and
                that argument is what a guest actually reads. A church on the Castilian plain beside a chapel above
                the Atlantic makes a quieter one about latitude and light.
              </p>
              <p>
                For a set of three or more, keep one variable constant — same medium, same palette, or same
                subject family — and let the other vary. Hang them with equal gaps and a shared centre line;
                irregular spacing reads as an accident, not a decision.
              </p>
            </div>
          </section>

          <section className="mt-14">
            <h2 className="font-display text-2xl md:text-3xl">Paper, ink and what "museum-grade" means</h2>
            <div className="mt-5 space-y-5 text-base leading-relaxed text-ink-soft">
              <p>
                Every print in this archive is produced on heavyweight matte fine art stock with pigment inks.
                Matte matters for drawings: gloss throws glare across exactly the fine graphite and pen work you
                bought the piece for. Pigment matters for longevity — it resists fading far better than dye ink,
                which is why it is the standard for gallery editions.
              </p>
              <p>
                Prints are made to order rather than warehoused, produced at the facility closest to the delivery
                address, and shipped worldwide. Nothing sits in stock fading in a box.
              </p>
            </div>
          </section>

          <section className="mt-14">
            <h2 className="font-display text-2xl md:text-3xl">Where to begin in the archive</h2>
            <div className="mt-5 space-y-5 text-base leading-relaxed text-ink-soft">
              <p>
                If you want structure and line, start with the{" "}
                <Link to="/collections/$slug" params={{ slug: "architecture" }} className="underline hover:text-ink">
                  Architecture collection
                </Link>
                . If you want colour and horizon, the{" "}
                <Link to="/collections/$slug" params={{ slug: "coastal" }} className="underline hover:text-ink">
                  Coastal collection
                </Link>{" "}
                and the{" "}
                <Link to="/collections/$slug" params={{ slug: "fuerteventura" }} className="underline hover:text-ink">
                  Fuerteventura collection
                </Link>{" "}
                carry Atlantic light. For the reasoning behind the marks themselves, read{" "}
                <Link
                  to="/journal/$slug"
                  params={{ slug: "when-architecture-becomes-art" }}
                  className="underline hover:text-ink"
                >
                  When Architecture Becomes Art
                </Link>
                .
              </p>
            </div>
          </section>

          <section className="mt-16" aria-labelledby="picks">
            <h2 id="picks" className="font-display text-2xl md:text-3xl">
              Three prints to start a wall
            </h2>
            <ul className="mt-8 grid gap-10 sm:grid-cols-3">
              {architecture.works.map((w) => (
                <li key={w.sku}>
                  <ResponsiveImage
                    src={w.image}
                    alt={artworkAltText(w, architecture.name)}
                    width={600}
                    height={750}
                    sizes="(min-width: 640px) 30vw, 100vw"
                    className="w-full"
                    onError={handleImageError}
                  />
                  <h3 className="mt-4 font-display text-lg">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{w.description}</p>
                </li>
              ))}
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
            <h2 className="font-display text-2xl md:text-3xl">Browse the prints</h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              Every drawing in the archive is available as a made-to-order print through the {SITE_NAME} shop,
              with sizes, paper options and worldwide delivery shown at checkout.
            </p>
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noopener"
              className="mt-8 inline-block border border-ink px-8 py-4 text-[0.7rem] uppercase tracking-[0.25em] transition-colors hover:bg-ink hover:text-paper"
            >
              Shop the prints
            </a>
          </section>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
