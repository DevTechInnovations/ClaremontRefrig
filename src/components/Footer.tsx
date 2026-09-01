import { Link } from "@tanstack/react-router";
import { Mail, Phone, Clock } from "lucide-react";
import logo from "../assets/claremont-logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-navy text-navy-foreground">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="inline-block w-fit rounded-lg bg-navy-foreground p-2">
              <img
                src={logo}
                alt="Claremont Electrical logo"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed text-navy-foreground/80">
              Expert electrical appliance repairs since 1955. Fridges, washing
              machines, ovens, tumble dryers and more — fixed properly, first time.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-navy-foreground/80 hover:text-gold">
                  Home
                </Link>
              </li>
              <li>
                <a href="#services" className="text-navy-foreground/80 hover:text-gold">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-navy-foreground/80 hover:text-gold">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
              Services
            </h3>
            <ul className="space-y-2 text-sm text-navy-foreground/80">
              <li>Fridge &amp; Freezer Repairs</li>
              <li>Washing Machine &amp; Dryer Repairs</li>
              <li>Oven, Hob &amp; Stove Repairs</li>
              <li>Dishwasher Repairs</li>
              <li>Air Conditioning Repairs &amp; Installation</li>
              <li>Catering Equipment Repairs</li>
              <li>General Household Electrical Repairs</li>
              <li>Small Appliance Repairs</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href="tel:+27824571799" className="text-navy-foreground/80 hover:text-gold">
                  082 457 1799 / 073 026 3190
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a
                  href="mailto:crefriglyle@yahoo.com"
                  className="text-navy-foreground/80 hover:text-gold"
                >
                  crefriglyle@yahoo.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
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
            Serving Cape Town and the greater peninsula, including Claremont, Rondebosch,
            Newlands, Wynberg, Kenilworth, Constantia, the City Bowl, Atlantic Seaboard,
            Southern Suburbs, Northern Suburbs and the False Bay coast.
          </p>
          <p className="mt-3">
            © {new Date().getFullYear()} Claremont Electrical. All rights reserved. Est. 1955.
          </p>
        </div>
      </div>
    </footer>
  );
}
