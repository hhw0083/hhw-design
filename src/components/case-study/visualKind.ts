import type { CaseStudyVisualKind } from "@/data/projects";
import type { CaseStudyFallbackKind } from "./CaseStudyVisualFallback";

export function isProjectFallbackVisual(
  visual?: CaseStudyVisualKind,
): visual is CaseStudyFallbackKind {
  return Boolean(
    visual?.startsWith("tcb-") ||
      visual?.startsWith("rmic-") ||
      visual?.startsWith("jule-") ||
      visual?.startsWith("ina-") ||
      visual?.startsWith("dome-") ||
      visual?.startsWith("meow-") ||
      visual?.startsWith("tian-liang-"),
  );
}
