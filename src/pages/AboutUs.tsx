import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Award, Check } from "lucide-react";
import { usePage } from "@/lib/content";
import { assetUrl } from "@/lib/api";
import Rich from "@/components/shared/Rich";
import SmartLink from "@/components/shared/SmartLink";
import QuickInquiry from "@/components/layout/QuickInquiry";
import { ui } from "@/styles/ui";
import { cn } from "@/lib/utils";

export default function AboutUs() {
  const reduceMotion = useReducedMotion();
  const page = usePage("about");
  const hero = page.hero ?? {};
  const story = page.story ?? {};
  const impact = page.impact ?? {};
  const outcomes = (impact.stats ?? []) as { value: string; label: string }[];
  const strengthsSec = page.strengths ?? {};
  const strengths = ((strengthsSec.items ?? []) as { text: string }[]).map((i) => i.text);

  return (
    <div className="overflow-hidden">
      <section className="relative isolate bg-background px-4 pb-14 pt-8 sm:px-6 lg:px-8 lg:pb-20 lg:pt-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:gap-12">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-start"
          >
            <p className={cn("mb-4", ui.eyebrow)}>{hero.eyebrow}</p>
            <h1 className="max-w-xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              {hero.title}
            </h1>
            <Rich html={hero.text} className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8" />
            <div className="mt-8 flex flex-wrap gap-4">
              {hero.primaryLabel && <SmartLink to={hero.primaryUrl} className={cn("group", ui.button)}>
                {hero.primaryLabel}
                <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </SmartLink>}
              {hero.secondaryLabel && <SmartLink to={hero.secondaryUrl} className={ui.buttonGhost}>
                {hero.secondaryLabel}
              </SmartLink>}
            </div>
          </motion.div>

          <div className="relative aspect-[4/3] w-full overflow-hidden md:aspect-auto md:h-full md:min-h-[22rem] rounded-3xl bg-muted shadow-[0_24px_60px_-24px_rgba(65,105,225,0.25)] ring-1 ring-black/5">
            <img
              src={assetUrl(hero.image)}
              alt="Students learning in a computer lab"
              className="absolute inset-0 h-full w-full object-cover object-center"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="bg-background px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">
          <div className="relative h-[50dvh] w-full overflow-hidden rounded-3xl bg-muted shadow-[0_24px_60px_-24px_rgba(65,105,225,0.25)] md:h-[calc(100dvh-8rem)]">
            <img
              src={assetUrl(story.image)}
              alt={story.title ?? ""}
              className="absolute inset-0 size-full object-cover object-[center_20%]"
            />
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45 }}
            className="flex flex-col justify-center"
          >
            <h2 className="max-w-xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {story.title}
            </h2>
            <Rich html={story.text} className="mt-5 text-base leading-7 text-muted-foreground" />
          </motion.div>
        </div>
      </section>

      

      <section className={cn(ui.sectionAlt, "py-16 lg:py-4")}>
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className={ui.eyebrow}>{impact.eyebrow}</p>
            <h1 className="max-w-5xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-4xl">
              {impact.title}
            </h1>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {outcomes.map((item, index) => (
              <motion.article
                key={`${item.label}-${index}`}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.04, duration: 0.35 }}
                className={cn("p-5 sm:p-6", ui.card)}
              >
                <Award aria-hidden="true" className="size-6 text-white" />
                <p className="mt-4 text-3xl font-bold tracking-tight text-card-foreground">{item.value}</p>
                <p className={cn("mt-2", ui.cardMuted)}>{item.label}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className={ui.section}>
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className={ui.eyebrow}>{strengthsSec.eyebrow}</p>
            <h1 className="max-w-5xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-4xl">
              {strengthsSec.title}
            </h1>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {strengths.map((strength, index) => (
              <motion.div
                key={`${strength}-${index}`}
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: index * 0.025, duration: 0.35 }}
                className={cn("flex items-start gap-3 p-4 sm:p-5", ui.cardStatic)}
              >
                <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-white text-foreground">
                  <Check aria-hidden="true" className="size-4" />
                </span>
                <span className="text-sm leading-6 text-card-foreground/90">{strength}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <QuickInquiry />
    </div>
  );
}
