import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Zap,
  Home,
  Building2,
  Factory,
  Wrench,
  Shield,
  Award,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Claremont Electrical | Trusted Electricians Since 1955" },
      {
        name: "description",
        content:
          "Claremont Electrical provides reliable residential, commercial and industrial electrical services in Claremont and surrounding areas. Get a free quote today.",
      },
      { property: "og:title", content: "Claremont Electrical | Trusted Electricians Since 1955" },
      {
        property: "og:description",
        content:
          "Reliable electrical services for homes and businesses. Established in 1955.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    icon: Home,
    title: "Residential",
    description:
      "Wiring, lighting, DB boards, geyser installations and home safety inspections for peace of mind.",
  },
  {
    icon: Building2,
    title: "Commercial",
    description:
      "Office fit-outs, retail lighting, maintenance contracts and energy-efficient upgrades.",
  },
  {
    icon: Factory,
    title: "Industrial",
    description:
      "Three-phase systems, machinery supply, factory maintenance and high-voltage installations.",
  },
  {
    icon: Wrench,
    title: "Emergency Repairs",
    description:
      "24/7 call-out service for power failures, tripping boards and urgent electrical faults.",
  },
];

const highlights = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully accredited electricians with comprehensive insurance cover.",
  },
  {
    icon: Award,
    title: "Since 1955",
    description: "Over 70 years of trusted electrical workmanship in the community.",
  },
  {
    icon: Users,
    title: "Local Experts",
    description: "Claremont-based team that understands local regulations and needs.",
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
              Reliable Electrical Services You Can Trust
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-navy-foreground/80 md:text-xl">
              Claremont Electrical delivers safe, professional electrical solutions for
              homes, businesses and industrial sites across the Western Cape.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-base font-semibold text-gold-foreground transition-transform hover:scale-105"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:+27211234567"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-navy-foreground/30 bg-transparent px-6 py-3 text-base font-medium text-navy-foreground transition-colors hover:bg-navy-foreground/10"
              >
                <Phone className="h-5 w-5" />
                Call Us Now
              </a>
            </div>
          </div>

          {/* Contact info bar */}
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 rounded-2xl border border-navy-foreground/10 bg-navy-foreground/5 p-6 backdrop-blur-sm sm:grid-cols-2 lg:grid-cols-4">
            <a
              href="tel:+27211234567"
              className="flex items-center gap-3 text-navy-foreground/90 transition-colors hover:text-gold"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                <Phone className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-medium text-navy-foreground/60">Phone</p>
                <p className="truncate text-sm font-semibold">(021) 123 4567</p>
              </div>
            </a>
            <a
              href="mailto:info@claremontelectrical.co.za"
              className="flex items-center gap-3 text-navy-foreground/90 transition-colors hover:text-gold"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                <Mail className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-medium text-navy-foreground/60">Email</p>
                <p className="truncate text-sm font-semibold">info@claremontelectrical.co.za</p>
              </div>
            </a>
            <div className="flex items-center gap-3 text-navy-foreground/90">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-medium text-navy-foreground/60">Address</p>
                <p className="truncate text-sm font-semibold">12 Main Road, Claremont</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-navy-foreground/90">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                <Clock className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-medium text-navy-foreground/60">Hours</p>
                <p className="truncate text-sm font-semibold">Mon-Fri 08:00-17:00</p>
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
              Electrical Solutions for Every Need
            </h2>
            <p className="mt-4 text-muted-foreground">
              From routine maintenance to complex industrial installations, we have the skills
              and experience to keep your power on.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
                Decades of Experience, Delivered with Care
              </h2>
              <p className="mt-4 text-muted-foreground">
                We treat every project — big or small — with the same attention to detail and
                commitment to safety. Our reputation has been built on honest advice, fair pricing
                and workmanship that lasts.
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
                  <p className="text-4xl font-extrabold text-gold">24/7</p>
                  <p className="mt-1 text-sm font-medium text-navy-foreground/80">
                    Emergency Service
                  </p>
                </div>
                <div className="rounded-xl bg-navy p-6 text-center text-navy-foreground">
                  <p className="text-4xl font-extrabold text-gold">100%</p>
                  <p className="mt-1 text-sm font-medium text-navy-foreground/80">
                    Safety Focused
                  </p>
                </div>
                <div className="rounded-xl bg-gold-muted p-6 text-center">
                  <p className="text-4xl font-extrabold text-navy">500+</p>
                  <p className="mt-1 text-sm font-medium text-foreground/80">Projects Completed</p>
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
            Ready to get started?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Contact us today for a free, no-obligation quote. Our friendly team is ready to help
            with any electrical project.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-base font-semibold text-navy-foreground transition-transform hover:scale-105"
            >
              Request a Quote
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
