import { motion, useReducedMotion } from "motion/react";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, Clock, MapPin, MessageCircle, MonitorPlay } from "lucide-react";
import ContactInquiry from "../../assets/contactInquiry.png";
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

const highlights = [
  { icon: Clock, text: "Reply within 24 hours" },
  { icon: MonitorPlay, text: "Online & physical classes" },
  { icon: MapPin, text: "Campus in Lahore, Pakistan" },
];

const inputClass =
  "mt-1.5 w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20";

const labelClass = "block min-w-0 text-sm font-medium text-foreground";

const QuickInquiry = () => {
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
    <section className="bg-muted/50 px-4 py-10 sm:px-6 lg:px-8 lg:py-8">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.45 }}
        // Desktop: card height follows the screen (viewport minus sticky nav + padding), clamped to a sensible range
        className="mx-auto grid w-full max-w-7xl overflow-hidden rounded-3xl border border-border bg-white shadow-[0_24px_60px_-28px_rgba(65,105,225,0.35)] lg:min-h-[clamp(560px,calc(100dvh-8rem),760px)] lg:grid-cols-[5fr_7fr]"
      >
        {/* Image panel */}
        <div className="relative isolate flex min-h-64 flex-col justify-end overflow-hidden p-6 text-white sm:min-h-80 sm:p-8 lg:min-h-0">
          <img
            src={ContactInquiry}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 -z-20 size-full object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-t from-[#1e2f73]/95 via-[#1e2f73]/55 to-[#1e2f73]/10"
          />

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            Admissions open
          </p>
          <h3 className="mt-2 text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
            Start your IT career with expert guidance.
          </h3>
          <ul className="mt-5 space-y-2.5">
            {highlights.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-2.5 text-sm text-white/90">
                <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur">
                  <Icon aria-hidden="true" className="size-3.5" />
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>

        {/* Form panel */}
        <div className="flex flex-col p-6 sm:p-8 lg:p-10">
          <p className={ui.eyebrow}>Quick inquiry</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Tell us what you’re looking for.
          </h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Fill in the form and continue on WhatsApp to send your inquiry to our team.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 flex flex-1 flex-col gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className={labelClass}>
                Full name
                <input name="name" type="text" autoComplete="name" placeholder="Enter your full name" required className={inputClass} />
              </label>
              <label className={labelClass}>
                Email address
                <input name="email" type="email" autoComplete="email" placeholder="you@example.com" required className={inputClass} />
              </label>
              <label className={labelClass}>
                Phone number
                <input name="phone" type="tel" autoComplete="tel" placeholder="03XX-XXXXXXX" required className={inputClass} />
              </label>
              <label className={labelClass}>
                Choose a course
                <select name="course" defaultValue="" required className={inputClass}>
                  <option value="" disabled>Select a course</option>
                  {courseOptions.map((course) => (
                    <option key={course} value={course}>{course}</option>
                  ))}
                </select>
              </label>
            </div>

            {/* Message grows to fill remaining card height on desktop */}
            <label className={cn(labelClass, "flex flex-1 flex-col")}>
              What would you like to discuss?
              <textarea
                name="message"
                rows={3}
                placeholder="Tell us a little about your goals or questions..."
                required
                className={cn(inputClass, "min-h-24 flex-1 resize-none leading-6")}
              />
            </label>

            {whatsAppLink ? (
              <div role="status" className="flex flex-col gap-3 rounded-xl border border-secondary/20 bg-secondary/5 p-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-foreground">Your inquiry is ready.</p>
                  <p className="text-xs text-muted-foreground">Continue to WhatsApp to send it to our team.</p>
                </div>
                <a
                  href={whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-secondary/25 transition-all hover:-translate-y-0.5 hover:bg-secondary/90"
                >
                  Continue in WhatsApp <ArrowUpRight aria-hidden="true" className="size-4" />
                </a>
              </div>
            ) : (
              <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MessageCircle aria-hidden="true" className="size-3.5" />
                  Your details are only used to reply to your inquiry.
                </p>
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-secondary/25 transition-all hover:-translate-y-0.5 hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/40"
                >
                  Send inquiry
                  <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </button>
              </div>
            )}
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default QuickInquiry;
