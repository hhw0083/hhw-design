"use client";

import dynamic from "next/dynamic";
import type { MutableRefObject } from "react";
import styles from "./Hero.module.css";

const ThreeScene = dynamic(
  () => import("./ThreeScene").then((module) => module.ThreeScene),
  {
    ssr: false,
    loading: () => (
      <div className={styles.visualLoading} role="status" aria-live="polite">
        <span>Building form</span>
      </div>
    ),
  },
);

type HeroVisualProps = {
  scrollProgress: MutableRefObject<number>;
  reducedMotion: boolean;
};

export function HeroVisual({
  scrollProgress,
  reducedMotion,
}: HeroVisualProps) {
  return (
    <div className={styles.visual} aria-hidden="true">
      <ThreeScene
        scrollProgress={scrollProgress}
        reducedMotion={reducedMotion}
      />
    </div>
  );
}

