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
  MapPin,
  PenTool,
  Shapes,
  Target,
  Workflow,
} from "lucide-react";
import { AwardVisual } from "@/components/AwardVisual";
import { HomeLoadingScreen } from "@/components/HomeLoadingScreen";
import {
  MotionReveal,
  MotionSection,
} from "@/components/motion/MotionReveal";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { existingPublicImage } from "@/components/case-study/publicImages";
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
  const homeHeroImage =
    existingPublicImage("/images/hero-index.webp") ??
    existingPublicImage("/hero-index.webp") ??
    "/images/hero-index.webp";
  const homeHeroMobileImage =
    existingPublicImage("/images/hero-index-mobile.webp") ??
    existingPublicImage("/hero-index-mobile.webp");
  const hasMobileHeroImage = Boolean(homeHeroMobileImage);

  return (
    <>
      <HomeLoadingScreen />
      <main className="overflow-hidden bg-surface-canvas text-copy-primary">
        <section className="relative min-h-[86svh] overflow-hidden bg-surface-canvas pt-16">
          <ParallaxLayer
            className="absolute -inset-y-8 inset-x-0"
            speed={0.045}
            maxOffset={28}
          >
            <Image
              src={homeHeroImage}
              alt="UI UX designer workspace with layered interface panels"
              fill
              priority
              sizes="100vw"
              unoptimized
              className={
                hasMobileHeroImage
                  ? "hidden object-cover object-center sm:block"
                  : "object-cover object-center"
              }
            />
            {homeHeroMobileImage ? (
              <Image
                src={homeHeroMobileImage}
                alt="UI UX designer workspace with layered interface panels"
                fill
                priority
                sizes="100vw"
                unoptimized
                className="object-cover object-center sm:hidden"
              />
            ) : null}
          </ParallaxLayer>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.88)_0%,rgba(255,255,255,0.76)_34%,rgba(255,255,255,0.42)_56%,rgba(255,255,255,0.08)_78%)]" />
          <ParallaxLayer
            className="absolute -inset-6"
            speed={-0.025}
            maxOffset={16}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_64%_34%,rgb(var(--brand-accent-rgb)/0.12),transparent_26rem),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(246,247,249,0.18))]" />
            <div className="absolute inset-0 grid-lines opacity-[0.045]" />
          </ParallaxLayer>

          <div className="relative mx-auto flex min-h-[calc(86svh-4rem)] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <MotionReveal
                delay={20}
                distance={14}
                waitForHomeReady
              >
                <p className="mb-5 inline-flex rounded-full border border-brand-primary/20 bg-white/55 px-3 py-1.5 text-sm font-semibold text-brand-primary shadow-sm backdrop-blur-md">
                  {profile.availability}
                </p>
              </MotionReveal>
              <MotionReveal delay={90} distance={18} waitForHomeReady>
                <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] text-copy-primary md:text-7xl">
                  {profile.name}
                  <span className="block text-brand-primary">{profile.title}</span>
                </h1>
              </MotionReveal>
              <MotionReveal delay={160} distance={18} waitForHomeReady>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-copy-secondary md:text-xl">
                  {profile.intro}
                </p>
              </MotionReveal>
              <MotionReveal delay={230} distance={16} waitForHomeReady>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Link
                    href="#projects"
                    className="inline-flex h-12 items-center gap-2 rounded-full bg-brand-primary px-5 text-sm font-semibold text-white shadow-brand-button transition hover:bg-brand-accent"
                  >
                    View projects
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                  <Link
                    href="#experience"
                    className="inline-flex h-12 items-center gap-2 rounded-full border border-stroke-muted/80 bg-white/65 px-5 text-sm font-semibold text-copy-primary shadow-sm backdrop-blur-md transition hover:border-brand-primary/35 hover:bg-white"
                  >
                    Resume highlights
                    <Download className="size-4" aria-hidden="true" />
                  </Link>
                </div>
              </MotionReveal>
              <MotionReveal delay={300} distance={14} waitForHomeReady>
                <div className="mt-7 max-w-2xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-copy-muted">
                    Tools &amp; Skills
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {heroTools.map((tool) => {
                      const Icon = tool.icon;

                      return (
                        <span
                          key={tool.label}
                          className="inline-flex h-9 items-center gap-2 rounded-lg border border-white/70 bg-white/50 px-3 text-xs font-medium text-copy-secondary shadow-sm backdrop-blur-md"
                        >
                          <Icon
                            className="size-4 text-brand-primary"
                            aria-hidden="true"
                          />
                          {tool.label}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </MotionReveal>
            </div>
          </div>

          <Link
            href="#projects"
            aria-label="Scroll to projects section"
            className="absolute bottom-5 left-1/2 grid size-10 -translate-x-1/2 place-items-center rounded-full border border-white/70 bg-white/55 text-copy-secondary shadow-sm backdrop-blur-md transition hover:border-brand-primary/30 hover:bg-white hover:text-brand-primary"
          >
            <ArrowDown className="size-4" aria-hidden="true" />
          </Link>
        </section>

        <section id="projects" className="section-band bg-surface-paper py-20 md:py-28">
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

        <section id="about" className="section-band bg-surface-canvas py-20 md:py-28">
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
          className="section-band bg-surface-canvas py-20 md:py-28"
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

        <section
          id="contact"
          className="section-band relative isolate overflow-hidden bg-surface-canvas py-20 text-copy-primary md:py-28"
        >
          <div
            className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_78%_28%,rgb(var(--brand-accent-rgb)/0.14),transparent_28rem),radial-gradient(circle_at_12%_86%,rgb(var(--brand-primary-rgb)/0.08),transparent_24rem),linear-gradient(135deg,var(--color-surface-paper)_0%,var(--color-surface-canvas)_62%,#EEF3F4_100%)]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-[12%] top-[34%] -z-10 h-32 w-[76%] -rotate-[13deg] bg-[linear-gradient(90deg,transparent,rgb(var(--brand-accent-rgb)/0.08),transparent)] blur-xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -left-[18%] bottom-[4%] -z-10 h-24 w-[62%] rotate-[18deg] bg-[linear-gradient(90deg,transparent,rgb(var(--brand-primary-rgb)/0.07),transparent)] blur-2xl"
            aria-hidden="true"
          />

          <MotionSection className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.75fr] lg:items-center lg:px-8">
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
        </section>
      </main>
    </>
  );
}
