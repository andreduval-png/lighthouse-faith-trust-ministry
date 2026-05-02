type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl ${className}`}>
      {eyebrow ? (
        <p className="text-sm font-bold uppercase text-gold-500">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 font-serif text-3xl font-semibold text-navy-950 sm:text-4xl">{title}</h2>
      {lead ? <p className="mt-4 text-lg leading-8 text-ink/80">{lead}</p> : null}
    </div>
  );
}
