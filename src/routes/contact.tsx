import { createFileRoute } from "@tanstack/react-router";
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
} from "@/lib/seo";

const PATH = "/contact";
const TITLE = "Contact GAK Creations | Orders, Shipping & Commission Enquiries";
const DESCRIPTION =
  "Contact GAK Creations for help with fine art print orders, shipping, returns, commissions and trade enquiries.";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: seoMeta({
      title: TITLE,
      description: DESCRIPTION,
      path: PATH,
    }),
    links: canonical(PATH),
    scripts: ldJson([
      websiteNode,
      organizationNode,
      artistNode,
      webPageNode(PATH, TITLE, DESCRIPTION),
      breadcrumbNode([
        { name: "Home", path: "/" },
        { name: "Contact", path: PATH },
      ]),
    ]),
  }),
});

function Contact() {
  return (
    <PolicyPage eyebrow="Customer Care" title="Contact Us" updated="July 2026">
      <p>
        Have a question about an order, a product, or anything else? We are happy to help. Reach out
        using the details below and we will get back to you as soon as possible.
      </p>

      <PolicyH2>Email</PolicyH2>
      <p>
        The best way to reach us is by email:{" "}
        <a href="mailto:info@gakcreations.com" className="text-ink underline">
          info@gakcreations.com
        </a>
        . We aim to respond to all enquiries within <strong>1 – 2 business days</strong> (Monday to
        Friday, excluding public holidays).
      </p>

      <PolicyH2>Order Enquiries</PolicyH2>
      <p>
        For questions about an existing order — including tracking, delays, damaged items, or
        cancellations — please include your <strong>order number</strong> and the email address used
        at checkout so we can look up your order quickly.
      </p>

      <PolicyH2>Returns & Refunds</PolicyH2>
      <p>
        For return or refund requests, please review our{" "}
        <a href="/refund-policy" className="text-ink underline">
          Refund &amp; Returns Policy
        </a>{" "}
        before getting in touch, then email us with your order number and a description of the
        issue. Items that arrive damaged or misprinted must be reported within{" "}
        <strong>30 days of delivery</strong>.
      </p>

      <PolicyH2>Shipping Questions</PolicyH2>
      <p>
        For information about production times, shipping regions, or estimated delivery dates, see
        our{" "}
        <a href="/shipping-policy" className="text-ink underline">
          Shipping Policy
        </a>
        . If your order has not arrived within the estimated window, contact us and we will open a
        trace with the carrier.
      </p>

      <PolicyH2>Business Information</PolicyH2>
      <p>
        GAK Creations is the trading name of the personal studio of Gerald Allen Knowles. Orders are
        fulfilled worldwide through our print-on-demand partner Printify.
      </p>
      <ul className="list-disc space-y-2 pl-6">
        <li>
          <strong>Business name:</strong> GAK Creations
        </li>
        <li>
          <strong>Contact email:</strong>{" "}
          <a href="mailto:info@gakcreations.com" className="text-ink underline">
            info@gakcreations.com
          </a>
        </li>
        <li>
          <strong>Website:</strong>{" "}
          <a href="https://www.gakcreations.com" className="text-ink underline">
            www.gakcreations.com
          </a>
        </li>
      </ul>
    </PolicyPage>
  );
}
