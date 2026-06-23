import type { ReactNode } from "react";
import { CaseStudyCardShell } from "./CaseStudyCardShell";
import { SectionBadge } from "./SectionBadge";

type TextCardProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  icon?: ReactNode;
  largeIcon?: boolean;
  children?: ReactNode;
};

export function TextCard({
  title,
  description,
  eyebrow,
  icon,
  largeIcon = false,
  children,
}: TextCardProps) {
  return (
    <CaseStudyCardShell as="article">
      <div className="flex items-start gap-3">
        {icon ? (
          <div
            className={`grid shrink-0 place-items-center rounded-lg border border-teal-100 bg-teal-50 text-cyanline ${
              largeIcon ? "size-16" : "size-10"
            }`}
          >
            {icon}
          </div>
        ) : null}
        <div>
          {eyebrow ? <SectionBadge>{eyebrow}</SectionBadge> : null}
          <h3 className={eyebrow ? "mt-2 text-lg font-semibold text-slate-950" : "text-lg font-semibold text-slate-950"}>
            {title}
          </h3>
          {description ? (
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {description}
            </p>
          ) : null}
          {children}
        </div>
      </div>
    </CaseStudyCardShell>
  );
}
