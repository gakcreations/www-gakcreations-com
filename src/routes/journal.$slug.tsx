import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, handleImageError } from "@/components/SiteChrome";
import type { JournalPost } from "@/data/journal";
import { getPost, journal } from "@/data/journal";
import { getCollection } from "@/data/collections";
import {
import { ResponsiveImage } from "@/components/ResponsiveImage";
  seoMeta,
  canonical,
  ldJson,
  websiteNode,
  organizationNode,
  artistNode,
  breadcrumbNode,
  imageObjectNode,
  abs,
  SHOP_URL,
} from "@/lib/seo";

export const Route = createFileRoute("/journal/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  component: JournalPostPage,
  head: ({ loaderData }) => {
    const p = loaderData?.post;
    if (!p) return {};
    const path = `/journal/${p.slug}`;
    return {
      meta: seoMeta({
        title: p.seoTitle,
        description: p.seoDescription,
        path,
        image: p.image,
        type: "article",
        publishedTime: p.published,
        keywords: p.keywords,
      }),
      links: canonical(path),
      scripts: ldJson([
        websiteNode,
        organizationNode,
        artistNode,
        breadcrumbNode([
          { name: "Home", path: "/" },
          { name: "Journal", path: "/journal" },
          { name: p.title, path },
        ]),
        {
          "@type": "BlogPosting",
          "@id": `${abs(path)}#article`,
          headline: p.title,
          description: p.seoDescription,
          url: abs(path),
          datePublished: p.published,
          dateModified: p.published,
          image: abs(p.image),
          keywords: p.keywords.join(", "),
          articleSection: "Art & Architecture",
          author: { "@id": `${abs("/")}#artist` },
          publisher: { "@id": `${abs("/")}#organization` },
          isPartOf: { "@id": `${abs("/journal")}#blog` },
          mainEntityOfPage: { "@type": "WebPage", "@id": `${abs(path)}#webpage` },
        },
        imageObjectNode(p.image, p.title, p.imageAlt),
      ]),
    };
  },
});

function JournalPostPage() {
  const { post: p } = Route.useLoaderData() as { post: JournalPost };
  const collection = getCollection(p.relatedCollection);
  const more = journal.filter((x) => x.slug !== p.slug).slice(0, 3);

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
            <li>
              <Link to="/journal" className="hover:text-ink">
                Journal
              </Link>
            </li>
          </ol>
        </nav>

        <article>
          <header className="border-b border-ink/15">
            <div className="mx-auto max-w-3xl px-6 py-14 md:px-12 md:py-20">
              <p className="eyebrow">
                {new Date(p.published).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}{" "}
                · {p.readingTime}
              </p>
              <h1 className="mt-6 font-display text-4xl leading-[1.02] md:text-6xl">{p.title}</h1>
              <div className="rule-line mt-8 w-16" />
            </div>
          </header>

          <figure className="mx-auto max-w-[1400px] px-6 pt-12 md:px-12">
            <ResponsiveImage
              src={p.image}
              alt={p.imageAlt}
              width={1400}
              height={900}
              fetchPriority="high"
              className="max-h-[70vh] w-full object-cover"
              onError={handleImageError}
            />
            <figcaption className="mt-4 text-xs uppercase tracking-[0.2em] text-ink-soft">
              {p.imageAlt}
            </figcaption>
          </figure>

          <div className="mx-auto max-w-3xl px-6 py-14 md:px-12 md:py-20">
            <div className="space-y-6 text-lg leading-relaxed text-ink-soft">
              {p.intro.map((t, i) => (
                <p key={i} className="font-display text-2xl leading-snug text-ink md:text-3xl">
                  {t}
                </p>
              ))}
              {p.body.map((s) => (
                <section key={s.heading} className="pt-6">
                  <h2 className="font-display text-3xl text-ink md:text-4xl">{s.heading}</h2>
                  <div className="mt-5 space-y-5 text-base leading-relaxed md:text-[1.05rem]">
                    {s.paragraphs.map((t, i) => (
                      <p key={i}>{t}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {collection && (
              <aside className="mt-14 border-t border-ink/20 pt-10">
                <h2 className="font-display text-2xl md:text-3xl">
                  See the work: <em className="font-light">{collection.name}</em>
                </h2>
                <p className="mt-3 text-base leading-relaxed text-ink-soft">{collection.lede}</p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    to="/collections/$slug"
                    params={{ slug: collection.slug }}
                    className="bg-ink px-7 py-4 text-sm uppercase tracking-[0.2em] text-paper hover:bg-ink-soft"
                  >
                    View the collection →
                  </Link>
                  <a
                    href={SHOP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-ink/25 px-7 py-4 text-sm uppercase tracking-[0.2em] hover:bg-ink hover:text-paper"
                  >
                    Shop the prints
                  </a>
                </div>
              </aside>
            )}
          </div>
        </article>

        <section className="border-t border-ink/15 bg-paper-warm">
          <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-12">
            <h2 className="font-display text-3xl md:text-4xl">More from the journal</h2>
            <ul className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
              {more.map((m) => (
                <li key={m.slug}>
                  <Link to="/journal/$slug" params={{ slug: m.slug }} className="group block">
                    <h3 className="font-display text-2xl leading-tight group-hover:italic">
                      {m.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">{m.excerpt}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
