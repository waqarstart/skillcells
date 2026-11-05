import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, BrainCircuit, BriefcaseBusiness, GraduationCap, Network } from "lucide-react";
import { Link } from "react-router";

const strengths = [
  {
    icon: BriefcaseBusiness,
    title: "Industry-focused learning",
    description:
      "Explore practical skills across networking, cybersecurity, cloud, software, and digital technologies.",
  },
  {
    icon: GraduationCap,
    title: "Guidance that supports growth",
    description:
      "Build your understanding step by step with structured training and support throughout your learning journey.",
  },
  {
    icon: Network,
    title: "Practice with purpose",
    description:
      "Connect core concepts to hands-on exercises and the kinds of challenges learners encounter in IT roles.",
  },
  {
    icon: BrainCircuit,
    title: "Skills for what’s next",
    description:
      "Develop technical confidence and keep pace with evolving tools, technologies, and professional needs.",
  },
];

export default function IndustryExperts() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="overflow-hidden">
      <section className="relative isolate px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-40 top-0 size-96 rounded-full bg-primary/15 blur-[120px]" />
          <div className="absolute -right-40 bottom-0 size-96 rounded-full bg-secondary/10 blur-[120px]" />
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            Industry Experts
          </p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Learn with guidance shaped by the world of IT.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Build practical knowledge with structured training, hands-on learning, and support from instructors who bring specialist IT knowledge into the classroom.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/courses"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-1 hover:bg-secondary hover:text-secondary-foreground hover:shadow-[0_16px_36px_-12px_rgba(249,115,22,0.35)]"
            >
              Explore our courses
              <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-surface px-6 py-3.5 text-sm font-semibold text-foreground shadow-lg shadow-black/20 transition-all hover:-translate-y-1 hover:bg-secondary/10 hover:text-secondary"
            >
              Talk to our team
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
              Learn with confidence
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Expertise made practical.
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Our approach brings specialist knowledge together with clear instruction and practical work, helping learners turn new concepts into useful skills.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {strengths.map(({ icon: Icon, title, description }, index) => (
              <motion.article
                key={title}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="rounded-3xl bg-card p-6 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.75)] transition-transform duration-300 hover:-translate-y-1 sm:p-7"
              >
                <span className="mb-5 inline-flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-[0_8px_24px_-12px_rgba(194,65,12,0.55)]">
                  <Icon aria-hidden="true" className="size-6" />
                </span>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
