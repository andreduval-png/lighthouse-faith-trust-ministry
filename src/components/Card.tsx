import type { CardContent } from "../data/siteContent";
import { Icon } from "./Icons";

type MinistryCardProps = {
  item: CardContent;
};

export function MinistryCard({ item }: MinistryCardProps) {
  return (
    <article className="surface-card flex h-full flex-col p-6 transition hover:-translate-y-1 hover:border-gold-300">
      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-navy-900 text-gold-300">
        <Icon name={item.icon} className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-navy-950">{item.title}</h3>
      <p className="mt-3 flex-1 leading-7 text-ink/75">{item.description}</p>
    </article>
  );
}

export function ValueCard({ item }: MinistryCardProps) {
  return (
    <article className="rounded-lg border border-sand-200 bg-white/80 p-5">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-gold-100 text-navy-900">
          <Icon name={item.icon} className="h-5 w-5" />
        </span>
        <h3 className="text-lg font-semibold text-navy-950">{item.title}</h3>
      </div>
      <p className="mt-3 text-sm leading-6 text-ink/75">{item.description}</p>
    </article>
  );
}
