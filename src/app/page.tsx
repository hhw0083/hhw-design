import Link from "next/link";
import {
  ExternalLink,
  Layers3,
  Mail,
  MapPin,
  PenTool,
  Target,
  Workflow,
} from "lucide-react";
import { AwardVisual } from "@/components/AwardVisual";
import { HomeLoadingScreen } from "@/components/HomeLoadingScreen";
import { Hero } from "@/components/hero/Hero";
import {
  MotionReveal,
  MotionSection,
} from "@/components/motion/MotionReveal";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import {
  awards,
  experiences,
  profile,
  skills,
  visibleProjects,
} from "@/data/projects";

const strengths = [
  {
    title: "Research to Decisions",
    titleZh: "研究轉化決策",
    description:
      "整理需求、行為與使用情境，轉化為清楚的產品判斷與設計方向。",
    icon: Workflow,
  },
  {
    title: "Interaction Systems",
    titleZh: "互動系統設計",
    description:
      "規劃流程、狀態與權限情境，讓複雜操作變得清楚且穩定。",
    icon: PenTool,
  },
  {
    title: "Design Handoff",
    titleZh: "設計交付",
    description:
      "建立元件規範與交付文件，降低設計到開發之間的落差。",
    icon: Layers3,
  },
];

export default function Home() {
  return (
    <>
      <HomeLoadingScreen />
      <main className="overflow-x-clip bg-surface-canvas text-copy-primary">
        <Hero>
          <section
            id="projects"
            className="section-band relative z-10 bg-white/70 pb-20 pt-28 md:pb-28 md:pt-36"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <MotionReveal>
                <SectionHeading
                  eyebrow="Selected Work"
                  title="作品案例"
                  description="收錄介面設計、品牌識別、3D 視覺與電商專案，從不同題目中梳理設計方向，呈現概念、流程與最終畫面的整合成果。"
                />
              </MotionReveal>
              <div className="mt-10">
                {visibleProjects.map((project, index) => (
                  <MotionReveal
                    key={project.slug}
                    delay={Math.min(index * 60, 180)}
                    distance={20}
                  >
                    <ProjectCard project={project} />
                  </MotionReveal>
                ))}
              </div>
            </div>
          </section>

        <section
          id="about"
          className="section-band relative z-20 bg-surface-canvas py-20 md:py-28"
        >
          <MotionSection className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1fr] lg:px-8">
            <SectionHeading
              eyebrow="About"
              title="在介面、品牌與視覺之間，建立清楚的設計方向。"
              description={profile.bio}
            />
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
              {strengths.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="min-w-0 rounded-lg border border-stroke-soft bg-surface-paper p-3 shadow-portfolio-card sm:p-4 md:p-6"
                  >
                    <div className="mb-3 grid size-10 place-items-center rounded-lg border border-brand-accent/20 bg-brand-accent/10 text-brand-primary md:mb-5 md:size-11">
                      <Icon
                        className="size-[18px] md:size-5"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="break-words font-semibold leading-5 text-copy-primary">
                      <span className="mt-1 block text-sm leading-6 sm:text-base md:text-lg">
                        {item.titleZh}
                      </span>
                      <span className="block text-[11px] text-copy-muted sm:text-xs md:text-sm">
                        {item.title}
                      </span>

                    </h3>
                    <p className="mt-2 break-words text-[10px] leading-[1.65] text-copy-secondary sm:text-xs md:mt-3 md:text-sm md:leading-7">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </MotionSection>
        </section>

        <section
          id="experience"
          className="section-band relative z-20 bg-surface-canvas py-20 md:py-28"
        >
          <MotionSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary">
                  Experience
                </p>
                <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight text-copy-primary md:text-5xl">
                  跨團隊經驗，
                  <span className="block">驅動產品價值與交付品質。</span>
                </h2>

                <div className="mt-9 flex max-w-xl flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-stroke-muted bg-surface-paper/70 px-3.5 py-2 text-sm text-copy-secondary"
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
                    className="grid gap-4 border-b border-stroke-soft py-8 first:pt-0 last:border-b-0 last:pb-0 md:grid-cols-[8.5rem_1.25rem_minmax(0,1fr)] md:gap-5 md:py-12 md:first:pt-12 md:last:pb-12 lg:py-14 lg:first:pt-14 lg:last:pb-14"
                  >
                    <p className="flex items-center gap-2 text-sm font-semibold text-copy-primary">
                      <span
                        className="size-2 rounded-full bg-brand-primary md:hidden"
                        aria-hidden="true"
                      />
                      {experience.period}
                    </p>

                    <div className="relative hidden md:block" aria-hidden="true">
                      {index < experiences.length - 1 ? (
                        <span className="absolute bottom-[-2rem] left-1/2 top-2 w-px -translate-x-1/2 bg-stroke-soft" />
                      ) : null}
                      <span className="absolute left-1/2 top-1 size-3 -translate-x-1/2 rounded-full border-[3px] border-surface-canvas bg-brand-primary ring-1 ring-stroke-muted" />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-copy-primary md:text-2xl">
                        {experience.title}
                      </h3>
                      <p className="mt-1.5 text-sm font-medium text-brand-primary">
                        {experience.company}
                      </p>
                      <p className="mt-3 max-w-2xl text-sm leading-6 text-copy-secondary">
                        {experience.summary}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-20 border-y border-stroke-soft py-10 md:mt-4 md:py-12">
              <div className="grid gap-7 lg:grid-cols-12 lg:items-center lg:gap-8">
                <p className="text-left text-xl font-semibold text-brand-primary md:text-2xl lg:col-span-3">
                  Awards
                </p>

                <div className="lg:col-span-9 lg:col-start-4">
                  {awards.map((award) => (
                    <article
                      key={`${award.year}-${award.title}`}
                      className="grid gap-5 sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:items-center sm:gap-5"
                    >
                      <p className="text-sm font-semibold text-copy-primary">
                        {award.year}
                      </p>
                      <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_13.75rem] md:items-center">
                        <div>
                          <h3 className="text-lg font-semibold leading-7 text-copy-primary md:text-xl">
                            {award.title}
                          </h3>
                          <p className="mt-1 text-sm text-copy-muted">
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
          </MotionSection>
        </section>

        <footer
          id="contact"
          className="section-band relative z-10 isolate overflow-hidden bg-white/70 py-20 text-copy-primary md:py-28"
        >
          <MotionSection className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.75fr] lg:items-center lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary">
                Contact
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-copy-primary md:text-5xl">
                歡迎交流設計與合作可能
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-copy-secondary md:text-lg">
                若你對我的作品感興趣，或有設計合作、專案交流的可能，歡迎來信與我聊聊。
              </p>
            </div>

            <div className="rounded-[28px] border border-white/80 bg-white/62 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.10),0_0_28px_rgba(20,184,166,0.08)] backdrop-blur-xl">
              <div className="grid gap-4">
                <Link
                  href={`mailto:${profile.email}`}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-surface-dark px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-primary"
                >
                  <Mail className="size-4" aria-hidden="true" />
                  <span className="truncate">{profile.email}</span>
                </Link>
                <Link
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-stroke-muted/80 bg-white/55 px-5 text-sm font-semibold text-copy-primary shadow-sm backdrop-blur-md transition hover:border-brand-primary/35 hover:bg-white hover:text-brand-primary"
                >
                  LinkedIn
                  <ExternalLink className="size-4" aria-hidden="true" />
                </Link>
              </div>

              <div className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
                <div className="flex min-h-24 items-center gap-4 rounded-lg border border-stroke-soft/80 bg-white/45 p-4 shadow-sm backdrop-blur-md">
                  <MapPin
                    className="size-6 shrink-0 text-brand-primary"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-copy-muted">Location</p>
                    <p className="mt-1 font-semibold text-copy-primary">
                      {profile.location}
                    </p>
                  </div>
                </div>
                <div className="flex min-h-24 items-center gap-4 rounded-lg border border-stroke-soft/80 bg-white/45 p-4 shadow-sm backdrop-blur-md">
                  <Target
                    className="size-6 shrink-0 text-brand-primary"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-copy-muted">Focus</p>
                    <p className="mt-1 font-semibold text-copy-primary">UI/UX Design / Web Platform</p>
                  </div>
                </div>
              </div>
            </div>
          </MotionSection>
        </footer>
        </Hero>
      </main>
    </>
  );
}
