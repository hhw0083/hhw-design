import { ArrowRight } from "lucide-react";
import type { CaseStudyContentBlock } from "@/data/projects";

type FlowContentBlock = Extract<CaseStudyContentBlock, { type: "flow" }>;

export function FlowBlock({ block }: { block: FlowContentBlock }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="grid items-stretch gap-3 md:grid-cols-2 xl:grid-cols-7">
        {block.items.map((step, index) => (
          <div key={step} className="relative">
            <div className="flex h-full min-h-32 flex-col justify-center rounded-lg border border-slate-200 bg-slate-50 p-4 xl:min-h-36">
              <span className="text-xs font-semibold text-cyanline">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 text-sm font-semibold leading-6 text-slate-950">
                {step}
              </p>
            </div>
            {index < block.items.length - 1 ? (
              <ArrowRight
                className="mx-auto my-2 size-4 text-cyanline xl:absolute xl:-right-3 xl:top-1/2 xl:my-0 xl:-translate-y-1/2"
                aria-hidden="true"
              />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
