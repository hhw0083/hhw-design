import {
  CoreComponentsSection,
  DesignSystemFoundations,
} from "@/components/DesignSystemPage";
import type { CaseStudyContentBlock } from "@/data/projects";

type DesignSystemContentBlock =
  | Extract<CaseStudyContentBlock, { type: "design-system" }>
  | Extract<CaseStudyContentBlock, { type: "ui-components" }>;

export function DesignSystemBlock({
  block,
}: {
  block: DesignSystemContentBlock;
}) {
  if (block.type === "design-system") {
    return <DesignSystemFoundations />;
  }

  return (
    <div className="w-full min-w-0 rounded-[24px] bg-[#FBF9F4] p-3 sm:p-4 md:p-5">
      <CoreComponentsSection />
    </div>
  );
}
