import type { CaseStudyContentBlock } from "@/data/projects";
import { CardsBlock } from "./blocks/CardsBlock";
import { ComparisonBlock } from "./blocks/ComparisonBlock";
import { CustomBoardBlock } from "./blocks/CustomBoardBlock";
import { DesignSystemBlock } from "./blocks/DesignSystemBlock";
import { FactsBlock } from "./blocks/FactsBlock";
import { FinalDesignBlock } from "./blocks/FinalDesignBlock";
import { FlowBlock } from "./blocks/FlowBlock";
import { GalleryBlock } from "./blocks/GalleryBlock";
import { ImageBlock } from "./blocks/ImageBlock";
import { SitemapBlock } from "./blocks/SitemapBlock";
import { TagsBlock } from "./blocks/TagsBlock";

export function CaseStudyRenderer({
  block,
}: {
  block: CaseStudyContentBlock;
}) {
  switch (block.type) {
    case "facts":
      return <FactsBlock block={block} />;

    case "cards":
      return <CardsBlock block={block} />;

    case "comparison":
      return <ComparisonBlock block={block} />;

    case "design-goals":
      return null;

    case "feature-gallery":
      return <GalleryBlock block={block} />;

    case "architecture":
      return <SitemapBlock block={block} />;

    case "sitemap-tree":
      return <SitemapBlock block={block} />;

    case "flow":
      return <FlowBlock block={block} />;

    case "design-system":
    case "ui-components":
      return <DesignSystemBlock block={block} />;

    case "gallery":
      return <FinalDesignBlock block={block} />;

    case "visual-showcase":
      return <CustomBoardBlock block={block} />;

    case "tags":
      return <TagsBlock block={block} />;

    case "image":
      return <ImageBlock block={block} />;
  }
}
