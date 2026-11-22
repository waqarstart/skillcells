import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { ui } from "@/styles/ui";
import { cn } from "@/lib/utils";
import { usePage } from "@/lib/content";
import { assetUrl } from "@/lib/api";

type Expert = {
  name: string;
  role: string;
  experience?: string;
  about: string;
  skills: string[];
  linkedin: string;
  /** Optional profile photo; initials are shown when omitted. */
  photo?: string;
};

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
  const page = usePage("experts");
  const header = page.header ?? {};
  const experts = (page.experts?.items ?? []) as Expert[];

  return (
    <div className="overflow-hidden">
      <section className={cn(ui.sectionAlt, "py-12 sm:py-16 lg:py-20")}>
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
            <p className={cn("mb-3", ui.eyebrow)}>{header.eyebrow}</p>
            <h1 className={ui.headingSm}>{header.title}</h1>
            <p className={ui.lead}>{header.description}</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {experts.map((expert, index) => (
              <motion.article
                key={`${expert.name}-${index}`}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: (index % 4) * 0.07, duration: 0.4 }}
                className="group flex transform-gpu flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-[0_16px_40px_-20px_rgba(65,105,225,0.35)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_26px_56px_-20px_rgba(65,105,225,0.45)]"
              >
                <div className="relative h-16 bg-gradient-to-br from-primary to-secondary">
                  <span className="absolute -bottom-9 left-5 inline-flex size-[4.5rem] items-center justify-center overflow-hidden rounded-full border-4 border-white bg-white text-2xl font-bold text-secondary shadow-lg">
                    {expert.photo ? (
                      <img
                        src={assetUrl(expert.photo)}
                        alt={expert.name}
                        loading="lazy"
                        className="size-full object-cover object-top"
                      />
                    ) : (
                      <span aria-hidden="true">{getInitials(expert.name)}</span>
                    )}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5 pt-12">
                  <h2 className="text-lg font-semibold leading-tight text-foreground">{expert.name}</h2>
                  <p className="mt-1 text-sm font-semibold text-secondary">{expert.role}</p>
                  {expert.experience && (
                    <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {expert.experience}
                    </p>
                  )}

                  <p className="mt-3 line-clamp-4 text-sm leading-6 text-muted-foreground">{expert.about}</p>

                  {(expert.skills ?? []).length > 0 && (
                    <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`${expert.name} specialties`}>
                      {expert.skills.map((skill) => (
                        <li
                          key={skill}
                          className="rounded-full border border-secondary/30 bg-secondary/5 px-2.5 py-0.5 text-xs font-medium text-secondary"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-auto pt-4">
                    {expert.linkedin && <a
                      href={expert.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${expert.name} on LinkedIn`}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-secondary/25 transition-all hover:-translate-y-0.5 hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/40"
                    >
                      <LinkedInIcon className="size-4" />
                      LinkedIn
                      <ArrowUpRight aria-hidden="true" className="size-4" />
                    </a>}
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
