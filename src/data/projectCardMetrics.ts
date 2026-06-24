import type {
  CaseStudyContentBlock,
  CaseStudySection,
  Project,
  ProjectMetric,
} from "./types";

function isGalleryLikeBlock(
  block: CaseStudyContentBlock,
): block is Extract<
  CaseStudyContentBlock,
  { type: "gallery" | "visual-showcase" | "feature-gallery" }
> {
  return (
    block.type === "gallery" ||
    block.type === "visual-showcase" ||
    block.type === "feature-gallery"
  );
}

function countItemsInSections(
  sections: CaseStudySection[],
  matcher: (section: CaseStudySection) => boolean,
) {
  return sections
    .filter(matcher)
    .flatMap((section) => section.contentBlocks)
    .filter(isGalleryLikeBlock)
    .reduce((total, block) => total + block.items.length, 0);
}

function sectionText(section: CaseStudySection) {
  return `${section.title} ${section.subtitle} ${section.type}`.toLowerCase();
}

function getDerivedMetricValue(project: Project, label: string) {
  const normalizedLabel = label.toLowerCase();

  if (normalizedLabel === "sections") {
    return project.caseStudySections.length;
  }

  if (
    normalizedLabel === "applications" ||
    normalizedLabel === "brand applications"
  ) {
    const applicationsCount = countItemsInSections(
      project.caseStudySections,
      (section) => {
        const text = sectionText(section);
        return text.includes("applications") || text.includes("品牌應用");
      },
    );

    return applicationsCount || undefined;
  }

  if (normalizedLabel === "concepts") {
    const conceptCount = countItemsInSections(
      project.caseStudySections,
      (section) => {
        const text = sectionText(section);
        return text.includes("concept") || text.includes("概念");
      },
    );

    return conceptCount || undefined;
  }

  if (normalizedLabel === "logo routes") {
    const logoCount = countItemsInSections(
      project.caseStudySections,
      (section) => {
        const text = sectionText(section);
        return text.includes("logo");
      },
    );

    return logoCount || undefined;
  }

  if (normalizedLabel === "color groups" || normalizedLabel === "color sets") {
    return project.colorSystem?.length;
  }

  if (normalizedLabel === "components") {
    return project.components?.length;
  }

  if (normalizedLabel === "final visuals") {
    const finalVisualsCount = countItemsInSections(
      project.caseStudySections,
      (section) => {
        const text = sectionText(section);
        return text.includes("final");
      },
    );

    return finalVisualsCount || undefined;
  }

  return undefined;
}

export function getProjectCardMetrics(project: Project): ProjectMetric[] {
  return project.metrics.map((metric) => {
    const derivedValue = getDerivedMetricValue(project, metric.label);

    return {
      ...metric,
      value:
        typeof derivedValue === "number" ? String(derivedValue) : metric.value,
    };
  });
}
