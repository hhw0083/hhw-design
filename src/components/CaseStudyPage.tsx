import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import type { ReactNode } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Layers3,
  MapPinned,
  Palette,
  RefreshCw,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  CoreComponentsSection,
  DesignSystemFoundations,
} from "@/components/DesignSystemPage";
import { InteractiveSitemap } from "@/components/InteractiveSitemap";
import { DesignGoalsSection } from "@/components/case-study/DesignGoalsSection";
import { CaseStudySectionLayout } from "@/components/case-study/CaseStudySectionLayout";
import type {
  CaseStudyCardIcon,
  CaseStudyContentBlock,
  CaseStudyVisualKind,
  Project,
} from "@/data/projects";

type ScreenKind = CaseStudyVisualKind;

const cardIcons = {
  palette: Palette,
  layers: Layers3,
  code: Code2,
  accessibility: ShieldCheck,
  refresh: RefreshCw,
  sparkles: Sparkles,
} satisfies Record<CaseStudyCardIcon, typeof Palette>;

function TextCard({
  title,
  description,
  eyebrow,
  icon,
}: {
  title: string;
  description: string;
  eyebrow?: string;
  icon?: ReactNode;
}) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start gap-3">
        {icon ? (
          <div className="grid size-10 shrink-0 place-items-center rounded-lg border border-teal-100 bg-teal-50 text-cyanline">
            {icon}
          </div>
        ) : null}
        <div>
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyanline">
              {eyebrow}
            </p>
          ) : null}
          <h3 className={eyebrow ? "mt-2 text-lg font-semibold text-slate-950" : "text-lg font-semibold text-slate-950"}>
            {title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}

function ScreenMockup({ kind }: { kind: ScreenKind }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-slate-200 bg-[#f7fbf8] shadow-sm">
      <div className="absolute inset-x-0 top-0 flex h-10 items-center gap-2 border-b border-slate-200 bg-white px-4">
        <span className="size-2 rounded-full bg-red-300" />
        <span className="size-2 rounded-full bg-amber-300" />
        <span className="size-2 rounded-full bg-emerald-400" />
        <span className="ml-3 h-3 w-32 rounded-full bg-slate-100" />
      </div>
      <div className="absolute inset-x-0 bottom-0 top-10 p-4">
        {kind === "home" ? <HomePreview /> : null}
        {kind === "login" ? <LoginPreview /> : null}
        {kind === "list" ? <ListPreview /> : null}
        {kind === "map" ? <MapPreview /> : null}
        {kind === "news" ? <NewsPreview /> : null}
        {kind === "certificate" ? <CertificatePreview /> : null}
      </div>
    </div>
  );
}

