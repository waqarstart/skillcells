import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, BookOpenCheck } from "lucide-react";
import { Link } from "react-router";
import { courses } from "@/lib/courses";
import QuickInquiry from "@/components/layout/QuickInquiry";

export default function Courses() {
  const reduceMotion = useReducedMotion();

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
            Learn by doing
          </p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Find the skills for your next step.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Explore practical IT and professional training designed around current tools, hands-on learning, and the goals you want to reach.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2 text-sm text-muted-foreground shadow-lg shadow-black/10">
            <BookOpenCheck aria-hidden="true" className="size-4 text-secondary" />
            {courses.length} learning pathways
          </div>
        </motion.div>
      </section>

      <section className="bg-surface/60 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                Course catalog
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Practical training paths
              </h2>
            </div>
            <p className="max-w-xl leading-7 text-muted-foreground">
              Choose a course to explore its full overview, learning areas, and training details.
            </p>
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
                  className="group flex h-full flex-col overflow-hidden rounded-2xl bg-card shadow-[0_16px_40px_-20px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_56px_-20px_rgba(194,65,12,0.24)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20"
                >
                  <div className="relative h-48 overflow-hidden bg-neutral-200 sm:h-52">
                    <img
                      src={course.image}
                      alt={course.imageAlt}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                    <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-primary shadow-sm backdrop-blur">
                      {course.category}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <h3 className="text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
                      {course.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
                      {course.shortIntro}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
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

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
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
