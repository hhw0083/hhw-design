import type { ElementType, ReactNode } from "react";

type SectionBadgeProps = {
  as?: "p" | "span";
  children: ReactNode;
  className?: string;
  tone?: "teal" | "muted";
};

export function SectionBadge({
  as = "p",
  children,
  className = "",
  tone = "teal",
}: SectionBadgeProps) {
  const Component: ElementType = as;
  const toneClass = tone === "muted" ? "text-slate-500" : "text-cyanline";

  return (
    <Component
      className={`text-xs font-semibold uppercase tracking-[0.16em] ${toneClass} ${className}`}
    >
      {children}
    </Component>
  );
}
