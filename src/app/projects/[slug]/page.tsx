import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { CaseStudyPage } from "@/components/CaseStudyPage";
import { ProjectVisual } from "@/components/ProjectVisual";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: `${project.title} | UI/UX Case Study`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-canvas pt-16 text-slate-950">
      <section className="grid-lines border-b border-slate-200 bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/#projects"
            className="inline-flex h-10 items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm font-semibold text-slate-700 transition hover:border-cyanline/60 hover:text-slate-950"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to projects
          </Link>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyanline">
                {project.eyebrow}
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-slate-950 md:text-6xl">
                {project.title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                {project.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7">
              <ProjectVisual project={project} />
            </div>
          </div>
        </div>
      </section>

      <CaseStudyPage project={project} />

      <section className="border-t border-slate-200 bg-white py-16">
        <div className="mx-auto flex max-w-7xl justify-center px-4 sm:px-6 lg:px-8">
          <Link
            href="/#contact"
            className="inline-flex h-12 items-center gap-2 rounded-lg bg-cyanline px-5 text-sm font-semibold text-white transition hover:bg-mint"
          >
            Discuss this case
            <ExternalLink className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
