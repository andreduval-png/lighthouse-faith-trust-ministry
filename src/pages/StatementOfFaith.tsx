import { CTASection } from "../components/CTASection";
import { PageHeader } from "../components/PageHeader";
import { faithPoints } from "../data/siteContent";

export function StatementOfFaith() {
  return (
    <>
      <PageHeader
        eyebrow="Statement of Faith"
        lead="We, the members and leadership of Lighthouse Faith & Trust Ministry, declare this Statement of Faith as the foundation of our beliefs, practices, and purpose."
        title="Statement of Faith"
      />

      <section className="bg-white py-16">
        <div className="container-padded">
          <div className="mx-auto max-w-4xl">
            <div className="space-y-5">
              {faithPoints.map((point, index) => (
                <article className="rounded-lg border border-sand-200 bg-sand-50 p-6" key={point.title}>
                  <p className="text-sm font-bold uppercase text-gold-500">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-navy-950">{point.title}</h2>
                  <p className="mt-3 leading-8 text-ink/78">{point.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        primaryLabel="Request Membership Information"
        primaryTo="/membership"
        secondaryLabel="Contact the Ministry"
        secondaryTo="/contact"
        text="Membership begins with shared faith, fellowship, and a sincere desire to participate in the ministry's mission."
        title="Rooted together in Christian confession."
      />
    </>
  );
}
