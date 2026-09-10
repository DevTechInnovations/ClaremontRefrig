import { createFileRoute } from "@tanstack/react-router";
import {
  Phone,
  Mail,
  Clock,
  Snowflake,
  Warehouse,
  Droplets,
  Wind,
  ChefHat,
  Refrigerator,
  ShieldCheck,
  Shield,
  Award,
  Users,
  type LucideIcon,
} from "lucide-react";
import { WHATSAPP_HREF, WhatsAppIcon } from "@/components/whatsapp";
import heroFridgeImage from "@/assets/hero-fridge.jpg";
import fridgeApplianceImage from "@/assets/fridge-appliance.jpg";
import airconApplianceImage from "@/assets/aircon-appliance.jpg";
import cateringApplianceImage from "@/assets/catering-appliance.jpg";
import coldRoomImage from "@/assets/cold-room.jpg";
import iceMachineImage from "@/assets/ice-machine.jpg";
import waterChillerImage from "@/assets/water-chiller.jpg";

const SITE_URL = "https://claremontrefrigeration.co.za";
const PAGE_TITLE =
  "Claremont Refrigeration | Cold Rooms, Aircon & Refrigeration Repairs Since 1955";
const PAGE_DESCRIPTION =
  "Claremont Refrigeration builds and repairs cold rooms, freezer rooms and wine cellars, and services ice machines, water chillers, dehumidifiers, air conditioning, catering equipment and domestic fridges across Cape Town and the greater peninsula. Trusted since 1955.";

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
          "@type": "HVACBusiness",
          name: "Claremont Refrigeration",
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

type ServiceCategory = {
  icon: LucideIcon;
  image?: string;
  title: string;
  tag: string;
  items: string[];
};

const serviceCategories: ServiceCategory[] = [
  {
    icon: Warehouse,
    image: coldRoomImage,
    title: "Cold Rooms, Freezer Rooms & Wine Cellars",
    tag: "Repair & Manufacture",
    items: [
      "Custom design & manufacture",
      "Panel, door & gasket repairs",
      "Refrigeration plant & compressors",
      "Evaporator & condenser servicing",
      "Temperature monitoring & controls",
      "Breakdown call-outs & maintenance",
    ],
  },
  {
    icon: Snowflake,
    image: iceMachineImage,
    title: "Ice & Flake Ice Machines",
    tag: "Sales, Repairs & Servicing",
    items: [
      "All makes serviced & repaired",
      "Flake, nugget & cube ice machines",
      "Not making or dropping ice",
      "Auger, compressor & pump faults",
      "Water filtration & scale control",
      "Preventative servicing plans",
    ],
  },
  {
    icon: Droplets,
    image: waterChillerImage,
    title: "Water Chillers & Dehumidifiers",
    tag: "Repairs & Servicing",
    items: [
      "Industrial & process water chillers",
      "Dehumidifier repairs & servicing",
      "Pump, fan & flow faults",
      "Gas leaks & regassing",
      "Thermostat & control faults",
      "Routine maintenance",
    ],
  },
  {
    icon: Wind,
    image: airconApplianceImage,
    title: "Air Conditioning",
    tag: "Repairs & Installation",
    items: [
      "All makes repaired & serviced",
      "New unit supply & installation",
      "Not cooling or not heating",
      "Gas leaks & regassing",
      "Noisy, dripping or iced-up units",
      "Filter cleans & routine servicing",
    ],
  },
  {
    icon: ChefHat,
    image: cateringApplianceImage,
    title: "Catering Equipment & Machinery",
    tag: "Heating, Cooling & Mechanical",
    items: [
      "Commercial fridges & freezers",
      "Ovens, stoves, fryers & grills",
      "Bain-maries, urns & boilers",
      "Mechanical & moving machinery",
      "Dishwashers & glasswashers",
      "Preventative maintenance plans",
    ],
  },
  {
    icon: Refrigerator,
    image: fridgeApplianceImage,
    title: "Domestic Refrigerators & Freezers",
    tag: "Repairs & Regassing",
    items: [
      "Not cooling or over-freezing",
      "Compressor & fan replacement",
      "Thermostat & sensor faults",
      "Gas leaks & regassing",
      "Door seal replacement",
      "Water & ice dispenser faults",
    ],
  },
];

