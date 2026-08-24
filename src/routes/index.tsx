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
          "Claremont Electrical repairs fridges, washing machines, ovens, dryers and dishwashers. Fast, affordable appliance repairs with a workmanship guarantee.",
      },
      { property: "og:title", content: "Claremont Electrical | Appliance Repairs Since 1955" },
      {
        property: "og:description",
        content:
          "Expert repairs for fridges, washers, ovens and more. Established in 1955.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    icon: Refrigerator,
    title: "Fridges & Freezers",
    description:
      "Cooling faults, gas regassing, thermostats, compressors and door seal replacements.",
  },
  {
    icon: WashingMachine,
    title: "Washers & Dryers",
    description:
      "Drum bearings, pumps, motors, error codes and drainage problems on all major brands.",
  },
  {
    icon: CookingPot,
    title: "Ovens & Stoves",
    description:
      "Elements, thermostats, hob plates, timers and control boards repaired or replaced.",
  },
  {
    icon: Plug,
    title: "General Household Electrical",
    description:
      "Plug and socket repairs, light fittings, tripping circuits, switches and minor wiring faults.",
  },
  {
    icon: Wrench,
    title: "Fast Fault Finding",
    description:
      "Accurate diagnostics with an upfront quote before any repair work begins.",
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
      {/* Banner / Hero */}
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
              Claremont Electrical repairs fridges, washing machines, tumble dryers, ovens
              and dishwashers — quickly, affordably and properly.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-base font-semibold text-gold-foreground transition-transform hover:scale-105"
              >
                Book a Repair
              </Link>
              <a
                href="tel:+27824571799"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-navy-foreground/30 bg-transparent px-6 py-3 text-base font-medium text-navy-foreground transition-colors hover:bg-navy-foreground/10"
              >
                <Phone className="h-5 w-5" />
                Call Us Now
              </a>
            </div>
          </div>

          {/* Contact info bar */}
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 rounded-2xl border border-navy-foreground/10 bg-navy-foreground/5 p-6 backdrop-blur-sm sm:grid-cols-3">
            <a
              href="tel:+27824571799"
              className="flex items-center gap-3 text-navy-foreground/90 transition-colors hover:text-gold"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                <Phone className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-medium text-navy-foreground/60">Phone</p>
                <p className="truncate text-sm font-semibold">082 457 1799 / 073 026 3190</p>
              </div>
            </a>
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
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">Our Services</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              We Fix the Appliances You Rely On
            </h2>
            <p className="mt-4 text-muted-foreground">
              From a fridge that won't cool to an oven that won't heat, our technicians
              diagnose the fault and get your appliance working again.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-gold-foreground">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
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

      {/* CTA */}
      <section className="bg-gold-muted py-16 md:py-24">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Appliance giving trouble?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Tell us the make, model and the fault, and we'll come back with a clear repair
            quote — no obligation.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-base font-semibold text-navy-foreground transition-transform hover:scale-105"
            >
              Request a Quote
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
