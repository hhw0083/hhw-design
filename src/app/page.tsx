import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Box,
  Braces,
  Brush,
  Code2,
  Download,
  ExternalLink,
  ImageIcon,
  Layers3,
  Mail,
  PenTool,
  Shapes,
  Workflow,
} from "lucide-react";
import { AwardVisual } from "@/components/AwardVisual";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { awards, experiences, profile, projects, skills } from "@/data/projects";

const strengths = [
  {
    title: "Research to product decisions",
    description:
      "把訪談、行為資料與商業限制整理成可以被團隊採納的產品判斷。",
    icon: Workflow,
  },
  {
    title: "Interaction systems",
    description:
      "設計複雜流程、狀態、權限與例外情境，讓高頻操作更穩定。",
    icon: PenTool,
  },
  {
    title: "Design handoff",
    description:
      "建立 tokens、元件規格與 QA checklist，縮短設計到工程的落差。",
    icon: Layers3,
  },
];

const heroTools = [
  { label: "Figma", icon: PenTool },
  { label: "HTML", icon: Code2 },
  { label: "CSS / SCSS", icon: Braces },
  { label: "Photoshop", icon: ImageIcon },
  { label: "Illustrator", icon: Shapes },
  { label: "Maya", icon: Box },
  { label: "ZBrush", icon: Brush },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-canvas text-slate-950">
      <section className="relative min-h-[86svh] overflow-hidden bg-white pt-16">
        <Image
          src="/images/hero-uiux-studio.png"
          alt="UI UX designer workspace with layered interface panels"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#fff_0%,rgba(255,255,255,0.94)_42%,rgba(255,255,255,0.68)_78%,rgba(255,255,255,0.92)_100%)]" />
        <div className="absolute inset-0 grid-lines opacity-[0.18]" />

        <div className="relative mx-auto flex min-h-[calc(86svh-4rem)] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-teal-200 bg-teal-50 px-3 py-1.5 text-sm font-medium text-cyanline">
              {profile.availability}
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] text-slate-950 md:text-7xl">
              {profile.name}
              <span className="block text-slate-500">{profile.title}</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              {profile.intro}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="#projects"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-slate-950 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-cyanline"
              >
                View projects
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                href="#experience"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
              >
                Resume highlights
                <Download className="size-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-7 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Tools &amp; Skills
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {heroTools.map((tool) => {
                  const Icon = tool.icon;

                  return (
                    <span
                      key={tool.label}
                      className="inline-flex h-9 items-center gap-2 rounded-lg border border-slate-200 bg-white/90 px-3 text-xs font-medium text-slate-700 shadow-sm backdrop-blur"
                    >
                      <Icon
                        className="size-4 text-cyanline"
                        aria-hidden="true"
                      />
                      {tool.label}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <Link
          href="#about"
          aria-label="Scroll to about section"
          className="absolute bottom-5 left-1/2 grid size-10 -translate-x-1/2 place-items-center rounded-full border border-slate-200 bg-white/85 text-slate-700 shadow-sm backdrop-blur transition hover:border-slate-300 hover:text-slate-950"
        >
          <ArrowDown className="size-4" aria-hidden="true" />
        </Link>
      </section>

      <section id="about" className="section-band bg-canvas py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1fr] lg:px-8">
          <SectionHeading
            eyebrow="About"
            title="以使用者任務為核心，讓複雜產品變得可靠、清楚、可交付。"
            description={profile.bio}
          />
          <div className="grid gap-4 md:grid-cols-3">
            {strengths.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-lg border border-slate-200 bg-white p-6 shadow-portfolio-card"
                >
                  <div className="mb-5 grid size-11 place-items-center rounded-lg border border-teal-100 bg-teal-50 text-cyanline">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projects" className="section-band bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Selected Work"
            title="Projects built around measurable product outcomes."
            description="每個 case study 都整理了問題、流程、交付項目與結果，方便招募方快速看見設計判斷與落地能力。"
          />
          <div className="mt-10">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="section-band bg-canvas py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyanline">
                Experience
              </p>
              <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
                跨團隊經驗，
                <span className="block">驅動產品價值與交付品質。</span>
              </h2>

              <div className="mt-9 flex max-w-xl flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-300 bg-white/70 px-3.5 py-2 text-sm text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              {experiences.map((experience, index) => (
                <article
                  key={`${experience.period}-${experience.title}`}
                  className="grid gap-4 border-b border-slate-200 py-8 first:pt-0 last:border-b-0 last:pb-0 md:grid-cols-[8.5rem_1.25rem_minmax(0,1fr)] md:gap-5 md:py-12 md:first:pt-12 md:last:pb-12 lg:py-14 lg:first:pt-14 lg:last:pb-14"
                >
                  <p className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                    <span
                      className="size-2 rounded-full bg-cyanline md:hidden"
                      aria-hidden="true"
                    />
                    {experience.period}
                  </p>

                  <div className="relative hidden md:block" aria-hidden="true">
                    {index < experiences.length - 1 ? (
                      <span className="absolute bottom-[-2rem] left-1/2 top-2 w-px -translate-x-1/2 bg-slate-200" />
                    ) : null}
                    <span className="absolute left-1/2 top-1 size-3 -translate-x-1/2 rounded-full border-[3px] border-canvas bg-cyanline ring-1 ring-slate-300" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-950 md:text-2xl">
                      {experience.title}
                    </h3>
                    <p className="mt-1.5 text-sm font-medium text-cyanline">
                      {experience.company}
                    </p>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                      {experience.summary}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-20 border-y border-slate-200 py-10 md:mt-4 md:py-12">
            <div className="grid gap-7 lg:grid-cols-12 lg:items-center lg:gap-8">
              <p className="text-left text-xl font-semibold text-cyanline md:text-2xl lg:col-span-3">
                Awards
              </p>

              <div className="lg:col-span-9 lg:col-start-4">
                {awards.map((award) => (
                  <article
                    key={`${award.year}-${award.title}`}
                    className="grid gap-5 sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:items-center sm:gap-5"
                  >
                    <p className="text-sm font-semibold text-slate-800">
                      {award.year}
                    </p>
                    <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_13.75rem] md:items-center">
                      <div>
                        <h3 className="text-lg font-semibold leading-7 text-slate-950 md:text-xl">
                          {award.title}
                        </h3>
                        <p className="mt-1 text-sm text-slate-500">
                          {award.subtitle}
                        </p>
                      </div>
                      <AwardVisual
                        image={award.image}
                        alt={`${award.title} ${award.subtitle}`}
                      />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-band bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.75fr] lg:px-8">
          <SectionHeading
            eyebrow="Contact"
            title="Ready to discuss product design, case studies, or the next role."
            description="目前開放 UI/UX Designer、Product Designer 與設計系統相關職缺。歡迎來信安排 portfolio review 或面試。"
          />
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-portfolio-card">
            <div className="grid gap-4">
              <Link
                href={`mailto:${profile.email}`}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-slate-950 text-sm font-semibold text-white transition hover:bg-cyanline"
              >
                <Mail className="size-4" aria-hidden="true" />
                {profile.email}
              </Link>
              <Link
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white text-sm font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-slate-50"
              >
                LinkedIn
                <ExternalLink className="size-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-slate-500">Location</p>
                <p className="mt-2 font-semibold text-slate-950">
                  {profile.location}
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-slate-500">Focus</p>
                <p className="mt-2 font-semibold text-slate-950">SaaS / Fintech</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
