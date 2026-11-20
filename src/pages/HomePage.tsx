import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  Building2,
  ChevronLeft,
  ChevronRight,
  Cloud,
  Code2,
  Globe,
  Monitor,
  Quote,
  UserRound,
  Bot,
  LayoutDashboard
} from "lucide-react";
import { Link } from "react-router";
import DirectorsImage from "../assets/directorsImage3.jpg";
import CmcLogo from "../assets/cmc.jpeg";
import GcsLogo from "../assets/gcsLogo.png";
import InfoCommLogo from "../assets/ict.png";
import StarOilLogo from "../assets/starOil.jpeg";
import TekkDevLogo from "../assets/tekdev.jpg";
import QuickInquiry from "@/components/layout/QuickInquiry";
import { ui } from "@/styles/ui";
import { cn } from "@/lib/utils";

// import MainDesktop from '@/assets/mainDesktop.jpeg';
import MainDesktop from '@/assets/Build Your Future in IT.jpg';
// import MainTablet from '@/assets/mainTablet.png';
// import MainMobile from '@/assets/mainMobile.jpeg';

import FullStackDesktop from '@/assets/Full Stack Development Workspace.png'
// import FullStackTablet from '@/assets/fullStackTablet.jpeg'
import FullStackMobile from '@/assets/fullStackMobile.jpeg'

import ArtificialIntelDesktop from '@/assets/Artificial Intelligence Learning Lab.png'
// import ArtificialIntelTablet from '@/assets/artificialIntelTablet.jpeg'
import ArtificialIntelMobile from '@/assets/artificialIntelMobile.jpeg'

import ITFundDesktop from '@/assets/Gemini_Generated_Image_7tdy8v7tdy8v7tdy.jpg'
// import ITFundTablet from '@/assets/itFundTablet.jpeg'
import ITFundMobile from '@/assets/itFundMobile.jpeg'


const mission =
  "To empower individuals and organizations with the knowledge and skills needed to excel in the rapidly evolving field of Information Technology. We are committed to providing high-quality, comprehensive, and practical IT training programs that equip our students with the latest industry-relevant skills, tools, and technologies. Our mission is to enable our students to unlock their full potential, enhance their career prospects, and contribute to the growth of the IT industry in Pakistan and beyond. We strive to deliver exceptional training experiences through experienced instructors, state-of-the-art facilities, and hands-on learning approaches. ";

const vision =
  "Kanzul Islam is renowned worldwide for the quality of its educational and training courses. We help learners progress from introductory computer skills to advanced professional expertise through flexible, practical learning. Our courses respond to current industry needs and combine supportive instruction with project-based, hands-on activities. We aim to be a trusted choice for IT training in Lahore and Pakistan, known for excellence, integrity, and a welcoming learning environment.";

type HeroSlide = {
  desktop: string;
  tablet?: string;
  mobile?: string;
  imageAlt: string;
};

// Only 21:9 desktop artwork exists for now; tablet/mobile fall back to it.
// Add `tablet` / `mobile` here later if dedicated artwork is created.
const heroSlides: HeroSlide[] = [
  {
    desktop: MainDesktop,
    // tablet: MainTablet,
    // mobile: MainMobile,
    imageAlt: "Kanzul Islam IT training courses",
  },
  {
    desktop: FullStackDesktop,
    // tablet: FullStackTablet,
    // mobile: FullStackMobile,
    imageAlt: "Full Stack Development course: online and physical classes",
  },
  {
    desktop: ArtificialIntelDesktop,
    // tablet: ArtificialIntelTablet,
    // mobile: ArtificialIntelMobile,
    imageAlt: "Artificial Intelligence course",
  },
  {
    desktop: ITFundDesktop,
    // tablet: ITFundTablet,
    // mobile: ITFundMobile,
    imageAlt: "IT Fundamentals course",
  },
];

const trainingModes = [
  {
    title: "Classroom",
    description: "Learn together with instructor-led, in-person sessions.",
    icon: Monitor,
  },
  {
    title: "One to One",
    description: "Get focused guidance tailored to your learning goals.",
    icon: UserRound,
  },
  {
    title: "Customer Premise",
    description: "Build practical skills for teams and organizations.",
    icon: Building2,
  },
  {
    title: "Online Learning",
    description: "Study remotely with flexible learning options.",
    icon: Globe,
  },
];

