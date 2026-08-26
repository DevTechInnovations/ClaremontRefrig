import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone, Award } from "lucide-react";
import logoAsset from "../assets/claremont-logo.png.asset.json";

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
      <div className="bg-gold py-2 text-center">
        <div className="container mx-auto flex items-center justify-center gap-2 px-4 text-xs font-semibold text-gold-foreground md:text-sm">
          <Award className="h-4 w-4" />
          Over 70 years experience
        </div>
      </div>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logoAsset.url}
            alt="Claremont Electrical logo"
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) =>
            link.to ? (
              <Link
                key={link.to}
                to={link.to}
                activeProps={{ className: "text-gold" }}
                className="text-sm font-medium text-foreground transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="tel:+27824571799"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-gold-foreground transition-transform hover:scale-105"
          >
            <Phone className="h-4 w-4" />
            082 457 1799
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
                  className="text-base font-medium text-foreground transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-foreground transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              )
            )}
            <a
              href="tel:+27824571799"
              className="mt-2 inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-gold-foreground"
            >
              <Phone className="h-4 w-4" />
              082 457 1799
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
