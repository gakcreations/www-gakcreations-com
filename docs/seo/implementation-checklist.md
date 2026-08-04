# SEO Implementation Checklist

## Google Compliance & Quality Audit — August 2026

### Technical SEO
- [x] `robots.txt` allows all crawlers and references sitemap URL
- [x] `sitemap.xml` is dynamically generated and covers all routes (home, collections, journal, policies)
- [x] All pages have unique `<title>` and `<meta name="description">` tags
- [x] Canonical tags on every indexable page (`<link rel="canonical">`)
- [x] No accidental `noindex` on important pages
- [x] `robots` meta with `max-image-preview:large, max-snippet:-1, max-video-preview:-1` on all pages
- [x] `theme-color` meta tag added to root layout (`#f2ede6` — matches brand background)
- [x] Viewport meta tag present

### Open Graph & Social
- [x] `og:title`, `og:description`, `og:url`, `og:type`, `og:site_name`, `og:image` on all pages
- [x] `og:image:width` and `og:image:height` provided when dimensions are known
- [x] Twitter Card (`summary_large_image`) with title, description, image, and alt on all pages
- [x] `article:published_time` and `article:author` on journal posts

### Structured Data (JSON-LD)
- [x] `Organization` node with logo, email, URL, and sameAs links on all pages
- [x] `ContactPoint` added to the `Organization` node (customer service email)
- [x] `WebSite` node on all pages
- [x] `Person`/`Artist` node on all pages
- [x] `WebPage` node on all pages
- [x] `BreadcrumbList` on all pages
- [x] `CollectionPage` with `ItemList` on collection index and individual collection pages
- [x] `Product` schema on featured artworks (homepage and collection pages)
- [x] `ImageObject` schema on artwork images
- [x] `BlogPosting` schema on journal posts
- [x] `Blog` schema on journal index

### Performance & Core Web Vitals
- [x] Hero image has `fetchPriority="high"` (homepage, collection detail, journal detail)
- [x] First collection card image has `fetchPriority="high"` (collections index LCP fix)
- [x] Non-hero images use `loading="lazy"`
- [x] `ResponsiveImage` component serves WebP with JPEG fallback via `<picture>` element
- [x] Images include explicit `width` and `height` to prevent layout shift (CLS)
- [x] Google Fonts loaded via `<link rel="preconnect">` + display=swap

### Accessibility Signals
- [x] All images have descriptive `alt` attributes
- [x] `aria-label` on navigation landmarks (`<nav>`)
- [x] Breadcrumb `<nav aria-label="Breadcrumb">` with semantic `<ol>/<li>` structure
- [x] Heading hierarchy (`h1` → `h2`) respected on all pages
- [x] `<main>`, `<header>`, `<footer>`, `<article>`, `<section>`, `<figure>`, `<figcaption>` used semantically

### Internal Linking
- [x] Collections linked from homepage featured section and navigation
- [x] Collections cross-link to related collections
- [x] Journal posts link back to related collections
- [x] Footer contains links to all collections, journal, legal pages

## Remaining Manual Tasks

- [ ] **Google Search Console** — verify property and submit sitemap (`https://www.gakcreations.com/sitemap.xml`)
- [ ] **Google Search Console** — confirm Core Web Vitals report once the site receives sufficient real-user data
- [ ] **Favicon set** — consider adding `apple-touch-icon` (180×180 PNG) and a `manifest.json` for mobile home-screen support
- [ ] **Review schema** — add `AggregateRating` to product schema once genuine customer reviews are available
- [ ] **Product routes** — if Printify data becomes available locally, add dedicated `/products/$slug` routes with full product schema
- [ ] **OG image generation** — consider auto-generated social cards with artwork title + branding overlay
- [ ] **Hreflang** — add if the site expands to multiple languages
