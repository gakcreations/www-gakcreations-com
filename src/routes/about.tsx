import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { ResponsiveImage, handleImageError } from "@/components/ResponsiveImage";
import {
  seoMeta,
  canonical,
  ldJson,
  websiteNode,
  organizationNode,
  artistNode,
  webPageNode,
  breadcrumbNode,
  imageObjectNode,
  abs,
  SHOP_URL,
  SITE_NAME,
  ARTIST_NAME,
  CONTACT_EMAIL,
} from "@/lib/seo";

const PATH = "/about";
const HERO = "/images/Abbaye Aux Dames Saintes France.jpg";

const TITLE = "About Gerald Allen Knowles — Architect, Artist & Traveller | GAK Creations";
const DESCRIPTION =
  "Meet Gerald Allen Knowles, the architect and artist behind GAK Creations: how a career in architecture became an archive of drawings, collages and fine art prints from Europe and the Atlantic islands.";

const KEYWORDS = [
  "Gerald Allen Knowles",
  "GAK Creations artist",
  "architect artist",
  "architectural illustrator",
  "urban sketcher Europe",
  "about the artist",
];

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: "Who is the artist behind GAK Creations?",
    a: "Gerald Allen Knowles — an architect, artist and traveller whose drawings trace the quiet geometry of places across Europe and the islands of the Atlantic. Every work in the archive is drawn by hand from observation.",
  },
  {
    q: "What media does he work in?",
    a: "Pencil and technical pen for structure, watercolour wash for light and weather, and mixed-media collage for the travel works. Nothing is generated or traced from photographs.",
  },
  {
    q: "Can I commission a drawing of a specific building or place?",
    a: `Commission enquiries are welcome by email at ${CONTACT_EMAIL}. Include the building or location, the room it is destined for, and any timing you need to work to.`,
  },
  {
    q: "Where can the work be bought?",
    a: "Every drawing in the archive is available as a made-to-order museum-quality fine art print through the GAK Creations shop, with worldwide delivery.",
  },
];

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: seoMeta({
      title: TITLE,
      description: DESCRIPTION,
      path: PATH,
      image: HERO,
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
        { name: "About the Artist", path: PATH },
      ]),
      {
        "@type": "AboutPage",
        "@id": `${abs(PATH)}#aboutpage`,
        url: abs(PATH),
        name: TITLE,
        description: DESCRIPTION,
        mainEntity: { "@id": `${abs("/")}#artist` },
        isPartOf: { "@id": `${abs("/")}#website` },
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
      imageObjectNode(
        HERO,
        "Abbaye aux Dames, Saintes",
        "Architectural drawing by Gerald Allen Knowles with visible construction lines",
      ),
    ]),
  }),
});

