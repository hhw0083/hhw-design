import { ImageFrame } from "@/components/ui";
import type { CaseStudyContentBlock } from "@/data/projects";

type ImageContentBlock = Extract<CaseStudyContentBlock, { type: "image" }>;

export function ImageBlock({ block }: { block: ImageContentBlock }) {
  return (
    <ImageFrame
      src={block.src}
      alt={block.alt}
      caption={block.caption}
      parallax
    />
  );
}
