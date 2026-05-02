import { Link } from "react-router-dom";
import { MinistryCard, ValueCard } from "../components/Card";
import { CTASection } from "../components/CTASection";
import { Hero } from "../components/Hero";
import { SectionHeading } from "../components/SectionHeading";
import { coreValues, ministryPrograms } from "../data/siteContent";

export function Home() {
  return (
    <>
      <Hero />

      <section className="bg-white py-16">
        <div className="container-padded grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            eyebrow="About the ministry"
            title="A faithful public witness with a heart for service."
            lead="Lighthouse Faith & Trust Ministry exists to spread the light of faith, trust, and Christian values by serving the community, fostering spiritual growth, and inspiring individuals to walk in faith and purpose."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Worship and fellowship",
              "Discipleship and spiritual formation",
              "Biblical teaching",
              "Charitable works",
              "Mutual aid and benevolence",
              "Education and advocacy",
              "Stewardship of resources",
              "Support for families and communities",
            ].map((item) => (
              <div className="rounded-lg border border-sand-200 bg-sand-50 p-4 text-sm font-semibold text-navy-950" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand-50 py-16">
        <div className="container-padded">
          <SectionHeading
            align="center"
            eyebrow="Mission & values"
            title="Faith, stewardship, and community in action."
            lead="Our work is organized around shared faith, responsible stewardship, sincere fellowship, charitable care, and a desire to help people grow spiritually."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {coreValues.slice(0, 10).map((value) => (
              <ValueCard item={value} key={value.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-padded">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Our work"
              title="Ministries shaped by discipleship and care."
              lead="From biblical teaching to benevolence, each ministry area supports the mission with warmth, discretion, and accountability."
            />
            <Link className="focus-ring rounded-md text-sm font-bold text-navy-900 underline decoration-gold-400 underline-offset-4" to="/ministries">
              View all ministries
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ministryPrograms.slice(0, 3).map((program) => (
              <MinistryCard item={program} key={program.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-16 text-white">
        <div className="container-padded grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase text-gold-300">Faith-based stewardship</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">Order, trust, and public care.</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-sand-50/86">
            <p>
              Lighthouse Faith & Trust Ministry is a Christian faith-based ministry and ministry trust, including a
              508(c)(1)(A) faith-based organization identity, with a public focus on worship, fellowship, education,
              benevolence, and accountable stewardship.
            </p>
            <p>
              We present our ministry with dignity and care, keeping the emphasis on faith, service, and the responsible
              administration of resources entrusted for ministry purposes.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        primaryLabel="Request Membership Information"
        primaryTo="/membership"
        secondaryLabel="Support the Ministry"
        secondaryTo="/donate"
        text="Join us in building a faith-centered community rooted in spiritual growth, fellowship, stewardship, and charitable service."
        title="Walk in faith and purpose with us."
      />
    </>
  );
}
