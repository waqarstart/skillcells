import { motion, useReducedMotion } from "motion/react";
import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import ContactInquiry from "../../assets/contactInquiry.png";

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
    "mt-2 w-full rounded-xl bg-surface px-4 py-3 text-sm text-foreground shadow-inner shadow-black/20 placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/70";

const labelClass = "block min-w-0 flex-1 text-sm font-medium text-foreground";

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
                {/* Left half: image */}
                <div className="relative flex min-w-0 flex-1 items-center justify-center overflow-hidden rounded-3xl shadow-[0_24px_60px_-24px_rgba(0,0,0,0.5)]">
  {/* blurred backdrop to fill the extra height */}
  <img
    src={ContactInquiry}
    alt=""
    aria-hidden="true"
    className="absolute inset-0 h-full w-full scale-110 object-cover"
  />
</div>

                {/* Right half: form card */}
                <motion.div
                    initial={reduceMotion ? false : { opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    className="min-w-0 flex-1 rounded-3xl bg-card p-6 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.9)] sm:p-8 lg:p-10"
                >
                    <div className="mb-8">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                            Quick inquiry
                        </p>
                        <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                            Tell us what you’re looking for.
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-muted-foreground">
                            Complete the form and continue in WhatsApp to send your inquiry to our team.
                        </p>
                    </div>

                    {whatsAppLink && (
                        <div
                            role="status"
                            className="mb-6 rounded-2xl bg-primary/10 p-5 shadow-[0_12px_30px_-18px_rgba(249,115,22,0.3)]"
                        >
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

                        <label className="block text-sm font-medium text-foreground">
                            What would you like to discuss?
                            <textarea
                                name="message"
                                rows={5}
                                placeholder="Tell us a little about your goals or questions..."
                                required
                                className={`${inputClass} resize-y leading-6`}
                            />
                        </label>

                        <button
                            type="submit"
                            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-1 hover:bg-secondary hover:text-secondary-foreground hover:shadow-[0_16px_36px_-12px_rgba(249,115,22,0.35)]"
                        >
                            Send inquiry{" "}
                            <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default QuickInquiry;