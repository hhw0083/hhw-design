import { InteractiveSitemap } from "@/components/InteractiveSitemap";
import type { CaseStudyContentBlock } from "@/data/projects";

type ArchitectureContentBlock = Extract<
  CaseStudyContentBlock,
  { type: "architecture" }
>;
type SitemapTreeContentBlock = Extract<
  CaseStudyContentBlock,
  { type: "sitemap-tree" }
>;

type SitemapBlockProps =
  | { block: ArchitectureContentBlock }
  | { block: SitemapTreeContentBlock };

export function SitemapBlock({ block }: SitemapBlockProps) {
  if (block.type === "architecture") {
    return (
      <>
        {block.showInteractiveSitemap ? (
          <div>
            <InteractiveSitemap />
          </div>
        ) : null}
      </>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white px-5 py-8 shadow-sm sm:px-8 md:py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center">
        <div className="relative z-10 flex min-h-20 w-full max-w-72 items-center justify-center rounded-xl border border-teal-200 bg-teal-50 px-6 py-4 text-center shadow-sm">
          <p className="text-lg font-semibold text-slate-950">
            {block.root}
          </p>
        </div>

        <div className="hidden w-full md:block">
          <div className="mx-auto h-10 w-px bg-slate-300" />
          <div className="relative grid grid-cols-7 gap-3 pt-10">
            <div className="absolute left-[7.14%] right-[7.14%] top-0 h-px bg-slate-300" />
            {block.items.map((item) => (
              <div key={item} className="relative">
                <div className="absolute -top-10 left-1/2 h-10 w-px -translate-x-1/2 bg-slate-300" />
                <div className="flex min-h-28 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-3 py-5 text-center shadow-[0_10px_28px_rgba(15,23,42,0.05)]">
                  <p className="text-sm font-semibold leading-6 text-slate-800">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-6 w-full max-w-lg space-y-3 pl-10 md:hidden">
          <div className="absolute bottom-6 left-4 top-0 w-px bg-slate-300" />
          {block.items.map((item) => (
            <div key={item} className="relative">
              <div className="absolute -left-6 top-1/2 h-px w-6 bg-slate-300" />
              <div className="flex min-h-16 items-center rounded-xl border border-slate-200 bg-slate-50 px-5 py-3 shadow-sm">
                <p className="text-sm font-semibold text-slate-800">
                  {item}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
