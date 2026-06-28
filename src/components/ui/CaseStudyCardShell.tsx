import type { ElementType, ReactNode } from "react";

type CaseStudyCardShellProps = {
  as?: "article" | "div";
  children: ReactNode;
  className?: string;
};

export function CaseStudyCardShell({
  as = "div",
  children,
  className = "",
}: CaseStudyCardShellProps) {
  const Component: ElementType = as;

  return (
    <Component
      className={`rounded-lg border border-stroke-soft bg-surface-paper p-5 shadow-sm ${className}`}
    >
      {children}
    </Component>
  );
}
