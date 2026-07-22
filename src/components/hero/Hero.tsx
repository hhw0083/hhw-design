"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { HeroVisual } from "./HeroVisual";
import styles from "./Hero.module.css";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollProgress = useRef(0);
  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    if (reducedMotion) {
      scrollProgress.current = 0.62;
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
          { xPercent: -3.5, opacity: 0.24 },
          0,
        )
        .to(
          "[data-hero-title-bottom]",
          { xPercent: 3.5, opacity: 0.32 },
          0,
        )
        .to("[data-hero-copy]", { y: -18, opacity: 0.3 }, 0);
    }, section);

    ScrollTrigger.refresh();

    return () => {
      context.revert();
      scrollProgress.current = 0;
    };
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      className={styles.hero}
      aria-labelledby="hero-form-study"
    >
      <div className={styles.stickyFrame}>
        <HeroVisual
          scrollProgress={scrollProgress}
          reducedMotion={reducedMotion}
        />

        <div className={styles.atmosphere} aria-hidden="true" />

        <div className={styles.copyLayer}>
          <p className={styles.eyebrow}>HHW DESIGN / PROCEDURAL OBJECT</p>
          <h1 id="hero-form-study" className={styles.title}>
            <span className={styles.titleTop} data-hero-title-top>
              FORM
            </span>
            <span className={styles.titleBottom} data-hero-title-bottom>
              STUDY
            </span>
          </h1>
          <p className={styles.description} data-hero-copy>
            One procedural form, shaped by light, fog and depth.
          </p>
        </div>
      </div>
    </section>
  );
}

