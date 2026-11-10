# Full store audit & fixes (2026-11-09)

- [x] Use verified shop-listing details (paper, frame, sizes) on every buyable artwork page and in Product data.
- [x] Remove blanket "museum-grade / archival pigment" claims the listings don't confirm (pages, guides, journal, llms.txt, manifest).
- [x] Artwork pages: "other editions" cross-sell, prices on companion pieces.
- [x] All-artwork page: honest intro, prices, theme/format filters and a search box with synonyms.
- [x] Image entries in the sitemap for Google Images; AI-readable llms.txt generated from live data.
- [x] New FAQ and Accessibility pages, linked in the footer.
- [x] Shorten over-long titles/descriptions (guides, about, contact, policies, collections).
- [x] Fix production hydration mismatch (page re-render, CLS 0.22) and header wrap shift.
- [x] Tests, browser check, and the prioritised audit report in Files.
- [x] Remove Klaviyo website scripts and unused types; preserve the studio signup form.

Blocked on owner (outside the site):
- Bahamas / Caribbean artwork: none on the site yet — needs the artworks before pages can be built.
- Printify: "Syphonmy" typo, size-count contradictions, check "from" prices on framed listings, list the five unlisted drawings, shop tags.
- Google Merchant Center submission, Google reviews, second GA tag in GTM.
