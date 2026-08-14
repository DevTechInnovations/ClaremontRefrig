import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import logoAsset from "../assets/claremont-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="border-t border-border bg-navy text-navy-foreground">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <img
              src={logoAsset.url}
              alt="Claremont Electrical logo"
              className="h-10 w-auto"
            />
            <p className="text-sm leading-relaxed text-navy-foreground/80">
              Trusted electrical contractors serving Claremont and surrounding
              areas since 1955. Reliable, licensed, and committed to safety.
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
                <Link to="/services" className="text-navy-foreground/80 hover:text-gold">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-navy-foreground/80 hover:text-gold">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
              Services
            </h3>
            <ul className="space-y-2 text-sm text-navy-foreground/80">
              <li>Residential Electrical</li>
              <li>Commercial Electrical</li>
              <li>Industrial Electrical</li>
              <li>Emergency Repairs</li>
              <li>Electrical Compliance</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href="tel:+27211234567" className="text-navy-foreground/80 hover:text-gold">
                  (021) 123 4567
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a
                  href="mailto:info@claremontelectrical.co.za"
                  className="text-navy-foreground/80 hover:text-gold"
                >
                  info@claremontelectrical.co.za
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span className="text-navy-foreground/80">
                  12 Main Road, Claremont, Cape Town
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span className="text-navy-foreground/80">
                  Mon - Fri: 08:00 - 17:00
                  <br />
                  24/7 Emergency call-outs
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-navy-foreground/10 pt-8 text-center text-xs text-navy-foreground/60">
          © {new Date().getFullYear()} Claremont Electrical. All rights reserved. Est. 1955.
        </div>
      </div>
    </footer>
  );
}
