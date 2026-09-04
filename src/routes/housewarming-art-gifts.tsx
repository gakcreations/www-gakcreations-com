import { createFileRoute } from "@tanstack/react-router";
import { BuyerGuidePage, guideHead } from "@/components/BuyerGuide";
import { getGuide } from "@/data/guides";

const guide = getGuide("housewarming-art-gifts")!;

export const Route = createFileRoute("/housewarming-art-gifts")({
  component: () => <BuyerGuidePage guide={guide} />,
  head: () => guideHead(guide),
});
