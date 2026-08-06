"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useState } from "react";
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
  pointerProgress: MutableRefObject<{ x: number; y: number }>;
  reducedMotion: boolean;
};

export function HeroVisual({
  scrollProgress,
  pointerProgress,
  reducedMotion,
}: HeroVisualProps) {
  const [isReady, setIsReady] = useState(false);
  const handleReady = useCallback(() => {
    setIsReady(true);
    document.documentElement.dataset.heroReady = "true";
    window.dispatchEvent(new Event("hhw:hero-ready"));
  }, []);

  useEffect(() => {
    document.documentElement.dataset.heroReady = "false";

    return () => {
      delete document.documentElement.dataset.heroReady;
    };
  }, []);

  return (
    <div
      className={`${styles.visual} ${isReady ? styles.visualReady : ""}`}
      aria-hidden="true"
    >
      <ThreeScene
        scrollProgress={scrollProgress}
        pointerProgress={pointerProgress}
        reducedMotion={reducedMotion}
        onReady={handleReady}
      />
    </div>
  );
}
