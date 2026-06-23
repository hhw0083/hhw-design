import { ArrowRight } from "lucide-react";
import type { CaseStudyContentBlock } from "@/data/projects";

type ComparisonContentBlock = Extract<
  CaseStudyContentBlock,
  { type: "comparison" }
>;

export function ComparisonBlock({ block }: { block: ComparisonContentBlock }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="grid gap-3 md:grid-cols-[1fr_auto_1fr]">
        <div className="rounded-lg bg-slate-50 p-4">
          <p className="font-semibold text-slate-950">
            {block.sourceTitle}
          </p>
        </div>
        <div className="hidden items-center justify-center text-cyanline md:flex">
          <ArrowRight className="size-5" aria-hidden="true" />
        </div>
        <div className="rounded-lg bg-teal-50 p-4">
          <p className="font-semibold text-slate-950">
            {block.targetTitle}
          </p>
        </div>
      </div>
      <div className="mt-4 grid gap-3">
        {block.items.map((item) => (
          <div
            key={item.source}
            className="grid gap-3 rounded-lg border border-slate-200 p-3 md:grid-cols-[1fr_auto_1fr]"
          >
            <p className="text-sm text-slate-600">{item.source}</p>
            <ArrowRight
              className="hidden size-4 text-cyanline md:block"
              aria-hidden="true"
            />
            <p className="text-sm font-medium text-slate-950">
              {item.target}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