const programs = [
  {
    title: "Full Stack Development",
    description: "Create modern static websites and web-apps.",
    image: FullStackMobile || 
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    icon: Code2,
    label: "Development",
  },
  {
    title: "AI Development",
    description: "Develop Artificial Intelligence softwares. ",
    image: ArtificialIntelMobile || 
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80",
    icon: Bot,
    label: "AI Development",
  },
  {
    title: "Essential softwares.",
    description: "Get hands on experience on essentials daily life application softwares.",
    image: ITFundMobile || 
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    icon: LayoutDashboard,
    label: "Essentials Softwares",
  },
  {
    title: "Cloud Computing",
    description: "Explore modern cloud platforms and infrastructure.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
    icon: Cloud,
    label: "Cloud",
  },
];

const testimonials = [
  {
    quote:
      "KanzulIslam offers a great environment for learning and developing technical skills. The training sessions help make complex IT concepts easier to understand, while practical exercises provide valuable hands-on experience. It is a good choice for anyone looking to improve their knowledge and grow in the IT field.",
    name: "Sheeraz",
    course: "Student",
  },
  {
    quote:
      "My learning experience at KanzulIslam has been valuable and rewarding. The structured training and focus on practical skills help students understand industry concepts and build confidence. I would recommend KanzulIslam to individuals who want to strengthen their technical expertise and explore new career opportunities in IT.",
    name: "Usman",
    course: "Student",
  },
  {
    quote:
      "My experience with KanzulIslam has been very positive. The training approach focuses on practical knowledge, clear explanations, and industry-relevant skills. The learning environment encourages students to ask questions, gain hands-on experience, and strengthen their technical abilities. I would recommend KanzulIslam to anyone looking to enhance their IT knowledge and take the next step in their professional journey.",
    name: "Anonymous student",
    course: "KanzulIslam learner",
  },
];

