import { ButtonLink } from "../components/ButtonLink";
import { PageHeader } from "../components/PageHeader";
import { SectionHeading } from "../components/SectionHeading";

const purposes = [
  "Worship and fellowship",
  "Discipleship and spiritual formation",
  "Biblical teaching",
  "Charitable works",
  "Mutual aid and benevolence",
  "Education and advocacy",
  "Stewardship of resources",
  "Support for families and communities",
];

export function About() {
  return (
    <>
      <PageHeader
        eyebrow="About the ministry"
        lead="Lighthouse Faith & Trust Ministry exists to spread the light of faith, trust, and Christian values by serving the community, fostering spiritual growth, and inspiring individuals to walk in faith and purpose."
        title="A beacon of faith and a foundation of trust."
      />

      <section className="bg-white py-16">
        <div className="container-padded grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Who we are"
              title="A Christian ministry centered on faith, service, and stewardship."
              lead="The ministry is organized around faith, trust, service, accountability, and stewardship. Our public witness is intended to be warm, orderly, and faithful."
            />
            <p className="mt-6 leading-8 text-ink/78">
              As a faith-based organization and ministry trust, Lighthouse Faith & Trust Ministry focuses on religious
              fellowship, charitable service, Christian education, community support, and the responsible administration
              of resources for ministry purposes.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {purposes.map((purpose) => (
              <div className="rounded-lg border border-sand-200 bg-sand-50 p-5" key={purpose}>
                <h2 className="text-base font-semibold text-navy-950">{purpose}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand-50 py-16">
        <div className="container-padded grid gap-8 lg:grid-cols-3">
          {[
            {
              title: "Faith",
              text: "We seek to honor God through worship, prayer, biblical teaching, and discipleship.",
            },
            {
              title: "Trust",
              text: "We foster a fellowship marked by sincerity, confidentiality, accountability, and care.",
            },
            {
              title: "Service",
              text: "We support charitable works, benevolence, education, and community strengthening.",
            },
          ].map((item) => (
            <article className="surface-card p-6" key={item.title}>
              <h2 className="text-2xl font-semibold text-navy-950">{item.title}</h2>
              <p className="mt-4 leading-7 text-ink/75">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-padded flex flex-col gap-6 rounded-lg border border-sand-200 bg-navy-950 p-8 text-white md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-serif text-3xl font-semibold">Rooted in mission, guided by stewardship.</h2>
            <p className="mt-3 max-w-3xl leading-7 text-sand-50/85">
              Learn how our mission, vision, and governance practices support faithful public ministry.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink to="/mission-vision" variant="primary">
              Mission & Vision
            </ButtonLink>
            <ButtonLink to="/governance" variant="outline">
              Governance
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
