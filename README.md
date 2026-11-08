# GAK Creations — Artistic Homepage & Print Store

**GAK Creations** is the official website of **Gerald Allen Knowles**, an architect, artist, and global creative director.  
The site showcases modern art prints, architectural sketches, coastal artwork, and travel-inspired collages — all available as high‑quality art prints through Printify.

This repository contains the source code for **www.gakcreations.com**, built and maintained using **Lovable** and deployed with **GitHub Pages**.

---

## 🌊 About the Website

The website serves as:

- A contemporary artistic homepage  
- A gateway into the GAK Creations art print store  
- A curated portfolio of architectural and travel‑inspired artwork  
- A storytelling space for global creative exploration  

All prints are fulfilled through Printify at:  
**https://gak-creations.printify.me**

---

## 🛠️ Built With

This project is created and maintained using:

- **Lovable** — AI‑assisted development  
- **TanStack Start (React + Vite)** — modern React framework/runtime  
- **GitHub** — version control, collaboration and Pages deployment

Continue developing this project in the Lovable editor:  
https://lovable.dev/projects/73ae6212-5ee4-42ff-9a3d-142777bb6b64

---

## 🚀 Development

If you prefer working locally:

### Requirements
- Node.js  
- npm  
(You can install both using [nvm](https://github.com/nvm-sh/nvm))

### Setup
```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Search and static output

The GitHub Pages build prerenders `/sitemap.xml` and `/merchant-feed.xml` alongside
the HTML pages. After changing routes, artwork or SEO metadata, run
`NITRO_PRESET=github-pages npm run build` followed by
`node --test tests/seo-output.test.mjs`. The deployment workflow runs the same
output checks before uploading the site.

The merchant feed contains only artwork records with a listing URL and price.
Keep those prices, availability and listing details current, and verify Merchant
Center's domain and destination requirements before submitting the feed.
Submit the sitemap in Search Console after the site is deployed. Structured data
can make pages eligible for enhanced results, but does not guarantee their display.

## 📈 Analytics setup (GA4)

Google Analytics 4 is installed globally from `src/routes/__root.tsx`.

- Default production Measurement ID (when no env override is set): `G-FNF4XTQ40M`
- Optional override via environment variable: `VITE_GA_MEASUREMENT_ID`
- The fallback ID is intentionally public (GA4 Measurement IDs are non-secret identifiers).
- `VITE_GA_MEASUREMENT_ID` is read at build time (Vite public env behavior), so set it before deploying.

Example `.env`:
```sh
VITE_GA_MEASUREMENT_ID=G-FNF4XTQ40M
```

Route-change page views are wired in `src/routes/__root.tsx` and use the helper in `src/lib/analytics.ts`.
