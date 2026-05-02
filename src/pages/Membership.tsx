import { CTASection } from "../components/CTASection";
import { PageHeader } from "../components/PageHeader";
import { PublicInquiryForm } from "../components/PublicInquiryForm";
import { SectionHeading } from "../components/SectionHeading";

const commitments = [
  "Agreement with the Statement of Faith",
  "Commitment to Biblical principles",
  "Participation in fellowship and ministry activities",
  "Respect for confidentiality",
  "Support for the mission through voluntary giving, service, or participation",
  "Approval or acknowledgment by ministry leadership if appropriate",
];

export function Membership() {
  return (
    <>
      <PageHeader
        eyebrow="Membership"
        lead="Membership is voluntary and rooted in shared faith, fellowship, confidentiality, accountability, and commitment to the ministry's mission."
        title="A membership-based fellowship for sincere participation."
      />

      <section className="bg-white py-16">
        <div className="container-padded grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Membership commitments"
              title="Shared faith and shared responsibility."
              lead="Members are invited into meaningful fellowship, discipleship, service, and stewardship in a spirit of Christian accountability."
            />
            <div className="mt-8 grid gap-3">
              {commitments.map((item) => (
                <div className="rounded-lg border border-sand-200 bg-sand-50 p-4 text-sm font-semibold text-navy-950" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <PublicInquiryForm
            checkboxLabel="I would like to receive information about membership and ministry participation."
            kind="membership"
            submitLabel="Request Membership Information"
            title="Membership inquiry"
          />
        </div>
      </section>

      <CTASection
        primaryLabel="Read Statement of Faith"
        primaryTo="/statement-of-faith"
        secondaryLabel="Contact Us"
        secondaryTo="/contact"
        text="The Statement of Faith helps prospective members understand the beliefs that shape ministry fellowship and service."
        title="Begin with faith and clarity."
      />
    </>
  );
}
