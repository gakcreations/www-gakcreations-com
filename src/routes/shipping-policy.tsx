import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage, PolicyH2 } from "@/components/PolicyPage";

const URL = "https://www.gakcreations.com/shipping-policy";

export const Route = createFileRoute("/shipping-policy")({
  component: ShippingPolicy,
  head: () => ({
    meta: [
      { title: "Shipping Policy — GAK Creations" },
      {
        name: "description",
        content:
          "Production times, shipping regions, delivery estimates, and carriers for GAK Creations fine art prints fulfilled by Printify.",
      },
      { property: "og:title", content: "Shipping Policy — GAK Creations" },
      {
        property: "og:description",
        content:
          "Production times, delivery estimates, and shipping regions for fine art prints from GAK Creations.",
      },
      { property: "og:url", content: URL },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
});

function ShippingPolicy() {
  return (
    <PolicyPage eyebrow="Customer Care" title="Shipping Policy" updated="July 2026">
      <p>
        All GAK Creations fine art prints are made to order and fulfilled through our
        print-on-demand partner Printify and their global network of print providers. This policy
        outlines how orders are produced, shipped, and delivered.
      </p>

      <PolicyH2>Production Time</PolicyH2>
      <p>
        Because each print is produced on demand, please allow <strong>2 to 7 business days</strong>{" "}
        for production before your order is dispatched. Framed prints and larger formats may require
        additional production time.
      </p>

      <PolicyH2>Shipping Times</PolicyH2>
      <ul className="list-disc space-y-2 pl-6">
        <li>United States: 4 – 8 business days after production</li>
        <li>Canada: 5 – 10 business days after production</li>
        <li>Europe & United Kingdom: 5 – 10 business days after production</li>
        <li>Australia & New Zealand: 10 – 20 business days after production</li>
        <li>Rest of the world: 10 – 30 business days after production</li>
      </ul>
      <p>
        Delivery times are estimates provided by our carriers and can be affected by customs,
        weather, or peak seasons.
      </p>

      <PolicyH2>Shipping Costs</PolicyH2>
      <p>
        Shipping is calculated at checkout based on destination, product weight, and dimensions. Any
        duties, taxes, or customs fees for international orders are the responsibility of the
        recipient.
      </p>

      <PolicyH2>Ships From</PolicyH2>
      <p>
        Orders ship directly from the Printify print provider closest to your delivery address,
        typically located in the United States, United Kingdom, Germany, Latvia, Australia, or China
        depending on the product and region.
      </p>

      <PolicyH2>Order Tracking</PolicyH2>
      <p>
        Once your order ships, you will receive a confirmation email with a tracking number. If you
        have not received tracking within 10 business days, please contact us at{" "}
        <a href="mailto:info@gakcreations.com" className="text-ink underline">
          info@gakcreations.com
        </a>
        .
      </p>

      <PolicyH2>Undeliverable & Lost Packages</PolicyH2>
      <p>
        If a package is returned to sender because of an incorrect address provided at checkout, the
        customer is responsible for the cost of reshipment. For lost packages, please contact us
        within 30 days of the estimated delivery date so we can open a claim with Printify and the
        carrier.
      </p>
    </PolicyPage>
  );
}
