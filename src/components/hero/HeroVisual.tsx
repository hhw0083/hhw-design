"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useRef, useState } from "react";
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
  enabled?: boolean;
};

export function HeroVisual({
  scrollProgress,
  pointerProgress,
  reducedMotion,
  enabled = true,
}: HeroVisualProps) {
  const [isReady, setIsReady] = useState(false);
  const [isRendering, setIsRendering] = useState(enabled);
  const visualRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    const visual = visualRef.current;

    if (!visual) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      setIsRendering(enabled && document.visibilityState === "visible");
      return;
    }

    let isIntersecting = true;
    const updateRendering = () => {
      setIsRendering(
        enabled && isIntersecting && document.visibilityState === "visible",
      );
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersecting = entry.isIntersecting;
        updateRendering();
      },
      { rootMargin: "160px 0px", threshold: 0.01 },
    );

    observer.observe(visual);
    document.addEventListener("visibilitychange", updateRendering);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", updateRendering);
    };
  }, [enabled]);

  return (
    <div
      ref={visualRef}
      className={`${styles.visual} ${isReady ? styles.visualReady : ""}`}
      data-rendering={isRendering ? "active" : "paused"}
      aria-hidden="true"
    >
      <ThreeScene
        scrollProgress={scrollProgress}
        pointerProgress={pointerProgress}
        reducedMotion={reducedMotion}
        isActive={isRendering}
        onReady={handleReady}
      />
    </div>
  );
}
