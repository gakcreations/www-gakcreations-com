import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage, PolicyH2 } from "@/components/PolicyPage";

const URL = "https://www.gakcreations.com/privacy-policy";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicy,
  head: () => ({
    meta: [
      { title: "Privacy Policy — GAK Creations" },
      {
        name: "description",
        content:
          "How GAK Creations collects, uses, and protects personal information when you visit the site or place an order.",
      },
      { property: "og:title", content: "Privacy Policy — GAK Creations" },
      {
        property: "og:description",
        content: "How GAK Creations handles personal data, cookies, and your privacy rights.",
      },
      { property: "og:url", content: URL },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
});

function PrivacyPolicy() {
  return (
    <PolicyPage eyebrow="Legal" title="Privacy Policy" updated="July 2026">
      <p>
        GAK Creations respects your privacy. This policy describes what information we collect when
        you visit our website or place an order, how we use it, and the choices you have.
      </p>

      <PolicyH2>Information We Collect</PolicyH2>
      <ul className="list-disc space-y-2 pl-6">
        <li>
          <strong>Order information</strong> — name, shipping address, billing address, email, and
          phone number provided at checkout.
        </li>
        <li>
          <strong>Payment information</strong> — processed securely by our payment providers. We
          never store full card numbers.
        </li>
        <li>
          <strong>Usage information</strong> — pages visited, device and browser type, referring
          URL, and other analytics data collected through cookies.
        </li>
      </ul>

      <PolicyH2>How We Use Your Information</PolicyH2>
      <ul className="list-disc space-y-2 pl-6">
        <li>To process and ship your order and provide customer support.</li>
        <li>To send order confirmations, shipping updates, and receipts.</li>
        <li>To improve the website, our products, and the shopping experience.</li>
        <li>To comply with legal, tax, and accounting obligations.</li>
      </ul>

      <PolicyH2>Sharing With Third Parties</PolicyH2>
      <p>
        We share your information only with the service providers necessary to fulfill your order,
        including:
      </p>
      <ul className="list-disc space-y-2 pl-6">
        <li>
          <strong>Printify</strong> and its print providers, for production and shipping of your
          order.
        </li>
        <li>Payment processors, for secure transaction handling.</li>
        <li>Shipping carriers, for delivery and tracking.</li>
        <li>
          Analytics providers (such as Google), which may set cookies to help us understand how the
          site is used.
        </li>
      </ul>
      <p>We do not sell your personal information.</p>

      <PolicyH2>Cookies</PolicyH2>
      <p>
        This site uses cookies to keep the site working correctly and to understand usage. You can
        disable cookies in your browser settings, though some parts of the site may not function
        properly if you do.
      </p>

      <PolicyH2>Your Rights</PolicyH2>
      <p>
        Depending on where you live, you may have the right to access, correct, or delete the
        personal information we hold about you, and to object to certain processing. To exercise
        these rights, email us at{" "}
        <a href="mailto:info@gakcreations.com" className="text-ink underline">
          info@gakcreations.com
        </a>
        .
      </p>

      <PolicyH2>Data Retention</PolicyH2>
      <p>
        We retain order information for as long as required to fulfill orders and to meet legal,
        tax, and accounting requirements.
      </p>

      <PolicyH2>Contact</PolicyH2>
      <p>
        For any privacy question or request, contact GAK Creations at{" "}
        <a href="mailto:info@gakcreations.com" className="text-ink underline">
          info@gakcreations.com
        </a>
        .
      </p>
    </PolicyPage>
  );
}
