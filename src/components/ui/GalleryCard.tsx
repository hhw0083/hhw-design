import type { ReactNode } from "react";

type GalleryCardProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  caption?: string;
  children?: ReactNode;
  className?: string;
};

export function GalleryCard({
  title,
  description,
  eyebrow,
  caption,
  children,
  className = "",
}: GalleryCardProps) {
  return (
    <article
      className={`flex h-full flex-col overflow-hidden rounded-2xl border border-stroke-soft/80 bg-surface-paper/90 shadow-[0_18px_48px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-stroke-muted/80 hover:shadow-[0_28px_70px_rgba(15,23,42,0.1)] ${className}`}
    >
      {children}
      <div className="flex flex-1 flex-col p-5">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-primary">
            {eyebrow}
          </p>
        ) : null}
        <h3 className="mt-3 text-xl font-semibold text-copy-primary">
          {title}
        </h3>
        {description ? (
          <p className="mt-3 text-sm leading-7 text-copy-secondary">
            {description}
          </p>
        ) : null}
        {caption ? (
          <p className="mt-3 text-sm leading-7 text-copy-secondary">
            {caption}
          </p>
        ) : null}
      </div>
    </article>
  );
}
