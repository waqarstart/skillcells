import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const courseOptions = [
  "Artificial Intelligence",
  "Full Stack Development",
  "Web Designing",
  "DevOps",
  "SEO & Digital Marketing",
  "Graphic Designing & Video Editing",
  "WordPress Development",
  "Shopify Development",
  "Software Quality Assurance (SQA)",
  "UI/UX Design with Figma",
  "Business Analysis",
  "Typing Course",
];

const address = "Sham Nagar Road, Main Boulevard, Gulshan-e-Ravi, Lahore";
const mapQuery = encodeURIComponent(`${address}, Pakistan`);
const mapEmbedUrl = `https://maps.google.com/maps?q=${mapQuery}&z=14&output=embed`;
const mapOpenUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

export default function ContactUs() {
  const reduceMotion = useReducedMotion();
  const [whatsAppLink, setWhatsAppLink] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const message = [
      "Kanzul Islam course inquiry",
      `Name: ${values.get("name")}`,
      `Email: ${values.get("email")}`,
      `Phone: ${values.get("phone")}`,
      `Course: ${values.get("course")}`,
      `Message: ${values.get("message")}`,
    ].join("\n");

    setWhatsAppLink(
      `https://wa.me/923154752910?text=${encodeURIComponent(message)}`,
    );
  }

  return (
    <div className="overflow-hidden">
      <section className="relative isolate px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-40 -top-20 size-96 rounded-full bg-primary/15 blur-[120px]" />
          <div className="absolute -right-40 bottom-0 size-96 rounded-full bg-secondary/10 blur-[120px]" />
        </div>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            Contact Kanzul Islam
          </p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Let’s plan your next step.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Ask us about a course, class schedule, or training option. Send an inquiry and our team will get back to you.
          </p>
        </motion.div>
      </section>

      <section className="bg-surface/60 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            className="flex flex-col gap-6"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                Get in touch
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                We’re here to help.
              </h2>
            </div>

            <div className="space-y-4">
              <a
                href={mapOpenUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-4 rounded-2xl bg-card p-5 shadow-[0_14px_34px_-18px_rgba(0,0,0,0.2)] transition-all hover:-translate-y-1 hover:shadow-[0_22px_44px_-18px_rgba(249,115,22,0.25)]"
              >
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-secondary">
                  <MapPin aria-hidden="true" className="size-5" />
                </span>
                <span>
                  <span className="block font-semibold text-foreground">Visit us</span>
                  <span className="mt-1 block text-sm leading-6 text-muted-foreground">{address}</span>
                </span>
                <ArrowUpRight aria-hidden="true" className="ml-auto size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-secondary" />
              </a>

              <a
                href="mailto:info@skillcells.com"
                className="group flex gap-4 rounded-2xl bg-card p-5 shadow-[0_14px_34px_-18px_rgba(0,0,0,0.2)] transition-all hover:-translate-y-1 hover:shadow-[0_22px_44px_-18px_rgba(249,115,22,0.25)]"
              >
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-secondary">
                  <Mail aria-hidden="true" className="size-5" />
                </span>
                <span>
                  <span className="block font-semibold text-foreground">Email us</span>
                  <span className="mt-1 block text-sm text-muted-foreground">info@skillcells.com</span>
                </span>
                <ArrowUpRight aria-hidden="true" className="ml-auto size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-secondary" />
              </a>

              <div className="rounded-2xl bg-card p-5 shadow-[0_14px_34px_-18px_rgba(0,0,0,0.85)]">
                <div className="flex gap-4">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-secondary">
                    <Phone aria-hidden="true" className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground">Call us</h3>
                    <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                      <a href="tel:+9231548313393" className="transition-colors hover:text-secondary">0315-4831393</a>
                      <a href="tel:+923154752910" className="transition-colors hover:text-secondary">0315-4752910</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl bg-card shadow-[0_18px_42px_-18px_rgba(0,0,0,0.85)]">
              <iframe
                title="Map of Gulshan-e-Ravi, Lahore, Pakistan"
                src={mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="aspect-[16/9] w-full border-0"
              />
            </div>

            <a
              href="https://wa.me/923154752910"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-secondary transition-colors hover:text-primary"
            >
              <MessageCircle aria-hidden="true" className="size-4" />
              Need a free consultation? Chat with us on WhatsApp
              <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            className="rounded-3xl bg-card p-6 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.9)] sm:p-8 lg:p-10"
           >
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                Quick inquiry
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                Tell us what you’re looking for.
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Complete the form and continue in WhatsApp to send your inquiry to our team.
              </p>
            </div>

            {whatsAppLink && (
              <div role="status" className="mb-6 rounded-2xl bg-primary/10 p-5 shadow-[0_12px_30px_-18px_rgba(249,115,22,0.3)]">
                <p className="font-semibold text-foreground">Your inquiry is ready.</p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  Continue to WhatsApp to send it. A representative will follow up within 24 hours.
                </p>
                <a
                  href={whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-secondary hover:text-secondary-foreground"
                >
                  Continue in WhatsApp <ArrowUpRight aria-hidden="true" className="size-4" />
                </a>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-medium text-foreground">
                  Full name
                  <input
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Enter your full name"
                    required
                    className="mt-2 w-full rounded-xl bg-surface px-4 py-3 text-sm text-foreground shadow-inner shadow-black/20 placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/70"
                  />
                </label>
                <label className="block text-sm font-medium text-foreground">
                  Email address
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    required
                    className="mt-2 w-full rounded-xl bg-surface px-4 py-3 text-sm text-foreground shadow-inner shadow-black/20 placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/70"
                  />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-medium text-foreground">
                  Phone number
                  <input
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="03XX-XXXXXXX"
                    required
                    className="mt-2 w-full rounded-xl bg-surface px-4 py-3 text-sm text-foreground shadow-inner shadow-black/20 placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/70"
                  />
                </label>
                <label className="block text-sm font-medium text-foreground">
                  Choose a course
                  <select
                    name="course"
                    defaultValue=""
                    required
                    className="mt-2 w-full rounded-xl bg-surface px-4 py-3 text-sm text-foreground shadow-inner shadow-black/20 focus:outline-none focus:ring-2 focus:ring-primary/70"
                  >
                    <option value="" disabled>Select a course</option>
                    {courseOptions.map((course) => <option key={course} value={course}>{course}</option>)}
                  </select>
                </label>
              </div>

              <label className="block text-sm font-medium text-foreground">
                What would you like to discuss?
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us a little about your goals or questions..."
                  required
                  className="mt-2 w-full resize-y rounded-xl bg-surface px-4 py-3 text-sm leading-6 text-foreground shadow-inner shadow-black/20 placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/70"
                />
              </label>

              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-1 hover:bg-secondary hover:text-secondary-foreground hover:shadow-[0_16px_36px_-12px_rgba(249,115,22,0.35)]"
              >
                Send inquiry <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
