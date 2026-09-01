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
  Snowflake,
  ChefHat,
  ShieldCheck,
  Shield,
  Award,
  Users,
} from "lucide-react";
import { WHATSAPP_HREF, WhatsAppIcon } from "@/components/whatsapp";
import workshopRepairImage from "@/assets/workshop-repair.jpg";
import heroFridgeImage from "@/assets/hero-fridge.jpg";
import heroWasherImage from "@/assets/hero-washer.jpg";
import heroMicrowaveImage from "@/assets/hero-microwave.jpg";
import fridgeApplianceImage from "@/assets/fridge-appliance.jpg";
import washingMachineApplianceImage from "@/assets/washing-machine-appliance.jpg";
import ovenStoveApplianceImage from "@/assets/oven-stove-appliance.jpg";
import tumbleDryerApplianceImage from "@/assets/tumble-dryer-appliance.jpg";
import householdElectricalImage from "@/assets/household-electrical.jpg";
import microwaveApplianceImage from "@/assets/microwave-appliance.jpg";
import diagnosticsApplianceImage from "@/assets/diagnostics-appliance.jpg";
import airconApplianceImage from "@/assets/aircon-appliance.jpg";
import cateringApplianceImage from "@/assets/catering-appliance.jpg";

const SITE_URL = "https://claremontelectrical.co.za";
const PAGE_TITLE = "Claremont Electrical | Appliance & Aircon Repairs Since 1955";
const PAGE_DESCRIPTION =
  "Claremont Electrical repairs fridges, washing machines, ovens, dryers, dishwashers, aircon and catering equipment across Cape Town and the greater peninsula. Fast, affordable repairs with a workmanship guarantee since 1955.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: `${SITE_URL}/og-image.png` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:locale", content: "en_ZA" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESCRIPTION },
      { name: "twitter:image", content: `${SITE_URL}/og-image.png` },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": "Electrician",
          name: "Claremont Electrical",
          image: `${SITE_URL}/og-image.png`,
          url: `${SITE_URL}/`,
          telephone: "+27824571799",
          email: "crefriglyle@yahoo.com",
          priceRange: "$$",
          foundingDate: "1955",
          description: PAGE_DESCRIPTION,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Claremont",
            addressRegion: "Western Cape",
            addressCountry: "ZA",
          },
          areaServed: [
            { "@type": "City", name: "Cape Town" },
            { "@type": "Place", name: "Cape Peninsula" },
            { "@type": "Place", name: "Southern Suburbs" },
            { "@type": "Place", name: "City Bowl" },
            { "@type": "Place", name: "Atlantic Seaboard" },
            { "@type": "Place", name: "Northern Suburbs" },
            { "@type": "Place", name: "False Bay" },
          ],
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "08:00",
            closes: "18:00",
          },
          sameAs: [],
        },
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
  }),
  component: HomePage,
});

const serviceCategories = [
  {
    icon: Refrigerator,
    image: fridgeApplianceImage,
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
    image: washingMachineApplianceImage,
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
    image: ovenStoveApplianceImage,
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
    image: tumbleDryerApplianceImage,
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
    image: householdElectricalImage,
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
    image: microwaveApplianceImage,
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
    icon: Snowflake,
    image: airconApplianceImage,
    title: "Air Conditioning Repairs & Installation",
    items: [
      "All makes repaired and serviced",
      "New unit supply and installation",
      "Not cooling or not heating",
      "Gas leaks and regassing",
      "Noisy or leaking units",
      "Routine servicing and maintenance",
    ],
  },
  {
    icon: ChefHat,
    image: cateringApplianceImage,
    title: "Catering Equipment Repairs",
    items: [
      "All makes of catering equipment",
      "Commercial fridges & freezers",
      "Ovens, stoves & fryers",
      "Dishwashers & glasswashers",
      "Urns, boilers & bain-maries",
      "Preventative maintenance plans",
    ],
  },
  {
    icon: Coffee,
    image: diagnosticsApplianceImage,
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
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-xl lg:text-left">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">
                Established in 1955 — Over 70 Years of Trusted Service
              </p>
              <h1 className="text-balance text-4xl font-extrabold tracking-tight text-navy-foreground md:text-5xl lg:text-6xl">
                Electrical Appliance Repairs You Can Trust
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-navy-foreground/80 md:text-xl lg:mx-0">
                Claremont Electrical repairs fridges, washing machines, tumble dryers, ovens,
                dishwashers and general household electrics — quickly, affordably and properly.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                <a
                  href="#services"
                  className="inline-flex items-center justify-center bg-gold px-6 py-3 text-base font-semibold text-gold-foreground transition-transform hover:scale-105"
                >
                  Our Services
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 border border-navy-foreground/30 bg-transparent px-6 py-3 text-base font-medium text-navy-foreground transition-colors hover:bg-navy-foreground/10"
                >
                  <Phone className="h-5 w-5" />
                  Contact Us
                </a>
              </div>
            </div>

            <div className="relative hidden aspect-[4/3] overflow-hidden shadow-xl lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-1.5">
              <img
                src={heroFridgeImage}
                alt="Refrigerator"
                className="col-span-1 row-span-2 h-full w-full object-cover"
              />
              <img src={heroWasherImage} alt="Washing machine" className="h-full w-full object-cover" />
              <img src={heroMicrowaveImage} alt="Microwave" className="h-full w-full object-cover" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" />
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
                className="overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold text-gold-foreground shadow-md">
                    <category.icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
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

          <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-5 lg:items-stretch">
            <div className="relative hidden overflow-hidden rounded-3xl shadow-xl lg:col-span-2 lg:block">
              <img
                src={workshopRepairImage}
                alt="Claremont Electrical technician repairing an appliance circuit board"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/10 to-transparent" />
              <div className="absolute inset-x-6 bottom-6 text-navy-foreground">
                <p className="text-sm font-semibold uppercase tracking-widest text-gold">Since 1955</p>
                <p className="mt-1 text-lg font-semibold">70+ years fixing Cape Town's appliances</p>
              </div>
            </div>

            <div className="rounded-3xl bg-navy p-8 text-navy-foreground shadow-xl md:p-10 lg:col-span-3">
              <div className="space-y-6">
                <a
                  href="tel:+27824571799"
                  className="flex items-center gap-4 border-b border-navy-foreground/10 pb-6 transition-colors hover:text-gold"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-navy-foreground/60">Phone</p>
                    <p className="font-semibold">082 457 1799</p>
                    <p className="text-sm text-navy-foreground/70">073 026 3190</p>
                  </div>
                </a>

                <a
                  href="mailto:crefriglyle@yahoo.com"
                  className="flex items-center gap-4 border-b border-navy-foreground/10 pb-6 transition-colors hover:text-gold"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-navy-foreground/60">Email</p>
                    <p className="font-semibold break-all">crefriglyle@yahoo.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-navy-foreground/60">Business Hours</p>
                    <p className="font-semibold">Monday - Saturday, 8AM - 6PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="tel:+27824571799"
                  className="inline-flex flex-1 items-center justify-center gap-2 bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground transition-transform hover:scale-105"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 bg-whatsapp px-6 py-3 text-sm font-semibold text-whatsapp-foreground transition-transform hover:scale-105"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
