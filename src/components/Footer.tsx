import { Link } from "react-router-dom";
import { footerLinks, ministryContacts, ministryName, tagline } from "../data/siteContent";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-sand-200 bg-white">
      <div className="container-padded py-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-6 text-ink/75">{tagline}</p>
            <p className="mt-5 max-w-md text-xs leading-6 text-ink/65">
              Information on this website is for ministry, educational, and informational purposes only and does not
              constitute legal, tax, financial, or professional advice.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase text-navy-950">Navigation</h2>
            <nav className="mt-4 grid grid-cols-2 gap-2" aria-label="Footer navigation">
              {footerLinks.map((item) => (
                <Link
                  className="focus-ring rounded-md py-1 text-sm text-ink/75 transition hover:text-navy-950"
                  key={`${item.path}-${item.label}`}
                  to={item.path}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase text-navy-950">Ministry Contact</h2>
            <div className="mt-4 space-y-3 text-sm leading-6 text-ink/75">
              {ministryContacts.map((contact) => (
                <p key={contact.email}>
                  <span className="block font-semibold text-navy-950">{contact.name}</span>
                  <a className="focus-ring rounded-sm underline decoration-gold-400 underline-offset-4" href={`mailto:${contact.email}`}>
                    {contact.email}
                  </a>
                </p>
              ))}
            </div>
            <Link
              className="focus-ring mt-5 inline-flex rounded-md bg-navy-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-navy-800"
              to="/contact"
            >
              Send an inquiry
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-sand-200 pt-6 text-sm text-ink/65">
          <p>
            Copyright {new Date().getFullYear()} {ministryName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
