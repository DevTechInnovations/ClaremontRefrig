import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Home,
  Building2,
  Factory,
  Wrench,
  ClipboardCheck,
  Lightbulb,
  Fan,
  ShieldCheck,
  Phone,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Claremont Electrical" },
      {
        name: "description",
        content:
          "Explore Claremont Electrical's full range of residential, commercial, industrial and emergency electrical services.",
      },
      { property: "og:title", content: "Services | Claremont Electrical" },
      {
        property: "og:description",
        content:
          "Residential, commercial, industrial and emergency electrical services in Claremont.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const serviceCategories = [
  {
    icon: Home,
    title: "Residential Electrical",
    items: [
      "New home wiring",
      "Lighting design & installation",
      "DB board upgrades",
      "Geyser & stove connections",
      "Home automation setup",
      "Safety inspections",
    ],
  },
  {
    icon: Building2,
    title: "Commercial Electrical",
    items: [
      "Office fit-outs",
      "Retail lighting",
      "Data & network cabling",
      "Maintenance contracts",
      "Energy-efficient upgrades",
      "Generator integration",
    ],
  },
  {
    icon: Factory,
    title: "Industrial Electrical",
    items: [
      "Three-phase systems",
      "Machinery supply & installation",
      "Factory maintenance",
      "Motor control centres",
      "Power distribution",
      "High-voltage work",
    ],
  },
  {
    icon: Wrench,
    title: "Emergency Repairs",
    items: [
      "24/7 call-outs",
      "Power failure troubleshooting",
      "Tripping DB boards",
      "Fault finding",
      "Rapid repairs",
      "Post-storm restoration",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Compliance & Certificates",
    items: [
      "Electrical compliance certificates",
      "COC inspections",
      "Insurance reports",
      "Regulation advice",
      "Remedial work",
      "Periodic inspections",
    ],
  },
  {
    icon: Lightbulb,
    title: "Lighting & Electrical Design",
    items: [
      "LED retrofits",
      "Outdoor & security lighting",
      "Smart lighting controls",
      "Ceiling fan installation",
      "Pool & landscape electrics",
      "Custom electrical design",
    ],
  },
];

function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="gradient-navy py-16 md:py-24">
        <div className="container mx-auto px-4 text-center md:px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">What We Do</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-navy-foreground md:text-5xl">
            Our Services
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-navy-foreground/80">
            Comprehensive electrical solutions tailored to homes, businesses and industrial sites.
          </p>
        </div>
      </section>

      {/* Service grid */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map((category) => (
              <div
                key={category.title}
                className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <category.icon className="h-6 w-6" />
                </div>
                <h2 className="mt-5 text-xl font-semibold text-foreground">{category.title}</h2>
                <ul className="mt-4 space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold-muted py-16 md:py-24">
        <div className="container mx-auto px-4 text-center md:px-6">
          <Fan className="mx-auto h-12 w-12 text-navy" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Not sure what you need?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Our team can assess your site and recommend the right solution for your budget and
            requirements.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-base font-semibold text-navy-foreground transition-transform hover:scale-105"
            >
              Get in Touch
            </Link>
            <a
              href="tel:+27211234567"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 bg-transparent px-6 py-3 text-base font-semibold text-foreground transition-colors hover:bg-foreground/5"
            >
              <Phone className="h-5 w-5" />
              (021) 123 4567
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
