"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const LOADING_SESSION_KEY = "hhw-home-loading-seen";

export function HomeLoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    if (window.sessionStorage.getItem(LOADING_SESSION_KEY)) {
      document.documentElement.dataset.homeReady = "true";
      setIsVisible(false);
      window.dispatchEvent(new Event("hhw:home-ready"));
      return;
    }

    window.sessionStorage.setItem(LOADING_SESSION_KEY, "true");
    document.documentElement.dataset.homeReady = "false";

    const originalOverflow = document.body.style.overflow;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    document.body.style.overflow = "hidden";

    const leaveTimer = window.setTimeout(
      () => setIsLeaving(true),
      prefersReducedMotion ? 260 : 1040,
    );
    const removeTimer = window.setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = originalOverflow;
      document.documentElement.dataset.homeReady = "true";
      window.dispatchEvent(new Event("hhw:home-ready"));
    }, prefersReducedMotion ? 520 : 1320);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(removeTimer);
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`home-loader fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-[#eef3f5] ${
        isLeaving ? "home-loader--leaving" : ""
      }`}
      role="status"
      aria-label="Loading HHW Portfolio"
    >
      <div
        className="home-loader__mask absolute left-1/2 top-1/2 aspect-square w-[12vmax] rounded-full bg-[#04101b]"
        aria-hidden="true"
      />
      <Image
        src="/images/x-logo-light.svg"
        alt=""
        width={88}
        height={88}
        priority
        className="home-loader__wordmark relative size-16 object-contain sm:size-20"
      />
      <span className="sr-only">Loading portfolio</span>
    </div>
  );
}
