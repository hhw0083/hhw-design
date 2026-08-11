"use client";

import { useEffect, useState } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";

const LOADING_SESSION_KEY = "hhw-home-loading-seen-v2";
const FIRST_VISIT_MIN_MS = 760;
const LOADING_EXIT_MS = 440;
const LOADING_MAX_MS = 5000;

function hasSeenHomeLoading() {
  try {
    return window.sessionStorage.getItem(LOADING_SESSION_KEY) === "true";
  } catch {
    return false;
  }
}

function markHomeLoadingSeen() {
  try {
    window.sessionStorage.setItem(LOADING_SESSION_KEY, "true");
  } catch {
    // Storage can be unavailable in private or restricted browser contexts.
  }
}

export function HomeLoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const hasSeenLoading = hasSeenHomeLoading();
    let heroReady = document.documentElement.dataset.heroReady === "true";
    let minimumElapsed = hasSeenLoading;
    let leaveTimer = 0;

    if (!hasSeenLoading) {
      markHomeLoadingSeen();
    }

    document.documentElement.dataset.homeReady = "false";
    document.documentElement.dataset.homeRevealing = "false";

    const originalOverflow = document.body.style.overflow;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    document.body.style.overflow = "hidden";

    const finishLoading = () => {
      if (!heroReady || !minimumElapsed || leaveTimer) {
        return;
      }

      setIsLeaving(true);
      leaveTimer = window.setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflow = originalOverflow;
      }, prefersReducedMotion ? 0 : LOADING_EXIT_MS);
    };

    const handleHeroReady = () => {
      heroReady = true;
      finishLoading();
    };

    window.addEventListener("hhw:hero-ready", handleHeroReady);

    const minimumTimer = window.setTimeout(
      () => {
        minimumElapsed = true;
        finishLoading();
      },
      hasSeenLoading || prefersReducedMotion ? 0 : FIRST_VISIT_MIN_MS,
    );
    const maximumTimer = window.setTimeout(() => {
      heroReady = true;
      minimumElapsed = true;
      finishLoading();
    }, LOADING_MAX_MS);

    finishLoading();

    return () => {
      window.removeEventListener("hhw:hero-ready", handleHeroReady);
      window.clearTimeout(minimumTimer);
      window.clearTimeout(maximumTimer);
      window.clearTimeout(leaveTimer);
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  useEffect(() => {
    if (!isLeaving) {
      return;
    }

    document.documentElement.dataset.homeRevealing = "true";
    window.dispatchEvent(new Event("hhw:home-revealing"));
  }, [isLeaving]);

  useEffect(() => {
    if (isVisible) {
      return;
    }

    document.documentElement.dataset.homeReady = "true";
    delete document.documentElement.dataset.homeRevealing;
    window.dispatchEvent(new Event("hhw:home-ready"));
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }

  return <LoadingScreen isLeaving={isLeaving} />;
}
