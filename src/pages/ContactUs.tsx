import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, CircleAlert, CircleCheck, LoaderCircle, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { usePage } from "@/lib/content";
import { assetUrl } from "@/lib/api";
import { honeypotProps, useInquiry } from "@/lib/useInquiry";
import Rich from "@/components/shared/Rich";
import SmartLink from "@/components/shared/SmartLink";
import { ui } from "@/styles/ui";
import { cn } from "@/lib/utils";

/** "0315-4831393" -> "tel:+923154831393" */
const telHref = (n: string) => {
  const d = n.replace(/[^\d+]/g, "");
  return `tel:${d.startsWith("+") ? d : d.startsWith("0") ? `+92${d.slice(1)}` : `+${d}`}`;
};

export default function ContactUs() {
  const reduceMotion = useReducedMotion();
  const page = usePage("contact");
  const hero = page.hero ?? {};
  const info = page.info ?? {};
  const form = page.form ?? {};
  const courseOptions = (form.courseOptions ?? []) as string[];
  const phones = ((info.phones ?? []) as { number: string }[]).filter((p) => p.number);
  const mapQuery = encodeURIComponent(info.mapQuery ?? "");
  const mapEmbedUrl = `https://maps.google.com/maps?q=${mapQuery}&z=14&output=embed`;
  const mapOpenUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
  const { status, message, onSubmit, sending } = useInquiry("contact-page", form.successMessage);

  return (
    <div className="overflow-hidden">
      <section className="relative isolate bg-background px-4 pb-14 pt-8 sm:px-6 lg:px-8 lg:pb-20 lg:pt-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:gap-12">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-start"
          >
            <p className={cn("mb-4", ui.eyebrow)}>{hero.eyebrow}</p>
            <h1 className="max-w-xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              {hero.title}
            </h1>
            <Rich html={hero.text} className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8" />
            {hero.primaryLabel && (
              <div className="mt-8 flex flex-wrap gap-4">
                <SmartLink to={hero.primaryUrl} className={cn("group", ui.button)}>
                  {hero.primaryLabel}
                  <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </SmartLink>
              </div>
            )}
          </motion.div>

          <div className="relative aspect-[4/3] w-full overflow-hidden md:aspect-auto md:h-full md:min-h-[22rem] rounded-3xl bg-muted shadow-[0_24px_60px_-24px_rgba(65,105,225,0.25)] ring-1 ring-black/5">
            <img
              src={assetUrl(hero.image)}
              alt="Students learning in a computer lab"
              className="absolute inset-0 h-full w-full object-cover object-center"
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
              <p className={ui.eyebrow}>{info.eyebrow}</p>
              <h2 className={cn("mt-3", ui.headingSm)}>{info.title}</h2>
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
                  <span className={cn("mt-1 block", ui.cardMuted)}>{info.address}</span>
                </span>
                <ArrowUpRight aria-hidden="true" className="ml-auto size-4 shrink-0 text-card-foreground/60 transition-colors group-hover:text-white" />
              </a>

              <a
                href={`mailto:${info.email}`}
                className={cn("group flex gap-4 p-5", ui.card)}
              >
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-foreground">
                  <Mail aria-hidden="true" className="size-5" />
                </span>
                <span>
                  <span className={cn("block", ui.cardTitle)}>Email us</span>
                  <span className={cn("mt-1 block break-all", ui.cardMuted)}>{info.email}</span>
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
                      {phones.map((p) => <a key={p.number} href={telHref(p.number)} className="transition-colors hover:text-white">{p.number}</a>)}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-lg">
              <iframe
                title={`Map of ${info.mapQuery ?? "our location"}`}
                src={mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="aspect-[16/9] w-full border-0"
              />
            </div>

            <a
              href={`https://wa.me/${info.whatsappNumber}`}
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
              <p className={ui.cardEyebrow}>{form.eyebrow}</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-card-foreground sm:text-3xl">
                {form.title}
              </h2>
              <p className={cn("mt-3", ui.cardMuted)}>{form.description}</p>
            </div>

            {status === "success" && (
              <div role="status" className="mb-6 flex items-start gap-3 rounded-2xl bg-white/15 p-5">
                <CircleCheck aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-card-foreground" />
                <p className="font-semibold text-card-foreground">{message}</p>
              </div>
            )}
            {status === "error" && (
              <div role="alert" className="mb-6 flex items-start gap-3 rounded-2xl bg-white p-5 text-foreground">
                <CircleAlert aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-destructive" />
                <p className="text-sm font-medium">{message}</p>
              </div>
            )}

            <form onSubmit={onSubmit} className="relative space-y-5">
              <input {...honeypotProps} />
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

              <button type="submit" disabled={sending} className={cn("group disabled:opacity-70", ui.button)}>
                {sending ? "Sending…" : form.buttonText}
                {sending
                  ? <LoaderCircle aria-hidden="true" className="size-4 animate-spin" />
                  : <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
