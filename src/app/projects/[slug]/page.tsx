import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ArrowLeft, CheckCircle2, ExternalLink } from "lucide-react";
import { InteractiveSitemap } from "@/components/InteractiveSitemap";
import { ProjectVisual } from "@/components/ProjectVisual";
import {
  projects,
  type ColorGroup,
  type ComponentSpec,
  type DesignTokenSection,
  type Project,
  type ProjectScreen,
  type SitemapNode,
} from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

function hasItems<T>(items?: T[]) {
  return Boolean(items?.length);
}

function CaseStudySection({
  title,
  eyebrow,
  children,
}: {
  title: string;
  eyebrow?: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-portfolio-card sm:p-7">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyanline">
          {eyebrow}
        </p>
      ) : null}
      <h2 className={eyebrow ? "mt-3 text-2xl font-semibold text-slate-950" : "text-2xl font-semibold text-slate-950"}>
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function TextList({ items }: { items: string[] }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div key={item} className="flex gap-3">
          <CheckCircle2 className="mt-1 size-5 flex-none text-mint" aria-hidden="true" />
          <p className="leading-8 text-slate-600">{item}</p>
        </div>
      ))}
    </div>
  );
}

function SitemapTree({ nodes, depth = 0 }: { nodes: SitemapNode[]; depth?: number }) {
  return (
    <div className="space-y-3">
      {nodes.map((node) => (
        <div
          key={`${depth}-${node.label}`}
          className="rounded-lg border border-slate-200 bg-slate-50 p-4"
          style={{ marginLeft: depth ? 16 : 0 }}
        >
          <p className="font-semibold text-slate-950">{node.label}</p>
          {node.description ? (
            <p className="mt-2 text-sm leading-6 text-slate-500">
              {node.description}
            </p>
          ) : null}
          {hasItems(node.children) ? (
            <div className="mt-3">
              <SitemapTree nodes={node.children ?? []} depth={depth + 1} />
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

function DesignTokenGrid({ sections }: { sections: DesignTokenSection[] }) {
  return (
    <div className="space-y-5">
      {sections.map((section) => (
        <article key={section.title} className="rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-950">{section.title}</h3>
          {section.description ? (
            <p className="mt-2 text-sm leading-6 text-slate-500">
              {section.description}
            </p>
          ) : null}
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {section.tokens.map((token) => (
              <div key={token.name} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-semibold text-slate-950">{token.name}</p>
                  <code className="text-xs text-cyanline">{token.value}</code>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {token.usage}
                </p>
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

function ColorSystem({ groups }: { groups: ColorGroup[] }) {
  return (
    <div className="space-y-5">
      {groups.map((group) => (
        <article key={group.name} className="rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-950">{group.name}</h3>
          {group.description ? (
            <p className="mt-2 text-sm leading-6 text-slate-500">
              {group.description}
            </p>
          ) : null}
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {group.colors.map((color) => (
              <div key={color.name} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <div
                  className="mb-4 h-12 rounded-lg border border-slate-200"
                  style={{ backgroundColor: color.value }}
                />
                <p className="font-semibold text-slate-950">{color.name}</p>
                <code className="mt-1 block text-xs text-cyanline">
                  {color.value}
                </code>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {color.usage}
                </p>
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

function ComponentLibrary({ components }: { components: ComponentSpec[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {components.map((component) => (
        <article key={component.name} className="rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-950">{component.name}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            {component.purpose}
          </p>
          <div className="mt-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brass">
              Anatomy
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {component.anatomy.map((item) => (
                <span key={item} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-700">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mint">
              States
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {component.states.map((state) => (
                <span key={state} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-700">
                  {state}
                </span>
              ))}
            </div>
          </div>
          {hasItems(component.usageGuidelines) ? (
            <div className="mt-4 space-y-2">
              {component.usageGuidelines?.map((guideline) => (
                <p key={guideline} className="text-sm leading-6 text-slate-500">
                  {guideline}
                </p>
              ))}
            </div>
          ) : null}
        </article>
      ))}
    </div>
  );
}

function ScreenSpecs({ screens }: { screens: ProjectScreen[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {screens.map((screen) => (
        <article key={screen.name} className="rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-950">{screen.name}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            {screen.purpose}
          </p>
          {screen.userGoal ? (
            <p className="mt-3 text-sm leading-6 text-cyanline">
              {screen.userGoal}
            </p>
          ) : null}
          <div className="mt-4 flex flex-wrap gap-2">
            {screen.keyElements.map((item) => (
              <span key={item} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-700">
                {item}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

function ProjectInformation({ project }: { project: Project }) {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[18rem_minmax(0,1fr)] lg:px-8">
        <aside className="space-y-4">
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Role</p>
            <p className="mt-2 font-semibold text-slate-950">{project.role}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-500">Year</p>
              <p className="mt-2 font-semibold text-slate-950">{project.year}</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-500">Duration</p>
              <p className="mt-2 font-semibold text-slate-950">
                {project.duration}
              </p>
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Tools</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </aside>

        <div className="space-y-8">
          <div className="grid gap-4 md:grid-cols-3">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
              >
                <p className="text-3xl font-semibold text-slate-950">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm text-slate-500">{metric.label}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brass">
                Challenge
              </p>
              <p className="mt-4 leading-8 text-slate-600">
                {project.challenge}
              </p>
            </article>
            <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-mint">
                Outcome
              </p>
              <p className="mt-4 leading-8 text-slate-600">
                {project.outcome}
              </p>
            </article>
          </div>

          {hasItems(project.overview) ? (
            <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyanline">
                Project Overview
              </p>
              <div className="mt-4">
                <TextList items={project.overview ?? []} />
              </div>
            </article>
          ) : null}

          {hasItems(project.problemStatements) ? (
            <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-signal">
                Problem
              </p>
              <div className="mt-4">
                <TextList items={project.problemStatements ?? []} />
              </div>
            </article>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function ProcessSection({ project }: { project: Project }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-slate-950">Process</h2>
      <div className="mt-5 space-y-3">
        {project.process.map((step, index) => (
          <div
            key={step}
            className="grid gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-[3rem_1fr]"
          >
            <span className="grid size-10 place-items-center rounded-lg border border-cyanline/30 bg-cyanline/10 text-sm font-semibold text-cyanline">
              {index + 1}
            </span>
            <p className="leading-8 text-slate-600">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function DeliverablesSection({
  project,
  fullWidth = false,
}: {
  project: Project;
  fullWidth?: boolean;
}) {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-slate-950">Deliverables</h2>
      <div
        className={
          fullWidth
            ? "mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4"
            : "mt-5 grid gap-3 md:grid-cols-2"
        }
      >
        {project.deliverables.map((deliverable) => (
          <div
            key={deliverable}
            className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
          >
            <CheckCircle2
              className="size-5 flex-none text-mint"
              aria-hidden="true"
            />
            <span className="text-sm font-medium text-slate-700">
              {deliverable}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
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

  const isEsgProject = project.slug === "esg-forest-matching-platform";

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

          <div className="mt-10 grid gap-10 lg:grid-cols-[0.78fr_1fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyanline">
                {project.eyebrow}
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-slate-950 md:text-6xl">
                {project.title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                {project.summary}
              </p>
            </div>
            <ProjectVisual project={project} />
          </div>
        </div>
      </section>

      {isEsgProject ? (
        <>
          <ProjectInformation project={project} />

          <section className="pb-16 md:pb-24">
            <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
              <ProcessSection project={project} />

              {hasItems(project.informationArchitecture) ||
              hasItems(project.sitemap) ? (
                <CaseStudySection title="Information Architecture / Sitemap">
                  <div className="space-y-8">
                    {hasItems(project.informationArchitecture) ? (
                      <TextList items={project.informationArchitecture ?? []} />
                    ) : null}
                    {hasItems(project.sitemap) ? <InteractiveSitemap /> : null}
                  </div>
                </CaseStudySection>
              ) : null}

              {hasItems(project.designTokens) ||
              hasItems(project.colorSystem) ? (
                <CaseStudySection title="Design System">
                  <div className="space-y-8">
                    {hasItems(project.designTokens) ? (
                      <DesignTokenGrid sections={project.designTokens ?? []} />
                    ) : null}
                    {hasItems(project.colorSystem) ? (
                      <ColorSystem groups={project.colorSystem ?? []} />
                    ) : null}
                  </div>
                </CaseStudySection>
              ) : null}

              {hasItems(project.components) ? (
                <CaseStudySection title="UI Components">
                  <ComponentLibrary components={project.components ?? []} />
                </CaseStudySection>
              ) : null}

              {hasItems(project.screens) ? (
                <CaseStudySection title="Final Design">
                  <ScreenSpecs screens={project.screens ?? []} />
                </CaseStudySection>
              ) : null}

              <DeliverablesSection project={project} fullWidth />

              {hasItems(project.reflection) ? (
                <CaseStudySection title="Reflection">
                  <TextList items={project.reflection ?? []} />
                </CaseStudySection>
              ) : null}

              <Link
                href="/#contact"
                className="inline-flex h-12 items-center gap-2 rounded-lg bg-cyanline px-5 text-sm font-semibold text-ink transition hover:bg-mint"
              >
                Discuss this case
                <ExternalLink className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </section>
        </>
      ) : (
      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[18rem_minmax(0,1fr)] lg:px-8">
          <aside className="space-y-4">
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <p className="text-sm text-slate-500">Role</p>
              <p className="mt-2 font-semibold text-slate-950">{project.role}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-slate-200 bg-white p-5">
                <p className="text-sm text-slate-500">Year</p>
                <p className="mt-2 font-semibold text-slate-950">
                  {project.year}
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-5">
                <p className="text-sm text-slate-500">Duration</p>
                <p className="mt-2 font-semibold text-slate-950">
                  {project.duration}
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <p className="text-sm text-slate-500">Tools</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700"
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
                  className="rounded-lg border border-slate-200 bg-white p-5"
                >
                  <p className="text-3xl font-semibold text-slate-950">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm text-slate-500">{metric.label}</p>
                </div>
              ))}
            </div>

            {hasItems(project.overview) ? (
              <CaseStudySection
                eyebrow="Case Study"
                title="Project Overview"
              >
                <TextList items={project.overview ?? []} />
              </CaseStudySection>
            ) : null}

            <div className="grid gap-5 md:grid-cols-2">
              <article className="rounded-lg border border-slate-200 bg-white p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brass">
                  Challenge
                </p>
                <p className="mt-4 leading-8 text-slate-600">
                  {project.challenge}
                </p>
              </article>
              <article className="rounded-lg border border-slate-200 bg-white p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-mint">
                  Outcome
                </p>
                <p className="mt-4 leading-8 text-slate-600">
                  {project.outcome}
                </p>
              </article>
            </div>

            {hasItems(project.problemStatements) ? (
              <CaseStudySection title="Problem">
                <TextList items={project.problemStatements ?? []} />
              </CaseStudySection>
            ) : null}

            {hasItems(project.informationArchitecture) ? (
              <CaseStudySection title="Information Architecture">
                <TextList items={project.informationArchitecture ?? []} />
              </CaseStudySection>
            ) : null}

            {hasItems(project.sitemap) ? (
              <CaseStudySection title="Sitemap">
                {project.slug === "esg-forest-matching-platform" ? (
                  <InteractiveSitemap />
                ) : (
                  <SitemapTree nodes={project.sitemap ?? []} />
                )}
              </CaseStudySection>
            ) : null}

            <section>
              <h2 className="text-2xl font-semibold text-slate-950">Process</h2>
              <div className="mt-5 space-y-3">
                {project.process.map((step, index) => (
                  <div
                    key={step}
                    className="grid gap-4 rounded-lg border border-slate-200 bg-white p-5 md:grid-cols-[3rem_1fr]"
                  >
                    <span className="grid size-10 place-items-center rounded-lg border border-cyanline/30 bg-cyanline/10 text-sm font-semibold text-cyanline">
                      {index + 1}
                    </span>
                    <p className="leading-8 text-slate-600">{step}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-950">
                Deliverables
              </h2>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {project.deliverables.map((deliverable) => (
                  <div
                    key={deliverable}
                    className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4"
                  >
                    <CheckCircle2
                      className="size-5 flex-none text-mint"
                      aria-hidden="true"
                    />
                    <span className="text-sm font-medium text-slate-700">
                      {deliverable}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {hasItems(project.designTokens) ? (
              <CaseStudySection title="Design Tokens">
                <DesignTokenGrid sections={project.designTokens ?? []} />
              </CaseStudySection>
            ) : null}

            {hasItems(project.colorSystem) ? (
              <CaseStudySection title="Color System">
                <ColorSystem groups={project.colorSystem ?? []} />
              </CaseStudySection>
            ) : null}

            {hasItems(project.components) ? (
              <CaseStudySection title="Component Library">
                <ComponentLibrary components={project.components ?? []} />
              </CaseStudySection>
            ) : null}

            {hasItems(project.screens) ? (
              <CaseStudySection title="Screens">
                <ScreenSpecs screens={project.screens ?? []} />
              </CaseStudySection>
            ) : null}

            {hasItems(project.reflection) ? (
              <CaseStudySection title="Reflection">
                <TextList items={project.reflection ?? []} />
              </CaseStudySection>
            ) : null}

            <Link
              href="/#contact"
              className="inline-flex h-12 items-center gap-2 rounded-lg bg-cyanline px-5 text-sm font-semibold text-ink transition hover:bg-mint"
            >
              Discuss this case
              <ExternalLink className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
      )}
    </main>
  );
}
