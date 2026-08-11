"use client";

import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const desktopMotion = window.matchMedia(
      "(min-width: 1024px) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    const syncScrollTrigger = () => ScrollTrigger.update();
    const updateScroll = (time: number) => {
      lenisRef.current?.raf(time * 1000);
    };

    const destroyLenis = () => {
      if (!lenisRef.current) {
        return;
      }

      gsap.ticker.remove(updateScroll);
      lenisRef.current.off("scroll", syncScrollTrigger);
      lenisRef.current.destroy();
      lenisRef.current = null;
    };

    const updateLenis = () => {
      destroyLenis();

      if (!desktopMotion.matches) {
        return;
      }

      lenisRef.current = new Lenis({
        autoRaf: false,
        anchors: {
          offset: 0,
        },
        lerp: 0.11,
        smoothWheel: true,
        syncTouch: false,
        wheelMultiplier: 0.9,
        stopInertiaOnNavigate: true,
        prevent: (node) => Boolean(node.closest("[data-lenis-prevent]")),
      });
      lenisRef.current.on("scroll", syncScrollTrigger);
      gsap.ticker.add(updateScroll);
    };

    updateLenis();
    desktopMotion.addEventListener("change", updateLenis);

    return () => {
      desktopMotion.removeEventListener("change", updateLenis);
      destroyLenis();
    };
  }, []);

  useEffect(() => {
    window.requestAnimationFrame(() => lenisRef.current?.resize());
  }, [pathname]);

  return children;
}
