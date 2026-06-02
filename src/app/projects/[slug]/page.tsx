import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, CheckCircle2, ExternalLink } from "lucide-react";
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
    <main className="min-h-screen bg-ink pt-16 text-white">
      <section className="grid-lines border-b border-white/10 bg-[#070a0f] py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/#projects"
            className="inline-flex h-10 items-center gap-2 rounded-md border border-white/[0.14] bg-white/[0.06] px-3 text-sm font-semibold text-slate-200 transition hover:border-cyanline/60 hover:text-white"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to projects
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[0.78fr_1fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyanline">
                {project.eyebrow}
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-6xl">
                {project.title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                {project.summary}
              </p>
            </div>
            <ProjectVisual project={project} />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.7fr_1fr] lg:px-8">
          <aside className="space-y-4">
            <div className="rounded-md border border-white/[0.12] bg-white/[0.04] p-5">
              <p className="text-sm text-slate-500">Role</p>
              <p className="mt-2 font-semibold text-white">{project.role}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-md border border-white/[0.12] bg-white/[0.04] p-5">
                <p className="text-sm text-slate-500">Year</p>
                <p className="mt-2 font-semibold text-white">
                  {project.year}
                </p>
              </div>
              <div className="rounded-md border border-white/[0.12] bg-white/[0.04] p-5">
                <p className="text-sm text-slate-500">Duration</p>
                <p className="mt-2 font-semibold text-white">
                  {project.duration}
                </p>
              </div>
            </div>
            <div className="rounded-md border border-white/[0.12] bg-white/[0.04] p-5">
              <p className="text-sm text-slate-500">Tools</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-md border border-white/10 bg-black/[0.24] px-3 py-1.5 text-xs font-medium text-slate-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          <div className="space-y-10">
            <div className="grid gap-4 md:grid-cols-3">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-md border border-white/[0.12] bg-white/[0.04] p-5"
                >
                  <p className="text-3xl font-semibold text-white">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm text-slate-500">{metric.label}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <article className="rounded-md border border-white/[0.12] bg-white/[0.04] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brass">
                  Challenge
                </p>
                <p className="mt-4 leading-8 text-slate-300">
                  {project.challenge}
                </p>
              </article>
              <article className="rounded-md border border-white/[0.12] bg-white/[0.04] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-mint">
                  Outcome
                </p>
                <p className="mt-4 leading-8 text-slate-300">
                  {project.outcome}
                </p>
              </article>
            </div>

            <section>
              <h2 className="text-2xl font-semibold text-white">Process</h2>
              <div className="mt-5 space-y-3">
                {project.process.map((step, index) => (
                  <div
                    key={step}
                    className="grid gap-4 rounded-md border border-white/[0.12] bg-white/[0.04] p-5 md:grid-cols-[3rem_1fr]"
                  >
                    <span className="grid size-10 place-items-center rounded-md border border-cyanline/30 bg-cyanline/10 text-sm font-semibold text-cyanline">
                      {index + 1}
                    </span>
                    <p className="leading-8 text-slate-300">{step}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">
                Deliverables
              </h2>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {project.deliverables.map((deliverable) => (
                  <div
                    key={deliverable}
                    className="flex items-center gap-3 rounded-md border border-white/[0.12] bg-white/[0.04] p-4"
                  >
                    <CheckCircle2
                      className="size-5 flex-none text-mint"
                      aria-hidden="true"
                    />
                    <span className="text-sm font-medium text-slate-200">
                      {deliverable}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <Link
              href="/#contact"
              className="inline-flex h-12 items-center gap-2 rounded-md bg-cyanline px-5 text-sm font-semibold text-ink transition hover:bg-mint"
            >
              Discuss this case
              <ExternalLink className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
