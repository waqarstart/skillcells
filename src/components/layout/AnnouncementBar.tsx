import { Fragment, useState, type ElementType, type MouseEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Sparkles, X } from "lucide-react";
import { Link } from "react-router";
import { usePage } from "@/lib/content";
import Rich from "@/components/shared/Rich";
import { ui } from "@/styles/ui";
import { cn } from "@/lib/utils";

const Marquee = "marquee" as ElementType;
type MarqueeElement = HTMLElement & { start: () => void; stop: () => void };
type Item = { text?: string; linkLabel?: string; linkUrl?: string };

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);
  const bar = usePage("common").announcement ?? {};
  const items = ((bar.items ?? []) as Item[]).filter((i) => i.text || i.linkLabel);
  const speed = Math.min(10, Math.max(1, Number(bar.speed) || 5));

  const pauseMarquee = (event: MouseEvent<HTMLElement>) => (event.currentTarget as MarqueeElement).stop();
  const resumeMarquee = (event: MouseEvent<HTMLElement>) => (event.currentTarget as MarqueeElement).start();

  if (bar.enabled === false || !items.length) return null;

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
            scrollamount={String(speed)}
            scrolldelay="25"
            className="block w-full py-2.5 pr-12"
            onMouseEnter={pauseMarquee}
            onMouseLeave={resumeMarquee}
          >
            <span className="inline-flex items-center gap-3 whitespace-nowrap px-8 text-xs font-medium tracking-wide sm:text-sm">
              {items.map((item, i) => (
                <Fragment key={i}>
                  {i > 0 && <span aria-hidden="true" className="mx-6 text-announcement-foreground">✦</span>}
                  <Sparkles aria-hidden="true" className="size-4 shrink-0 text-announcement-foreground" />
                  <Rich inline html={item.text} className="text-announcement-foreground" />
                  {item.linkLabel && item.linkUrl && (
                    <Link
                      to={item.linkUrl}
                      className="group inline-flex items-center gap-1 font-semibold text-announcement-foreground transition-opacity hover:opacity-80"
                    >
                      {item.linkLabel}
                      <ArrowUpRight aria-hidden="true" className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  )}
                </Fragment>
              ))}
            </span>
          </Marquee>

          <button
            type="button"
            aria-label="Dismiss special offer"
            onClick={() => setIsVisible(false)}
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full p-1 text-announcement-foreground/70 transition-colors hover:bg-white/15 hover:text-announcement-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            <X aria-hidden="true" className="size-4" />
          </button>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
