import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { usePage } from "@/lib/content";
import { assetUrl } from "@/lib/api";
import QuickInquiry from "@/components/layout/QuickInquiry";
import { ui } from "@/styles/ui";
import { cn } from "@/lib/utils";

export default function Courses() {
  const reduceMotion = useReducedMotion();
  const page = usePage("courses");
  const header = page.header ?? {};
  const courses = (page.courses?.items ?? []) as { slug: string; category: string; title: string; shortIntro: string; image: string; imageAlt: string }[];

  return (
    <div className="overflow-hidden">
      <section className={cn(ui.sectionAlt, "py-16 lg:py-4")}>
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-row justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className={ui.eyebrow}>{header.eyebrow}</p>
              <h1 className="max-w-5xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-4xl">{header.title}</h1>
              <p className="max-w-xl leading-7 text-muted-foreground">
              {header.description}
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
                  className="group flex h-full transform-gpu flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-[0_16px_40px_-20px_rgba(65,105,225,0.35)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_26px_56px_-20px_rgba(65,105,225,0.45)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-secondary/30"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={assetUrl(course.image)}
                      alt={course.imageAlt}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className={cn("absolute left-4 top-4 shadow-lg", ui.badge)}>
                      {course.category}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-semibold text-foreground">
                      {course.title}
                    </h3>
                    <p className="mb-5mt-2 text-sm leading-6 text-muted-foreground">
                      {course.shortIntro}
                    </p>

                    <div className="flex flex-cols gap-2 mt-auto border-t border-border pt-5">
                      <Link
                        to="/contact"
                        className="inline-flex flex-1 items-center justify-center rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-secondary/25 transition-all hover:-translate-y-0.5 hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/40"
                      >
                        Apply
                      </Link>
                      <span className="inline-flex w-full items-center justify-center gap-1 rounded-full border border-secondary/40 px-2 py-2 text-sm font-semibold text-secondary transition-colors group-hover:bg-secondary/10">
                        View course details
                        <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-4 sm:px-6 lg:px-8 lg:py-24">
        <QuickInquiry />
      </section>
    </div>
  );
}
