import type { CSSProperties } from "react";
import type { Project } from "@/data/projects";

type ProjectVisualProps = {
  project: Project;
  compact?: boolean;
};

export function ProjectVisual({ project, compact = false }: ProjectVisualProps) {
  return (
    <div
      className="relative overflow-hidden rounded-md border border-white/[0.12] bg-panel shadow-panel-glow"
      style={
        {
          "--project-primary": project.theme.primary,
          "--project-secondary": project.theme.secondary,
          "--project-accent": project.theme.accent,
        } as CSSProperties
      }
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--project-primary),transparent)]" />

      <div className={compact ? "p-4" : "p-5 md:p-7"}>
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-[var(--project-primary)]" />
            <span className="size-2 rounded-full bg-[var(--project-secondary)]" />
            <span className="size-2 rounded-full bg-[var(--project-accent)]" />
          </div>
          <div className="h-2 w-24 rounded-full bg-white/10" />
        </div>

        <div className="grid gap-4 md:grid-cols-[0.7fr_1fr]">
          <div className="space-y-3">
            <div className="rounded-md border border-white/10 bg-black/[0.28] p-3">
              <div className="mb-3 h-2 w-16 rounded-full bg-white/[0.16]" />
              <div className="h-20 rounded-md bg-[linear-gradient(145deg,var(--project-primary),rgba(255,255,255,0.08))]" />
            </div>
            <div className="rounded-md border border-white/10 bg-black/[0.28] p-3">
              <div className="h-2 w-20 rounded-full bg-white/[0.16]" />
              <div className="mt-3 grid grid-cols-3 gap-2">
                {project.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="h-12 rounded border border-white/10 bg-white/[0.06]"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-md border border-white/10 bg-black/[0.32] p-3">
            <div className="mb-4 flex items-center justify-between">
              <div className="h-2 w-28 rounded-full bg-white/[0.16]" />
              <div className="h-6 w-16 rounded border border-white/10 bg-white/[0.06]" />
            </div>
            <div className="grid h-44 grid-cols-6 items-end gap-2">
              {[44, 72, 56, 92, 68, 112].map((height, index) => (
                <div
                  key={height}
                  className="rounded-t-sm bg-[linear-gradient(180deg,var(--project-primary),rgba(255,255,255,0.08))]"
                  style={{
                    height: `${compact ? height * 0.72 : height}px`,
                    opacity: 0.72 + index * 0.04,
                  }}
                />
              ))}
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="h-16 rounded-md border border-white/10 bg-white/[0.06]" />
              <div className="h-16 rounded-md border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),var(--project-secondary))] opacity-80" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
