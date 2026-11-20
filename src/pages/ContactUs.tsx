import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ui } from "@/styles/ui";
import { cn } from "@/lib/utils";

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

const address =
  "Building no 58-A, Street 6 Rizwan Park Near Shezan Factory Bund Road Lahore.";
const contactEmail = "waqar.rehmat1993@gmail.com";
const mapQuery = encodeURIComponent(`${address}, Pakistan`);
const mapEmbedUrl = `https://maps.google.com/maps?q=${mapQuery}&z=14&output=embed`;
const mapOpenUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
const contactHeroImage =
  "https://plus.unsplash.com/premium_photo-1661763911173-f2f7becc70b0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";

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
      <section className="relative isolate bg-background px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex min-h-[50dvh] flex-col justify-center md:min-h-[calc(100dvh-8rem)]"
          >
            <p className={cn("mb-4", ui.eyebrow)}>Contact Kanzul Islam</p>
            <h1 className="max-w-xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              Let’s plan your next step.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Ask us about a course, class schedule, or training option. Send an inquiry and our team will get back to you.
            </p>
          </motion.div>

          <div className="relative h-[50dvh] w-full overflow-hidden rounded-3xl bg-muted shadow-[0_24px_60px_-24px_rgba(65,105,225,0.25)] md:h-[calc(100dvh-8rem)]">
            <img
              src={contactHeroImage}
              alt="Professional working with technology"
              className="absolute inset-0 size-full object-cover object-center"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className={cn(ui.sectionAlt, "py-16 lg:py-4")}>
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            className="flex flex-col gap-6"
          >
            <div>
              <p className={ui.eyebrow}>Get in touch</p>
              <h2 className={cn("mt-3", ui.headingSm)}>We’re here to help.</h2>
            </div>

            <div className="space-y-4">
              <a
                href={mapOpenUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn("group flex gap-4 p-5", ui.card)}
              >
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-foreground">
                  <MapPin aria-hidden="true" className="size-5" />
                </span>
                <span>
                  <span className={cn("block", ui.cardTitle)}>Visit us</span>
                  <span className={cn("mt-1 block", ui.cardMuted)}>{address}</span>
                </span>
                <ArrowUpRight aria-hidden="true" className="ml-auto size-4 shrink-0 text-card-foreground/60 transition-colors group-hover:text-white" />
              </a>

              <a
                href={`mailto:${contactEmail}`}
                className={cn("group flex gap-4 p-5", ui.card)}
              >
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-foreground">
                  <Mail aria-hidden="true" className="size-5" />
                </span>
                <span>
                  <span className={cn("block", ui.cardTitle)}>Email us</span>
                  <span className={cn("mt-1 block break-all", ui.cardMuted)}>{contactEmail}</span>
                </span>
                <ArrowUpRight aria-hidden="true" className="ml-auto size-4 shrink-0 text-card-foreground/60 transition-colors group-hover:text-white" />
              </a>

              <div className={cn("p-5", ui.cardStatic)}>
                <div className="flex gap-4">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-foreground">
                    <Phone aria-hidden="true" className="size-5" />
                  </span>
                  <div>
                    <h3 className={ui.cardTitle}>Call us</h3>
                    <div className={cn("mt-1 flex flex-wrap gap-x-4 gap-y-1", ui.cardMuted)}>
                      <a href="tel:+9231548313393" className="transition-colors hover:text-white">0315-4831393</a>
                      <a href="tel:+923154752910" className="transition-colors hover:text-white">0315-4752910</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-lg">
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
              className={cn("group inline-flex w-fit items-center gap-2 text-sm font-semibold", ui.linkOnLight)}
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
            className={cn("rounded-3xl p-6 sm:p-8 lg:p-10", ui.cardStatic)}
           >
            <div className="mb-8">
              <p className={ui.cardEyebrow}>Quick inquiry</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-card-foreground sm:text-3xl">
                Tell us what you’re looking for.
              </h2>
              <p className={cn("mt-3", ui.cardMuted)}>
                Complete the form and continue in WhatsApp to send your inquiry to our team.
              </p>
            </div>

            {whatsAppLink && (
              <div role="status" className="mb-6 rounded-2xl bg-white/15 p-5">
                <p className="font-semibold text-card-foreground">Your inquiry is ready.</p>
                <p className={cn("mt-1", ui.cardMuted)}>
                  Continue to WhatsApp to send it. A representative will follow up within 24 hours.
                </p>
                <a
                  href={whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn("mt-4", ui.buttonSm)}
                >
                  Continue in WhatsApp <ArrowUpRight aria-hidden="true" className="size-4" />
                </a>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-medium text-card-foreground">
                  Full name
                  <input
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Enter your full name"
                    required
                    className="mt-2 w-full rounded-xl border border-transparent bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/70"
                  />
                </label>
                <label className="block text-sm font-medium text-card-foreground">
                  Email address
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    required
                    className="mt-2 w-full rounded-xl border border-transparent bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/70"
                  />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-medium text-card-foreground">
                  Phone number
                  <input
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="03XX-XXXXXXX"
                    required
                    className="mt-2 w-full rounded-xl border border-transparent bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/70"
                  />
                </label>
                <label className="block text-sm font-medium text-card-foreground">
                  Choose a course
                  <select
                    name="course"
                    defaultValue=""
                    required
                    className="mt-2 w-full rounded-xl border border-transparent bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/70"
                  >
                    <option value="" disabled>Select a course</option>
                    {courseOptions.map((course) => <option key={course} value={course}>{course}</option>)}
                  </select>
                </label>
              </div>

              <label className="block text-sm font-medium text-card-foreground">
                What would you like to discuss?
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us a little about your goals or questions..."
                  required
                  className="mt-2 w-full resize-y rounded-xl border border-transparent bg-background px-4 py-3 text-sm leading-6 text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/70"
                />
              </label>

              <button type="submit" className={cn("group", ui.button)}>
                Send inquiry <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
