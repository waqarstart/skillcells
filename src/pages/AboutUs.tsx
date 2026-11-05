import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Award, Check } from "lucide-react";
import { Link } from "react-router";
import directorsImage from "../assets/directorsImage.jpg";
import QuickInquiry from "@/components/layout/QuickInquiry";

const outcomes = [
  { value: "70,400+", label: "CCNA’s (Cisco Certified Network Associate)" },
  { value: "24,500+", label: "CCNP’s (Cisco Certified Network Professional)" },
  { value: "2,203+", label: "CCIE’s (Cisco Certified Internetwork Expert)" },
  { value: "3,000+", label: "CCSP’s / CCNP’s Security (Cisco Certified Security Professional)" },
  { value: "2,000+", label: "CCVP’s / CCNP’s Voice (Cisco Certified Voice Professional)" },
  { value: "28,060+", label: "MCSE’s (Microsoft Certified System Engineer)" },
  { value: "2,750+", label: "MCITP’s (Microsoft Certified IT Professional)" },
  { value: "9,561+", label: "Linux Systems Engineer (RHCSA & RHCE)" },
  { value: "350+", label: "Juniper Certified" },
  { value: "76+", label: "Huawei Certified" },
  { value: "7,000+", label: "Corporate trainings" },
];

const strengths = [
  "Only IT trainings institute having eight CCIE instructors including quad / triple and Dual CCIEs",
  "Only IT trainings institute having two MCT instructors",
  "Only IT trainings institute having three HCIE instructors",
  "Only IT trainings institute having three HCNP instructors",
  "Only IT trainings institute having instructors with certifications like ITIL, CISA, PMP, CISSP, DCS, SCP etc",
  "Well equipped state of the Art computer labs",
  "Availability of labs for 24 hours",
  "Fully equipped CCIE racks",
  "Real Hands-On training experience",
  "Vendors Certified Instructors",
  "Careful Career Counseling",
  "Strict quality policy managed by comprehensive evaluation system",
  "Market driving courses offered on emerging technologies on latest equipment in class rooms",
  "Job placement for students",
  "Conducive environment for training",
  "Industrial internships arranged for students",
  "Nationwide education chain",
  "Vast experience of national and international corporate trainings",
];

export default function AboutUs() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="overflow-hidden">
      <section className="relative isolate px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
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
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            About Kanzul Islam
          </p>
          <h1 className="max-w-5xl text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Why Kanzul Islam is chosen as the best training institute and training partner?
          </h1>
          <p className="mt-6 max-w-4xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            For the last 16 years, Kanzul Islam has commanded veneration not only in Pakistan as a perfectionist in Computer Network Education, but also throughout the subcontinent. Kanzul Islam is committed to the cause of providing excellent technical education standards through modern forms of instruction. For the last one decade, our production of highly skilled professionals has proven our commitment and dedication regarding Computer Networks’ literacy. We provide an environment that is encouraging and supportive, and also grooms the perception and technical intellect of individuals. Our aim is to highlight the inner potential of students in order to develop their competitive character needed to face the professional world.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/courses"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-1 hover:bg-secondary hover:text-secondary-foreground"
            >
              Explore our courses
              <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-surface px-6 py-3.5 text-sm font-semibold text-foreground shadow-lg shadow-black/10 transition-all hover:-translate-y-1 hover:bg-secondary/10 hover:text-secondary"
            >
              Talk to our team
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto grid max-w-7xl items-stretch gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45 }}
            className="relative min-h-[360px] overflow-hidden rounded-3xl shadow-[0_24px_60px_-24px_rgba(0,0,0,0.65)] sm:min-h-[480px] lg:min-h-[680px]"
          >
            <img
              src={directorsImage}
              alt="Kanzul Islam leadership"
              className="absolute inset-0 size-full object-cover object-center"
              loading="lazy"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45 }}
            className="flex flex-row justify-center"
          >
            <div className="flex flex-col gap-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
              A trusted training partner
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              From first steps to advanced expertise.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-7 text-muted-foreground">
              <p>
                Kanzul Islam is renowned nationwide for the high quality of its training courses. Many of our clients took their first computer training courses with us at introductory and beginner levels and have progressed with us to the advanced and expert levels.
              </p>
              <p>
                Our impressive customer base and high customer satisfaction ratings are the result of our total commitment to quality and value. For students who don’t have much time and prefer to work on their own schedule, we offer customized, personalized, and individual-attention online computer training programmes to suit all levels.
              </p>
              <p>
                Being the trend setter in technical skill training, Kanzul Islam has great training packages and instruction methodology for individuals, foreign students, corporate firms, and universities. There is a long list of our local and foreign corporate clients who have been facilitated by Corvit’s traditional training heritage. Corvit has evolved its programs through regular research of the demands of the IT training industry. Our work and experience with the corporate world has motivated our approach to training beyond certification. We provide courses in a friendly and supportive learning environment with special emphasis on “hands-on” training.
              </p>
              <p>
                As time changes, so must the norms of education. Kanzul Islam has always ventured to provide the latest and most relevant IT education to the students and professionals of the region at a remarkably affordable cost. As the leading provider of technical education to the conventional and corporate market, we focus on delivering quality in customized IT education. The training division is comprised of skilled instructors who are gifted in the art of bringing out the best in their students. Corvit faculty has the practical knowledge of their respective specialized subjects to give the students real-world exposure in classrooms.
              </p>
            </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-surface/60 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
              Our impact
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Kanzul Islam has produced the following professionals
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {outcomes.map((item, index) => (
              <motion.article
                key={item.label}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.04, duration: 0.35 }}
                className="rounded-2xl bg-card p-5 shadow-[0_16px_40px_-20px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-18px_rgba(194,65,12,0.2)] sm:p-6"
              >
                <Award aria-hidden="true" className="size-6 text-secondary" />
                <p className="mt-4 text-3xl font-bold tracking-tight text-foreground">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.label}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
              Why trainees choose us
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              The salient features that set our training apart
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {strengths.map((strength, index) => (
              <motion.div
                key={strength}
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: index * 0.025, duration: 0.35 }}
                className="flex items-start gap-3 rounded-2xl bg-card p-4 shadow-[0_12px_32px_-22px_rgba(0,0,0,0.3)] sm:p-5"
              >
                <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check aria-hidden="true" className="size-4" />
                </span>
                <span className="text-sm leading-6 text-foreground/90">{strength}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <QuickInquiry />
    </div>
  );
}
