import { createFileRoute } from "@tanstack/react-router";
import { BuyerGuidePage, guideHead } from "@/components/BuyerGuide";
import { getGuide } from "@/data/guides";

const guide = getGuide("bedroom-wall-art")!;

export const Route = createFileRoute("/bedroom-wall-art")({
  component: () => <BuyerGuidePage guide={guide} />,
  head: () => guideHead(guide),
});
