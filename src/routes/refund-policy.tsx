import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage, PolicyH2 } from "@/components/PolicyPage";

const URL = "https://www.gakcreations.com/refund-policy";

export const Route = createFileRoute("/refund-policy")({
  component: RefundPolicy,
  head: () => ({
    meta: [
      { title: "Refund & Returns Policy — GAK Creations" },
      {
        name: "description",
        content:
          "Returns, refunds, and replacements for GAK Creations fine art prints made to order through Printify.",
      },
      { property: "og:title", content: "Refund & Returns Policy — GAK Creations" },
      {
        property: "og:description",
        content:
          "How refunds, returns, and replacements work for made-to-order GAK Creations prints.",
      },
      { property: "og:url", content: URL },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
});

function RefundPolicy() {
  return (
    <PolicyPage eyebrow="Customer Care" title="Refund & Returns Policy" updated="July 2026">
      <p>
        Every GAK Creations print is produced on demand specifically for you. Because our products
        are custom-made, we cannot accept returns for change of mind, but we stand behind the
        quality of every piece we ship.
      </p>

      <PolicyH2>Damaged, Defective, or Misprinted Items</PolicyH2>
      <p>
        If your order arrives damaged, defective, or misprinted, we will replace it or issue a full
        refund at no additional cost. Please contact us within <strong>30 days of delivery</strong>{" "}
        at{" "}
        <a href="mailto:info@gakcreations.com" className="text-ink underline">
          info@gakcreations.com
        </a>{" "}
        with:
      </p>
      <ul className="list-disc space-y-2 pl-6">
        <li>Your order number</li>
        <li>A clear photo of the item and its packaging</li>
        <li>A short description of the issue</li>
      </ul>

      <PolicyH2>Wrong Address or Unclaimed Shipments</PolicyH2>
      <p>
        Orders returned to sender because of an incorrect or incomplete address provided at
        checkout, or because they were unclaimed at the delivery location, are the responsibility of
        the customer. A reshipment fee will apply.
      </p>

      <PolicyH2>Return Address</PolicyH2>
      <p>
        Please do <strong>not</strong> send items back to GAK Creations directly. Returns for
        eligible cases must be shipped to the Printify return address printed on the shipping label
        of your parcel, which is the address of the fulfillment provider that produced your order.
        Contact us first so we can authorize the return and confirm the correct address.
      </p>

      <PolicyH2>Refunds</PolicyH2>
      <p>
        Approved refunds are issued to the original payment method within{" "}
        <strong>5 – 10 business days</strong> of approval. Original shipping costs are
        non-refundable except in cases of a defective or misprinted product.
      </p>

      <PolicyH2>Cancellations</PolicyH2>
      <p>
        Because production begins shortly after checkout, order changes and cancellations can only
        be honored if requested within <strong>12 hours</strong> of placing your order.
      </p>
    </PolicyPage>
  );
}
