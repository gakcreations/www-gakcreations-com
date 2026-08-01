import { createFileRoute } from "@tanstack/react-router";
import studio from "@/assets/studio.jpg";
import heroAsset from "@/assets/abbaye-aux-dames-saintes.jpg.asset.json";
import casaBatlloAsset from "@/assets/casa-batllo-gaudi-barcelona.jpg.asset.json";
import print2Asset from "@/assets/church-of-san-juan-bautista-de-banos-spain.jpg.asset.json";
import print3Asset from "@/assets/volcanic-landscape-fuerteventura-canary-islands.jpg.asset.json";
import print4Asset from "@/assets/the-blue-boat-that-dreams-of-sea.jpg.asset.json";
import logoAsset from "@/assets/gak-logo.png.asset.json";

const heroArtworkUrl = heroAsset.url;
const casaBatlloUrl = casaBatlloAsset.url;
const print2Url = print2Asset.url;
const print3Url = print3Asset.url;
const print4Url = print4Asset.url;
const logoUrl = logoAsset.url;

const SITE_URL = "https://www.gakcreations.com";
const SHOP_URL = "https://gak-creations.printify.me";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "GAK Creations — Architectural Art & Travel Collages" },
      {
        name: "description",
        content:
          "The archive of Gerald Allen Knowles — architectural drawings and travel collages from Europe and the Atlantic islands, available as fine art prints.",
      },
      { property: "og:title", content: "GAK Creations — Architectural Art & Travel Collages" },
      {
        property: "og:description",
        content:
          "Architectural drawings and travel collages by Gerald Allen Knowles. Shop the fine art print collection.",
      },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": `${SITE_URL}/#website`,
              url: `${SITE_URL}/`,
              name: "GAK Creations",
              description:
                "Archive of architectural drawings and travel collages by Gerald Allen Knowles, available as fine art prints.",
              publisher: { "@id": `${SITE_URL}/#organization` },
            },
            {
              "@type": "Organization",
              "@id": `${SITE_URL}/#organization`,
              name: "GAK Creations",
              url: `${SITE_URL}/`,
              email: "info@gakcreations.com",
              logo: {
                "@type": "ImageObject",
                url: `${SITE_URL}${logoUrl}`,
              },
              founder: {
                "@type": "Person",
                name: "Gerald Allen Knowles",
                jobTitle: "Architect, Artist, and Traveler",
              },
            },
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-paper text-ink font-body">
      <Header />
      <Hero />
      <Marquee />
      <Editorial />
      <Collection />
      <StudioNote />
      <Shop />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="border-b border-ink/15">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-12">
        <a href="/" className="eyebrow">
          Est. Studio
        </a>
        <a href="/" className="flex items-center gap-3">
          <img src={logoUrl} alt="GAK Creations" className="h-9 w-auto md:h-10" />
          <span className="font-display text-xl tracking-wide md:text-2xl">
            GAK <span className="italic font-light">Creations</span>
          </span>
        </a>
        <a
          href={SHOP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="eyebrow hidden md:inline-block hover:text-ink"
        >
          Shop →
        </a>
        <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="eyebrow md:hidden">
          Shop
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="border-b border-ink/15">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 py-14 md:grid-cols-12 md:gap-8 md:px-12 md:py-24">
        <div className="md:col-span-5 md:pt-6">
          <p className="eyebrow">The Archive · Gerald Allen Knowles</p>
          <h1 className="mt-8 font-display text-[3.5rem] leading-[0.95] tracking-tight md:text-[6rem]">
            The quiet
            <br />
            <em className="font-light">geometry</em>
            <br />
            <span className="italic font-light">of</span> places.
          </h1>
          <p className="mt-8 max-w-md text-base leading-relaxed text-ink-soft md:text-lg">
            Architectural drawings and travel collages from a lifetime of wandering — Europe, the
            Atlantic islands, and the small structures in between. Now available as fine art prints.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-ink px-7 py-4 text-sm font-medium uppercase tracking-[0.2em] text-paper transition hover:bg-ink-soft"
            >
              Shop the Collection
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#collection"
              className="text-sm uppercase tracking-[0.2em] text-ink underline underline-offset-8 decoration-ink/40 hover:decoration-ink"
            >
              View works
            </a>
          </div>
        </div>

        <div className="relative md:col-span-7">
          <div className="absolute -left-4 top-0 hidden h-full w-px bg-ink/20 md:block" />
          <figure className="relative">
            <img
              src={heroArtworkUrl}
              alt="Architectural study of Abbaye Aux Dames, Saintes, France, by Gerald Allen Knowles"
              width={1400}
              height={1600}
              fetchPriority="high"
              className="w-full object-cover"
            />
            <figcaption className="mt-4 flex items-start justify-between gap-6 text-xs uppercase tracking-[0.2em] text-ink-soft">
              <span>Fig. 001 — Abbaye Aux Dames, Saintes · ink and wash on paper</span>
              <span>Sketchbook</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Architectural Drawings",
    "Travel Collages",
    "Sketchbook Editions",
    "Europe & the Atlantic",
    "Fine Art Prints",
  ];
  return (
    <div className="overflow-hidden border-b border-ink/15 bg-paper-warm">
      <div className="flex whitespace-nowrap py-5 [animation:marquee_40s_linear_infinite]">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="mx-10 font-display text-2xl italic text-ink md:text-3xl">
            {t} <span className="mx-8 text-ink/40">✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0);} to { transform: translateX(-33.333%);} }`}</style>
    </div>
  );
}

function Editorial() {
  return (
    <section className="border-b border-ink/15">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 py-20 md:grid-cols-12 md:px-12 md:py-28">
        <div className="md:col-span-4">
          <p className="eyebrow">About the Artist</p>
          <div className="rule-line mt-6 w-16" />
          <p className="mt-6 text-sm uppercase tracking-[0.2em] text-ink-soft">
            Gerald Allen Knowles
            <br />
            Architect · Artist · Traveler
          </p>
        </div>
        <div className="md:col-span-8">
          <h2 className="font-display text-4xl leading-[1.05] md:text-6xl">
            The discipline of an architect. The eye of a <em className="font-light">traveler.</em>
          </h2>
          <div className="mt-10 grid gap-8 text-base leading-relaxed text-ink-soft md:grid-cols-2 md:text-[1.05rem]">
            <p>
              Gerald Allen Knowles is an architect, artist, and traveler whose work traces the quiet
              geometry of places across Europe and the islands of the Atlantic. His drawings carry
              the discipline of architectural observation — clean lines, measured shadows, and a
              sensitivity to structure.
            </p>
            <p>
              From staircases in Saintes to volcanic landscapes in the Canary Islands, his
              sketchbooks read like field journals: immediate, intimate, shaped by decades of
              wandering with pen and paper in hand. His collages expand these impressions into
              compositions that feel both analytical and poetic.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Collection() {
  const works = [
    {
      img: casaBatlloUrl,
      no: "N° 02",
      title: "Guggenheim Museum Bilbao, Spain",
      medium: "Collage · Bilbao",
    },
    {
      img: print2Url,
      no: "N° 03",
      title: "Church of San Juan Bautista de Baños Spain",
      medium: "Collage · Spain",
    },
    {
      img: print3Url,
      no: "N° 04",
      title: "Volcanic Landscape of Fuerteventura",
      medium: "Ink & wash · Canary Islands",
    },
    {
      img: print4Url,
      no: "N° 05",
      title: "The Blue Boat That Dreams of Sea",
      medium: "Ink & wash · Mediterranean",
    },
  ];

  return (
    <section id="collection" className="border-b border-ink/15">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Selected Works</p>
            <h2 className="mt-6 font-display text-4xl md:text-6xl">
              The <em className="font-light">Collection</em>
            </h2>
          </div>
          <a
            href={SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="eyebrow hover:text-ink"
          >
            Browse all in shop →
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8">
          {works.map((w) => (
            <a
              key={w.no}
              href={SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="overflow-hidden bg-paper-warm">
                <img
                  src={w.img}
                  alt={w.title}
                  width={900}
                  height={1100}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.02]"
                />
              </div>
              <div className="mt-5 flex items-baseline justify-between border-b border-ink/20 pb-4">
                <div>
                  <p className="eyebrow">{w.no}</p>
                  <h3 className="mt-2 font-display text-2xl md:text-3xl">{w.title}</h3>
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-ink-soft">{w.medium}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function StudioNote() {
  return (
    <section className="border-b border-ink/15 bg-paper-warm">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 py-20 md:grid-cols-12 md:px-12 md:py-28">
        <figure className="md:col-span-6">
          <img
            src={studio}
            alt="Inside the GAK Creations studio"
            width={1200}
            height={900}
            loading="lazy"
            className="w-full object-cover"
          />
          <figcaption className="mt-4 text-xs uppercase tracking-[0.2em] text-ink-soft">
            The studio — morning light
          </figcaption>
        </figure>
        <div className="md:col-span-6 md:pl-8">
          <p className="eyebrow">In His Own Words</p>
          <blockquote className="mt-8 font-display text-3xl leading-tight md:text-5xl">
            <span className="text-ink/30">“</span>
            Every place has a geometry. I've spent a lifetime walking slowly enough to see it — then
            bringing it home on paper.
            <span className="text-ink/30">”</span>
          </blockquote>
          <p className="mt-8 text-sm uppercase tracking-[0.25em] text-ink-soft">
            — Gerald Allen Knowles
          </p>
          <div className="rule-line mt-10 w-24" />
        </div>
      </div>
    </section>
  );
}

function Shop() {
  return (
    <section className="border-b border-ink/15">
      <div className="mx-auto max-w-[1400px] px-6 py-24 text-center md:px-12 md:py-32">
        <p className="eyebrow">The Storefront</p>
        <h2 className="mx-auto mt-8 max-w-4xl font-display text-5xl leading-[1] md:text-8xl">
          Bring a <em className="font-light">place</em>
          <br />
          <span className="italic font-light">home with you.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-ink-soft">
          The full archive of drawings and collages is published as fine art prints on our
          print-on-demand storefront. Made to order. Shipped worldwide.
        </p>
        <a
          href={SHOP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-flex items-center gap-4 bg-ink px-10 py-5 text-sm font-medium uppercase tracking-[0.25em] text-paper transition hover:bg-ink-soft"
        >
          Enter the Shop
          <span>→</span>
        </a>
        <p className="mt-6 text-xs uppercase tracking-[0.2em] text-ink-soft">
          gak-creations.printify.me
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 py-16 md:grid-cols-12 md:px-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-4">
            <img src={logoUrl} alt="GAK Creations" className="h-12 w-auto invert" />
            <p className="font-display text-4xl md:text-5xl">
              GAK <em className="font-light">Creations</em>
            </p>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-paper/60">
            The ongoing archive of Gerald Allen Knowles — architecture, art, and lived experience,
            printed on paper.
          </p>
          <p className="mt-6 text-sm text-paper/70">
            <a href="mailto:info@gakcreations.com" className="hover:text-paper">
              info@gakcreations.com
            </a>
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="text-[0.65rem] uppercase tracking-[0.28em] text-paper/50">Elsewhere</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a
                href={SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-paper/70"
              >
                Printify Storefront
              </a>
            </li>
            <li>
              <a href="https://www.gakcreations.com" className="hover:text-paper/70">
                gakcreations.com
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="text-[0.65rem] uppercase tracking-[0.28em] text-paper/50">
            Customer Care & Legal
          </p>
          <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
            <li>
              <a href="/shipping-policy" className="hover:text-paper/70">
                Shipping Policy
              </a>
            </li>
            <li>
              <a href="/refund-policy" className="hover:text-paper/70">
                Refund & Returns
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-paper/70">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:text-paper/70">
                Privacy Policy
              </a>
            </li>
          </ul>
          <p className="mt-6 text-xs leading-relaxed text-paper/50">
            Made to order. Fulfilled worldwide through Printify.
          </p>
        </div>
      </div>
      <div className="border-t border-paper/15">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 px-6 py-6 text-[0.7rem] uppercase tracking-[0.25em] text-paper/50 md:px-12">
          <span>© {new Date().getFullYear()} GAK Creations</span>
          <span>Made with care — in the studio</span>
        </div>
      </div>
    </footer>
  );
}
