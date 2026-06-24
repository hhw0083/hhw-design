import { GalleryCard } from "@/components/ui";
import type { CaseStudyContentBlock } from "@/data/projects";
import { GalleryVisual } from "./GalleryVisual";

type FeatureGalleryContentBlock = Extract<
  CaseStudyContentBlock,
  { type: "feature-gallery" }
>;

export function GalleryBlock({ block }: { block: FeatureGalleryContentBlock }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {block.items.map((item) => (
        <GalleryCard
          key={item.title}
          title={item.title}
          description={item.description}
          eyebrow={item.eyebrow}
        >
          <GalleryVisual
            image={item.image}
            visual={item.visual}
            title={item.title}
            aspectRatio={item.aspectRatio}
            compact
          />
        </GalleryCard>
      ))}
    </div>
  );
}
