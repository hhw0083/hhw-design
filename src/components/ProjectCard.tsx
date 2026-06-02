import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectVisual } from "./ProjectVisual";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="grid gap-6 border-t border-white/[0.12] py-8 lg:grid-cols-[0.82fr_1fr] lg:gap-10">
      <ProjectVisual project={project} compact />
      <div className="flex flex-col justify-between gap-8">
        <div>
          <p className="text-sm font-medium text-cyanline">{project.eyebrow}</p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
            <h3 className="text-2xl font-semibold text-white md:text-3xl">
              {project.title}
            </h3>
            <span className="text-sm text-slate-400">{project.year}</span>
          </div>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
            {project.summary}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-slate-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-5">
          <div className="grid grid-cols-3 gap-3">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <p className="text-lg font-semibold text-white">
                  {metric.value}
                </p>
                <p className="mt-1 text-xs text-slate-500">{metric.label}</p>
              </div>
            ))}
          </div>
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex h-11 items-center gap-2 rounded-md bg-cyanline px-4 text-sm font-semibold text-ink transition hover:bg-mint"
          >
            View case
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
