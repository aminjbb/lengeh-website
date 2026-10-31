type SectionHeadingProps = { eyebrow?: string; title: string; description?: string };

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="text-center mb-8">
      {eyebrow && <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 font-semibold block mb-1">{eyebrow}</span>}
      <h2 className="font-serif-editorial text-2xl sm:text-3xl text-neutral-900 font-normal tracking-tight">{title}</h2>
      {description && <p className="text-xs sm:text-sm text-neutral-600 max-w-xl mx-auto mt-2 leading-relaxed">{description}</p>}
    </div>
  );
}
