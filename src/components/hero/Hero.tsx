"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown } from "lucide-react";
import { useLayoutEffect, useRef, useState } from "react";
import type {
  CSSProperties,
  PointerEvent as ReactPointerEvent,
  ReactNode,
} from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { profile } from "@/data/profile";
import { HeroVisual } from "./HeroVisual";
import styles from "./Hero.module.css";

type HeroProps = {
  children?: ReactNode;
};

export function Hero({ children }: HeroProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollProgress = useRef(0);
  const pointerProgress = useRef({ x: 0, y: 0 });
  const reducedMotion = useReducedMotion();
  const [visualEnabled, setVisualEnabled] = useState(true);

  useLayoutEffect(() => {
    const stage = stageRef.current;
    const section = sectionRef.current;

    if (!stage || !section) {
      return;
    }

    const projects = stage.querySelector<HTMLElement>("#projects");
    const footer = stage.querySelector<HTMLElement>("#contact");

    if (!projects || !footer) {
      return;
    }

    if (reducedMotion) {
      scrollProgress.current = 0.62;
      pointerProgress.current = { x: 0, y: 0 };
    }

    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      ScrollTrigger.create({
        trigger: stage,
        start: "top top",
        endTrigger: projects,
        end: "bottom bottom",
        invalidateOnRefresh: true,
        onEnter: () => setVisualEnabled(true),
        onEnterBack: () => setVisualEnabled(true),
        onLeave: () => setVisualEnabled(false),
        onUpdate: (self) => {
          if (reducedMotion) {
            return;
          }

          const scrollDistance = Math.max(self.end - self.start, 1);
          const heroFraction = Math.min(
            section.offsetHeight / scrollDistance,
            0.999,
          );

          scrollProgress.current =
            self.progress <= heroFraction
              ? self.progress / heroFraction
              : 1 +
                (self.progress - heroFraction) /
                  Math.max(1 - heroFraction, 0.001);
        },
      });

      ScrollTrigger.create({
        trigger: footer,
        start: "top bottom",
        end: "bottom bottom",
        invalidateOnRefresh: true,
        onEnter: () => setVisualEnabled(true),
        onEnterBack: () => setVisualEnabled(true),
        onLeaveBack: () => setVisualEnabled(false),
        onUpdate: (self) => {
          if (reducedMotion || (!self.isActive && self.progress === 0)) {
            return;
          }

          scrollProgress.current = 3 + self.progress;
        },
      });

      if (reducedMotion) {
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "bottom top",
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            gsap.set("[data-hero-panel]", {
              clipPath: "inset(0 50% 0 0)",
              yPercent: self.progress * -100,
            });
          },
        });
        return;
      }

      const timeline = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 0.18,
          invalidateOnRefresh: true,
        },
      });

      timeline
        .to(
          "[data-hero-title-top]",
          {
            xPercent: -6,
            y: () => section.clientHeight * 0.12,
            opacity: 0.58,
          },
          0,
        )
        .to(
          "[data-hero-title-bottom]",
          {
            xPercent: 4.5,
            y: () => section.clientHeight * 0.24,
            opacity: 0.96,
          },
          0,
        )
        .to(
          "[data-hero-copy]",
          { y: -34, opacity: 0.44 },
          0,
        )
        .to(
          "[data-hero-panel]",
          {
            clipPath: () =>
              window.matchMedia("(max-width: 767px)").matches
                ? "inset(0 50% 0 0)"
                : "inset(0 41% 0 0)",
            yPercent: -100,
          },
          0,
        )
        .to(
          "[data-hero-marks]",
          { opacity: 1 },
          0,
        )
        .to(
          "[data-hero-marks] span:not(:nth-child(4))",
          { rotate: 5 },
          0,
        );
    }, stage);

    ScrollTrigger.refresh();

    return () => {
      context.revert();
      scrollProgress.current = 0;
      pointerProgress.current = { x: 0, y: 0 };
    };
  }, [reducedMotion]);

  const heroPointerStyle = {
    "--pointer-x": "0px",
    "--pointer-y": "0px",
    "--pointer-light-x": "58%",
    "--pointer-light-y": "38%",
  } as CSSProperties;

  const handlePointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    if (reducedMotion) {
      return;
    }

    const section = sectionRef.current;
    const stage = stageRef.current;

    if (!section || !stage) {
      return;
    }

    const rect = section.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const normalizedX = (x - 0.5) * 2;
    const normalizedY = (y - 0.5) * 2;

    pointerProgress.current = {
      x: normalizedX,
      y: normalizedY,
    };
    stage.style.setProperty("--pointer-x", `${normalizedX * 20}px`);
    stage.style.setProperty("--pointer-y", `${normalizedY * 16}px`);
    stage.style.setProperty("--pointer-light-x", `${x * 100}%`);
    stage.style.setProperty("--pointer-light-y", `${y * 100}%`);
  };

  const handlePointerLeave = () => {
    pointerProgress.current = { x: 0, y: 0 };

    const stage = stageRef.current;

    if (!stage) {
      return;
    }

    stage.style.setProperty("--pointer-x", "0px");
    stage.style.setProperty("--pointer-y", "0px");
    stage.style.setProperty("--pointer-light-x", "58%");
    stage.style.setProperty("--pointer-light-y", "38%");
  };

  return (
    <div
      ref={stageRef}
      className={styles.stage}
      data-hero-project-stage
      style={heroPointerStyle}
    >
      <div className={styles.visualTrack} aria-hidden="true">
        <div className={styles.visualViewport}>
          <HeroVisual
            scrollProgress={scrollProgress}
            pointerProgress={pointerProgress}
            reducedMotion={reducedMotion}
            enabled={visualEnabled}
          />
          <div
            className={styles.splitPanel}
            data-hero-panel
            aria-hidden="true"
          />
        </div>
      </div>

      <section
        ref={sectionRef}
        className={styles.hero}
        data-hero-section
        aria-labelledby="hero-personal-identity"
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        <div className={styles.stickyFrame}>
          <div className={styles.backTitleLayer} aria-hidden="true">
            <span className={styles.titleTop} data-hero-title-top>
              HHW
            </span>
          </div>

          <div
            className={styles.motionMarks}
            data-hero-marks
            aria-hidden="true"
          >
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className={styles.atmosphere} aria-hidden="true" />

          <div className={styles.copyLayer}>
            <header className={styles.topline}>
              <a
                className={styles.brandMark}
                href="mailto:hhwstudio0083@gmail.com"
              >
                HHW<span>.design</span>
              </a>
              <nav className={styles.quickNav} aria-label="Hero links">
                <a href="#projects">Works</a>
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#contact">Contact</a>
              </nav>
            </header>

            <h1 id="hero-personal-identity" className={styles.srOnly}>
              HHW UI UX Designer
            </h1>

            <p className={styles.eyebrow}>Personal image / UIUX designer</p>

            <div className={styles.title} aria-hidden="true">
              <span className={styles.titleBottom} data-hero-title-bottom>
                DESIGN
              </span>
            </div>

            <p className={styles.description} data-hero-copy>
              {profile.intro}
            </p>

            <div className={styles.bottomRail}>
              <span className={styles.scrollCue}>
                Explore work
                <ArrowDown className={styles.scrollCueIcon} aria-hidden="true" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {children}
    </div>
  );
}
