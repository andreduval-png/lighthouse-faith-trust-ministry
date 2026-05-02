import { ValueCard } from "../components/Card";
import { CTASection } from "../components/CTASection";
import { PageHeader } from "../components/PageHeader";
import { SectionHeading } from "../components/SectionHeading";
import { coreValues } from "../data/siteContent";

export function MissionVision() {
  return (
    <>
      <PageHeader
        eyebrow="Mission & Vision"
        lead="Our mission and vision express the heart of the ministry: faith, service, education, stewardship, and spiritual growth."
        title="Serving as a faithful beacon of hope."
      />

      <section className="bg-white py-16">
        <div className="container-padded grid gap-6 lg:grid-cols-2">
          <article className="surface-card p-7">
            <p className="text-sm font-bold uppercase text-gold-500">Mission</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-navy-950">Why we serve</h2>
            <p className="mt-5 text-xl leading-9 text-ink/80">
              "To spread the light of faith, trust, and Christian values by serving our community, fostering spiritual
              growth, and inspiring individuals to walk in faith and purpose."
            </p>
          </article>

          <article className="surface-card p-7">
            <p className="text-sm font-bold uppercase text-gold-500">Vision</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-navy-950">Where we are going</h2>
            <p className="mt-5 text-xl leading-9 text-ink/80">
              "To be a faithful beacon of hope, service, education, and stewardship for individuals and families seeking
              to grow in faith and walk in purpose."
            </p>
          </article>
        </div>
      </section>

      <section className="bg-sand-50 py-16">
        <div className="container-padded">
          <SectionHeading
            align="center"
            eyebrow="Core values"
            title="The commitments that shape our work."
            lead="These values guide how Lighthouse Faith & Trust Ministry worships, serves, teaches, gives, and cares for people."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {coreValues.map((value) => (
              <ValueCard item={value} key={value.title} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        primaryLabel="Read Our Statement of Faith"
        primaryTo="/statement-of-faith"
        secondaryLabel="Explore Ministries"
        secondaryTo="/ministries"
        text="Our values flow from our Christian confession and become visible through practical ministry."
        title="Faith becomes fruitful through service."
      />
    </>
  );
}
