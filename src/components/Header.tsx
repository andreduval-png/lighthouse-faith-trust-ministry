import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { navItems } from "../data/siteContent";
import { Icon } from "./Icons";
import { Logo } from "./Logo";

const navClass = ({ isActive }: { isActive: boolean }) =>
  `focus-ring rounded-md px-2.5 py-2 text-sm font-semibold transition ${
    isActive ? "bg-gold-100 text-navy-950" : "text-ink/78 hover:bg-sand-100 hover:text-navy-950"
  }`;

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-sand-200 bg-white/92 backdrop-blur">
      <div className="container-padded flex min-h-20 items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink key={item.path} className={navClass} to={item.path}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-md border border-sand-200 text-navy-950 xl:hidden"
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? "x" : "menu"} />
        </button>
      </div>

      {open ? (
        <nav className="border-t border-sand-200 bg-white xl:hidden" aria-label="Mobile navigation">
          <div className="container-padded grid gap-1 py-4">
            {navItems.map((item) => (
              <NavLink key={item.path} className={navClass} to={item.path}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
