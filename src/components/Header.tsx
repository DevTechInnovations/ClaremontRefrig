import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone, Award } from "lucide-react";
import { Logo } from "./Logo";

type NavLink = { label: string } & ({ to: string; href?: never } | { href: string; to?: never });

const navLinks: NavLink[] = [
  { to: "/", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="bg-ice py-2 text-center">
        <div className="container mx-auto flex flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 text-xs font-semibold text-ice-foreground md:text-sm">
          <span className="inline-flex items-center gap-2">
            <Award className="h-4 w-4" />
            Over 70 years experience
          </span>
          <span className="hidden opacity-50 sm:inline">|</span>
          <span>Refrigeration &amp; aircon throughout the peninsula</span>
        </div>
      </div>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:h-24 md:px-6">
        <Link to="/" className="flex items-center gap-3" aria-label="Claremont Refrigeration — home">
          <Logo className="h-11 w-auto md:h-14" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) =>
            link.to ? (
              <Link
                key={link.to}
                to={link.to}
                activeProps={{ className: "text-ice" }}
                className="text-sm font-medium text-foreground transition-colors hover:text-ice"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground transition-colors hover:text-ice"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+27824571799"
            className="inline-flex items-center gap-2 bg-ice px-4 py-2 text-sm font-semibold text-ice-foreground transition-transform hover:scale-105"
          >
            <Phone className="h-4 w-4" />
            082 457 1799
          </a>
          <a
            href="tel:+27730263190"
            className="inline-flex items-center gap-2 border border-ice px-4 py-2 text-sm font-semibold text-ice transition-transform hover:scale-105"
          >
            <Phone className="h-4 w-4" />
            073 026 3190
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-card px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) =>
              link.to ? (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-foreground transition-colors hover:text-ice"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-foreground transition-colors hover:text-ice"
                >
                  {link.label}
                </a>
              )
            )}
            <a
              href="tel:+27824571799"
              className="mt-2 inline-flex items-center gap-2 bg-ice px-4 py-2 text-sm font-semibold text-ice-foreground"
            >
              <Phone className="h-4 w-4" />
              082 457 1799
            </a>
            <a
              href="tel:+27730263190"
              className="inline-flex items-center gap-2 border border-ice px-4 py-2 text-sm font-semibold text-ice"
            >
              <Phone className="h-4 w-4" />
              073 026 3190
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
