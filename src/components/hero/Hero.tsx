"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import type { CSSProperties, PointerEvent as ReactPointerEvent } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { profile } from "@/data/profile";
import { HeroVisual } from "./HeroVisual";
import styles from "./Hero.module.css";

export function Hero() {
  const featuredProjectHref = "/projects/esg-forest-matching-platform";
  const sectionRef = useRef<HTMLElement>(null);
  const scrollProgress = useRef(0);
  const pointerProgress = useRef({ x: 0, y: 0 });
  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    if (reducedMotion) {
      scrollProgress.current = 0.62;
      pointerProgress.current = { x: 0, y: 0 };
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const state = { progress: 0 };
    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.35,
          invalidateOnRefresh: true,
        },
      });

      timeline
        .to(
          state,
          {
            progress: 1,
            onUpdate: () => {
              scrollProgress.current = state.progress;
            },
          },
          0,
        )
        .to(
          "[data-hero-title-top]",
          { xPercent: -6, yPercent: -4, opacity: 0.58 },
          0,
        )
        .to(
          "[data-hero-title-bottom]",
          { xPercent: 4.5, yPercent: 5, opacity: 0.96 },
          0,
        )
        .to(
          "[data-hero-copy]",
          { y: -34, opacity: 0.44 },
          0,
        )
        .to(
          "[data-hero-panel]",
          { clipPath: "inset(0 41% 0 0)" },
          0,
        )
        .to(
          "[data-hero-marks]",
          { opacity: 0.82, rotate: 5 },
          0,
        );
    }, section);

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

    if (!section) {
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
    section.style.setProperty("--pointer-x", `${normalizedX * 20}px`);
    section.style.setProperty("--pointer-y", `${normalizedY * 16}px`);
    section.style.setProperty("--pointer-light-x", `${x * 100}%`);
    section.style.setProperty("--pointer-light-y", `${y * 100}%`);
  };

  const handlePointerLeave = () => {
    pointerProgress.current = { x: 0, y: 0 };

    const section = sectionRef.current;

    if (!section) {
      return;
    }

    section.style.setProperty("--pointer-x", "0px");
    section.style.setProperty("--pointer-y", "0px");
    section.style.setProperty("--pointer-light-x", "58%");
    section.style.setProperty("--pointer-light-y", "38%");
  };

  return (
    <section
      ref={sectionRef}
      className={styles.hero}
      aria-labelledby="hero-personal-identity"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={heroPointerStyle}
    >
      <div className={styles.stickyFrame}>
        <div className={styles.backTitleLayer} aria-hidden="true">
          <span className={styles.titleTop} data-hero-title-top>
            HHW
          </span>
        </div>

        <HeroVisual
          scrollProgress={scrollProgress}
          pointerProgress={pointerProgress}
          reducedMotion={reducedMotion}
        />

        <div
          className={styles.splitPanel}
          data-hero-panel
          aria-hidden="true"
        />
        <div className={styles.motionMarks} data-hero-marks aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className={styles.atmosphere} aria-hidden="true" />

        <div className={styles.copyLayer}>
          <header className={styles.topline}>
            <a className={styles.brandMark} href="mailto:hhwstudio0083@gmail.com">
              HHW<span>.design</span>
            </a>
            <nav className={styles.quickNav} aria-label="Hero links">
              <a href={featuredProjectHref}>Works</a>
              <a href="mailto:hhwstudio0083@gmail.com">Contact</a>
            </nav>
          </header>

          <h1 id="hero-personal-identity" className={styles.srOnly}>
            HHW UI UX Designer
          </h1>

          <p className={styles.eyebrow}>Personal image / UIUX designer</p>

          <div className={styles.title} aria-hidden="true">
            <span className={styles.titleBottom} data-hero-title-bottom>
              DESIGNER
            </span>
          </div>

          <p className={styles.description} data-hero-copy>
            {profile.intro}
          </p>

          <div className={styles.bottomRail}>
            <a className={styles.primaryLink} href={featuredProjectHref}>
              Explore work
              <span aria-hidden="true">↗</span>
            </a>
            <span>{profile.location}</span>
            <span>{profile.availability}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
