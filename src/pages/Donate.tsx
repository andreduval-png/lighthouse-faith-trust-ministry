import { Link } from "react-router-dom";
import { MinistryCard } from "../components/Card";
import { CTASection } from "../components/CTASection";
import { PageHeader } from "../components/PageHeader";
import { SectionHeading } from "../components/SectionHeading";
import { donationCategories, donationUrl } from "../data/siteContent";

export function Donate() {
  return (
    <>
      <PageHeader
        eyebrow="Donations & Support"
        lead="Lighthouse Faith & Trust Ministry is supported by voluntary donations, offerings, gifts, and contributions from members, friends, and supporters who desire to advance the ministry's mission."
        title="Support faithful ministry and community care."
      />

      <section className="bg-white py-16">
        <div className="container-padded">
          <SectionHeading
            align="center"
            eyebrow="Giving areas"
            title="Choose a ministry purpose to support."
            lead="Gifts help sustain worship, discipleship, benevolence, education, outreach, and practical community support."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {donationCategories.map((category) => (
              <MinistryCard item={category} key={category.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand-50 py-16" id="donation-options">
        <div className="container-padded grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            eyebrow="Donation options"
            title="Voluntary giving, handled with care."
            lead="Online donations are routed through the ministry's Zeffy giving form."
          />
          <div className="surface-card p-6">
            <div className="grid gap-3 sm:grid-cols-2">
              <a
                className="focus-ring rounded-md bg-gold-400 px-5 py-3 text-center text-sm font-semibold text-navy-950 transition hover:bg-gold-300"
                href={donationUrl}
                rel="noreferrer"
                target="_blank"
              >
                Donate Now
              </a>
              <a
                className="focus-ring rounded-md bg-navy-900 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-navy-800"
                href={donationUrl}
                rel="noreferrer"
                target="_blank"
              >
                Give to Benevolence Fund
              </a>
              <Link
                className="focus-ring rounded-md border border-navy-900 px-5 py-3 text-center text-sm font-semibold text-navy-950 transition hover:bg-white"
                to="/contact"
              >
                Contact Us About Giving
              </Link>
            </div>
            <p className="mt-6 rounded-lg border border-gold-300 bg-gold-100/70 p-4 text-sm leading-6 text-navy-950">
              Lighthouse Faith & Trust Ministry is a faith-based ministry. Donation treatment may depend on individual
              circumstances. Donors should consult their own tax professional regarding deductibility or reporting.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        primaryLabel="Contact Us About Giving"
        primaryTo="/contact"
        secondaryLabel="Support Benevolence"
        secondaryTo="/benevolence"
        text="Stewardship includes clear purpose, careful administration, and responsible communication with supporters."
        title="Thank you for helping the ministry serve."
      />
    </>
  );
}
