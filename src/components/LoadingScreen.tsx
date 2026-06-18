"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type LoadingScreenProps = {
  isLeaving?: boolean;
  delayed?: boolean;
  delayMs?: number;
  label?: string;
};

export function LoadingScreen({
  isLeaving = false,
  delayed = false,
  delayMs = 320,
  label = "Loading HHW Portfolio",
}: LoadingScreenProps) {
  const [shouldShow, setShouldShow] = useState(!delayed);

  useEffect(() => {
    if (!delayed) {
      setShouldShow(true);
      return;
    }

    const timer = window.setTimeout(() => {
      setShouldShow(true);
    }, delayMs);

    return () => {
      window.clearTimeout(timer);
    };
  }, [delayed, delayMs]);

  if (!shouldShow) {
    return null;
  }

  return (
    <div
      className={`home-loader fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-[#eef3f5] ${
        isLeaving ? "home-loader--leaving" : ""
      }`}
      role="status"
      aria-label={label}
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
      <span className="sr-only">{label}</span>
    </div>
  );
}
