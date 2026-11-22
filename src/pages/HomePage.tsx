import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { usePage } from "@/lib/content";
import { assetUrl } from "@/lib/api";
import { iconFor } from "@/lib/icons";
import Rich from "@/components/shared/Rich";
import SmartLink from "@/components/shared/SmartLink";
import QuickInquiry from "@/components/layout/QuickInquiry";
import { ui } from "@/styles/ui";
import { cn } from "@/lib/utils";

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
      <p className={cn("mb-3", ui.eyebrow)}>{eyebrow}</p>
      <h2 className={ui.heading}>{title}</h2>
      {description && <p className={ui.lead}>{description}</p>}
    </div>
  );
}

export default function HomePage() {
  const page = usePage("home");
  const slides = ((page.carousel?.slides ?? []) as { image: string; mobileImage?: string; alt?: string; link?: string }[]).filter((s) => s.image);
  const autoplayMs = Math.max(2, Number(page.carousel?.autoplaySeconds) || 6.5) * 1000;
  const learn = page.learn ?? {};
  const mv = page.missionVision ?? {};
  const provide = page.provide ?? {};
  const testimonials = (page.testimonials?.items ?? []) as { quote: string; name: string; role: string }[];
  const who = page.whoWeAre ?? {};
  const partners = (who.partners ?? []) as { name: string; logo: string; url?: string }[];

  const [activeSlide, setActiveSlide] = useState(0);
  const reduceMotion = useReducedMotion();
  const count = slides.length;
  const current = count ? activeSlide % count : 0;

  const showNextSlide = () => setActiveSlide((c) => (c + 1) % Math.max(count, 1));
  const showPreviousSlide = () => setActiveSlide((c) => (c - 1 + Math.max(count, 1)) % Math.max(count, 1));

  useEffect(() => {
    if (reduceMotion || count < 2) return;
    const timer = window.setTimeout(showNextSlide, autoplayMs);
    return () => window.clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSlide, reduceMotion, count, autoplayMs]);

  // Hero fills from its top edge (below the header) to the bottom of the viewport.
  // Measured so it stays correct when the announcement bar is dismissed or wraps.
  const heroRef = useRef<HTMLElement>(null);
  const [heroTop, setHeroTop] = useState(0);

  useLayoutEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const measure = () => {
      setHeroTop(Math.round(hero.getBoundingClientRect().top + window.scrollY));
    };
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(document.body);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const activeImage = slides[current];

  return (
    <div className="overflow-x-clip">
      {/* Hero: edge-to-edge, from below the header to the bottom of the screen */}
      {activeImage && (
      <section
        ref={heroRef}
        aria-label="Kanzul Islam highlights"
        // < lg: box matches the 21:9 artwork so the full image shows (no cropping).
        // lg+: fills from below the header to the bottom of the screen.
        style={{ "--hero-h": `max(24rem, calc(100dvh - ${heroTop}px))` } as CSSProperties}
        className="relative isolate aspect-[2/1] w-full md:aspect-[21/9] overflow-hidden bg-muted lg:aspect-auto lg:h-[var(--hero-h)]"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.55 }}
            className="absolute inset-0"
          >
            {(() => {
              const picture = (
                <picture className="block size-full">
                  <source media="(min-width: 768px)" srcSet={assetUrl(activeImage.image)} />
                  <img
                    src={assetUrl(activeImage.mobileImage || activeImage.image)}
                    alt={activeImage.alt ?? ""}
                    decoding="async"
                    className="size-full object-cover object-center"
                  />
                </picture>
              );
              return activeImage.link ? <SmartLink to={activeImage.link} className="block size-full">{picture}</SmartLink> : picture;
            })()}
          </motion.div>
        </AnimatePresence>

        <button
          type="button"
          aria-label="Previous image" hidden={count < 2}
          onClick={showPreviousSlide}
          className="absolute left-2 top-1/2 z-10 inline-flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-secondary/90 text-white shadow-lg transition-all hover:scale-110 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:left-4 sm:size-10 lg:left-6 lg:size-12"
        >
          <ChevronLeft aria-hidden="true" className="size-4 sm:size-5 lg:size-6" />
        </button>
        <button
          type="button"
          aria-label="Next image" hidden={count < 2}
          onClick={showNextSlide}
          className="absolute right-2 top-1/2 z-10 inline-flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-secondary/90 text-white shadow-lg transition-all hover:scale-110 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-4 sm:size-10 lg:right-6 lg:size-12"
        >
          <ChevronRight aria-hidden="true" className="size-4 sm:size-5 lg:size-6" />
        </button>
      </section>
      )}

      {/* Mode of training */}
      <section id="training" className={cn(ui.sectionAlt, "py-12 sm:py-16 lg:py-20")}>
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={learn.eyebrow}
            title={learn.title}
            description={learn.description}
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {((learn.cards ?? []) as { icon: string; title: string; description: string }[]).map((mode, index) => {
              const Icon = iconFor(mode.icon);

              return (
                <motion.article
                  key={mode.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                  className={cn("group transform-gpu p-5 sm:p-6", ui.card)}
                >
                  <span className={cn("mb-5", ui.iconBox)}>
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <h3 className={cn("text-lg", ui.cardTitle)}>{mode.title}</h3>
                  <p className={cn("mt-2", ui.cardMuted)}>{mode.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission and vision — half / half, tops aligned */}
      <section className="bg-background px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 md:grid-cols-2 lg:gap-12">
          {/* Fixed aspect ratio: same proportions on every screen; width is capped by max-w-7xl */}
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl bg-muted md:sticky md:top-24 md:max-w-none shadow-[0_24px_60px_-24px_rgba(65,105,225,0.25)] sm:aspect-square lg:aspect-[11/10]">
            <img
              src={assetUrl(mv.image)}
              alt="Directors"
              className="absolute inset-0 size-full object-cover object-[center_20%]"
            />
          </div>

          <div className="flex w-full flex-col gap-5 pt-0 text-foreground md:gap-6">
            <article>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                {mv.missionTitle}
              </h2>
              <Rich html={mv.mission} className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8" />
            </article>

            <article>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                {mv.visionTitle}
              </h2>
              <Rich html={mv.vision} className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8" />
            </article>
          </div>
        </div>
      </section>
      {/* Programs / what we provide */}
      <section className={cn(ui.sectionAlt, "py-12 sm:py-16 lg:py-20")}>
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={provide.eyebrow}
            title={provide.title}
            description={provide.description}
          />

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {((provide.cards ?? []) as { image: string; label: string; icon: string; title: string; description: string; applyLabel: string; applyUrl: string; moreLabel: string; moreUrl: string }[]).map((program, index) => {
              const Icon = iconFor(program.icon);

              return (
                <motion.article
                  key={program.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.07, duration: 0.4 }}
                  className="group flex transform-gpu flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-[0_16px_40px_-20px_rgba(65,105,225,0.35)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_26px_56px_-20px_rgba(65,105,225,0.45)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={assetUrl(program.image)}
                      alt=""
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className={cn("absolute left-4 top-4 shadow-lg", ui.badge)}>
                      {program.label}
                    </span>
                    <span className="absolute bottom-4 left-4 inline-flex size-11 items-center justify-center rounded-xl bg-white text-foreground shadow-lg">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-semibold text-foreground">{program.title}</h3>
                    <p className="mb-5 mt-2 text-sm leading-6 text-muted-foreground">{program.description}</p>

                    {/* Actions pinned to the card bottom so buttons line up across cards */}
                    <div className="mt-auto flex items-center gap-3 border-t border-border pt-5">
                      <SmartLink
                        to={program.applyUrl}
                        className="inline-flex flex-1 items-center justify-center rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-secondary/25 transition-all hover:-translate-y-0.5 hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/40"
                      >
                        {program.applyLabel}
                      </SmartLink>
                      <SmartLink
                        to={program.moreUrl}
                        className="inline-flex flex-1 items-center justify-center gap-1 rounded-full border border-secondary/40 px-2 py-3 text-sm font-semibold text-secondary transition-colors hover:bg-secondary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/40"
                      >
                        {program.moreLabel}
                        <ArrowUpRight aria-hidden="true" className="size-4" />
                      </SmartLink>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={cn(ui.section, "py-12 sm:py-16 lg:py-20")}>
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={page.testimonials?.eyebrow}
            title={page.testimonials?.title}
            description={page.testimonials?.description}
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.figure
                key={index}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className={cn("transform-gpu p-6 sm:p-7", index === 2 && "sm:col-span-2 lg:col-span-1", ui.card)}
              >
                <Quote aria-hidden="true" className="size-7 text-white" />
                <blockquote className="mt-4 text-sm leading-7 text-white sm:mt-5 sm:text-base">
                  <Rich html={testimonial.quote} />
                </blockquote>
                <figcaption className="mt-6 pt-4">
                  <p className={ui.cardTitle}>{testimonial.name}</p>
                  <p className={cn("mt-1", ui.cardMuted)}>{testimonial.role}</p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* Who we are / partners */}
      <section id="who-we-are" className={cn(ui.sectionAlt, "py-12 sm:py-16 lg:py-24")}>
        <div className="mx-auto max-w-7xl text-center">
          <p className={cn("mb-3", ui.eyebrow)}>{who.eyebrow}</p>
          <h2 className={ui.headingSm}>{who.title}</h2>
          <Rich html={who.description} className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base" />

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10 sm:gap-4">
            {partners.map((partner) => {
              const tileClass = cn("group transform-gpu", ui.partnerTile, "h-20 w-[calc(50%-0.375rem)] sm:h-24 sm:w-52");
              const logo = (
                <img
                  src={assetUrl(partner.logo)}
                  alt={partner.name}
                  loading="lazy"
                  className="h-full w-full object-contain p-3"
                />
              );

              return partner.url ? (
                <a
                  key={partner.name}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={tileClass}
                  aria-label={`Visit ${partner.name} website`}
                >
                  {logo}
                </a>
              ) : (
                <div key={partner.name} className={tileClass}>
                  {logo}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <QuickInquiry />
    </div>
  );
}
