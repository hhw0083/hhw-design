"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function HomeLoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const leaveTimer = window.setTimeout(() => setIsLeaving(true), 850);
    const removeTimer = window.setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = originalOverflow;
    }, 1100);

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
      className={`home-loader fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-[#04101b] ${
        isLeaving ? "home-loader--leaving" : ""
      }`}
      role="status"
      aria-label="Loading HHW Portfolio"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_44%,rgba(20,184,166,0.15),transparent_20rem),linear-gradient(135deg,#030b14_0%,#071827_52%,#030b14_100%)]"
        aria-hidden="true"
      />
      <div
        className="home-loader__scan absolute inset-x-0 top-1/2 h-px bg-[linear-gradient(90deg,transparent,rgba(94,234,212,0.45),transparent)]"
        aria-hidden="true"
      />

      <div className="home-loader__brand relative flex flex-col items-center">
        <div className="grid size-20 place-items-center rounded-2xl border border-white/10 bg-white/[0.05] shadow-[0_20px_60px_rgba(0,0,0,0.32)] backdrop-blur-xl">
          <Image
            src="/images/x-logo-light.svg"
            alt=""
            width={52}
            height={52}
            priority
            className="size-13 invert"
          />
        </div>
        <p className="mt-5 text-sm font-semibold tracking-[0.2em] text-white">
          HHW
        </p>
        <p className="mt-1 text-[10px] uppercase tracking-[0.24em] text-teal-300/80">
          UI/UX Portfolio
        </p>

        <div
          className="mt-7 h-px w-44 overflow-hidden bg-white/10"
          aria-hidden="true"
        >
          <span className="home-loader__progress block h-full bg-[linear-gradient(90deg,#0f766e,#5eead4)]" />
        </div>
      </div>
      <span className="sr-only">Loading portfolio</span>
    </div>
  );
}
