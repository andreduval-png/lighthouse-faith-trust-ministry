import { ButtonLink } from "./ButtonLink";

export function Hero() {
  return (
    <section className="relative isolate min-h-[76svh] overflow-hidden bg-navy-950 text-white">
      <img
        alt="Lighthouse at sunrise shining across calm coastal water"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
        src="/assets/lighthouse-hero.png"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/76 to-navy-900/18" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-navy-950/70 to-transparent" />

      <div className="container-padded relative flex min-h-[76svh] items-center py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase text-gold-300">
            Christian faith-based ministry
          </p>
          <h1 className="mt-5 font-serif text-5xl font-semibold leading-[1.04] sm:text-6xl lg:text-7xl">
            Lighthouse Faith & Trust Ministry
          </h1>
          <p className="mt-5 text-2xl font-semibold text-sand-50">A Beacon of Faith, A Foundation of Trust.</p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-sand-50/88">
            We are a Christian faith-based ministry committed to spiritual growth, fellowship, stewardship, charitable
            service, education, and community support.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink to="/donate" variant="primary">
              Support the Ministry
            </ButtonLink>
            <ButtonLink to="/membership" variant="light">
              Become a Member
            </ButtonLink>
            <ButtonLink to="/statement-of-faith" variant="outline">
              Read Our Statement of Faith
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
