import { createFileRoute } from "@tanstack/react-router";
import { BuyerGuidePage, guideHead } from "@/components/BuyerGuide";
import { getGuide } from "@/data/guides";

const guide = getGuide("hallway-wall-art")!;

export const Route = createFileRoute("/hallway-wall-art")({
  component: () => <BuyerGuidePage guide={guide} />,
  head: () => guideHead(guide),
});