const partners = [
  {
    name: "InfoComm Technology",
    href: "https://infocommtech.com/",
    logo: InfoCommLogo,
    imageClass: "object-contain p-3",
  },
  {
    name: "TekkDev",
    href: "https://www.tekkdev.com/",
    logo: TekkDevLogo,
    imageClass: "object-contain p-3",
  },
  {
    name: "GCS",
    href: "https://gcspvt.com/",
    logo: GcsLogo,
    imageClass: "object-cover",
  },
  {
    name: "CMC",
    href: "https://www.cmc.com.pk/",
    logo: CmcLogo,
    imageClass: "object-cover",
  },
  {
    name: "Star Oil Filling Station",
    logo: StarOilLogo,
    imageClass: "object-contain p-2",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
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
  const [activeSlide, setActiveSlide] = useState(0);
  const reduceMotion = useReducedMotion();

  const showNextSlide = () => {
    setActiveSlide((current) => (current + 1) % heroSlides.length);
  };

  const showPreviousSlide = () => {
    setActiveSlide(
      (current) => (current - 1 + heroSlides.length) % heroSlides.length,
    );
  };

  useEffect(() => {
    if (reduceMotion) return;
  
    const timer = window.setTimeout(showNextSlide, 6500);
    return () => window.clearTimeout(timer);
  }, [activeSlide, reduceMotion]);

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

  const activeImage = heroSlides[activeSlide];

  return (
    <div className="overflow-x-clip">
      {/* Hero: edge-to-edge, from below the header to the bottom of the screen */}
      <section
        ref={heroRef}
        aria-label="Kanzul Islam highlights"
        // < lg: box matches the 21:9 artwork so the full image shows (no cropping).
        // lg+: fills from below the header to the bottom of the screen.
        style={{ "--hero-h": `max(24rem, calc(100dvh - ${heroTop}px))` } as CSSProperties}
        className="relative isolate aspect-[21/9] w-full overflow-hidden bg-muted lg:aspect-auto lg:h-[var(--hero-h)]"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.55 }}
            className="absolute inset-0"
          >
            <picture className="block size-full">
              <source media="(min-width: 1024px)" srcSet={activeImage.desktop} />
              <source media="(min-width: 768px)" srcSet={activeImage.tablet ?? activeImage.desktop} />
              <img
                src={activeImage.mobile ?? activeImage.desktop}
                alt={activeImage.imageAlt}
                decoding="async"
                className="size-full object-cover object-center"
              />
            </picture>
          </motion.div>
        </AnimatePresence>

        <button
          type="button"
          aria-label="Previous image"
          onClick={showPreviousSlide}
          className="absolute left-2 top-1/2 z-10 inline-flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-secondary/90 text-white shadow-lg transition-all hover:scale-110 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:left-4 sm:size-10 lg:left-6 lg:size-12"
        >
          <ChevronLeft aria-hidden="true" className="size-4 sm:size-5 lg:size-6" />
        </button>
        <button
          type="button"
          aria-label="Next image"
          onClick={showNextSlide}
          className="absolute right-2 top-1/2 z-10 inline-flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-secondary/90 text-white shadow-lg transition-all hover:scale-110 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-4 sm:size-10 lg:right-6 lg:size-12"
        >
          <ChevronRight aria-hidden="true" className="size-4 sm:size-5 lg:size-6" />
        </button>
      </section>

      {/* Mode of training */}
      <section id="training" className={cn(ui.sectionAlt, "py-12 sm:py-16 lg:py-20")}>
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Flexible learning"
            title="Choose how you learn"
            description="Kanzul Islam provides practical IT education through learning formats designed for individuals, professionals, and organizations."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trainingModes.map((mode, index) => {
              const Icon = mode.icon;

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
              src={DirectorsImage}
              alt="Kanzul Islam director"
              className="absolute inset-0 size-full object-cover object-[center_20%]"
            />
          </div>

          <div className="flex w-full flex-col gap-5 pt-0 text-foreground md:gap-6">
            <article>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                Mission
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                {mission}
              </p>
            </article>

            <article>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                Vision
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                {vision}
              </p>
            </article>
          </div>
        </div>
      </section>
      {/* Programs / what we provide */}
      <section className={cn(ui.sectionAlt, "py-12 sm:py-16 lg:py-20")}>
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Explore your next skill"
            title="What does Kanzul Islam provide?"
            description="Explore practical training paths across technology and professional development."
          />

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {programs.map((program, index) => {
              const Icon = program.icon;

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
                      src={program.image}
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
                      <Link
                        to="/contact"
                        className="inline-flex flex-1 items-center justify-center rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-secondary/25 transition-all hover:-translate-y-0.5 hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/40"
                      >
                        Apply
                      </Link>
                      <Link
                        to="/courses"
                        className="inline-flex flex-1 items-center justify-center gap-1 rounded-full border border-secondary/40 px-2 py-3 text-sm font-semibold text-secondary transition-colors hover:bg-secondary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/40"
                      >
                        Learn more
                        <ArrowUpRight aria-hidden="true" className="size-4" />
                      </Link>
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
            eyebrow="Learner stories"
            title="A little progress goes a long way"
            description="Read about learners’ experiences with practical IT training at KanzulIslam."
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
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-6 pt-4">
                  <p className={ui.cardTitle}>{testimonial.name}</p>
                  <p className={cn("mt-1", ui.cardMuted)}>{testimonial.course}</p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* Who we are / partners */}
      <section id="who-we-are" className={cn(ui.sectionAlt, "py-12 sm:py-16 lg:py-24")}>
        <div className="mx-auto max-w-7xl text-center">
          <p className={cn("mb-3", ui.eyebrow)}>Who we are</p>
          <h2 className={ui.headingSm}>Built through collaboration</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            We value the organizations and communities that help make learning
            and professional growth possible.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10 sm:gap-4">
            {partners.map((partner) => {
              const tileClass = cn("group transform-gpu", ui.partnerTile, "h-20 w-[calc(50%-0.375rem)] sm:h-24 sm:w-52");
              const logo = (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  loading="lazy"
                  className={`h-full w-full ${partner.imageClass}`}
                />
              );

              return partner.href ? (
                <a
                  key={partner.name}
                  href={partner.href}
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
