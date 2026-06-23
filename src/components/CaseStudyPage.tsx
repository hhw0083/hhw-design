import { CaseStudyRenderer } from "@/components/case-study/CaseStudyRenderer";
import { DesignGoalsSection } from "@/components/case-study/DesignGoalsSection";
import { CaseStudySectionLayout } from "@/components/case-study/CaseStudySectionLayout";
import { InteractivePrototypeSection } from "@/components/case-study/InteractivePrototypeSection";
import type { Project } from "@/data/projects";

export function CaseStudyPage({ project }: { project: Project }) {
  const contentSections = project.caseStudySections.filter(
    (section) => section.type !== "overview",
  );
  const prototypeInsertionIndex = Math.max(contentSections.length - 1, 0);

  return (
    <div>
      {contentSections.map((section, sectionIndex) => {
        const originalIndex = project.caseStudySections.indexOf(section);
        const designGoals =
          section.type === "goals"
            ? section.contentBlocks.find(
                (block) => block.type === "design-goals",
              )
            : undefined;

        const renderedSection =
          designGoals?.type === "design-goals" ? (
            <DesignGoalsSection
              sectionNumber={section.number}
              eyebrow={section.title}
              title={section.subtitle}
              description={section.description}
              goals={designGoals.goals}
              previewImage={designGoals.previewImage}
              previewVisual={designGoals.previewVisual}
              accentColor={project.theme.primary}
              secondaryColor={project.theme.secondary}
            />
          ) : (
            <CaseStudySectionLayout
              sectionNumber={section.number}
              eyebrow={section.title}
              title={section.subtitle}
              description={section.description}
              background={originalIndex % 2 === 0 ? "canvas" : "white"}
              layout={
                section.type === "user-flow" ? "narrative" : "showcase"
              }
              accentColor={project.theme.primary}
            >
              {section.contentBlocks.map((block, blockIndex) => (
                <CaseStudyRenderer
                  key={`${section.number}-${block.type}-${blockIndex}`}
                  block={block}
                />
              ))}
            </CaseStudySectionLayout>
          );

        return (
          <div key={section.number}>
            {project.figmaPrototypeUrl &&
            sectionIndex === prototypeInsertionIndex ? (
              <InteractivePrototypeSection
                prototypeUrl={project.figmaPrototypeUrl}
                accentColor={project.theme.primary}
              />
            ) : null}
            {renderedSection}
          </div>
        );
      })}
    </div>
  );
}
