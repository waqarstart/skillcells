import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { ui } from "@/styles/ui";
import { cn } from "@/lib/utils";

type Expert = {
  name: string;
  role: string;
  experience: string;
  about: string;
  skills: string[];
  linkedin: string;
};

const experts: Expert[] = [
  {
    name: "Waqar Rehmat Ali",
    role: "Director",
    experience: "11+ years of experience",
    about:
      "Senior Software Project Manager and Product Manager who has delivered software products across diverse industries. Works closely with stakeholders and engineering teams to turn business needs into clear roadmaps and dependable delivery.",
    skills: ["Product Management", "Agile / Scrum", "Stakeholder Management", "Risk Management", "SaaS"],
    linkedin: "https://www.linkedin.com/in/waqar-rehmat-ali/",
  },
  {
    name: "Waleed Ejaz",
    role: "Senior Solution Architect",
    experience: "5+ years of experience",
    about:
      "Full-stack engineer focused on building high-performance, scalable applications. Follows sound engineering principles and keeps pace with new languages, frameworks, and practices across the technology industry.",
    skills: ["Full-Stack Development", "Solution Architecture", "Scalable Systems", "Software Design"],
    linkedin: "https://www.linkedin.com/in/waleed-ejaz-07204236b/",
  },
  {
    name: "Waleed Arif",
    role: "AI / ML Engineer",
    experience: "2+ YEARS OF EXPERIENCE",
    about:
      "AI engineer who builds practical, production-ready AI systems, from language-model applications to computer vision. Experienced in deploying models and serving them through reliable APIs.",
    skills: ["Python", "PyTorch", "Hugging Face", "LLMs & RAG", "FastAPI", "Azure ML"],
    linkedin: "https://www.linkedin.com/in/waleed1011/",
  },
  {
    name: "Asad Ullah",
    role: "Full-Stack Web Developer",
    experience: "2+ years of experience",
    about:
      "Full-stack web developer building production systems across the frontend, backend, and cloud. Owns features end to end, from the user interface and API design to deployment.",
    skills: ["React", "Next.js", "TypeScript", "Node.js / NestJS", "PostgreSQL", "AWS"],
    linkedin: "https://www.linkedin.com/in/asadullah-mehsud/",
  },
];

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
}

export default function MeetOurExperts() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="overflow-hidden">
      <section className={cn(ui.sectionAlt, "py-12 sm:py-16 lg:py-20")}>
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
            <p className={cn("mb-3", ui.eyebrow)}>Meet our experts</p>
            <h1 className={ui.heading}>The people behind Kanzul Islam</h1>
            <p className={ui.lead}>
              Experienced professionals who guide our programs with practical, industry-focused knowledge.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {experts.map((expert, index) => (
              <motion.article
                key={expert.name}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: (index % 4) * 0.07, duration: 0.4 }}
                className="group flex transform-gpu flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-[0_16px_40px_-20px_rgba(65,105,225,0.35)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_26px_56px_-20px_rgba(65,105,225,0.45)]"
              >
                <div className="relative flex h-32 items-end bg-gradient-to-br from-primary to-secondary px-5 sm:h-36">
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-9 left-5 inline-flex size-[4.5rem] items-center justify-center rounded-full border-4 border-white bg-white text-2xl font-bold text-secondary shadow-lg"
                  >
                    {getInitials(expert.name)}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5 pt-12">
                  <h2 className="text-lg font-semibold text-foreground">{expert.name}</h2>
                  <p className="mt-1 text-sm font-semibold text-secondary">{expert.role}</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {expert.experience}
                  </p>

                  <p className="mt-4 text-sm leading-6 text-muted-foreground">{expert.about}</p>

                  <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${expert.name} specialties`}>
                    {expert.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border border-secondary/30 bg-secondary/5 px-3 py-1 text-xs font-medium text-secondary"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto border-t border-border pt-5">
                    <a
                      href={expert.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${expert.name} on LinkedIn`}
                      className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-secondary/25 transition-all hover:-translate-y-0.5 hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/40"
                    >
                      <LinkedInIcon className="size-4" />
                      LinkedIn
                      <ArrowUpRight aria-hidden="true" className="size-4" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