function HomePreview() {
  return (
    <div className="grid h-full gap-3 md:grid-cols-[1fr_0.75fr]">
      <div className="rounded-lg bg-gradient-to-br from-teal-700 to-emerald-500 p-4 text-white">
        <div className="h-3 w-24 rounded-full bg-white/45" />
        <div className="mt-8 h-8 w-48 rounded-full bg-white/80" />
        <div className="mt-3 h-3 w-56 rounded-full bg-white/45" />
        <div className="mt-8 grid grid-cols-3 gap-2">
          {[1, 2, 3].map((item) => (
            <div key={item} className="h-12 rounded-lg bg-white/20" />
          ))}
        </div>
      </div>
      <div className="grid gap-3">
        <div className="rounded-lg border border-slate-200 bg-white p-3">
          <div className="h-3 w-24 rounded-full bg-slate-200" />
          <div className="mt-4 grid grid-cols-3 gap-2">
            {[1, 2, 3].map((item) => (
              <div key={item} className="h-14 rounded-lg bg-teal-50" />
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-3">
          <div className="h-3 w-28 rounded-full bg-slate-200" />
          <div className="mt-4 space-y-2">
            <div className="h-3 rounded-full bg-slate-100" />
            <div className="h-3 w-3/4 rounded-full bg-slate-100" />
          </div>
        </div>
      </div>
    </div>
  );
}

function LoginPreview() {
  return (
    <div className="grid h-full place-items-center">
      <div className="w-full max-w-md rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mx-auto size-12 rounded-full bg-teal-50" />
        <div className="mx-auto mt-4 h-4 w-40 rounded-full bg-slate-200" />
        <div className="mt-6 grid gap-3">
          {["企業使用者", "管理者", "一般訪客"].map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-lg border border-slate-200 p-3">
              <div className="size-8 rounded-lg bg-teal-50" />
              <div className="h-3 w-24 rounded-full bg-slate-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ListPreview() {
  return (
    <div className="grid h-full gap-3 md:grid-cols-[13rem_1fr]">
      <aside className="rounded-lg border border-slate-200 bg-white p-3">
        <div className="h-3 w-24 rounded-full bg-slate-200" />
        <div className="mt-5 space-y-3">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="h-8 rounded-lg bg-slate-50" />
          ))}
        </div>
      </aside>
      <div className="grid gap-3">
        {[1, 2, 3].map((item) => (
          <div key={item} className="grid grid-cols-[7rem_1fr] gap-3 rounded-lg border border-slate-200 bg-white p-3">
            <div className="rounded-lg bg-gradient-to-br from-emerald-100 to-teal-200" />
            <div>
              <div className="h-3 w-40 rounded-full bg-slate-200" />
              <div className="mt-3 h-3 w-28 rounded-full bg-teal-100" />
              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="h-8 rounded-lg bg-slate-50" />
                <div className="h-8 rounded-lg bg-slate-50" />
                <div className="h-8 rounded-lg bg-slate-50" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MapPreview() {
  return (
    <div className="relative h-full overflow-hidden rounded-lg border border-slate-200 bg-[#e9f5ef]">
      <div className="absolute inset-0 bg-[linear-gradient(30deg,transparent_0_46%,rgba(19,125,106,0.18)_46%_48%,transparent_48%_100%),linear-gradient(120deg,transparent_0_58%,rgba(128,202,206,0.3)_58%_60%,transparent_60%_100%)]" />
      <div className="absolute left-4 top-4 w-56 rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
        <div className="h-3 w-24 rounded-full bg-slate-200" />
        <div className="mt-3 grid gap-2">
          <div className="h-8 rounded-lg bg-slate-50" />
          <div className="h-8 rounded-lg bg-slate-50" />
        </div>
      </div>
      {[["70%", "28%"], ["58%", "62%"], ["82%", "52%"], ["42%", "38%"]].map(
        ([left, top]) => (
          <div
            key={`${left}-${top}`}
            className="absolute grid size-9 place-items-center rounded-full bg-cyanline text-white shadow-lg"
            style={{ left, top }}
          >
            <MapPinned className="size-4" aria-hidden="true" />
          </div>
        ),
      )}
    </div>
  );
}

function NewsPreview() {
  return (
    <div className="grid h-full gap-3">
      <div className="rounded-lg border border-slate-200 bg-white p-4">
        <div className="h-4 w-36 rounded-full bg-slate-200" />
        <div className="mt-4 grid gap-3">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-lg bg-slate-50 p-3">
              <div className="size-9 rounded-full bg-teal-100" />
              <div className="flex-1">
                <div className="h-3 w-2/3 rounded-full bg-slate-200" />
                <div className="mt-2 h-2 w-1/2 rounded-full bg-slate-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CertificatePreview() {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="h-4 w-36 rounded-full bg-slate-200" />
          <div className="mt-2 h-3 w-24 rounded-full bg-teal-100" />
        </div>
        <div className="h-10 w-48 rounded-lg border border-slate-200 bg-slate-50" />
      </div>
      <div className="mt-5 overflow-hidden rounded-lg border border-slate-200">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="grid grid-cols-5 gap-3 border-b border-slate-200 p-3 last:border-b-0">
            <div className="h-3 rounded-full bg-slate-100" />
            <div className="h-3 rounded-full bg-slate-100" />
            <div className="h-3 rounded-full bg-slate-100" />
            <div className="h-3 rounded-full bg-teal-100" />
            <div className="h-3 rounded-full bg-slate-100" />
          </div>
        ))}
      </div>
    </div>
  );
}

function existingPublicImage(src?: string) {
  if (!src?.startsWith("/")) {
    return undefined;
  }

  return existsSync(join(process.cwd(), "public", src.replace(/^\/+/, "")))
    ? src
    : undefined;
}

function GalleryVisual({
  image,
  visual,
  title,
}: {
  image?: string;
  visual?: CaseStudyVisualKind;
  title: string;
}) {
  const existingImage = existingPublicImage(image);

  if (existingImage) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
        <Image
          src={existingImage}
          alt={title}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    );
  }

  return visual ? <ScreenMockup kind={visual} /> : null;
}

function CaseStudyBlock({ block }: { block: CaseStudyContentBlock }) {
  switch (block.type) {
    case "facts":
      return (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {block.items.map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                {item.label}
              </p>
              <p className="mt-3 font-semibold leading-7 text-slate-950">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      );

    case "cards": {
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
                  Icon ? <Icon className="size-5" aria-hidden="true" /> : undefined
                }
              />
            );
          })}
        </div>
      );
    }

    case "comparison":
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

    case "design-goals":
      return null;

    case "feature-gallery":
      return (
        <div className="grid gap-5">
          {block.items.map((item, index) => (
            <article
              key={item.title}
              className="grid gap-5 rounded-lg border border-slate-200 bg-white p-5 shadow-sm lg:grid-cols-[0.85fr_1.15fr] lg:items-center"
            >
              <div className={index % 2 ? "lg:order-2" : ""}>
                {item.eyebrow ? (
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyanline">
                    {item.eyebrow}
                  </p>
                ) : null}
                <h3 className="mt-3 text-2xl font-semibold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
              <GalleryVisual
                image={item.image}
                visual={item.visual}
                title={item.title}
              />
            </article>
          ))}
        </div>
      );

    case "architecture":
      return (
        <>
          <div className="grid gap-4 md:grid-cols-3">
            {block.groups.map((group) => (
              <article
                key={group.title}
                className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-950">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-slate-600"
                    >
                      <CheckCircle2
                        className="size-4 flex-none text-mint"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          {block.showInteractiveSitemap ? (
            <div className="mt-5">
              <InteractiveSitemap />
            </div>
          ) : null}
        </>
      );

    case "flow":
      return (
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-7">
            {block.items.map((step, index) => (
              <div key={step} className="relative">
                <div className="flex h-full min-h-24 flex-col rounded-lg border border-slate-200 bg-slate-50 p-4">
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

    case "design-system":
      return <DesignSystemFoundations />;

    case "ui-components":
      return (
        <div className="rounded-[24px] bg-[#FBF9F4] p-3 sm:p-4 md:p-5">
          <CoreComponentsSection />
        </div>
      );

    case "gallery":
      return (
        <div className="grid gap-5 md:grid-cols-2">
          {block.items.map((item) => (
            <article
              key={item.title}
              className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
            >
              <GalleryVisual
                image={item.image}
                visual={item.visual}
                title={item.title}
              />
              <h3 className="mt-4 text-lg font-semibold text-slate-950">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      );

    case "tags":
      return (
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-wrap gap-2">
            {block.items.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      );

    case "image": {
      const image = existingPublicImage(block.src);

      return image ? (
        <figure>
          <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            <Image
              src={image}
              alt={block.alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          {block.caption ? (
            <figcaption className="mt-3 text-sm leading-6 text-slate-500">
              {block.caption}
            </figcaption>
          ) : null}
        </figure>
      ) : null;
    }
  }
}

export function CaseStudyPage({ project }: { project: Project }) {
  return (
    <div>
      {project.caseStudySections.map((section, index) => {
        const designGoals =
          section.type === "goals"
            ? section.contentBlocks.find(
                (block) => block.type === "design-goals",
              )
            : undefined;

        if (designGoals?.type === "design-goals") {
          return (
            <DesignGoalsSection
              key={section.number}
              sectionNumber={section.number}
              eyebrow={section.title}
              title={section.subtitle}
              description={section.description}
              goals={designGoals.goals}
              previewImage={designGoals.previewImage}
              accentColor={project.theme.primary}
              secondaryColor={project.theme.secondary}
            />
          );
        }

        return (
          <CaseStudySectionLayout
            key={section.number}
            sectionNumber={section.number}
            eyebrow={section.title}
            title={section.subtitle}
            description={section.description}
            background={index % 2 === 0 ? "canvas" : "white"}
            layout={section.type === "user-flow" ? "narrative" : "showcase"}
            accentColor={project.theme.primary}
          >
            {section.contentBlocks.map((block, blockIndex) => (
              <CaseStudyBlock
                key={`${section.number}-${block.type}-${blockIndex}`}
                block={block}
              />
            ))}
          </CaseStudySectionLayout>
        );
      })}
    </div>
  );
}
