import { RmicComponentExtensionBoard } from "@/components/project-specific/RmicComponentExtensionBoard";
import { TcbDesignSystemBoard } from "@/components/project-specific/TcbDesignSystemBoard";
import type { CaseStudyContentBlock } from "@/data/projects";
import { GalleryVisual } from "./GalleryVisual";

type VisualShowcaseContentBlock = Extract<
  CaseStudyContentBlock,
  { type: "visual-showcase" }
>;

export function CustomBoardBlock({
  block,
}: {
  block: VisualShowcaseContentBlock;
}) {
  if (
    block.items.length === 1 &&
    block.items[0]?.visual === "tcb-ui-components"
  ) {
    return <TcbDesignSystemBoard />;
  }

  if (
    block.items.length === 1 &&
    block.items[0]?.visual === "rmic-component-extension"
  ) {
    return <RmicComponentExtensionBoard />;
  }

  const isHeroGrid = block.layout === "hero-grid";
  const columnClass =
    block.layout === "single" ? "grid-cols-1" : "md:grid-cols-2";

  return (
    <div className={`grid gap-5 ${columnClass}`}>
      {block.items.map((item, index) => (
        <article
          key={item.title}
          className={`overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 p-3 shadow-[0_18px_48px_rgba(15,23,42,0.06)] sm:p-4 ${
            isHeroGrid && index === 0 ? "md:col-span-2" : ""
          }`}
        >
          <GalleryVisual
            image={item.image}
            visual={item.visual}
            title={item.title}
            aspectRatio={item.aspectRatio}
          />
          <div className="px-1 pb-1 pt-4">
            <h3 className="text-lg font-semibold text-slate-950">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              {item.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
