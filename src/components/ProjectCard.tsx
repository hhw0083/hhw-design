import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { getProjectCardMetrics } from "@/data/projectCardMetrics";
import { ProjectVisual } from "./ProjectVisual";

type ProjectCardProps = {
  project: Project;
};

const mobileMetricLabelMap: Record<string, string> = {
  applications: "Apps",
  "brand applications": "Apps",
  "color groups": "Colors",
  "color sets": "Colors",
  "final visuals": "Visuals",
  "service flows": "Flows",
  "core pages": "Pages",
  "rwd views": "RWD",
  sections: "Sections",
  components: "Comps",
  concepts: "Concepts",
};

function getMobileMetricLabel(label: string) {
  return mobileMetricLabelMap[label.toLowerCase()] ?? label;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const metrics = getProjectCardMetrics(project);

  return (
    <Link
      href={`/projects/${project.slug}`}
      aria-label={`查看 ${project.title} 專案`}
      className="group mb-8 block rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-4"
    >
      <article className="grid transform-gpu gap-7 rounded-lg border border-stroke-soft bg-surface-paper p-4 shadow-portfolio-card [backface-visibility:hidden] will-change-transform transition-[transform,border-color,box-shadow] duration-300 ease-out motion-safe:group-hover:-translate-y-1 group-hover:border-stroke-muted group-hover:shadow-[0_28px_70px_rgba(15,23,42,0.12)] motion-reduce:transition-none md:p-6 lg:grid-cols-[0.95fr_1fr] lg:gap-10">
        <ProjectVisual project={project} compact />
        <div className="min-w-0 flex flex-col justify-between gap-8">
          <div>
            <p className="text-sm font-medium text-brand-primary">
              {project.eyebrow}
            </p>
            <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
              <h3 className="text-2xl font-semibold text-copy-primary md:text-3xl">
                {project.title}
              </h3>
              <span className="text-sm text-copy-muted">{project.year}</span>
            </div>
            <p className="mt-4 line-clamp-2 max-w-2xl text-base leading-8 text-copy-secondary md:line-clamp-none">
              {project.summary}
            </p>
            <div className="mt-5 hidden flex-wrap gap-2 md:flex">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-stroke-soft bg-slate-50 px-3 py-1.5 text-xs font-medium text-copy-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-5 md:flex md:flex-wrap md:items-center md:justify-between">
            <div className="grid grid-cols-3 gap-2 md:gap-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="min-w-0">
                  <p className="text-lg font-semibold text-copy-primary">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-xs leading-tight text-copy-muted md:hidden">
                    {getMobileMetricLabel(metric.label)}
                  </p>
                  <p className="mt-1 hidden text-xs text-copy-muted md:block">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
            <span className="ml-auto inline-flex h-11 w-fit items-center gap-2 rounded-full bg-surface-dark px-4 text-sm font-semibold text-white transition-colors duration-300 ease-out group-hover:bg-brand-primary motion-reduce:transition-none">
              View case
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
