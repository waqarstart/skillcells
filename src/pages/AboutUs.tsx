import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Award, Check } from "lucide-react";
import { Link } from "react-router";
import DirectorsImage from "../assets/directorsImage.jpg";
import QuickInquiry from "@/components/layout/QuickInquiry";
import { ui } from "@/styles/ui";
import { cn } from "@/lib/utils";

const aboutHeroImage =
  "https://images.unsplash.com/photo-1719159381981-1327b22aff9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";

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
      <section className="relative isolate bg-background px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex min-h-[50dvh] flex-col justify-center md:min-h-[calc(100dvh-8rem)]"
          >
            <p className={cn("mb-4", ui.eyebrow)}>About Kanzul Islam</p>
            <h1 className="max-w-xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              Why Kanzul Islam is chosen as the best training institute ?
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              For the last 16 years, Kanzul Islam has commanded veneration not only in Pakistan as a perfectionist in Computer Network Education, but also throughout the subcontinent. We provide an encouraging environment with special emphasis on hands-on training. Our aim is to highlight the inner potential of students in order to develop their competitive character needed to face the professional world.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/courses" className={cn("group", ui.button)}>
                Explore our courses
                <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Link to="/contact" className={ui.buttonGhost}>
                Talk to our team
              </Link>
            </div>
          </motion.div>

          <div className="relative h-[50dvh] w-full overflow-hidden rounded-3xl bg-muted shadow-[0_24px_60px_-24px_rgba(65,105,225,0.25)] md:h-[calc(100dvh-8rem)]">
            <img
              src={aboutHeroImage}
              alt="Students learning in a computer lab"
              className="absolute inset-0 size-full object-cover object-center"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="bg-background px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">
          <div className="relative h-[50dvh] w-full overflow-hidden rounded-3xl bg-muted shadow-[0_24px_60px_-24px_rgba(65,105,225,0.25)] md:h-[calc(100dvh-8rem)]">
            <img
              src={DirectorsImage}
              alt="Kanzul Islam director"
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
              From first steps to advanced expertise.
            </h2>
            <div className="mt-5 space-y-4 text-base leading-7 text-muted-foreground">
              <p>
                Kanzul Islam is renowned nationwide for the high quality of its training courses. Many of our clients took their first computer training courses with us at introductory and beginner levels and have progressed with us to the advanced and expert levels.
              </p>
              <p>
                Our impressive customer base and high customer satisfaction ratings are the result of our total commitment to quality and value. For students who don’t have much time and prefer to work on their own schedule, we offer customized, personalized, and individual-attention online computer training programmes to suit all levels.
              </p>
              <p>
                Being the trend setter in technical skill training, Kanzul Islam has great training packages and instruction methodology for individuals, foreign students, corporate firms, and universities.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      

      <section className={cn(ui.sectionAlt, "py-16 lg:py-4")}>
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className={ui.eyebrow}>Our impact</p>
            <h1 className="max-w-5xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-4xl">
              Kanzul Islam has produced the following professionals
            </h1>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {outcomes.map((item, index) => (
              <motion.article
                key={item.label}
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
            <p className={ui.eyebrow}>Why trainees choose us</p>
            <h1 className="max-w-5xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-4xl">
              The salient features that set our training apart
            </h1>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {strengths.map((strength, index) => (
              <motion.div
                key={strength}
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
