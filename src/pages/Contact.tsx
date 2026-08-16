import { PageHeader } from "../components/PageHeader";
import { PublicInquiryForm } from "../components/PublicInquiryForm";
import { SectionHeading } from "../components/SectionHeading";
import { ministryContacts } from "../data/siteContent";

export function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        lead="We welcome sincere inquiries from individuals and families seeking faith, fellowship, survivor advocacy, support, or opportunities to serve."
        title="Connect with Lighthouse Faith & Trust Ministry."
      />

      <section className="bg-white py-16">
        <div className="container-padded grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading
              eyebrow="Inquiries"
              title="How can we help?"
              lead="Use the form for general questions, ministry support, membership, donation, benevolence, survivor advocacy, or partnership inquiries."
            />
            <div className="mt-8 rounded-lg border border-sand-200 bg-sand-50 p-6">
              <h2 className="text-xl font-semibold text-navy-950">Public contact information</h2>
              <div className="mt-4 grid gap-4">
                {ministryContacts.map((contact) => (
                  <p className="leading-7 text-ink/75" key={contact.email}>
                    <span className="block font-semibold text-navy-950">{contact.name}</span>
                    <a className="focus-ring rounded-sm underline decoration-gold-400 underline-offset-4" href={`mailto:${contact.email}`}>
                      {contact.email}
                    </a>
                  </p>
                ))}
              </div>
            </div>
          </div>

          <PublicInquiryForm
            checkboxLabel="I consent to being contacted regarding this inquiry."
            kind="contact"
            submitLabel="Send Inquiry"
            title="General inquiry form"
          />
        </div>
      </section>
    </>
  );
}
