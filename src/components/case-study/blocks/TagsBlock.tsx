import { CaseStudyCardShell, TagList } from "@/components/ui";
import type { CaseStudyContentBlock } from "@/data/projects";

type TagsContentBlock = Extract<CaseStudyContentBlock, { type: "tags" }>;

export function TagsBlock({ block }: { block: TagsContentBlock }) {
  return (
    <CaseStudyCardShell>
      <TagList tags={block.items} />
    </CaseStudyCardShell>
  );
}
