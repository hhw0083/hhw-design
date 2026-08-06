"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type MutableRefObject } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";

const ROUTE_LOADING_DELAY_MS = 280;
const ROUTE_LOADING_EXIT_MS = 440;
const ROUTE_LOADING_MAX_MS = 6000;

function clearTimer(timerRef: MutableRefObject<number | null>) {
  if (timerRef.current) {
    window.clearTimeout(timerRef.current);
    timerRef.current = null;
  }
}

function shouldHandleNavigation(event: MouseEvent) {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.altKey ||
    event.ctrlKey ||
    event.shiftKey
  ) {
    return false;
  }

  const target = event.target;

  if (!(target instanceof Element)) {
    return false;
  }

  const anchor = target.closest("a[href]");

  if (!(anchor instanceof HTMLAnchorElement)) {
    return false;
  }

  if (
    (anchor.target && anchor.target !== "_self") ||
    anchor.hasAttribute("download")
  ) {
    return false;
  }

  const targetUrl = new URL(anchor.href, window.location.href);

  if (targetUrl.origin !== window.location.origin) {
    return false;
  }

  const currentRoute = `${window.location.pathname}${window.location.search}`;
  const nextRoute = `${targetUrl.pathname}${targetUrl.search}`;

  return currentRoute !== nextRoute;
}

export function RouteLoadingOverlay() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const showTimerRef = useRef<number | null>(null);
  const exitTimerRef = useRef<number | null>(null);
  const maxTimerRef = useRef<number | null>(null);
  const previousPathnameRef = useRef(pathname);

  useEffect(() => {
    if (previousPathnameRef.current === pathname) {
      return;
    }

    previousPathnameRef.current = pathname;
    clearTimer(showTimerRef);
    clearTimer(maxTimerRef);

    if (!isVisible) {
      return;
    }

    setIsLeaving(true);
    clearTimer(exitTimerRef);
    exitTimerRef.current = window.setTimeout(() => {
      setIsVisible(false);
      setIsLeaving(false);
      exitTimerRef.current = null;
    }, ROUTE_LOADING_EXIT_MS);
  }, [pathname, isVisible]);

  useEffect(() => {
    const showLoading = () => {
      clearTimer(exitTimerRef);
      setIsLeaving(false);
      setIsVisible(true);

      clearTimer(maxTimerRef);
      maxTimerRef.current = window.setTimeout(() => {
        setIsLeaving(true);
        exitTimerRef.current = window.setTimeout(() => {
          setIsVisible(false);
          setIsLeaving(false);
          exitTimerRef.current = null;
        }, ROUTE_LOADING_EXIT_MS);
      }, ROUTE_LOADING_MAX_MS);
    };

    const handleClick = (event: MouseEvent) => {
      if (!shouldHandleNavigation(event)) {
        return;
      }

      clearTimer(showTimerRef);
      showTimerRef.current = window.setTimeout(() => {
        showLoading();
        showTimerRef.current = null;
      }, ROUTE_LOADING_DELAY_MS);
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
      clearTimer(showTimerRef);
      clearTimer(exitTimerRef);
      clearTimer(maxTimerRef);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return <LoadingScreen isLeaving={isLeaving} label="Loading page" />;
}
