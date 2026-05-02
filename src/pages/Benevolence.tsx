import { CTASection } from "../components/CTASection";
import { PageHeader } from "../components/PageHeader";
import { PublicInquiryForm } from "../components/PublicInquiryForm";
import { SectionHeading } from "../components/SectionHeading";
import { donationUrl } from "../data/siteContent";

const benevolenceItems = [
  {
    title: "Purpose",
    text: "The benevolence fund may assist persons and families in financial need through prayerful, practical support.",
  },
  {
    title: "How to request assistance",
    text: "Requests can be submitted through the benevolence request form and reviewed with care and discretion.",
  },
  {
    title: "How to give",
    text: "Supporters may suggest that gifts be used for benevolence purposes while the ministry retains stewardship responsibility.",
  },
  {
    title: "Stewardship statement",
    text: "Final administration and disbursement decisions remain under the ministry's stewardship and discretion.",
  },
  {
    title: "Confidentiality statement",
    text: "Requests are handled with respect for personal dignity, privacy, and appropriate ministry accountability.",
  },
];

export function Benevolence() {
  return (
    <>
      <PageHeader
        eyebrow="Benevolence Fund"
        lead="The ministry may maintain a benevolence fund to assist persons and families in financial need. Contributions may be suggested for benevolence purposes, but final administration and disbursement decisions remain under the ministry's stewardship and discretion."
        title="Practical care administered with compassion and stewardship."
      />

      <section className="bg-white py-16">
        <div className="container-padded grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Benevolence care"
              title="Supporting needs with dignity."
              lead="Benevolence is an expression of Christian compassion. It is handled with discretion, stewardship, and care for the people involved."
            />
            <div className="mt-8 grid gap-4">
              {benevolenceItems.map((item) => (
                <article className="rounded-lg border border-sand-200 bg-sand-50 p-5" key={item.title}>
                  <h2 className="text-lg font-semibold text-navy-950">{item.title}</h2>
                  <p className="mt-2 leading-7 text-ink/75">{item.text}</p>
                </article>
              ))}
            </div>
          </div>

          <PublicInquiryForm
            checkboxLabel="I consent to the ministry receiving this benevolence request for review and follow-up."
            kind="benevolence"
            submitLabel="Submit Benevolence Request"
            title="Benevolence request form"
          />
        </div>
      </section>

      <section className="bg-sand-50 py-16" id="give">
        <div className="container-padded">
          <div className="surface-card flex flex-col gap-5 p-7 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase text-gold-500">Give</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-navy-950">Support benevolence work.</h2>
              <p className="mt-3 max-w-3xl leading-7 text-ink/75">
                Gifts may be suggested for benevolence purposes and are administered according to ministry stewardship.
              </p>
            </div>
            <a
              className="focus-ring inline-flex min-h-11 items-center justify-center rounded-md bg-gold-400 px-5 py-3 text-sm font-semibold text-navy-950 transition hover:bg-gold-300"
              href={donationUrl}
              rel="noreferrer"
              target="_blank"
            >
              Support Benevolence Work
            </a>
          </div>
        </div>
      </section>

      <CTASection
        primaryLabel="Contact the Ministry"
        primaryTo="/contact"
        secondaryLabel="Support the Fund"
        secondaryTo="/donate"
        text="Benevolence requires compassion, wisdom, confidentiality, and faithful administration."
        title="Care for people, stewarded faithfully."
      />
    </>
  );
}
