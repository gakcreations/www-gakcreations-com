import { createFileRoute } from "@tanstack/react-router";
import { BuyerGuidePage, guideHead } from "@/components/BuyerGuide";
import { getGuide } from "@/data/guides";

const guide = getGuide("art-gifts-for-architects")!;

export const Route = createFileRoute("/art-gifts-for-architects")({
  component: () => <BuyerGuidePage guide={guide} />,
  head: () => guideHead(guide),
});
