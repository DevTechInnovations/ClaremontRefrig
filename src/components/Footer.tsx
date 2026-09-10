import { Link } from "@tanstack/react-router";
import { Mail, Phone, Clock } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-navy text-navy-foreground">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo tone="dark" className="h-14 w-auto" />
            <p className="text-sm leading-relaxed text-navy-foreground/80">
              Commercial and domestic refrigeration since 1955. Cold rooms, freezer
              rooms, ice machines, water chillers, air conditioning and catering
              equipment — repaired, manufactured and maintained.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-ice">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-navy-foreground/80 hover:text-ice">
                  Home
                </Link>
              </li>
              <li>
                <a href="#services" className="text-navy-foreground/80 hover:text-ice">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-navy-foreground/80 hover:text-ice">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-ice">
              Services
            </h3>
            <ul className="space-y-2 text-sm text-navy-foreground/80">
              <li>Cold Rooms, Freezer Rooms &amp; Wine Cellars</li>
              <li>Ice &amp; Flake Ice Machines</li>
              <li>Water Chillers &amp; Dehumidifiers</li>
              <li>Air Conditioning Repairs &amp; Installation</li>
              <li>Catering Equipment &amp; Mechanical Machinery</li>
              <li>Domestic Refrigerators &amp; Freezers</li>
              <li>Repairs, Manufacture &amp; Maintenance</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-ice">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-ice" />
                <a href="tel:+27824571799" className="text-navy-foreground/80 hover:text-ice">
                  082 457 1799 / 073 026 3190
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-ice" />
                <a
                  href="mailto:crefriglyle@yahoo.com"
                  className="text-navy-foreground/80 hover:text-ice"
                >
                  crefriglyle@yahoo.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-ice" />
                <span className="text-navy-foreground/80">
                  Monday - Saturday: 8AM - 6PM
                  <br />
                  Urgent repairs by arrangement
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-navy-foreground/10 pt-8 text-center text-xs text-navy-foreground/60">
          <p>
            Serving Claremont, the Southern Suburbs and greater Cape Town, Western Cape —
            including Rondebosch, Newlands, Wynberg, Kenilworth, Constantia, the City Bowl,
            Atlantic Seaboard, Northern Suburbs and the False Bay coast.
          </p>
          <p className="mt-3">
            © {new Date().getFullYear()} Claremont Refrigeration. All rights reserved. Est. 1955.
          </p>
        </div>
      </div>
    </footer>
  );
}
