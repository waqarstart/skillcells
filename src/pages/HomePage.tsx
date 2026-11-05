import { useEffect, useState } from "react";
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
  Network,
  Quote,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { Link } from "react-router";
import DirectorsImage from "../assets/directorsImage.jpg";
import CmcLogo from "../assets/cmc.jpg";
import GcsLogo from "../assets/gcsLogo.png";
import InfoCommLogo from "../assets/ict.png";
import StarOilLogo from "../assets/startOil.jpg";
import TekkDevLogo from "../assets/tekdev.jpg";
import QuickInquiry from "@/components/layout/QuickInquiry";

const mission =
  "To empower individuals and organizations with the knowledge and skills needed to excel in the rapidly evolving field of Information Technology. We are committed to providing high-quality, comprehensive, and practical IT training programs that equip our students with the latest industry-relevant skills, tools, and technologies. Our mission is to enable our students to unlock their full potential, enhance their career prospects, and contribute to the growth of the IT industry in Pakistan and beyond. We strive to deliver exceptional training experiences through experienced instructors, state-of-the-art facilities, and hands-on learning approaches. We are dedicated to fostering a culture of continuous learning, collaboration, and innovation, and to promoting ethical and professional practices within the IT community. Our ultimate goal is to be the preferred choice for IT training in Lahore, recognized for our excellence, integrity, and commitment to customer satisfaction.";

const vision =
  "Kanzul Islam is renowned worldwide for the quality of its educational and training courses. We help learners progress from introductory computer skills to advanced professional expertise through flexible, practical learning. Our courses respond to current industry needs and combine supportive instruction with project-based, hands-on activities. We aim to be a trusted choice for IT training in Lahore and Pakistan, known for excellence, integrity, and a welcoming learning environment.";

const heroSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Laptop displaying code in a developer workspace",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Team collaborating around a computer",
  },
  {
    image:
      "https://images.unsplash.com/photo-1586244346603-b97b4fdb87e4?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Laptop and equipment on a modern workspace",
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
    title: "Software Development",
    description: "Create modern websites, apps, and software projects.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    icon: Code2,
    label: "Development",
  },
  {
    title: "Cybersecurity",
    description: "Learn the foundations of protecting systems and data.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80",
    icon: ShieldCheck,
    label: "Security",
  },
  {
    title: "Computer Networking",
    description: "Understand the systems that connect people and devices.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    icon: Network,
    label: "Networking",
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
      "Corvit Systems offers a great environment for learning and developing technical skills. The training sessions help make complex IT concepts easier to understand, while practical exercises provide valuable hands-on experience. It is a good choice for anyone looking to improve their knowledge and grow in the IT field.",
    name: "Sheeraz",
    course: "Student",
  },
  {
    quote:
      "My learning experience at Corvit Systems has been valuable and rewarding. The structured training and focus on practical skills help students understand industry concepts and build confidence. I would recommend Corvit Systems to individuals who want to strengthen their technical expertise and explore new career opportunities in IT.",
    name: "Usman",
    course: "Student",
  },
  {
    quote:
      "My experience with Corvit Systems has been very positive. The training approach focuses on practical knowledge, clear explanations, and industry-relevant skills. The learning environment encourages students to ask questions, gain hands-on experience, and strengthen their technical abilities. I would recommend Corvit Systems to anyone looking to enhance their IT knowledge and take the next step in their professional journey.",
    name: "Anonymous student",
    course: "Corvit Systems learner",
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
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
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

    const timer = window.setInterval(showNextSlide, 6500);
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  const activeImage = heroSlides[activeSlide];

  return (
    <div className="overflow-hidden">
      {/* Full-width, image-only hero carousel */}
      <section
        aria-label="Kanzul Islam highlights"
        className="relative isolate h-[78svh] min-h-[420px] max-h-[900px] w-full overflow-hidden bg-background sm:min-h-[560px]"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={activeImage.image}
            src={activeImage.image}
            alt={activeImage.imageAlt}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.55 }}
            className="absolute inset-0 size-full object-cover"
          />
        </AnimatePresence>

        <button
          type="button"
          aria-label="Previous image"
          onClick={showPreviousSlide}
          className="absolute left-4 top-1/2 inline-flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white shadow-lg backdrop-blur-md transition-all hover:scale-110 hover:bg-primary hover:shadow-[0_0_24px_color-mix(in_srgb,var(--primary)_55%,transparent)] focus-visible:outline-none focus-visible:shadow-[0_0_20px_var(--secondary)] sm:left-8"
        >
          <ChevronLeft aria-hidden="true" className="size-6" />
        </button>
        <button
          type="button"
          aria-label="Next image"
          onClick={showNextSlide}
          className="absolute right-4 top-1/2 inline-flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white shadow-lg backdrop-blur-md transition-all hover:scale-110 hover:bg-primary hover:shadow-[0_0_24px_color-mix(in_srgb,var(--primary)_55%,transparent)] focus-visible:outline-none focus-visible:shadow-[0_0_20px_var(--secondary)] sm:right-8"
        >
          <ChevronRight aria-hidden="true" className="size-6" />
        </button>
      </section>

      {/* Mode of training */}
      <section
        id="training"
        className="bg-surface/60 px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      >
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
                  className="group transform-gpu rounded-2xl bg-card p-6 shadow-[0_16px_40px_-20px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_26px_56px_-20px_rgba(249,115,22,0.28)]"
                >
                  <span className="mb-5 inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary shadow-[0_8px_22px_-10px_rgba(249,115,22,0.35)] transition-colors group-hover:bg-secondary/10 group-hover:text-secondary">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <h3 className="text-lg font-semibold">{mode.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {mode.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission and vision */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="relative min-h-[360px] overflow-hidden rounded-3xl shadow-[0_24px_60px_-24px_rgba(0,0,0,0.2)] sm:min-h-[460px] lg:col-span-3 lg:min-h-0">
              <img
                src={DirectorsImage}
                alt="Kanzul Islam director working at his desk"
                className="absolute inset-0 size-full object-cover"
              />
            </div>

            <div className="space-y-8 lg:col-span-9 lg:space-y-9">
              <article>
                <h2 className="text-3xl font-bold tracking-tight text-foreground">
                  Mission Statement
                </h2>
                <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                  {mission}
                </p>
              </article>

              <article>
                <h2 className="text-3xl font-bold tracking-tight text-foreground">
                  Vision Statement
                </h2>
                <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                  {vision}
                </p>
              </article>
            </div>
        </div>
      </section>
      {/* Programs / what we provide */}
      <section className="bg-surface/60 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Explore your next skill"
            title="What does Kanzul Islam provide?"
            description="Explore practical training paths across technology and professional development."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((program, index) => {
              const Icon = program.icon;

              return (
                <motion.article
                  key={program.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.07, duration: 0.4 }}
                  className="group transform-gpu overflow-hidden rounded-2xl bg-card shadow-[0_18px_44px_-20px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_60px_-18px_rgba(249,115,22,0.28)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={program.image}
                      alt=""
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1 text-xs font-semibold text-secondary shadow-lg backdrop-blur">
                      {program.label}
                    </span>
                    <span className="absolute bottom-4 left-4 inline-flex size-11 items-center justify-center rounded-xl bg-background/80 text-secondary shadow-lg backdrop-blur">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-semibold">{program.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {program.description}
                    </p>
                    <Link
                      to="/courses"
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-secondary"
                    >
                      Learn more
                      <ArrowUpRight aria-hidden="true" className="size-4" />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Learner stories"
            title="A little progress goes a long way"
            description="Read about learners’ experiences with practical IT training at Corvit Systems."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.figure
                key={index}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className="transform-gpu rounded-2xl bg-card p-6 shadow-[0_16px_40px_-18px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_56px_-20px_rgba(249,115,22,0.25)] sm:p-7"
              >
                <Quote aria-hidden="true" className="size-7 text-primary" />
                <blockquote className="mt-5 min-h-16 leading-7 text-foreground/90">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-6 pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {testimonial.course}
                  </p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* Who we are / partners */}
      <section
        id="who-we-are"
        className="bg-surface/60 px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
       >
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            Who we are
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Built through collaboration
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted-foreground">
            We value the organizations and communities that help make learning
            and professional growth possible.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {partners.map((partner) => {
              const tileClass =
                "group flex h-24 w-52 transform-gpu items-center justify-center overflow-hidden rounded-2xl bg-white shadow-[0_12px_30px_-16px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_42px_-16px_rgba(249,115,22,0.25)]";
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
