import { useState, type ElementType, type MouseEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Sparkles, X } from "lucide-react";
import { Link } from "react-router";
import { ui } from "@/styles/ui";
import { cn } from "@/lib/utils";

const Marquee = "marquee" as ElementType;
type MarqueeElement = HTMLElement & { start: () => void; stop: () => void };

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);
  const pauseMarquee = (event: MouseEvent<HTMLElement>) => {
    (event.currentTarget as MarqueeElement).stop();
  };
  const resumeMarquee = (event: MouseEvent<HTMLElement>) => {
    (event.currentTarget as MarqueeElement).start();
  };

  return (
    <AnimatePresence initial={false}>
      {isVisible && (
        <motion.aside
          aria-label="Special offer"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={cn("relative z-50 overflow-hidden", ui.announcement)}
        >
          <Marquee
            direction="left"
            behavior="scroll"
            scrollamount="5"
            scrolldelay="25"
            className="block w-full py-2.5 pr-12"
            onMouseEnter={pauseMarquee}
            onMouseLeave={resumeMarquee}
          >
            <span className="inline-flex items-center gap-3 whitespace-nowrap px-8 text-xs font-medium tracking-wide sm:text-sm">
              <Sparkles aria-hidden="true" className="size-4 shrink-0 text-white" />
              <span>
                <strong className="font-bold text-announcement-foreground">Get 60% off today.</strong>{" "}
                <span className="text-announcement-foreground">Get registered.</span>
              </span>
              <span aria-hidden="true" className="mx-6 text-white">✦</span>
              <Sparkles aria-hidden="true" className="size-4 shrink-0 text-white" />
              <span>
                <strong className="font-bold text-announcement-foreground">Get 60% off today.</strong>{" "}
                <span className="text-announcement-foreground">Get registered ASAP.</span>
              </span>
              <Link
                to="/courses"
                className="group inline-flex items-center gap-1 font-semibold text-white transition-colors hover:text-white"
              >
                Explore courses
                <ArrowUpRight aria-hidden="true" className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </span>
          </Marquee>

          <button
            type="button"
            aria-label="Dismiss special offer"
            onClick={() => setIsVisible(false)}
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full p-1 text-announcement-foreground/70 transition-colors hover:bg-white/15 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            <X aria-hidden="true" className="size-4" />
          </button>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
