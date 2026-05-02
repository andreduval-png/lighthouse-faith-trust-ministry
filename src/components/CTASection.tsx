import { ButtonLink } from "./ButtonLink";

type CTASectionProps = {
  title: string;
  text: string;
  primaryLabel: string;
  primaryTo: string;
  secondaryLabel?: string;
  secondaryTo?: string;
};

export function CTASection({
  title,
  text,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryTo,
}: CTASectionProps) {
  return (
    <section className="bg-navy-950 py-16 text-white">
      <div className="container-padded">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-gold-300">Take the next step</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">{title}</h2>
            <p className="mt-4 text-lg leading-8 text-sand-50/85">{text}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
            <ButtonLink to={primaryTo} variant="primary">
              {primaryLabel}
            </ButtonLink>
            {secondaryLabel && secondaryTo ? (
              <ButtonLink to={secondaryTo} variant="outline">
                {secondaryLabel}
              </ButtonLink>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
