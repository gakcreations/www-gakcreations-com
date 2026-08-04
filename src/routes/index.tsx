import { ResponsiveImage } from "@/components/ResponsiveImage";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, handleImageError } from "@/components/SiteChrome";
import { collections } from "@/data/collections";
import { journal } from "@/data/journal";
import {
  SHOP_URL,
  abs,
  artistNode,
  artworkAltText,
  artworkKeywords,
  breadcrumbNode,
  canonical,
  getImageDimensions,
  imageObjectNode,
  ldJson,
  organizationNode,
  productNode,
  seoMeta,
  webPageNode,
  websiteNode,
} from "@/lib/seo";

const heroArtworkUrl = "/images/Abbaye Aux Dames Saintes France.jpg";
const studioUrl = "/images/studio.jpg";
const HOME_TITLE = "GAK Creations | Architectural Art Prints, Coastal Artwork & Travel Collages";
const HOME_DESCRIPTION =
  "Discover GAK Creations, the studio of Gerald Allen Knowles: architectural art prints, coastal artwork, Fuerteventura landscapes and travel-inspired collages available as museum-quality fine art prints.";

const featuredCollections = collections.filter((collection) =>
  ["architecture", "coastal", "travel", "fuerteventura", "gaudi-and-modern-landmarks", "nature"].includes(
    collection.slug,
  ),
);

const heroImageSize = getImageDimensions(heroArtworkUrl) ?? { width: 1181, height: 1191 };
const studioImageSize = getImageDimensions(studioUrl) ?? { width: 1200, height: 900 };

type FeaturedWork = {
  collection: (typeof collections)[number];
  work: (typeof collections)[number]["works"][number];
  fragmentId: string;
};

const featuredWorks = [
  { collectionSlug: "architecture", sku: "GAK-ARCH-001" },
  { collectionSlug: "gaudi-and-modern-landmarks", sku: "GAK-MOD-001" },
  { collectionSlug: "fuerteventura", sku: "GAK-FUER-001" },
  { collectionSlug: "coastal", sku: "GAK-COAST-001" },
]
  .map(({ collectionSlug, sku }) => {
    const collection = collections.find((entry) => entry.slug === collectionSlug);
    const work = collection?.works.find((entry) => entry.sku === sku);

    if (!collection || !work) return null;

    return {
      collection,
      work,
      fragmentId: work.sku.toLowerCase(),
    };
  })
  .filter((entry): entry is FeaturedWork => Boolean(entry));

