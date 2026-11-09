<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep listing-specific print material and presentation in the canonical artwork records and reuse them in page facts and Product schema; original artwork medium must not mislabel a canvas reproduction as paper.
- Every purchase button must lead to a specific shop listing: homepage featured prints come from listed, priced artworks, and drawings without a listing show an email enquiry plus listed alternatives instead of a generic shop link; why: generic shop links lost buyers.
- Never state print materials or quality (e.g. museum-grade paper) that the shop listing does not confirm; omit the field instead; why: Google Merchant misrepresentation risk.
- Keep the root `shellComponent` (`<html lang><head><HeadContent/></head><body>…<Scripts/></body>`); rendering HeadContent/Scripts inside the body fragment caused a production hydration mismatch that re-rendered every page and produced CLS ≈0.22.
- Primary header nav stays a single non-wrapping row (horizontal scroll on small screens); wrapping changed header height when web fonts loaded and shifted the whole page.
- `/llms.txt` and the FAQ are generated from artwork records and `src/lib/store-facts.ts`; never hand-edit a static llms.txt in public/, so AI summaries can't drift from prices, formats or policies.
- Shop-listing sizes and feature bullets live on artwork records (`listingSizes`, `listingFeatures`) copied from the live listing; omit "Available in N sizes" bullets because the listings' own counts contradict their size tables.
