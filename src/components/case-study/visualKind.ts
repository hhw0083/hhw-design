import type { CaseStudyVisualKind } from "@/data/projects";
import type { CaseStudyFallbackKind } from "./CaseStudyVisualFallback";

export function isProjectFallbackVisual(
  visual?: CaseStudyVisualKind,
): visual is CaseStudyFallbackKind {
  return Boolean(
    visual?.startsWith("tcb-") ||
      visual?.startsWith("rmic-") ||
      visual?.startsWith("jule-") ||
      visual?.startsWith("tian-liang-"),
  );
}
