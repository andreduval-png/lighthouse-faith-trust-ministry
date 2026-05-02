import { CTASection } from "../components/CTASection";
import { PageHeader } from "../components/PageHeader";
import { SectionHeading } from "../components/SectionHeading";

const governanceItems = [
  "The ministry is governed through trustee and leadership oversight.",
  "Resources are administered for the ministry's mission.",
  "Records of receipts and disbursements should be maintained.",
  "Annual or periodic reports may be provided.",
  "Conflicts of interest should be disclosed and handled with integrity.",
  "Ministry property and resources are held for ministry purposes.",
  "Leadership aims to act with accountability, wisdom, and faithful stewardship.",
];

export function Governance() {
  return (
    <>
      <PageHeader
        eyebrow="Governance & Stewardship"
        lead="Faithful leadership includes order, accountability, discretion, and responsible administration of resources entrusted for ministry purposes."
        title="Stewardship with wisdom and integrity."
      />

      <section className="bg-white py-16">
        <div className="container-padded grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="Ministry oversight"
            title="Resources held for mission-centered work."
            lead="The ministry seeks to handle its public work with dignity and care, without publishing private addresses, signatures, internal legal documents, or confidential trust details."
          />

          <div className="grid gap-4">
            {governanceItems.map((item) => (
              <div className="rounded-lg border border-sand-200 bg-sand-50 p-5 text-base font-semibold leading-7 text-navy-950" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand-50 py-16">
        <div className="container-padded">
          <article className="surface-card p-7">
            <p className="text-sm font-bold uppercase text-gold-500">Public trust</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-navy-950">
              Clear public language, private details protected.
            </h2>
            <p className="mt-4 max-w-4xl leading-8 text-ink/78">
              Public ministry communication should emphasize faith, fellowship, charitable service, education,
              benevolence, stewardship, and accountability. Private addresses, personal phone numbers, signature blocks,
              notary language, internal trust details, and confidential records should remain outside public-facing
              website content.
            </p>
          </article>
        </div>
      </section>

      <CTASection
        primaryLabel="Contact Us"
        primaryTo="/contact"
        secondaryLabel="Support the Ministry"
        secondaryTo="/donate"
        text="Questions about ministry participation, support, or stewardship can be submitted through the contact form."
        title="Stewardship welcomes sincere inquiry."
      />
    </>
  );
}
