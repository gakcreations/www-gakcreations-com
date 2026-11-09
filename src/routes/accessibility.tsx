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
  CONTACT_EMAIL,
} from "@/lib/seo";

const PATH = "/accessibility";
const TITLE = "Accessibility Statement | GAK Creations";
const DESCRIPTION =
  "How GAK Creations makes its art print website usable for everyone, what we know still needs work, and how to ask for help or report a problem.";

export const Route = createFileRoute("/accessibility")({
  component: Accessibility,
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
        { name: "Accessibility", path: PATH },
      ]),
    ]),
  }),
});

function Accessibility() {
  return (
    <PolicyPage eyebrow="Customer Care" title="Accessibility statement" updated="November 2026">
      <p>
        We want everyone to be able to browse and buy GAK Creations prints, whatever device or assistive
        technology they use. We aim to follow the Web Content Accessibility Guidelines (WCAG) 2.2 at level AA.
      </p>

      <PolicyH2>What we do</PolicyH2>
      <ul className="list-disc space-y-2 pl-6">
        <li>Every artwork image has a written description of what it shows.</li>
        <li>Pages use clear headings, labelled menus and breadcrumbs, so screen readers can move around easily.</li>
        <li>Links, buttons, the search box and the filters can be used with a keyboard.</li>
        <li>Text can be enlarged with your browser zoom without losing content.</li>
        <li>Prices, sizes and print details are written as text, not only shown in pictures.</li>
      </ul>

      <PolicyH2>Known limitations</PolicyH2>
      <p>
        Checkout happens in our Printify shop, which is run by Printify, so we can’t change how that part works.
        If you have trouble ordering there, email us and we will help you place the order.
      </p>

      <PolicyH2>Ask for help or report a problem</PolicyH2>
      <p>
        If something on the site is hard to use, or you’d like details of a print in another format, email{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-ink underline">
          {CONTACT_EMAIL}
        </a>{" "}
        and tell us the page and what happened.
      </p>
    </PolicyPage>
  );
}
