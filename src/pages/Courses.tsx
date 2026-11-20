import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, BookOpenCheck } from "lucide-react";
import { Link } from "react-router";
import { courses } from "@/lib/courses";
import QuickInquiry from "@/components/layout/QuickInquiry";
import FullStackTablet from "@/assets/fullStackTablet.jpeg";
import { ui } from "@/styles/ui";
import { cn } from "@/lib/utils";

export default function Courses() {
  const reduceMotion = useReducedMotion();

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
            <p className={cn("mb-4", ui.eyebrow)}>Learn by doing</p>
            <h1 className="max-w-xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              Find the skills for your next step.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Explore practical IT and professional training designed around current tools, hands-on learning, and the goals you want to reach.
            </p>
            <div className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground shadow-sm">
              <BookOpenCheck aria-hidden="true" className="size-4 text-secondary" />
              {courses.length} learning pathways
            </div>
          </motion.div>

          <div className="relative h-[50dvh] w-full overflow-hidden rounded-3xl bg-muted shadow-[0_24px_60px_-24px_rgba(65,105,225,0.25)] md:h-[calc(100dvh-8rem)]">
            <img
              src={FullStackTablet}
              alt="Full Stack Development course overview"
              className="absolute inset-0 size-full object-cover object-center"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className={cn(ui.sectionAlt, "py-16 lg:py-4")}>
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-row justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className={ui.eyebrow}>Course catalog</p>
              <h1 className="max-w-5xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-4xl">Practical training paths</h1>
              <p className="max-w-xl leading-7 text-muted-foreground">
              Choose a course to explore its full overview, learning areas, and training details.
            </p>
            </div>
            
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {courses.map((course, index) => (
              <motion.article
                key={course.slug}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ delay: (index % 3) * 0.05, duration: 0.38 }}
                className="h-full"
              >
                <Link
                  to={`/courses/${course.slug}`}
                  className={cn(
                    "group flex h-full flex-col overflow-hidden focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30",
                    ui.card,
                  )}
                >
                  <div className="relative h-48 overflow-hidden bg-secondary/20 sm:h-52">
                    <img
                      src={course.image}
                      alt={course.imageAlt}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    <span className={cn("absolute bottom-4 left-4 shadow-sm", ui.badge)}>
                      {course.category}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <h3 className="text-xl font-semibold tracking-tight text-card-foreground transition-colors group-hover:text-white/90">
                      {course.title}
                    </h3>
                    <p className={cn("mt-3 flex-1", ui.cardMuted)}>
                      {course.shortIntro}
                    </p>
                    <span className={cn("mt-6 inline-flex items-center gap-2 text-sm font-semibold", ui.linkOnDark)}>
                      View course details
                      <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-4 sm:px-6 lg:px-8 lg:py-24">
        {/* <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-3xl bg-card p-7 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.35)] sm:p-10 lg:flex-row lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
              Need help choosing?
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
              Let’s find a course that fits your goals.
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">
              Tell us what you want to learn and our team can help you explore the right training option.
            </p>
          </div>
          <Link
            to="/contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-1 hover:bg-secondary hover:text-secondary-foreground"
          >
            Contact us <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div> */}
        <QuickInquiry />
      </section>
    </div>
  );
}
