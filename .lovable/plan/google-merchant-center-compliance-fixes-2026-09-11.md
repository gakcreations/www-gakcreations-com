# Google Merchant Center compliance fixes

## Goal
Remove misleading product data, align visible store information with Google’s merchant requirements, and ensure the GitHub-hosted site deploys correctly.

## Changes
- Replace the one-price-for-every-product markup with verified per-artwork shop prices only where a direct product listing exists.
- Show that same price and stock status visibly beside the purchase button so shoppers and Google receive matching information.
- Remove unsupported fixed shipping-price and “free return” claims from structured data; keep fulfillment timing and policy links that match the visible policies.
- Remove the inaccurate “toll-free” business contact claim.
- Keep non-purchasable archive works as artwork content without falsely marking them as retail products.
- Correct the GitHub Pages workflow and custom-domain file so pushes deploy the site through GitHub Pages rather than Cloudflare.
- Verify the build, key pages, product links, and rendered structured data.

## Important account checks
Google Merchant Center and Printify settings cannot be changed from this site. After publication, the account still needs its website verified, shipping/returns configured to match Printify checkout, and products without GTINs marked appropriately in the product feed.

## Technical details
- Extend artwork records with verified USD starting prices for direct Printify listings.
- Emit `Product`/`Offer` data only for direct listings with a verified price.
- Use GitHub Pages Actions permissions and upload the static public output.
