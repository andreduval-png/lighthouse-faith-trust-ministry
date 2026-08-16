import { ButtonLink } from "../components/ButtonLink";
import { MinistryCard } from "../components/Card";
import { CTASection } from "../components/CTASection";
import { PageHeader } from "../components/PageHeader";
import { PublicInquiryForm } from "../components/PublicInquiryForm";
import { SectionHeading } from "../components/SectionHeading";
import {
  advocacyPillars,
  advocacyReadinessSteps,
  officialAdvocacyResources,
  stabilizationSteps,
} from "../data/siteContent";

export function SurvivorAdvocacy() {
  return (
    <>
      <PageHeader
        eyebrow="Survivor Advocacy"
        lead="Lighthouse Survivor Restoration & Advocacy Ministry supports individuals and families affected by human trafficking through survivor-centered advocacy, education, referral navigation, documentation support, benevolence coordination, and community partnerships."
        title="A faith-centered pathway for survivor restoration."
      />

      <section className="bg-white py-16">
        <div className="container-padded grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            eyebrow="Program purpose"
            title="Care that protects dignity, consent, and trust."
            lead="Human trafficking can leave spiritual, practical, housing, identity, family, and community harm. Lighthouse aims to help people take the next faithful step without pressure, shame, or public exposure."
          />
          <div className="surface-card p-6">
            <h2 className="font-serif text-2xl font-semibold text-navy-950">What Lighthouse does</h2>
            <p className="mt-4 leading-8 text-ink/78">
              We provide education, pastoral care upon request, non-emergency referral navigation, documentation
              organization, benevolence review, and partnership development. We do not provide legal advice, licensed
              counseling, emergency response, professional case management, or formal verification of survivor status.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="#advocacy-inquiry" variant="primary">
                Request Advocacy Information
              </ButtonLink>
              <ButtonLink to="/donate" variant="secondary">
                Support Survivor Advocacy
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sand-50 py-16">
        <div className="container-padded">
          <SectionHeading
            align="center"
            eyebrow="Support areas"
            title="A practical ministry response to exploitation and harm."
            lead="The program is designed around safety-informed care, trusted referrals, survivor consent, and faithful stewardship."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {advocacyPillars.map((pillar) => (
              <MinistryCard item={pillar} key={pillar.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-padded">
          <SectionHeading
            eyebrow="Four-day stabilization pathway"
            title="A focused first step, not a promise of instant resolution."
            lead="The pathway gives survivors and advocates a simple structure for organizing needs, documents, referrals, and follow-up. It is designed for clarity, not pressure."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {stabilizationSteps.map((step) => (
              <article className="rounded-lg border border-sand-200 bg-sand-50 p-6" key={step.day}>
                <p className="text-sm font-bold uppercase text-gold-500">{step.day}</p>
                <h2 className="mt-3 text-xl font-semibold text-navy-950">{step.title}</h2>
                <p className="mt-3 text-sm leading-6 text-ink/75">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-16 text-white">
        <div className="container-padded grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase text-gold-300">Documentation and referral support</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
              Survivor-centered help for organizing the next faithful step.
            </h2>
            <p className="mt-5 leading-8 text-sand-50/86">
              Trafficking-related exploitation can affect identity documents, housing stability, employment, family
              relationships, safety, and spiritual well-being. Lighthouse can help organize information and connect
              survivors to qualified resources while keeping the public message centered on restoration.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              "We can help survivors organize documents and prepare questions for qualified providers.",
              "We can connect people with legal aid, victim service providers, counselors, and local support resources.",
              "We can review practical needs for possible benevolence support or trusted community referrals.",
              "We keep advocacy centered on consent, confidentiality, dignity, and survivor safety.",
            ].map((item) => (
              <div className="rounded-lg border border-white/15 bg-white/8 p-5 text-sm font-semibold leading-6 text-sand-50" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-padded grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Advocate readiness"
            title="Preparing Lighthouse for referral-directory registration."
            lead="The ministry's near-term goal is to become ready for appropriate anti-trafficking referral recognition through training, policies, partnerships, and accountable service practices."
          />
          <div className="grid gap-4">
            {advocacyReadinessSteps.map((step, index) => (
              <article className="rounded-lg border border-sand-200 bg-sand-50 p-5" key={step}>
                <p className="text-sm font-bold text-gold-500">Step {index + 1}</p>
                <h2 className="mt-2 text-lg font-semibold leading-7 text-navy-950">{step}</h2>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand-50 py-16">
        <div className="container-padded">
          <SectionHeading
            align="center"
            eyebrow="Official resource pathway"
            title="Training and public resources to guide the work."
            lead="These official resources help shape a careful, trauma-informed, and accountable ministry response."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {officialAdvocacyResources.map((resource) => (
              <a
                className="focus-ring surface-card block p-6 transition hover:-translate-y-1 hover:border-gold-300"
                href={resource.href}
                key={resource.title}
                rel="noreferrer"
                target="_blank"
              >
                <h2 className="text-xl font-semibold text-navy-950">{resource.title}</h2>
                <p className="mt-3 leading-7 text-ink/75">{resource.description}</p>
                <span className="mt-5 inline-flex text-sm font-bold text-navy-900 underline decoration-gold-400 underline-offset-4">
                  Open resource
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16" id="advocacy-inquiry">
        <div className="container-padded grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading
              eyebrow="Advocacy inquiry"
              title="Start with a careful, confidential first step."
              lead="Use this form for non-emergency advocacy, training, partnership, or support inquiries. The form is intentionally limited so sensitive details are not submitted before a safe contact process is established."
            />
            <div className="mt-8 rounded-lg border border-sand-200 bg-sand-50 p-6">
              <h2 className="text-xl font-semibold text-navy-950">Important note</h2>
              <p className="mt-3 leading-7 text-ink/75">
                This ministry page is for faith-based support, education, referral navigation, and informational
                purposes. It does not replace emergency services, law enforcement, licensed counseling, legal advice,
                or professional case management.
              </p>
            </div>
          </div>
          <PublicInquiryForm
            checkboxLabel="I would like Lighthouse to contact me about survivor advocacy, training, partnership, or ministry support."
            kind="advocacy"
            submitLabel="Request Advocacy Information"
            title="Survivor advocacy inquiry"
          />
        </div>
      </section>

      <CTASection
        primaryLabel="Support Survivor Advocacy"
        primaryTo="/donate"
        secondaryLabel="Contact the Ministry"
        secondaryTo="/contact"
        text="Your support helps Lighthouse build training, partnerships, benevolence capacity, and survivor-centered advocacy resources."
        title="Help Lighthouse become a trusted advocate."
      />
    </>
  );
}
