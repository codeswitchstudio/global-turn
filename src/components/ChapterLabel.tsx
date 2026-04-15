interface ChapterLabelProps {
  number: string;
  label: string;
}

export function ChapterLabel({ number, label }: ChapterLabelProps) {
  return (
    <div className="scroll-fade-up mb-8 flex items-center gap-4">
      <span className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-gold">
        {number}
      </span>
      <div className="gradient-divider h-px w-16" />
      <span className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-cream-muted">
        {label}
      </span>
    </div>
  );
}
