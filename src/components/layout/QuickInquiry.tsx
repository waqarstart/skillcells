import { motion, useReducedMotion } from "motion/react";
import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
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

const inputClass =
  "mt-2 w-full rounded-xl border border-transparent bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/70";

const labelClass = "block min-w-0 flex-1 text-sm font-medium text-card-foreground";

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
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="flex flex-row items-stretch gap-4 sm:gap-8 lg:gap-10">
        <div className="relative flex min-w-0 flex-1 items-center justify-center overflow-hidden rounded-3xl shadow-[0_24px_60px_-24px_rgba(65,105,225,0.35)]">
          <img
            src={ContactInquiry}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full scale-110 object-cover"
          />
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          className={cn("min-w-0 flex-1 rounded-3xl p-6 sm:p-8 lg:p-10", ui.cardStatic)}
        >
          <div className="mb-8">
            <p>Quick inquiry</p>
            <h3 className="mt-3 text-2xl font-bold tracking-tight text-card-foreground sm:text-3xl">
              Tell us what you’re looking for.
            </h3>
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
            <div className="flex flex-row gap-5">
              <label className={labelClass}>
                Full name
                <input name="name" type="text" autoComplete="name" placeholder="Enter your full name" required className={inputClass} />
              </label>
              <label className={labelClass}>
                Email address
                <input name="email" type="email" autoComplete="email" placeholder="you@example.com" required className={inputClass} />
              </label>
            </div>

            <div className="flex flex-row gap-5">
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

            <label className="block text-sm font-medium text-card-foreground">
              What would you like to discuss?
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us a little about your goals or questions..."
                required
                className={`${inputClass} resize-y leading-6`}
              />
            </label>

            <button type="submit" className="flex flex-cols gap-2 bg-white p-3 bold-100 rounded-4xl text-neutral-900">
              Send inquiry
              <ArrowUpRight aria-hidden="true" className="mt-1 size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickInquiry;