const featuredPosts = journal.slice(0, 3);

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: seoMeta({
      title: HOME_TITLE,
      description: HOME_DESCRIPTION,
      path: "/",
      image: {
        path: heroArtworkUrl,
        alt: "Architectural drawing of Abbaye aux Dames in Saintes by Gerald Allen Knowles",
      },
      keywords: [
        "architectural art prints",
        "coastal artwork",
        "travel inspired art",
        "fuerteventura art prints",
        "gaudi architecture art",
        "fine art prints online",
      ],
    }),
    links: canonical("/"),
    scripts: ldJson([
      websiteNode,
      organizationNode,
      artistNode,
      webPageNode("/", HOME_TITLE, HOME_DESCRIPTION),
      breadcrumbNode([{ name: "Home", path: "/" }]),
      imageObjectNode(
        heroArtworkUrl,
        "Abbaye aux Dames, Saintes",
        "Architectural art print of Abbaye aux Dames in Saintes by Gerald Allen Knowles",
      ),
      {
        "@type": "CollectionPage",
        "@id": `${abs("/")}#homepage-collections`,
        name: "GAK Creations homepage collections",
        url: abs("/"),
        mainEntity: {
          "@type": "ItemList",
          itemListElement: featuredCollections.map((collection, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: collection.name,
            url: abs(`/collections/${collection.slug}`),
            description: collection.seoDescription,
          })),
        },
      },
      ...featuredWorks.map(({ collection, work, fragmentId }) =>
        productNode(work, {
          collectionName: collection.name,
          keywords: artworkKeywords(work, collection.keywords),
          pageUrl: abs(`/collections/${collection.slug}#${fragmentId}`),
          offerUrl: SHOP_URL,
        }),
      ),
    ]),
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-paper text-ink font-body">
      <SiteHeader />
      <main>
        <Hero />
        <Marquee />
        <Narrative />
        <CollectionsPreview />
        <FeaturedWorks />
        <JournalHighlights />
        <StudioNote />
        <Shop />
      </main>
      <SiteFooter />
    </div>
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
            Architectural drawings, coastal studies, and travel-inspired collages from a lifetime of
            wandering through Europe and the Atlantic islands — now available as museum-quality fine
            art prints.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link
              to="/collections"
              className="group inline-flex items-center gap-3 bg-ink px-7 py-4 text-sm font-medium uppercase tracking-[0.2em] text-paper transition hover:bg-ink-soft"
            >
              Explore the collections
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm uppercase tracking-[0.2em] text-ink underline underline-offset-8 decoration-ink/40 hover:decoration-ink"
            >
              Shop the prints
            </a>
          </div>
        </div>

        <div className="relative md:col-span-7">
          <div className="absolute -left-4 top-0 hidden h-full w-px bg-ink/20 md:block" />
          <figure className="relative">
            <ResponsiveImage
              src={heroArtworkUrl}
              alt="Architectural study of Abbaye Aux Dames, Saintes, France, by Gerald Allen Knowles"
              width={heroImageSize.width}
              height={heroImageSize.height}
              fetchPriority="high"
              className="w-full object-cover"
              onError={handleImageError}
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
    "Coastal Artwork",
    "Fuerteventura Landscapes",
    "Fine Art Prints",
  ];

  return (
    <div className="overflow-hidden border-b border-ink/15 bg-paper-warm">
      <div className="flex whitespace-nowrap py-5 [animation:marquee_40s_linear_infinite]">
        {[...items, ...items, ...items].map((item, index) => (
          <span key={index} className="mx-10 font-display text-2xl italic text-ink md:text-3xl">
            {item} <span className="mx-8 text-ink/40">✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0);} to { transform: translateX(-33.333%);} }`}</style>
    </div>
  );
}

function Narrative() {
  return (
    <section className="border-b border-ink/15">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 py-20 md:grid-cols-12 md:px-12">
        <div className="md:col-span-4">
          <h2 className="font-display text-4xl leading-tight md:text-5xl">
            A professional <em className="font-light">art print archive</em> rooted in place
          </h2>
          <div className="rule-line mt-6 w-16" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-soft">
            Discover the artist story, studio process, inspirations, and collector value behind the
            GAK Creations catalogue.
          </p>
        </div>
        <div className="grid gap-10 md:col-span-8 md:grid-cols-2">
          <article>
            <h3 className="font-display text-2xl text-ink md:text-3xl">The artist story</h3>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-ink-soft md:text-[1.05rem]">
              <p>
                GAK Creations is the studio archive of Gerald Allen Knowles, an architect and artist
                whose drawing practice was shaped long before it was framed. Years spent reading
                buildings, surveying streets, and sketching while travelling produced a way of seeing
                that treats every place as a structure first and an atmosphere second. The result is a
                body of work that feels intimate without becoming nostalgic: abbeys studied by eye,
                harbour walls reduced to line and wash, and volcanic landscapes held together by the
                same discipline that once set out plans on a drafting table.
              </p>
              <p>
                That background matters because it gives the work its character. Gerald Allen Knowles
                does not draw landmarks as souvenirs. He draws how stone meets light, how a chapel
                holds a hillside, and how a familiar boat shape can anchor an entire composition.
              </p>
            </div>
          </article>
          <article>
            <h3 className="font-display text-2xl text-ink md:text-3xl">Techniques and materials</h3>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-ink-soft md:text-[1.05rem]">
              <p>
                Every artwork begins with observation on location. Pencil establishes the horizon,
                proportions, and structural rhythm. Ink clarifies the edges that matter. Wash is laid
                in quickly so the page keeps the weather of the moment instead of a studio version of
                it. When a surface asks for something more tactile than paint can give, collage enters:
                torn papers for Castilian ochres, metallic fragments for Bilbao titanium, and broken
                textures that behave more like real material than a flat pigment field ever could.
              </p>
              <p>
                That process carries directly into the final print. Museum-grade matte paper and
                pigment inks preserve the visible construction lines, granulating washes, and layered
                textures that collectors respond to in the original studies.
              </p>
            </div>
          </article>
          <article>
            <h3 className="font-display text-2xl text-ink md:text-3xl">Inspirations and places</h3>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-ink-soft md:text-[1.05rem]">
              <p>
                The archive is organised around six recurring territories: <Link to="/collections/$slug" params={{ slug: "architecture" }} className="underline underline-offset-4">architecture</Link>,{" "}
                <Link to="/collections/$slug" params={{ slug: "coastal" }} className="underline underline-offset-4">coastal artwork</Link>,{" "}
                <Link to="/collections/$slug" params={{ slug: "travel" }} className="underline underline-offset-4">travel collages</Link>,{" "}
                <Link to="/collections/$slug" params={{ slug: "fuerteventura" }} className="underline underline-offset-4">Fuerteventura landscapes</Link>,{" "}
                <Link to="/collections/$slug" params={{ slug: "gaudi-and-modern-landmarks" }} className="underline underline-offset-4">Gaudí and modern landmarks</Link>, and{" "}
                <Link to="/collections/$slug" params={{ slug: "nature" }} className="underline underline-offset-4">nature studies</Link>. Together they trace a consistent interest in places where form and weather meet — Romanesque façades in France, Atlantic harbours, Barcelona curves, and the older volcanic ground of the Canary Islands.
              </p>
              <p>
                These inspirations keep the work varied without losing coherence. Whether the subject is
                a church front or a shoreline, the page is still asking the same question: what is the
                quiet geometry that makes this place itself?
              </p>
            </div>
          </article>
          <article>
            <h3 className="font-display text-2xl text-ink md:text-3xl">Why collectors choose GAK Creations</h3>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-ink-soft md:text-[1.05rem]">
              <p>
                Collectors come here for contemporary wall art with substance behind it. The prints are
                not generic decor; they are edited from a real sketchbook practice and offered as
                museum-quality reproductions through the GAK Creations shop. That makes them suitable
                for design-led homes, studios, hospitality spaces, and offices where artwork needs to
                reward a closer look.
              </p>
              <p>
                If you are new to the archive, start with the <Link to="/collections" className="underline underline-offset-4">collections overview</Link> for the full catalogue, then visit the{" "}
                <Link to="/journal" className="underline underline-offset-4">studio journal</Link> for essays on drawing buildings, painting Atlantic light, and turning travel notes into finished pieces. When you are ready to buy, the prints are made to order and shipped worldwide through Printify.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function CollectionsPreview() {
  return (
    <section className="border-b border-ink/15" id="collections-overview">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Explore the archive</p>
            <h2 className="mt-6 font-display text-4xl md:text-6xl">
              Six core <em className="font-light">collections</em>
            </h2>
          </div>
          <Link to="/collections" className="eyebrow hover:text-ink">
            Browse every collection →
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
          {featuredCollections.map((collection) => (
            <article key={collection.slug}>
              <Link to="/collections/$slug" params={{ slug: collection.slug }} className="group block">
                <div className="overflow-hidden bg-paper-warm">
                  <ResponsiveImage
                    src={collection.hero}
                    alt={collection.heroAlt}
                    width={getImageDimensions(collection.hero)?.width ?? 1181}
                    height={getImageDimensions(collection.hero)?.height ?? 1191}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.02]"
                    onError={handleImageError}
                  />
                </div>
                <div className="mt-5 border-b border-ink/20 pb-5">
                  <p className="eyebrow">{collection.eyebrow}</p>
                  <h3 className="mt-2 font-display text-2xl md:text-3xl">{collection.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{collection.seoDescription}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedWorks() {
  return (
    <section className="border-b border-ink/15" id="featured-prints">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Selected prints</p>
            <h2 className="mt-6 font-display text-4xl md:text-6xl">
              Featured <em className="font-light">artwork prints</em>
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
          {featuredWorks.map(({ collection, work, fragmentId }) => (
            <article key={work.sku} id={fragmentId}>
              <div className="overflow-hidden bg-paper-warm">
                <ResponsiveImage
                  src={work.image}
                  alt={artworkAltText(work, collection.name)}
                  width={getImageDimensions(work.image)?.width ?? 900}
                  height={getImageDimensions(work.image)?.height ?? 1100}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                  onError={handleImageError}
                />
              </div>
              <div className="mt-5 border-b border-ink/20 pb-5">
                <p className="eyebrow">{collection.name}</p>
                <h3 className="font-display text-2xl md:text-3xl">{work.title}</h3>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-ink-soft">
                  {work.medium} · {work.place}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">{work.description}</p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    to="/collections/$slug"
                    params={{ slug: collection.slug }}
                    className="bg-ink px-6 py-3 text-sm uppercase tracking-[0.2em] text-paper hover:bg-ink-soft"
                  >
                    View collection
                  </Link>
                  <a
                    href={SHOP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-ink/25 px-6 py-3 text-sm uppercase tracking-[0.2em] hover:bg-ink hover:text-paper"
                  >
                    Shop print
                  </a>
                </div>
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-ink-soft">
                  Keywords: {artworkKeywords(work, collection.keywords).join(" · ")}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function JournalHighlights() {
  return (
    <section className="border-b border-ink/15 bg-paper-warm">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">From the studio journal</p>
            <h2 className="mt-6 font-display text-4xl md:text-5xl">
              Process notes for collectors, architects, and art lovers
            </h2>
          </div>
          <Link to="/journal" className="eyebrow hover:text-ink">
            Read every journal entry →
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {featuredPosts.map((post) => (
            <article key={post.slug}>
              <Link to="/journal/$slug" params={{ slug: post.slug }} className="group block">
                <ResponsiveImage
                  src={post.image}
                  alt={post.imageAlt}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.02]"
                  onError={handleImageError}
                />
                <div className="mt-5 border-b border-ink/20 pb-5">
                  <p className="eyebrow">{post.readingTime}</p>
                  <h3 className="mt-2 font-display text-2xl leading-tight md:text-3xl">{post.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{post.excerpt}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function StudioNote() {
  return (
    <section className="border-b border-ink/15 bg-paper">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 py-20 md:grid-cols-12 md:px-12 md:py-28">
        <figure className="md:col-span-6">
          <ResponsiveImage
            src={studioUrl}
            alt="Inside the GAK Creations studio"
            width={studioImageSize.width}
            height={studioImageSize.height}
            loading="lazy"
            className="w-full object-cover"
            onError={handleImageError}
          />
          <figcaption className="mt-4 text-xs uppercase tracking-[0.2em] text-ink-soft">
            The studio — morning light
          </figcaption>
        </figure>
        <div className="md:col-span-6 md:pl-8">
          <p className="eyebrow">In his own words</p>
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
        <p className="eyebrow">The storefront</p>
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
          Enter the shop
          <span>→</span>
        </a>
        <p className="mt-6 text-xs uppercase tracking-[0.2em] text-ink-soft">gak-creations.printify.me</p>
      </div>
    </section>
  );
}