const highlights = [
  {
    icon: Shield,
    title: "Guaranteed Workmanship",
    description:
      "Every repair, installation and cold room we build is backed by our workmanship guarantee and quality parts.",
  },
  {
    icon: Award,
    title: "Since 1955",
    description:
      "Seven decades keeping Cape Town's homes, restaurants and businesses cold.",
  },
  {
    icon: Users,
    title: "Honest Advice",
    description:
      "We tell you when a repair makes sense — and when a replacement is the smarter spend.",
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
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-ice">
                Established in 1955 — Over 70 Years of Trusted Service
              </p>
              <h1 className="text-balance text-4xl font-extrabold tracking-tight text-navy-foreground md:text-5xl lg:text-6xl">
                Refrigeration &amp; Cooling Specialists Since 1955
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-navy-foreground/80 md:text-xl lg:mx-0">
                From walk-in cold rooms to domestic fridges, Claremont Refrigeration
                designs, manufactures, installs and repairs refrigeration, ice,
                chilling and air-conditioning systems — quickly, affordably and
                properly.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                <a
                  href="#services"
                  className="inline-flex items-center justify-center bg-ice px-6 py-3 text-base font-semibold text-ice-foreground transition-transform hover:scale-105"
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

            <div className="relative hidden aspect-[4/3] overflow-hidden rounded-2xl shadow-xl lg:block">
              <img
                src={heroFridgeImage}
                alt="Stainless steel refrigerator installed in a modern kitchen"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
            </div>
          </div>

          {/* Contact info bar */}
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 rounded-2xl border border-navy-foreground/10 bg-navy-foreground/5 p-6 backdrop-blur-sm sm:grid-cols-3">
            <div className="flex items-center gap-3 text-navy-foreground/90">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ice/10 text-ice">
                <Phone className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-medium text-navy-foreground/60">Phone</p>
                <div className="flex flex-col text-sm font-semibold">
                  <a href="tel:+27824571799" className="hover:text-ice">082 457 1799</a>
                  <a href="tel:+27730263190" className="hover:text-ice">073 026 3190</a>
                </div>
              </div>
            </div>
            <a
              href="mailto:crefriglyle@yahoo.com"
              className="flex items-center gap-3 text-navy-foreground/90 transition-colors hover:text-ice"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ice/10 text-ice">
                <Mail className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-medium text-navy-foreground/60">Email</p>
                <p className="truncate text-sm font-semibold">crefriglyle@yahoo.com</p>
              </div>
            </a>
            <div className="flex items-center gap-3 text-navy-foreground/90">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ice/10 text-ice">
                <Clock className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-medium text-navy-foreground/60">Hours</p>
                <p className="truncate text-sm font-semibold">Mon-Sat 8AM-6PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative snowflake */}
        <Snowflake className="absolute -right-8 -bottom-8 h-64 w-64 rotate-12 text-ice/5 md:h-96 md:w-96" />
      </section>

      {/* Services */}
      <section className="bg-background py-16 md:py-24" id="services">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-ice">What We Do</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-muted-foreground">
              Commercial and domestic refrigeration, cooling and air conditioning —
              repaired, manufactured and maintained across every major make.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map((category) => (
              <div
                key={category.title}
                className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  {category.image ? (
                    <img
                      src={category.image}
                      alt={category.title}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  ) : (
                    <div className="gradient-navy flex h-full w-full items-center justify-center">
                      <category.icon className="h-20 w-20 text-navy-foreground/25" />
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-ice text-ice-foreground shadow-md">
                    <category.icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-ice">
                    {category.tag}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-ice" />
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
              <p className="text-sm font-semibold uppercase tracking-widest text-ice">
                Why Choose Us
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Built, Fixed &amp; Maintained Since 1955
              </h2>
              <p className="mt-4 text-muted-foreground">
                From an emergency fridge breakdown to a purpose-built cold room, we
                quote upfront, use quality parts and stand behind every job — the
                same way we have since 1955.
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
                <div className="rounded-xl bg-ice-muted p-6 text-center">
                  <p className="text-4xl font-extrabold text-navy">70+</p>
                  <p className="mt-1 text-sm font-medium text-foreground/80">Years Experience</p>
                </div>
                <div className="rounded-xl bg-navy p-6 text-center text-navy-foreground">
                  <p className="text-4xl font-extrabold text-ice">All</p>
                  <p className="mt-1 text-sm font-medium text-navy-foreground/80">
                    Makes &amp; Models
                  </p>
                </div>
                <div className="rounded-xl bg-navy p-6 text-center text-navy-foreground">
                  <p className="text-4xl font-extrabold text-ice">100%</p>
                  <p className="mt-1 text-sm font-medium text-navy-foreground/80">
                    Upfront Quotes
                  </p>
                </div>
                <div className="rounded-xl bg-ice-muted p-6 text-center">
                  <p className="text-4xl font-extrabold text-navy">10k+</p>
                  <p className="mt-1 text-sm font-medium text-foreground/80">Call-Outs Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-ice-muted py-16 md:py-24" id="contact">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-ice">Get in Touch</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Contact Us
            </h2>
            <p className="mt-4 text-muted-foreground">
              Call, email or message us on WhatsApp. We reply quickly and quote before we start.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-5 lg:items-stretch">
            <div className="relative hidden overflow-hidden rounded-3xl shadow-xl lg:col-span-2 lg:block">
              <img
                src={fridgeApplianceImage}
                alt="Refrigerator serviced by Claremont Refrigeration"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/10 to-transparent" />
              <div className="absolute inset-x-6 bottom-6 text-navy-foreground">
                <p className="text-sm font-semibold uppercase tracking-widest text-ice">Since 1955</p>
                <p className="mt-1 text-lg font-semibold">70+ years keeping Cape Town cold</p>
              </div>
            </div>

            <div className="rounded-3xl bg-navy p-8 text-navy-foreground shadow-xl md:p-10 lg:col-span-3">
              <div className="space-y-6">
                <a
                  href="tel:+27824571799"
                  className="flex items-center gap-4 border-b border-navy-foreground/10 pb-6 transition-colors hover:text-ice"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ice/15 text-ice">
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
                  className="flex items-center gap-4 border-b border-navy-foreground/10 pb-6 transition-colors hover:text-ice"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ice/15 text-ice">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-navy-foreground/60">Email</p>
                    <p className="font-semibold break-all">crefriglyle@yahoo.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ice/15 text-ice">
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
                  className="inline-flex flex-1 items-center justify-center gap-2 bg-ice px-6 py-3 text-sm font-semibold text-ice-foreground transition-transform hover:scale-105"
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