function AboutPage() {
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
            <li>About the Artist</li>
          </ol>
        </nav>

        <header className="border-b border-ink/15">
          <div className="mx-auto max-w-3xl px-6 py-14 md:px-12 md:py-20">
            <p className="eyebrow">About · {SITE_NAME}</p>
            <h1 className="mt-6 font-display text-4xl leading-[1.02] md:text-6xl">{ARTIST_NAME}</h1>
            <div className="rule-line mt-8 w-16" />
            <p className="mt-8 text-lg leading-relaxed text-ink-soft">
              Architect, artist and traveller. Thirty years of reading buildings for a living, and a
              sketchbook that never quite stayed in the office.
            </p>
          </div>
        </header>

        <figure className="mx-auto max-w-[1400px] px-6 pt-12 md:px-12">
          <ResponsiveImage
            src={HERO}
            alt="Architectural drawing of Abbaye aux Dames in Saintes, France, by Gerald Allen Knowles, pencil construction lines beneath ink and wash"
            width={1181}
            height={1191}
            fetchPriority="high"
            sizes="(min-width: 1024px) 1000px, 100vw"
            className="mx-auto max-h-[70vh] w-auto"
            onError={handleImageError}
          />
          <figcaption className="mt-4 text-center text-[0.7rem] uppercase tracking-[0.2em] text-ink-soft">
            Abbaye aux Dames, Saintes · drawn on location
          </figcaption>
        </figure>

        <article className="mx-auto max-w-3xl px-6 py-16 md:px-12 md:py-24">
          <div className="space-y-6 text-base leading-relaxed text-ink-soft">
            <p>
              An architect spends a career learning to see the order under a surface — the module that
              repeats, the line that carries the load, the proportion everything else answers to. That way of
              looking does not switch off at the end of a project. It follows you into a French market square
              at seven in the morning, and it makes you open a sketchbook.
            </p>
            <p>
              GAK Creations grew out of exactly that habit. Not a portfolio of commissions, but an ongoing
              archive of places drawn from observation: Romanesque abbeys in western France, Gaudí's curves and
              Bilbao's titanium in northern Spain, whitewashed chapels and volcanic ground on Fuerteventura,
              and the boats and harbour walls of the Atlantic coast.
            </p>
          </div>

          <section className="mt-14">
            <h2 className="font-display text-2xl md:text-3xl">From building drawings to artwork</h2>
            <div className="mt-5 space-y-5 text-base leading-relaxed text-ink-soft">
              <p>
                Technical drawing is made so a building can be built. These sheets are made so a place can be
                felt. The discipline is identical — horizon line first, masses measured by eye, geometry before
                detail — but the intention is different, and so is what gets kept. Parked cars, signage and the
                clutter of an ordinary Tuesday are left out; the structure that makes a place recognisable
                stays.
              </p>
              <p>
                The construction lines usually stay too. Architectural training teaches you to hide your
                workings; drawing on location teaches the opposite. Those faint pencil marks running past a
                tower are the record of someone standing there, looking, and working it out.
              </p>
            </div>
          </section>

          <section className="mt-14">
            <h2 className="font-display text-2xl md:text-3xl">Method and materials</h2>
            <div className="mt-5 space-y-5 text-base leading-relaxed text-ink-soft">
              <p>
                Pencil for the frame, a fine technical nib and a brush pen for the structure, watercolour wash
                for weather and light. One sitting, one drawing — if the light moves too far, the sheet is
                finished and the next one can be better. Studio correction tidies a drawing and drains it.
              </p>
              <p>
                The travel works add collage: tickets, maps, paper picked up along the way, layered under the
                line work so the sheet carries the texture of the journey as well as its geometry.
              </p>
            </div>
          </section>

          <section className="mt-14">
            <h2 className="font-display text-2xl md:text-3xl">Where the work comes from</h2>
            <div className="mt-5 space-y-5 text-base leading-relaxed text-ink-soft">
              <p>
                Western France and the Romanesque tradition — heavy stone, compression, repetition. Northern
                Spain, where Gaudí and the Guggenheim solve the same problem of mass and light a century apart.
                The Atlantic islands, where the architecture is small and the ground does the talking. Each has
                its own{" "}
                <Link to="/collections" className="underline hover:text-ink">
                  collection
                </Link>{" "}
                in the archive.
              </p>
            </div>
          </section>

          <section className="mt-14">
            <h2 className="font-display text-2xl md:text-3xl">How the prints are made</h2>
            <div className="mt-5 space-y-5 text-base leading-relaxed text-ink-soft">
              <p>
                Every drawing is offered as an open-edition fine art print on museum-grade matte paper with
                archival pigment inks — matte because gloss throws glare across granulating wash. Prints are
                produced to order at the facility nearest the delivery address and shipped worldwide with
                tracking, so nothing sits in a warehouse fading.
              </p>
            </div>
          </section>

          <section className="mt-16" aria-labelledby="faq">
            <h2 id="faq" className="font-display text-2xl md:text-3xl">
              Frequently asked
            </h2>
            <dl className="mt-8 space-y-8">
              {FAQS.map((f) => (
                <div key={f.q} className="border-t border-ink/15 pt-6">
                  <dt className="font-display text-lg">{f.q}</dt>
                  <dd className="mt-3 text-base leading-relaxed text-ink-soft">{f.a}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="mt-16 border-t border-ink/15 pt-10">
            <h2 className="font-display text-2xl md:text-3xl">See the work</h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              Browse the{" "}
              <Link to="/artwork" className="underline hover:text-ink">
                artwork archive
              </Link>
              , read the{" "}
              <Link to="/journal" className="underline hover:text-ink">
                journal
              </Link>{" "}
              on method and place, or get in touch on the{" "}
              <Link to="/contact" className="underline hover:text-ink">
                contact page
              </Link>
              .
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
