import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Refrigerator,
  WashingMachine,
  CookingPot,
  Wrench,
  Microwave,
  Coffee,
  ShieldCheck,
  Phone,
  Plug,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Appliance Repair Services | Claremont Electrical" },
      {
        name: "description",
        content:
          "Repairs for fridges, freezers, washing machines, tumble dryers, ovens, dishwashers and small appliances — all major brands.",
      },
      { property: "og:title", content: "Appliance Repair Services | Claremont Electrical" },
      {
        property: "og:description",
        content:
          "Fridge, washer, dryer, oven and dishwasher repairs with upfront quotes and guaranteed workmanship.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const serviceCategories = [
  {
    icon: Refrigerator,
    title: "Fridge & Freezer Repairs",
    items: [
      "Not cooling or over-freezing",
      "Compressor & fan replacement",
      "Thermostat & sensor faults",
      "Gas leaks and regassing",
      "Door seal replacement",
      "Water dispenser & ice maker faults",
    ],
  },
  {
    icon: WashingMachine,
    title: "Washing Machine Repairs",
    items: [
      "Not draining or spinning",
      "Drum bearing replacement",
      "Pump & motor faults",
      "Water inlet & valve issues",
      "Error code diagnostics",
      "Leaks and excessive vibration",
    ],
  },
  {
    icon: CookingPot,
    title: "Oven, Hob & Stove Repairs",
    items: [
      "Element replacement",
      "Thermostat calibration",
      "Hob plate & induction faults",
      "Door hinges & glass",
      "Timer and control boards",
      "Extractor fan repairs",
    ],
  },
  {
    icon: Wrench,
    title: "Tumble Dryer & Dishwasher",
    items: [
      "Dryer not heating",
      "Belt & drum repairs",
      "Dishwasher not draining",
      "Spray arm & filter blockages",
      "Heating element replacement",
      "Programme selector faults",
    ],
  },
  {
    icon: Plug,
    title: "General Household Electrical Repairs",
    items: [
      "Plug and socket replacement",
      "Light fittings and dimmers",
      "Tripping circuit breakers",
      "Switch and isolator faults",
      "Geyser electrical connections",
      "Minor wiring repairs",
    ],
  },
  {
    icon: Microwave,
    title: "Microwaves & Small Appliances",
    items: [
      "Microwave not heating",
      "Turntable & door switch faults",
      "Kettle & toaster repairs",
      "Vacuum cleaner servicing",
      "Food processor motors",
      "Cable and plug replacement",
    ],
  },
  {
    icon: Coffee,
    title: "Diagnostics & Servicing",
    items: [
      "Full fault diagnosis",
      "Upfront written quotes",
      "Preventative servicing",
      "Genuine replacement parts",
      "Repair-or-replace advice",
      "Workmanship guarantee",
    ],
  },
];

function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="gradient-navy py-16 md:py-24">
        <div className="container mx-auto px-4 text-center md:px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">What We Fix</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-navy-foreground md:text-5xl">
            Our Repair Services
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-navy-foreground/80">
            Expert repairs on household and commercial electrical appliances, across all
            major brands.
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
          <Wrench className="mx-auto h-12 w-12 text-navy" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Not sure what's wrong?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Describe the symptoms and we'll diagnose the fault, then quote before we repair.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-base font-semibold text-navy-foreground transition-transform hover:scale-105"
            >
              Get in Touch
            </Link>
            <a
              href="tel:+27824571799"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 bg-transparent px-6 py-3 text-base font-semibold text-foreground transition-colors hover:bg-foreground/5"
            >
              <Phone className="h-5 w-5" />
              082 457 1799 / 073 026 3190
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
