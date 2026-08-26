import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Phone,
  Mail,
  Clock,
  Zap,
  Refrigerator,
  WashingMachine,
  CookingPot,
  Wrench,
  Plug,
  Microwave,
  Coffee,
  ShieldCheck,
  Shield,
  Award,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Claremont Electrical | Appliance Repairs Since 1955" },
      {
        name: "description",
        content:
          "Claremont Electrical repairs fridges, washing machines, ovens, dryers, dishwashers and general household electrics. Fast, affordable repairs with a workmanship guarantee.",
      },
      { property: "og:title", content: "Claremont Electrical | Appliance Repairs Since 1955" },
      {
        property: "og:description",
        content:
          "Expert repairs for fridges, washers, ovens, household electrics and more. Established in 1955.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
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

const highlights = [
  {
    icon: Shield,
    title: "Guaranteed Repairs",
    description: "Every repair is backed by a workmanship guarantee and genuine parts.",
  },
  {
    icon: Award,
    title: "Since 1955",
    description: "Over 70 years of appliance repair experience across every major brand.",
  },
  {
    icon: Users,
    title: "Honest Advice",
    description: "We tell you when a repair makes sense — and when it simply doesn't.",
  },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-navy relative overflow-hidden">
        <div className="container relative mx-auto px-4 py-16 md:px-6 md:py-24 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">
              Est. 1955
            </p>
            <h1 className="text-balance text-4xl font-extrabold tracking-tight text-navy-foreground md:text-5xl lg:text-6xl">
              Electrical Appliance Repairs You Can Trust
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-navy-foreground/80 md:text-xl">
              Claremont Electrical repairs fridges, washing machines, tumble dryers, ovens,
              dishwashers and general household electrics — quickly, affordably and properly.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-base font-semibold text-gold-foreground transition-transform hover:scale-105"
              >
                Our Services
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-navy-foreground/30 bg-transparent px-6 py-3 text-base font-medium text-navy-foreground transition-colors hover:bg-navy-foreground/10"
              >
                <Phone className="h-5 w-5" />
                Contact Us
              </a>
            </div>
          </div>

          {/* Contact info bar */}
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 rounded-2xl border border-navy-foreground/10 bg-navy-foreground/5 p-6 backdrop-blur-sm sm:grid-cols-3">
            <div className="flex items-center gap-3 text-navy-foreground/90">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                <Phone className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-medium text-navy-foreground/60">Phone</p>
                <div className="flex flex-col text-sm font-semibold">
                  <a href="tel:+27824571799" className="hover:text-gold">082 457 1799</a>
                  <a href="tel:+27730263190" className="hover:text-gold">073 026 3190</a>
                </div>
              </div>
            </div>
            <a
              href="mailto:crefriglyle@yahoo.com"
              className="flex items-center gap-3 text-navy-foreground/90 transition-colors hover:text-gold"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                <Mail className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-medium text-navy-foreground/60">Email</p>
                <p className="truncate text-sm font-semibold">crefriglyle@yahoo.com</p>
              </div>
            </a>
            <div className="flex items-center gap-3 text-navy-foreground/90">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                <Clock className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-medium text-navy-foreground/60">Hours</p>
                <p className="truncate text-sm font-semibold">Mon-Sat 8AM-6PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative bolt */}
        <Zap className="absolute -right-8 -bottom-8 h-64 w-64 rotate-12 text-gold/5 md:h-96 md:w-96" />
      </section>

      {/* Services */}
      <section className="bg-background py-16 md:py-24" id="services">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">What We Fix</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Our Repair Services
            </h2>
            <p className="mt-4 text-muted-foreground">
              Expert repairs on household electrical appliances and general electrics, across all
              major brands.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map((category) => (
              <div
                key={category.title}
                className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground">{category.title}</h3>
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

      {/* Why choose us */}
      <section className="border-y border-border bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-gold">
                Why Choose Us
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Repair It, Don't Replace It
              </h2>
              <p className="mt-4 text-muted-foreground">
                A good repair costs a fraction of a new appliance. We quote upfront, use
                quality parts, and stand behind every job we do — the same way we have
                since 1955.
              </p>

              <div className="mt-8 space-y-6">
                {highlights.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-navy-foreground">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-card p-8 shadow-sm">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-xl bg-gold-muted p-6 text-center">
                  <p className="text-4xl font-extrabold text-navy">70+</p>
                  <p className="mt-1 text-sm font-medium text-foreground/80">Years Experience</p>
                </div>
                <div className="rounded-xl bg-navy p-6 text-center text-navy-foreground">
                  <p className="text-4xl font-extrabold text-gold">All</p>
                  <p className="mt-1 text-sm font-medium text-navy-foreground/80">
                    Major Brands
                  </p>
                </div>
                <div className="rounded-xl bg-navy p-6 text-center text-navy-foreground">
                  <p className="text-4xl font-extrabold text-gold">100%</p>
                  <p className="mt-1 text-sm font-medium text-navy-foreground/80">
                    Upfront Quotes
                  </p>
                </div>
                <div className="rounded-xl bg-gold-muted p-6 text-center">
                  <p className="text-4xl font-extrabold text-navy">10k+</p>
                  <p className="mt-1 text-sm font-medium text-foreground/80">Appliances Repaired</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-gold-muted py-16 md:py-24" id="contact">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">Get in Touch</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Contact Us
            </h2>
            <p className="mt-4 text-muted-foreground">
              Call, email or message us on WhatsApp. We reply quickly and quote before we repair.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-3">
            <a
              href="tel:+27824571799"
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-gold"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Phone</p>
                <p className="font-semibold text-foreground">082 457 1799</p>
                <p className="text-sm text-muted-foreground">073 026 3190</p>
              </div>
            </a>

            <a
              href="mailto:crefriglyle@yahoo.com"
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-gold"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Email</p>
                <p className="font-semibold text-foreground">crefriglyle@yahoo.com</p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Business Hours</p>
                <p className="font-semibold text-foreground">Monday - Saturday</p>
                <p className="text-sm text-muted-foreground">8AM - 6PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
