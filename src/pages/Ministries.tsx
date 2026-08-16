import { MinistryCard } from "../components/Card";
import { CTASection } from "../components/CTASection";
import { PageHeader } from "../components/PageHeader";
import { SectionHeading } from "../components/SectionHeading";
import { ministryPrograms } from "../data/siteContent";

export function Ministries() {
  return (
    <>
      <PageHeader
        eyebrow="Ministries"
        lead="Our work brings together discipleship, education, survivor advocacy, benevolence, family support, and faithful administration of ministry resources."
        title="Ministry programs for faith, restoration, and community support."
      />

      <section className="bg-white py-16">
        <div className="container-padded">
          <SectionHeading
            align="center"
            eyebrow="Our work"
            title="Serving with care, discretion, and purpose."
            lead="Each ministry area is designed to support spiritual growth, fellowship, practical care, survivor restoration, and community strengthening."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ministryPrograms.map((program) => (
              <MinistryCard item={program} key={program.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand-50 py-16">
        <div className="container-padded grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionHeading
            eyebrow="Ministry practice"
            title="Accountable service for real needs."
            lead="The ministry seeks to serve people without spectacle. Assistance, teaching, and community support are handled with prayerful care, dignity, and stewardship."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Prayerful discernment",
              "Confidential care",
              "Resource stewardship",
              "Family encouragement",
              "Survivor-centered referrals",
              "Documentation support",
            ].map((item) => (
              <div className="rounded-lg border border-sand-200 bg-white p-5 text-lg font-semibold text-navy-950" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        primaryLabel="Become a Member"
        primaryTo="/membership"
        secondaryLabel="Survivor Advocacy"
        secondaryTo="/survivor-advocacy"
        text="Your participation, prayers, gifts, and service can help the ministry serve families and communities with faith and integrity."
        title="Partner with the ministry's mission."
      />
    </>
  );
}
