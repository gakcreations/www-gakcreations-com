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

const PATH = "/travel-collage-prints";
const HERO = "/images/Guggenheim Museum Bilba, Spain.jpg";
const PUBLISHED = "2026-09-03";

const TITLE = "Travel Collage Prints — Mixed-Media Travel Wall Art | GAK Creations";
const DESCRIPTION =
  "Travel collage prints by Gerald Allen Knowles: layered mixed-media wall art built from on-location sketches, torn paper and colour gathered across Europe and the Atlantic islands.";

const KEYWORDS = [
  "travel collage print",
  "travel art prints",
  "mixed media travel art",
  "travel inspired wall art",
  "Europe travel wall art",
  "sketchbook art print",
  "contemporary collage wall art",
];

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: "What is a travel collage print?",
    a: "It is a print of a mixed-media original: an on-location drawing developed later in the studio with torn paper, printed fragments, metallic leaf and painted passages. The finished image holds more than one moment of a journey at once, which is why it reads differently from a straightforward landscape.",
  },
  {
    q: "Do the collage textures survive as a print?",
    a: "Yes. The originals are captured at high resolution and printed on museum-grade matte fine art paper with pigment inks, which holds torn edges, paper grain and layered tone. Matte stock is essential — gloss flattens the very texture the work is made of.",
  },
  {
    q: "Where does travel wall art hang best?",
    a: "Hallways, studies and living rooms — places where people pause. Collage rewards close looking, so hang it where someone can stand within a metre of it, and keep the centre of the image at about 145–150 cm from the floor.",
  },
  {
    q: "How should a collage print be framed?",
    a: "A narrow oak, black or white profile with a 5–7 cm off-white mount. Because collage already contains many edges, keep the frame plain; ornate mouldings add a competing rhythm. Box frames also work well when you want the sheet to sit slightly proud.",
  },
  {
    q: "Can I buy a set of travel prints from different places?",
    a: "Yes — and a set works best with one constant. Keep the medium or the palette the same and let the destinations vary, hung with equal gaps on a shared centre line. Every print is made to order, so sizes can be matched across a set.",
  },
];

export const Route = createFileRoute("/travel-collage-prints")({
  component: TravelLandingPage,
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
        { name: "Travel Collage Prints", path: PATH },
      ]),
      {
        "@type": "Article",
        "@id": `${abs(PATH)}#article`,
        headline: "Travel Collage Prints: From Sketchbook to Framed Wall Art",
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
        name: "Travel collage prints",
        itemListElement: getCollection("travel")!.works.map((w, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: productNode(w, {
            collectionName: "Travel",
            keywords: KEYWORDS,
            pageUrl: abs(PATH),
            offerUrl: SHOP_URL,
          }),
        })),
      },
      imageObjectNode(
        HERO,
        "Guggenheim Museum Bilbao",
        "Mixed-media travel collage print of the Guggenheim Museum in Bilbao",
      ),
    ]),
  }),
});

