import {
  Accessibility,
  Bell,
  Code2,
  Gauge,
  Layers3,
  MapPinned,
  MonitorCog,
  Moon,
  Palette,
  RefreshCw,
  Server,
  Sparkles,
  Workflow,
} from "lucide-react";
import { TextCard } from "@/components/ui";
import type {
  CaseStudyCardIcon,
  CaseStudyContentBlock,
} from "@/data/projects";

type CardsContentBlock = Extract<CaseStudyContentBlock, { type: "cards" }>;

const cardIcons = {
  palette: Palette,
  layers: Layers3,
  code: Code2,
  accessibility: Accessibility,
  "map-pinned": MapPinned,
  refresh: RefreshCw,
  sparkles: Sparkles,
  gauge: Gauge,
  monitor: MonitorCog,
  moon: Moon,
  workflow: Workflow,
  bell: Bell,
  server: Server,
} satisfies Record<CaseStudyCardIcon, typeof Palette>;

export function CardsBlock({ block }: { block: CardsContentBlock }) {
  const columnClass =
    block.columns === 5
      ? "md:grid-cols-2 xl:grid-cols-5"
      : block.columns === 2
        ? "md:grid-cols-2"
        : "md:grid-cols-3";

  return (
    <div className={`grid gap-4 ${columnClass}`}>
      {block.items.map((card) => {
        const Icon = card.icon ? cardIcons[card.icon] : undefined;

        return (
          <TextCard
            key={`${card.eyebrow ?? ""}-${card.title}`}
            title={card.title}
            description={card.description}
            eyebrow={card.eyebrow}
            icon={
              Icon ? (
                <Icon
                  className={
                    card.eyebrow?.startsWith("Challenge")
                      ? "size-6"
                      : "size-5"
                  }
                  aria-hidden="true"
                />
              ) : undefined
            }
            largeIcon={card.eyebrow?.startsWith("Challenge")}
          />
        );
      })}
    </div>
  );
}
