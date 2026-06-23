import { CaseStudyCardShell, SectionBadge } from "@/components/ui";
import type { CaseStudyContentBlock } from "@/data/projects";

type FactsContentBlock = Extract<CaseStudyContentBlock, { type: "facts" }>;

export function FactsBlock({ block }: { block: FactsContentBlock }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {block.items.map((item) => (
        <CaseStudyCardShell key={item.label}>
          <SectionBadge tone="muted">{item.label}</SectionBadge>
          <p className="mt-3 font-semibold leading-7 text-slate-950">
            {item.value}
          </p>
        </CaseStudyCardShell>
      ))}
    </div>
  );
}