function TravelLandingPage() {
  const travel = getCollection("travel")!;

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
            <li>Travel Collage Prints</li>
          </ol>
        </nav>

        <header className="border-b border-ink/15">
          <div className="mx-auto max-w-3xl px-6 py-14 md:px-12 md:py-20">
            <p className="eyebrow">Buying guide · {ARTIST_NAME}</p>
            <h1 className="mt-6 font-display text-4xl leading-[1.02] md:text-6xl">
              Travel Collage Prints
            </h1>
            <div className="rule-line mt-8 w-16" />
            <p className="mt-8 text-lg leading-relaxed text-ink-soft">
              Layered mixed-media wall art built from drawings made on the day — torn paper, printed
              fragments and colour gathered from the places themselves. What travel collage is, and how to
              choose and hang it.
            </p>
          </div>
        </header>

        <figure className="mx-auto max-w-[1400px] px-6 pt-12 md:px-12">
          <ResponsiveImage
            src={HERO}
            alt="Travel collage print of the Guggenheim Museum Bilbao, titanium curves rendered in torn metallic paper and ink"
            width={1181}
            height={1191}
            fetchPriority="high"
            sizes="(min-width: 1024px) 1100px, 100vw"
            className="mx-auto max-h-[70vh] w-auto"
            onError={handleImageError}
          />
          <figcaption className="mt-4 text-center text-[0.7rem] uppercase tracking-[0.2em] text-ink-soft">
            Guggenheim Museum Bilbao · mixed-media collage
          </figcaption>
        </figure>

        <article className="mx-auto max-w-3xl px-6 py-16 md:px-12 md:py-24">
          <div className="space-y-6 text-base leading-relaxed text-ink-soft">
            <p>
              Travel-inspired art is most convincing when it still carries the memory of movement. Each of
              these pieces begins as a sketch made on location — the building that dominated the square, the
              harbour shape that held the shoreline together, the chapel that suddenly gave scale to an empty
              plain. Back in the studio that page is expanded rather than corrected, and collage is what makes
              the expansion possible.
            </p>
          </div>

          <section className="mt-14">
            <h2 className="font-display text-2xl md:text-3xl">Why collage rather than paint alone</h2>
            <div className="mt-5 space-y-5 text-base leading-relaxed text-ink-soft">
              <p>
                A torn ochre paper fragment can describe a sun-bleached wall more truthfully than a mixed
                colour. A metallic sheet explains Bilbao better than any blended grey, because the building
                itself is a surface that changes with the weather. Collage lets a single image hold
                observation, memory and material trace at once, while the drawing underneath keeps it
                disciplined.
              </p>
              <p>
                That layering is what gives travel wall art its emotional range. It is not a postcard of a
                place; it is the record of arriving somewhere, carrying fragments away, and returning with a
                page that still remembers the journey.
              </p>
            </div>
          </section>

          <section className="mt-14">
            <h2 className="font-display text-2xl md:text-3xl">Choosing a piece that means something</h2>
            <div className="mt-5 space-y-5 text-base leading-relaxed text-ink-soft">
              <p>
                Buyers usually come to travel art for one of three reasons: a journey already taken, a place
                they intend to reach, or a building whose design or history resonates. All three are good
                reasons, and they lead to different choices. A remembered place wants the piece with the most
                atmosphere; a landmark wants the piece with the strongest structure.
              </p>
              <p>
                If the print is a gift, favour architecture over landscape — a named building is legible and
                specific in a way an unnamed coastline is not.
              </p>
            </div>
          </section>

          <section className="mt-14">
            <h2 className="font-display text-2xl md:text-3xl">Hanging, framing and building a set</h2>
            <div className="mt-5 space-y-5 text-base leading-relaxed text-ink-soft">
              <p>
                Hang collage where people slow down: a hallway, a study, the wall beside a reading chair.
                Centre the image around 145–150 cm from the floor. Frame narrow — oak, black or white — with a
                5–7 cm off-white mount, or use a box frame if you want the sheet to sit slightly proud of the
                glazing.
              </p>
              <p>
                For a set, keep one variable fixed. Three collages from three countries in the same size and
                palette read as one work; three different mediums at three different sizes read as clutter.
                Equal gaps, shared centre line, and let the destinations do the varying.
              </p>
            </div>
          </section>

          <section className="mt-14">
            <h2 className="font-display text-2xl md:text-3xl">Paper, ink and reproduction</h2>
            <div className="mt-5 space-y-5 text-base leading-relaxed text-ink-soft">
              <p>
                Collage originals are printed on heavyweight matte fine art stock with archival pigment inks,
                which is the only honest way to reproduce layered paper: matte holds the torn edge and the
                grain, gloss erases them. Prints are made to order at the production facility nearest the
                delivery address and shipped worldwide.
              </p>
            </div>
          </section>

          <section className="mt-16" aria-labelledby="picks">
            <h2 id="picks" className="font-display text-2xl md:text-3xl">
              Travel collages to start with
            </h2>
            <ul className="mt-8 grid gap-10 sm:grid-cols-3">
              {travel.works.map((w) => {
                const art = artworkByImage(w.image);
                return (
                  <li key={w.sku}>
                    <ResponsiveImage
                      src={w.image}
                      alt={artworkAltText(w, travel.name)}
                      width={600}
                      height={750}
                      loading="lazy"
                      sizes="(min-width: 640px) 30vw, 100vw"
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
            <h2 className="font-display text-2xl md:text-3xl">Browse the travel work</h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              See the full{" "}
              <Link to="/collections/$slug" params={{ slug: "travel" }} className="underline hover:text-ink">
                Travel collection
              </Link>
              , or the{" "}
              <Link to="/artwork" className="underline hover:text-ink">
                complete artwork archive
              </Link>
              . Every piece is available as a made-to-order print through the {SITE_NAME} shop, with sizes,
              paper options and worldwide delivery shown at checkout.
            </p>
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noopener"
              className="mt-8 inline-block border border-ink px-8 py-4 text-[0.7rem] uppercase tracking-[0.25em] transition-colors hover:bg-ink hover:text-paper"
            >
              Shop travel prints
            </a>
          </section>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
