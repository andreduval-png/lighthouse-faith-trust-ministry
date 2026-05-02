import { Link } from "react-router-dom";
import { ministryName } from "../data/siteContent";

export function Logo() {
  return (
    <Link className="focus-ring flex items-center gap-3 rounded-md" to="/" aria-label={`${ministryName} home`}>
      <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-navy-900 text-gold-300">
        <span className="absolute top-2 h-2 w-5 rounded-t-sm border-x border-t border-current" />
        <span className="mt-2 h-6 w-4 rounded-t-sm border-x border-t border-current" />
        <span className="absolute top-4 h-px w-8 rotate-[-18deg] bg-current opacity-80" />
      </span>
      <span className="leading-tight">
        <span className="block text-sm font-bold uppercase text-navy-950">Lighthouse</span>
        <span className="block text-sm font-semibold text-ink/75">Faith & Trust Ministry</span>
      </span>
    </Link>
  );
}
