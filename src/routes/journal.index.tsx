import { ResponsiveImage } from "@/components/ResponsiveImage";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, handleImageError } from "@/components/SiteChrome";
import { journal } from "@/data/journal";
import {
  seoMeta,
  canonical,
  ldJson,
  websiteNode,
  organizationNode,
  artistNode,
  webPageNode,
  breadcrumbNode,
  abs,
} from "@/lib/seo";

const TITLE = "Art Buying Guides, Architectural Sketching & Studio Journal | GAK Creations";
const DESCRIPTION =
  "Read art buying guides, architectural sketching notes and stories behind the coastal, travel and Fuerteventura prints of Gerald Allen Knowles.";

export const Route = createFileRoute("/journal/")({
  component: JournalIndex,
  head: () => ({
    meta: seoMeta({
      title: TITLE,
      description: DESCRIPTION,
      path: "/journal",
      image: journal[0]!.image,
      keywords: [
        "architectural sketching",
        "coastal artwork",
        "travel inspired art",
        "fuerteventura landscape",
        "gaudi architecture",
      ],
    }),
    links: canonical("/journal"),
    scripts: ldJson([
      websiteNode,
      organizationNode,
      artistNode,
      webPageNode("/journal", TITLE, DESCRIPTION),
      breadcrumbNode([
        { name: "Home", path: "/" },
        { name: "Journal", path: "/journal" },
      ]),
      {
        "@type": "Blog",
        "@id": `${abs("/journal")}#blog`,
        name: "GAK Creations Studio Journal",
        url: abs("/journal"),
        author: { "@id": `${abs("/")}#artist` },
        blogPost: journal.map((p) => ({
          "@type": "BlogPosting",
          headline: p.title,
          url: abs(`/journal/${p.slug}`),
          datePublished: p.published,
          image: abs(p.image),
          author: { "@id": `${abs("/")}#artist` },
        })),
      },
    ]),
  }),
});

function JournalIndex() {
  return (
    <div className="min-h-screen bg-paper text-ink font-body">
      <SiteHeader />
      <main>
        <section className="border-b border-ink/15">
          <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-12 md:py-24">
            <p className="eyebrow">Notes from the studio</p>
            <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1] md:text-7xl">
              The studio <em className="font-light">journal</em>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
              Working notes on drawing buildings on location, painting under Atlantic light, and
              turning sketchbook pages into finished collages.
            </p>
          </div>
        </section>

        <section className="border-b border-ink/15">
          <div className="mx-auto max-w-[1400px] divide-y divide-ink/15 px-6 md:px-12">
            {journal.map((p) => (
              <article key={p.slug} className="grid grid-cols-1 gap-8 py-12 md:grid-cols-12">
                <Link
                  to="/journal/$slug"
                  params={{ slug: p.slug }}
                  className="group md:col-span-4"
                  aria-label={p.title}
                >
                  <ResponsiveImage
                    src={p.image}
                    alt={p.imageAlt}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.02]"
                    onError={handleImageError}
                  />
                </Link>
                <div className="md:col-span-8">
                  <p className="eyebrow">
                    {new Date(p.published).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}{" "}
                    · {p.readingTime}
                  </p>
                  <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl">
                    <Link to="/journal/$slug" params={{ slug: p.slug }} className="hover:italic">
                      {p.title}
                    </Link>
                  </h2>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
                    {p.excerpt}
                  </p>
                  <Link
                    to="/journal/$slug"
                    params={{ slug: p.slug }}
                    className="mt-6 inline-block text-sm uppercase tracking-[0.2em] underline underline-offset-8 decoration-ink/40 hover:decoration-ink"
                  >
                    Read the note →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
