type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  lead: string;
};

export function PageHeader({ eyebrow, title, lead }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 text-white sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(246,212,119,0.24),transparent_28rem),linear-gradient(135deg,rgba(10,38,63,0.96),rgba(17,54,84,0.9))]" />
      <div className="container-padded relative">
        {eyebrow ? (
          <p className="text-sm font-bold uppercase text-gold-300">{eyebrow}</p>
        ) : null}
        <h1 className="mt-4 max-w-4xl font-serif text-4xl font-semibold leading-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-sand-50/88">{lead}</p>
      </div>
    </section>
  );
}
