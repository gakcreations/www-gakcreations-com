import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage, PolicyH2 } from "@/components/PolicyPage";

const URL = "https://www.gakcreations.com/terms";

export const Route = createFileRoute("/terms")({
  component: Terms,
  head: () => ({
    meta: [
      { title: "Terms of Service — GAK Creations" },
      {
        name: "description",
        content:
          "The terms and conditions that govern your use of the GAK Creations website and the purchase of fine art prints.",
      },
      { property: "og:title", content: "Terms of Service — GAK Creations" },
      {
        property: "og:description",
        content:
          "Terms and conditions for using the GAK Creations website and ordering fine art prints.",
      },
      { property: "og:url", content: URL },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
});

function Terms() {
  return (
    <PolicyPage eyebrow="Legal" title="Terms of Service" updated="July 2026">
      <p>
        These Terms of Service govern your access to and use of the GAK Creations website and the
        purchase of any products offered through it. By using the site or placing an order, you
        agree to these terms.
      </p>

      <PolicyH2>The Studio</PolicyH2>
      <p>
        GAK Creations is the trading name of the personal studio of Gerald Allen Knowles, publishing
        architectural drawings and travel collages as fine art prints. Orders are fulfilled by our
        print-on-demand partner Printify.
      </p>

      <PolicyH2>Intellectual Property</PolicyH2>
      <p>
        All artwork, images, text, and design elements on this site are the property of Gerald Allen
        Knowles and GAK Creations and are protected by copyright. You may not reproduce, distribute,
        or create derivative works without prior written permission.
      </p>

      <PolicyH2>Orders & Pricing</PolicyH2>
      <p>
        Prices and availability are subject to change without notice. We reserve the right to refuse
        or cancel any order for reasons including, but not limited to, product unavailability,
        pricing errors, or suspected fraud.
      </p>

      <PolicyH2>Shipping, Returns & Refunds</PolicyH2>
      <p>
        Shipping, returns, and refunds are governed by our{" "}
        <a href="/shipping-policy" className="text-ink underline">
          Shipping Policy
        </a>{" "}
        and{" "}
        <a href="/refund-policy" className="text-ink underline">
          Refund & Returns Policy
        </a>
        , which form part of these terms.
      </p>

      <PolicyH2>Limitation of Liability</PolicyH2>
      <p>
        To the fullest extent permitted by law, GAK Creations shall not be liable for any indirect,
        incidental, or consequential damages arising from your use of the site or products purchased
        through it. Our aggregate liability shall not exceed the amount paid by you for the product
        giving rise to the claim.
      </p>

      <PolicyH2>Governing Law</PolicyH2>
      <p>
        These terms are governed by the laws of the jurisdiction in which the studio is registered.
        Any dispute shall be resolved in the competent courts of that jurisdiction.
      </p>

      <PolicyH2>Contact</PolicyH2>
      <p>
        Questions about these terms can be sent to{" "}
        <a href="mailto:info@gakcreations.com" className="text-ink underline">
          info@gakcreations.com
        </a>
        .
      </p>
    </PolicyPage>
  );
}
