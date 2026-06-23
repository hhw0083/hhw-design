type TagListProps = {
  tags: string[];
  className?: string;
  size?: "sm" | "md";
  tone?: "neutral";
};

export function TagList({
  tags,
  className = "",
  size = "md",
  tone = "neutral",
}: TagListProps) {
  const sizeClass =
    size === "sm"
      ? "px-2.5 py-1.5 text-xs"
      : "px-3 py-2 text-sm";
  const toneClass =
    tone === "neutral"
      ? "border-slate-200 bg-slate-50 text-slate-700"
      : "border-slate-200 bg-slate-50 text-slate-700";

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag) => (
        <span
          key={tag}
          className={`rounded-full border font-medium ${toneClass} ${sizeClass}`}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
