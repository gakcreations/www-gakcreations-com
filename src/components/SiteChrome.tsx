import { Link } from "@tanstack/react-router";
import { SHOP_URL, LOGO_PATH, CONTACT_EMAIL } from "@/lib/seo";
import { collections } from "@/data/collections";
import { ResponsiveImage, handleImageError } from "@/components/ResponsiveImage";

export { handleImageError };

export function SiteHeader() {
  return (
    <header className="border-b border-ink/15">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 px-6 py-5 md:px-12">
        <Link to="/" className="flex items-center gap-3" aria-label="GAK Creations — home">
          <ResponsiveImage
            src={LOGO_PATH}
            alt="GAK Creations logo"
            sizes="120px"
            width={120}
            height={40}
            className="h-9 w-auto md:h-10"
            onError={handleImageError}
          />
          <span className="font-display text-xl tracking-wide md:text-2xl">
            GAK <span className="italic font-light">Creations</span>
          </span>
        </Link>
        <nav aria-label="Primary" className="flex flex-wrap items-center gap-5 md:gap-7">
          <Link to="/collections" className="eyebrow hover:text-ink">
            Collections
          </Link>
          <Link to="/artwork" className="eyebrow hover:text-ink">
            Artwork
          </Link>
          <Link to="/architectural-art-prints" className="eyebrow hover:text-ink">
            Buying Guide
          </Link>
          <Link to="/journal" className="eyebrow hover:text-ink">
            Journal
          </Link>

          <a
            href={SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="eyebrow hover:text-ink"
          >
            Shop →
          </a>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 py-16 md:grid-cols-12 md:px-12">
        <div className="md:col-span-4">
          <div className="flex items-center gap-4">
            <ResponsiveImage
              src={LOGO_PATH}
              alt="GAK Creations logo"
            sizes="120px"
              width={120}
              height={48}
              className="h-12 w-auto invert"
              onError={handleImageError}
            />
            <p className="font-display text-3xl md:text-4xl">
              GAK <em className="font-light">Creations</em>
            </p>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-paper/60">
            The ongoing archive of Gerald Allen Knowles — architecture, art, and lived experience,
            printed on paper.
          </p>
          <p className="mt-6 text-sm text-paper/70">
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-paper">
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>

        <nav className="md:col-span-3" aria-label="Collections">
          <p className="text-[0.65rem] uppercase tracking-[0.28em] text-paper/50">Collections</p>
          <ul className="mt-5 space-y-3 text-sm">
            {collections.map((c) => (
              <li key={c.slug}>
                <Link
                  to="/collections/$slug"
                  params={{ slug: c.slug }}
                  className="hover:text-paper/70"
                >
                  {c.name} art prints
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="md:col-span-2" aria-label="Journal">
          <p className="text-[0.65rem] uppercase tracking-[0.28em] text-paper/50">Elsewhere</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link to="/journal" className="hover:text-paper/70">
                Studio Journal
              </Link>
            </li>
            <li>
              <Link to="/architectural-art-prints" className="hover:text-paper/70">
                Print Buying Guide
              </Link>
            </li>

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
          </ul>
        </nav>

        <nav className="md:col-span-3" aria-label="Customer care and legal">
          <p className="text-[0.65rem] uppercase tracking-[0.28em] text-paper/50">
            Customer Care & Legal
          </p>
          <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
            <li>
              <Link to="/contact" className="hover:text-paper/70">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/shipping-policy" className="hover:text-paper/70">
                Shipping Policy
              </Link>
            </li>
            <li>
              <Link to="/refund-policy" className="hover:text-paper/70">
                Refund & Returns
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-paper/70">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-paper/70">
                Privacy Policy
              </Link>
            </li>
          </ul>
          <p className="mt-6 text-xs leading-relaxed text-paper/50">
            Made to order. Fulfilled worldwide through Printify.
          </p>
        </nav>
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
