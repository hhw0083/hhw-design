import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  BriefcaseBusiness,
  Clock3,
  PackageCheck,
  PanelsTopLeft,
} from "lucide-react";
import { ProjectVisual } from "@/components/ProjectVisual";
import type { Project } from "@/data/projects";

type ProjectHeroProps = {
  project: Project;
};

const metaIcons = {
  Role: BriefcaseBusiness,
  Scope: PanelsTopLeft,
  Timeline: Clock3,
  Deliverables: PackageCheck,
};

const metaDividerClasses = [
  "",
  "border-t border-slate-200/70 md:border-l md:border-t-0",
  "border-t border-slate-200/70 lg:border-l lg:border-t-0",
  "border-t border-slate-200/70 md:border-l lg:border-t-0",
];

export function ProjectHero({ project }: ProjectHeroProps) {
  const metaItems: {
    label: keyof typeof metaIcons;
    content: ReactNode;
  }[] = [
    {
      label: "Role",
      content: project.role,
    },
    {
      label: "Scope",
      content: project.scope,
    },
    {
      label: "Timeline",
      content: project.timeline,
    },
    {
      label: "Deliverables",
      content: (
        <>
          {project.deliverables.map((deliverable, index) => (
            <span key={deliverable} className="whitespace-nowrap">
              {deliverable}
              {index < project.deliverables.length - 1 ? " / " : ""}
            </span>
          ))}
        </>
      ),
    },
  ];

  return (
    <section
      className="relative isolate overflow-hidden border-b border-slate-200/80 bg-[#F4F5F6] pb-14 pt-24 text-slate-950 md:pb-20 md:pt-28"
      style={
        {
          "--project-primary": project.theme.primary,
          "--project-secondary": project.theme.secondary,
          "--project-accent": project.theme.accent,
        } as CSSProperties
      }
    >
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(135deg,#FFFFFF_0%,#F5F6F7_48%,#E9EBEE_100%)]" />
      <div className="pointer-events-none absolute -right-40 -top-44 -z-10 size-[40rem] rounded-full bg-white/90 blur-[150px]" />
      <div className="pointer-events-none absolute -bottom-48 left-[26%] -z-10 h-80 w-[48rem] rounded-full bg-slate-300/30 blur-[150px]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-[46%] bg-[linear-gradient(135deg,rgba(255,255,255,0),rgba(15,23,42,0.045))]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[3.5rem_minmax(0,1fr)_auto] items-center gap-3 md:grid-cols-[6rem_minmax(0,1fr)_auto] md:gap-6">
          <p className="text-4xl font-semibold leading-none text-cyanline md:text-6xl">
            01
          </p>
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyanline md:tracking-[0.16em]">
              Project Overview
            </p>
            <h2 className="mt-1.5 text-2xl font-semibold leading-tight text-slate-950 md:text-4xl">
              專案概覽
            </h2>
          </div>

          <Link
            href="/#projects"
            className="inline-flex h-10 shrink-0 items-center gap-2 justify-self-end rounded-lg border border-slate-300/80 bg-white/70 px-3 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-md transition-[background-color,border-color,color,box-shadow] duration-200 hover:border-slate-400 hover:bg-white hover:text-slate-950 hover:shadow-md"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            <span className="hidden sm:inline">Back to projects</span>
            <span className="sm:hidden">Back</span>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="lg:col-span-6">
            <h1 className="text-4xl font-semibold leading-[1.12] text-slate-950 sm:text-5xl lg:text-[3.5rem]">
              {project.title}
            </h1>
            <p className="mt-3 text-lg font-medium text-slate-500 md:text-xl">
              {project.subtitle}
            </p>
            <p className="mt-7 max-w-xl whitespace-pre-line text-base leading-8 text-slate-600 md:text-lg md:leading-9">
              {project.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-slate-200/90 bg-white/65 px-3 py-2 text-xs font-medium text-slate-700 shadow-sm backdrop-blur-md sm:text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative lg:col-span-6">
            <div className="pointer-events-none absolute inset-10 rounded-full bg-slate-500/10 blur-[80px]" />
            <div className="relative">
              <ProjectVisual project={project} />
            </div>
          </div>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-3xl border border-white/80 bg-white/60 shadow-[0_24px_80px_rgba(15,23,42,0.09),0_0_24px_rgba(15,23,42,0.04)] backdrop-blur-xl md:mt-14">
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.95),transparent)]" />
          <div className="pointer-events-none absolute -right-16 -top-20 size-48 rounded-full bg-white/55 blur-3xl" />
          <dl className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {metaItems.map((item, index) => {
              const Icon = metaIcons[item.label];

              return (
                <div
                  key={item.label}
                  className={`min-w-0 p-6 md:p-7 ${metaDividerClasses[index]}`}
                >
                  <dt className="flex items-center gap-3 text-sm font-semibold text-slate-950">
                    <Icon
                      className="size-5 shrink-0 text-cyanline"
                      aria-hidden="true"
                    />
                    {item.label}
                  </dt>
                  <dd className="mt-4 text-sm leading-7 text-slate-600">
                    {item.content}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}
