import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Claremont Electrical" },
      {
        name: "description",
        content:
          "Get in touch with Claremont Electrical for quotes, emergency call-outs and general enquiries.",
      },
      { property: "og:title", content: "Contact | Claremont Electrical" },
      {
        property: "og:description",
        content:
          "Contact Claremont Electrical for residential, commercial and industrial electrical services.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Page header */}
      <section className="gradient-navy py-16 md:py-24">
        <div className="container mx-auto px-4 text-center md:px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">Get in Touch</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-navy-foreground md:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-navy-foreground/80">
            Whether you need a quote, have a question, or require emergency assistance, we're here
            to help.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground">
                  Contact Information
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Reach out directly or fill in the form and we'll get back to you within one
                  business day.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="tel:+27824571799"
                  className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-gold"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Phone</p>
                    <p className="font-semibold text-foreground">082 457 1799 / 073 026 3190</p>
                  </div>
                </a>

                <a
                  href="mailto:crefriglyle@yahoo.com"
                  className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-gold"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Email</p>
                    <p className="font-semibold text-foreground">crefriglyle@yahoo.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Business Hours</p>
                    <p className="font-semibold text-foreground">Monday - Saturday: 8AM - 6PM</p>
                    <p className="text-sm text-muted-foreground">Urgent repairs by arrangement</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/10 text-gold">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-foreground">Message Sent</h3>
                  <p className="mt-2 text-muted-foreground">
                    Thank you for contacting us. We'll be in touch shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 inline-flex items-center justify-center rounded-full bg-navy px-6 py-2 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy/90"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="mb-1 block text-sm font-medium text-foreground">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-medium text-foreground">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-1 block text-sm font-medium text-foreground">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold"
                      placeholder="(021) 123 4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="mb-1 block text-sm font-medium text-foreground">
                      Service Required
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold"
                    >
                      <option value="">Select a service</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="industrial">Industrial</option>
                      <option value="emergency">Emergency Repair</option>
                      <option value="compliance">Compliance Certificate</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1 block text-sm font-medium text-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold"
                      placeholder="Tell us about your project or emergency..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-base font-semibold text-gold-foreground transition-transform hover:scale-[1.02]"
                  >
                    <Send className="h-5 w-5" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
