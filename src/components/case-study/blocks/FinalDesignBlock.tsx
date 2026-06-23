import { FinalDesignGallery } from "@/components/case-study/FinalDesignGallery";
import { existingPublicImage } from "@/components/case-study/publicImages";
import type { CaseStudyContentBlock } from "@/data/projects";

type FinalDesignContentBlock = Extract<
  CaseStudyContentBlock,
  { type: "gallery" }
>;

export function FinalDesignBlock({ block }: { block: FinalDesignContentBlock }) {
  return (
    <FinalDesignGallery
      items={block.items.map((item) => ({
        title: item.title,
        description: item.description,
        eyebrow: item.eyebrow,
        image: existingPublicImage(item.image),
        visual: item.visual,
      }))}
    />
  );
}
