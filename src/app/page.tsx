import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Download,
  ExternalLink,
  Layers3,
  Mail,
  PenTool,
  Workflow,
} from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { experiences, profile, projects, skills } from "@/data/projects";

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

export default function Home() {
  return (
    <main className="overflow-hidden bg-ink text-white">
      <section className="relative min-h-[86svh] overflow-hidden pt-16">
        <Image
          src="/images/hero-uiux-studio.png"
          alt="Dark UI UX designer workspace with layered interface panels"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,10,0.96)_0%,rgba(5,7,10,0.78)_38%,rgba(5,7,10,0.3)_72%,rgba(5,7,10,0.74)_100%)]" />
        <div className="absolute inset-0 grid-lines opacity-[0.35]" />

        <div className="relative mx-auto flex min-h-[calc(86svh-4rem)] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-md border border-cyanline/30 bg-cyanline/10 px-3 py-1.5 text-sm font-medium text-cyanline">
              {profile.availability}
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] text-white md:text-7xl">
              {profile.name}
              <span className="block text-slate-300">{profile.title}</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
              {profile.intro}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="#projects"
                className="inline-flex h-12 items-center gap-2 rounded-md bg-cyanline px-5 text-sm font-semibold text-ink transition hover:bg-mint"
              >
                View projects
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                href="#experience"
                className="inline-flex h-12 items-center gap-2 rounded-md border border-white/[0.16] bg-white/[0.08] px-5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.12]"
              >
                Resume highlights
                <Download className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        <Link
          href="#about"
          aria-label="Scroll to about section"
          className="absolute bottom-5 left-1/2 grid size-10 -translate-x-1/2 place-items-center rounded-md border border-white/[0.14] bg-black/[0.36] text-slate-200 backdrop-blur transition hover:border-cyanline/60 hover:text-white"
        >
          <ArrowDown className="size-4" aria-hidden="true" />
        </Link>
      </section>

      <section id="about" className="section-band bg-ink py-20 md:py-28">
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
                  className="rounded-md border border-white/[0.12] bg-white/[0.04] p-5"
                >
                  <div className="mb-5 grid size-10 place-items-center rounded-md border border-cyanline/30 bg-cyanline/10 text-cyanline">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projects" className="section-band bg-[#070a0f] py-20 md:py-28">
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
        className="section-band bg-ink py-20 md:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.72fr_1fr] lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Resume"
              title="Experience shaped by product teams, systems, and launch pressure."
            />
            <div className="mt-8 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-white/10 bg-white/[0.06] px-3 py-2 text-sm text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {experiences.map((experience) => (
              <article
                key={`${experience.period}-${experience.title}`}
                className="grid gap-4 rounded-md border border-white/[0.12] bg-white/[0.04] p-5 md:grid-cols-[10rem_1fr]"
              >
                <p className="text-sm font-medium text-brass">
                  {experience.period}
                </p>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {experience.title}
                  </h3>
                  <p className="mt-1 text-sm text-cyanline">
                    {experience.company}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {experience.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-band bg-[#070a0f] py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.75fr] lg:px-8">
          <SectionHeading
            eyebrow="Contact"
            title="Ready to discuss product design, case studies, or the next role."
            description="目前開放 UI/UX Designer、Product Designer 與設計系統相關職缺。歡迎來信安排 portfolio review 或面試。"
          />
          <div className="rounded-md border border-white/[0.12] bg-white/[0.04] p-6">
            <div className="grid gap-4">
              <Link
                href={`mailto:${profile.email}`}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-white text-sm font-semibold text-ink transition hover:bg-cyanline"
              >
                <Mail className="size-4" aria-hidden="true" />
                {profile.email}
              </Link>
              <Link
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/[0.14] bg-white/[0.06] text-sm font-semibold text-white transition hover:border-cyanline/60 hover:bg-cyanline/10"
              >
                LinkedIn
                <ExternalLink className="size-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-md border border-white/10 bg-black/[0.24] p-4">
                <p className="text-slate-500">Location</p>
                <p className="mt-2 font-semibold text-white">
                  {profile.location}
                </p>
              </div>
              <div className="rounded-md border border-white/10 bg-black/[0.24] p-4">
                <p className="text-slate-500">Focus</p>
                <p className="mt-2 font-semibold text-white">SaaS / Fintech</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
