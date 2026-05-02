import { Link } from "react-router-dom";
import { Icon } from "./Icons";

type ButtonLinkProps = {
  children: React.ReactNode;
  to: string;
  variant?: "primary" | "secondary" | "light" | "outline";
  icon?: boolean;
  className?: string;
};

const variants = {
  primary: "bg-gold-400 text-navy-950 hover:bg-gold-300",
  secondary: "bg-navy-900 text-white hover:bg-navy-800",
  light: "bg-white text-navy-950 hover:bg-sand-50",
  outline: "border border-white/70 text-white hover:bg-white/10",
};

export function ButtonLink({
  children,
  to,
  variant = "primary",
  icon = true,
  className = "",
}: ButtonLinkProps) {
  const base =
    "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition";

  const content = (
    <>
      <span>{children}</span>
      {icon ? <Icon name="arrow" className="h-4 w-4" /> : null}
    </>
  );

  if (to.startsWith("#")) {
    return (
      <a className={`${base} ${variants[variant]} ${className}`} href={to}>
        {content}
      </a>
    );
  }

  return (
    <Link className={`${base} ${variants[variant]} ${className}`} to={to}>
      {content}
    </Link>
  );
}
