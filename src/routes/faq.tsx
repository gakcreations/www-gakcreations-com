import { createFileRoute, Link } from "@tanstack/react-router";
import { PolicyPage, PolicyH2 } from "@/components/PolicyPage";
import {
  artistNode,
  breadcrumbNode,
  canonical,
  ldJson,
  organizationNode,
  seoMeta,
  webPageNode,
  websiteNode,
  CONTACT_EMAIL,
  SHOP_URL,
} from "@/lib/seo";
import {
  CANCELLATION_HOURS,
  DEFECT_CLAIM_DAYS,
  DELIVERY_TIMES,
  PRODUCTION_DAYS,
  priceRange,
} from "@/lib/store-facts";

const PATH = "/faq";
const TITLE = "Art Print FAQ: Frames, Sizes & Delivery | GAK Creations";
const DESCRIPTION =
  "Answers about GAK Creations art prints: prices, framed and mounted editions, paper, sizes, delivery times, returns and how to order a print.";

export const Route = createFileRoute("/faq")({
  component: Faq,
  head: () => ({
    meta: seoMeta({ title: TITLE, description: DESCRIPTION, path: PATH }),
    links: canonical(PATH),
    scripts: ldJson([
      websiteNode,
      organizationNode,
      artistNode,
      webPageNode(PATH, TITLE, DESCRIPTION),
      breadcrumbNode([
        { name: "Home", path: "/" },
        { name: "FAQ", path: PATH },
      ]),
    ]),
  }),
});

const linkClass = "text-ink underline";

function Faq() {
  const range = priceRange();
  return (
    <PolicyPage eyebrow="Customer Care" title="Frequently asked questions" updated="November 2026">
      <p>
        Quick answers for buying a GAK Creations print. If your question isn’t here, email{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>
          {CONTACT_EMAIL}
        </a>
        .
      </p>

      <PolicyH2>How do I buy a print?</PolicyH2>
      <p>
        Open any artwork from the{" "}
        <Link to="/artwork" className={linkClass}>
          artwork page
        </Link>{" "}
        and press “Buy this print”. It takes you to that print’s own listing in the{" "}
        <a href={SHOP_URL} className={linkClass} target="_blank" rel="noopener noreferrer">
          GAK Creations shop
        </a>
        , where you choose a size and pay securely.
      </p>

      <PolicyH2>How much do prints cost?</PolicyH2>
      <p>
        {range.count} prints are in the shop, with starting prices from {range.lowest} to {range.highest} (US
        dollars). The final price depends on the size and frame you choose. Shipping is added at checkout.
      </p>

      <PolicyH2>Do prints come framed?</PolicyH2>
      <p>It depends on the edition, and each artwork page says which one it is:</p>
      <ul className="list-disc space-y-2 pl-6">
        <li>
          <strong>Framed editions</strong> arrive in a matte black pinewood frame with shatter-proof plexiglass and
          hanging hardware fitted.
        </li>
        <li>
          <strong>Mounted (passepartout) editions</strong> come with a 2mm natural-white mount. The outer frame is
          not included.
        </li>
        <li>
          <strong>Canvas</strong>: Symphony of Waves is also available as a framed matte canvas.
        </li>
        <li>
          <strong>Unframed</strong>: the Cathédrale Saint-Pierre print on textured watercolour paper.
        </li>
      </ul>
      <p>
        You can filter by{" "}
        <Link to="/artwork" search={{ format: "framed" }} className={linkClass}>
          framed
        </Link>{" "}
        or{" "}
        <Link to="/artwork" search={{ format: "mounted" }} className={linkClass}>
          mounted
        </Link>{" "}
        prints on the artwork page.
      </p>

      <PolicyH2>What paper is used?</PolicyH2>
      <p>
        Mounted editions are printed on 175gsm fine art paper. Framed editions let you choose 310gsm fine art paper
        or 260gsm semi-gloss paper. The Saintes cathedral print uses textured 285gsm watercolour paper. For
        drawings and watercolours, the matte fine art paper avoids glare.
      </p>

      <PolicyH2>What sizes are available?</PolicyH2>
      <p>
        Mounted editions come in 11″ × 14″ and 16″ × 20″. Framed editions go from 6″ × 8″ up to 28″ × 40″. Every
        artwork page lists its exact sizes. For help choosing, read{" "}
        <Link to="/journal/$slug" params={{ slug: "what-size-art-print-should-i-buy" }} className={linkClass}>
          what size art print should I buy
        </Link>
        .
      </p>

      <PolicyH2>How long does delivery take?</PolicyH2>
      <p>Each print is made to order, which takes {PRODUCTION_DAYS}. Delivery then takes:</p>
      <ul className="list-disc space-y-2 pl-6">
        {DELIVERY_TIMES.map((d) => (
          <li key={d.region}>
            {d.region}: {d.days}
          </li>
        ))}
      </ul>
      <p>
        Prints ship from the production partner closest to you, with tracking. Import duties and taxes are paid by
        the recipient. Full details are in the{" "}
        <Link to="/shipping-policy" className={linkClass}>
          shipping policy
        </Link>
        .
      </p>

      <PolicyH2>What if my print arrives damaged?</PolicyH2>
      <p>
        Email us within {DEFECT_CLAIM_DAYS} days of delivery with your order number and a photo, and we will
        replace it or refund you. Because each print is made for you, we can’t accept change-of-mind returns.
        Orders can be changed or cancelled within {CANCELLATION_HOURS} hours. See the{" "}
        <Link to="/refund-policy" className={linkClass}>
          returns policy
        </Link>
        .
      </p>

      <PolicyH2>Can I get a print of a drawing that isn’t in the shop?</PolicyH2>
      <p>
        Yes — some drawings, such as the Abbaye aux Dames and the Guggenheim Bilbao, aren’t listed yet. Use the
        “Ask about this print” button on their page, or email{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>
          {CONTACT_EMAIL}
        </a>
        . Commission enquiries are welcome the same way.
      </p>

      <PolicyH2>Who makes the artwork?</PolicyH2>
      <p>
        Every piece is drawn by Gerald Allen Knowles, an architect and artist. Read his story on the{" "}
        <Link to="/about" className={linkClass}>
          about page
        </Link>
        .
      </p>
    </PolicyPage>
  );
}
