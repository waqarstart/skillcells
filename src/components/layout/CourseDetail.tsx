import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Link, useParams } from "react-router";
import { getCourseBySlug } from "@/lib/courses";
import QuickInquiry from "./QuickInquiry";

export default function CourseDetail() {
  const { slug } = useParams();
  const course = getCourseBySlug(slug);
  const reduceMotion = useReducedMotion();

  if (!course) {
    return (
      <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-start justify-center px-4 py-20 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Course not found</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">We couldn’t find that course.</h1>
        <p className="mt-4 leading-7 text-muted-foreground">Browse the course catalog to see all available training paths.</p>
        <Link to="/courses" className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-secondary hover:text-secondary-foreground">
          <ArrowLeft aria-hidden="true" className="size-4" /> Back to courses
        </Link>
      </section>
    );
  }

  return (
    <div className="overflow-hidden">
      <section className="relative isolate px-4 pb-16 pt-10 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24 lg:pt-14">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-40 top-0 size-96 rounded-full bg-primary/15 blur-[120px]" />
          <div className="absolute -right-40 top-28 size-96 rounded-full bg-secondary/10 blur-[120px]" />
        </div>

        <div className="mx-auto max-w-7xl">
          <Link to="/courses" className="group inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-primary/10 hover:text-primary">
            <ArrowLeft aria-hidden="true" className="size-4 transition-transform group-hover:-translate-x-0.5" />
            All courses
          </Link>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-14">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <span className="inline-flex rounded-full bg-secondary/10 px-3.5 py-1.5 text-xs font-semibold text-secondary">
                {course.category}
              </span>
              <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {course.title}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                {course.shortIntro}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:bg-secondary hover:text-secondary-foreground">
                  Ask about this course
                  <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
                <a href="#course-overview" className="inline-flex items-center rounded-full bg-surface px-6 py-3.5 text-sm font-semibold text-foreground transition hover:bg-primary/10 hover:text-primary">
                  Explore course details
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: reduceMotion ? 0 : 0.08 }}
              className="relative min-h-[280px] overflow-hidden rounded-[1.75rem] shadow-[0_28px_70px_-28px_rgba(0,0,0,0.48)] sm:min-h-[380px] lg:min-h-[440px]"
            >
              <img src={course.image} alt={course.imageAlt} className="absolute inset-0 size-full object-cover" />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10" />
              <span className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-foreground shadow-sm backdrop-blur-sm">
                Kanzul Islam · Learn by doing
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="course-overview" className="scroll-mt-24 bg-surface/60 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <motion.article
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Course overview</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Build skills for a changing industry.</h2>
            <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {course.introduction}
            </p>

            <div className="mt-9">
              <h3 className="text-xl font-bold tracking-tight sm:text-2xl">{course.whyTitle}</h3>
              <div className="mt-4 space-y-4 text-base leading-7 text-muted-foreground">
                {course.whyParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>
          </motion.article>

          <motion.aside
            initial={reduceMotion ? false : { opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4, delay: reduceMotion ? 0 : 0.06 }}
            className="h-fit rounded-3xl bg-card p-6 shadow-[0_20px_54px_-30px_rgba(0,0,0,0.35)] sm:p-8"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">What you’ll explore</p>
            <ul className="mt-6 space-y-4">
              {course.topics.map((topic) => (
                <li key={topic} className="flex items-start gap-3 text-sm leading-6 text-foreground/90 sm:text-base">
                  <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check aria-hidden="true" className="size-4" />
                  </span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-secondary">
              Talk to us about this course
              <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </motion.aside>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {/* <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-3xl bg-card p-7 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.3)] sm:p-10 lg:flex-row lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Ready to get started?</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">Take your next step with Kanzul Islam.</h2>
            <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">
              Contact our team to ask about course schedules, training options, and enrollment.
            </p>
          </div>
          <Link to="/contact" className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:bg-secondary hover:text-secondary-foreground">
            Contact Kanzul Islam
            <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div> */}
        <QuickInquiry />
      </section>
    </div>
  );
}
