import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, BrainCircuit, BriefcaseBusiness, GraduationCap, Network } from "lucide-react";
import { Link } from "react-router";
import { ui } from "@/styles/ui";
import { cn } from "@/lib/utils";

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
      <section className="relative isolate px-4 py-4 sm:px-6 lg:px-8 lg:py-4">
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
          <p className={cn("mb-4", ui.eyebrow)}>Industry Experts</p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Learn with guidance shaped by the world of IT.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Build practical knowledge with structured training, hands-on learning, and support from instructors who bring specialist IT knowledge into the classroom.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/courses" className={cn("group", ui.button)}>
              Explore our courses
              <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link to="/contact" className={ui.buttonGhost}>
              Talk to our team
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className={ui.eyebrow}>Learn with confidence</p>
            <h2 className={cn("mt-3", ui.headingSm)}>Expertise made practical.</h2>
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
                className={cn("rounded-3xl p-6 sm:p-7", ui.card)}
              >
                <span className={cn("mb-5", ui.iconBox)}>
                  <Icon aria-hidden="true" className="size-6" />
                </span>
                <h3 className={cn("text-lg", ui.cardTitle)}>{title}</h3>
                <p className={cn("mt-3", ui.cardMuted)}>{description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
