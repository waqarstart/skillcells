import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Link, useParams } from "react-router";
import { usePage } from "@/lib/content";
import { assetUrl } from "@/lib/api";
import Rich from "@/components/shared/Rich";
import QuickInquiry from "./QuickInquiry";
import { ui } from "@/styles/ui";
import { cn } from "@/lib/utils";

export default function CourseDetail() {
  const { slug } = useParams();
  const items = (usePage("courses").courses?.items ?? []) as {
    slug: string; category: string; title: string; shortIntro: string; image: string; imageAlt: string;
    introduction: string; whyTitle: string; why: string; topics: string[];
  }[];
  const course = items.find((c) => c.slug === slug);
  const reduceMotion = useReducedMotion();

  if (!course) {
    return (
      <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-start justify-center px-4 py-4 sm:px-6">
        <p className={ui.eyebrow}>Course not found</p>
        <h1 className={cn("mt-3", ui.headingSm)}>We couldn’t find that course.</h1>
        <p className="mt-4 leading-7 text-muted-foreground">Browse the course catalog to see all available training paths.</p>
        <Link to="/courses" className={cn("mt-7", ui.buttonSm)}>
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
          <Link
            to="/courses"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground transition hover:border-secondary/40 hover:text-secondary"
          >
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
              <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {course.title}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                {course.shortIntro}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/contact" className={cn("group", ui.button)}>
                  Ask about this course
                  <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
                <a href="#course-overview" className={ui.buttonGhost}>
                  Explore course details
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: reduceMotion ? 0 : 0.08 }}
              className="relative min-h-[280px] overflow-hidden rounded-[1.75rem] shadow-[0_28px_70px_-28px_rgba(65,105,225,0.4)] sm:min-h-[380px] lg:min-h-[440px]"
            >
              <img src={assetUrl(course.image)} alt={course.imageAlt} className="absolute inset-0 size-full object-cover" />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-tr from-secondary/30 via-transparent to-white/10" />
              <span className={cn("absolute bottom-5 left-5 shadow-sm", ui.badge)}>
                Kanzul Islam · Learn by doing
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="course-overview" className={cn("scroll-mt-24", ui.sectionAlt, "py-16 lg:py-4")}>
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <motion.article
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4 }}
          >
            <p className={ui.eyebrow}>Course overview</p>
            <h2 className={cn("mt-3", ui.headingSm)}>Build skills for a changing industry.</h2>
            <Rich html={course.introduction} className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8" />

            <div className="mt-9">
              <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">{course.whyTitle}</h3>
              <Rich html={course.why} className="mt-4 text-base leading-7 text-muted-foreground" />
            </div>
          </motion.article>

          <motion.aside
            initial={reduceMotion ? false : { opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4, delay: reduceMotion ? 0 : 0.06 }}
            className={cn("h-fit rounded-3xl p-6 sm:p-8", ui.cardStatic)}
          >
            <p className={ui.cardEyebrow}>What you’ll explore</p>
            <ul className="mt-6 space-y-4">
              {(course.topics ?? []).map((topic) => (
                <li key={topic} className="flex items-start gap-3 text-sm leading-6 text-card-foreground/90 sm:text-base">
                  <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-white text-foreground">
                    <Check aria-hidden="true" className="size-4" />
                  </span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact" className={cn("group mt-8 inline-flex items-center gap-2 text-sm font-semibold", ui.linkOnDark)}>
              Talk to us about this course
              <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </motion.aside>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-4">
        <QuickInquiry />
      </section>
    </div>
  );
}
