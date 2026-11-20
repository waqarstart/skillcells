import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import { ui } from "@/styles/ui";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Courses", to: "/courses" },
  { label: "Contact", to: "/contact" },
  { label: "Class Schedule", to: "/class-schedule" },
  { label: "Meet our Experts", to: "/meet-out-experts" },
];

type NavigationItemProps = {
  label: string;
  to: string;
  onClick?: () => void;
};

function NavigationItem({ label, to, onClick }: NavigationItemProps) {
  return (
    <NavLink
      to={to}
      end={to === "/"}
      onClick={onClick}
      className={({ isActive }) =>
        cn(ui.navItem, isActive ? ui.navItemActive : ui.navItemIdle)
      }
    >
      {({ isActive }) => (
        <>
          <motion.span
            className="relative z-10"
            whileHover={{ y: -4, scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 420, damping: 18 }}
          >
            {label}
          </motion.span>
          {isActive && <span aria-hidden="true" className={ui.navItemActiveBg} />}
        </>
      )}
    </NavLink>
  );
}

function NeonCursorTrail() {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const fastX = useSpring(x, { stiffness: 650, damping: 42, mass: 0.16 });
  const fastY = useSpring(y, { stiffness: 650, damping: 42, mass: 0.16 });
  const midX = useSpring(x, { stiffness: 260, damping: 30, mass: 0.28 });
  const midY = useSpring(y, { stiffness: 260, damping: 30, mass: 0.28 });
  const slowX = useSpring(x, { stiffness: 115, damping: 24, mass: 0.42 });
  const slowY = useSpring(y, { stiffness: 115, damping: 24, mass: 0.42 });

  useEffect(() => {
    if (reduceMotion || !window.matchMedia("(pointer: fine)").matches) return;

    const move = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);
    };
    const hide = () => setVisible(false);

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("blur", hide);
    document.documentElement.addEventListener("mouseleave", hide);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("blur", hide);
      document.documentElement.removeEventListener("mouseleave", hide);
    };
  }, [reduceMotion, x, y]);

  if (reduceMotion) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[100] hidden md:block">
      <motion.span
        className="absolute left-0 top-0 size-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-2xl"
        style={{ x: slowX, y: slowY, opacity: visible ? 1 : 0 }}
      />
      <motion.span
        className="absolute left-0 top-0 size-7 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/40 blur-lg"
        style={{ x: midX, y: midY, opacity: visible ? 1 : 0 }}
      />
      <motion.span
        className="absolute left-0 top-0 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/70 blur-[3px]"
        style={{ x: fastX, y: fastY, opacity: visible ? 1 : 0 }}
      />
      <motion.span
        className="absolute left-0 top-0 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black shadow-[0_0_8px_3px_var(--primary),0_0_20px_7px_var(--secondary)]"
        style={{ x, y, opacity: visible ? 1 : 0 }}
      />
    </div>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Brand bar: Logo | Project of K Group | Kanzul Islam Computer College | K */}
      <div className="border-b border-border bg-white px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 py-3 sm:gap-6 lg:py-4">
          <Link
            to="/"
            onClick={closeMenu}
            aria-label="Kanzul Islam home"
            className="group inline-flex shrink-0 items-center rounded-lg focus-visible:outline-none focus-visible:shadow-[0_0_18px_var(--primary)]"
          >
            <img
              src={logo}
              alt="Kanzul Islam"
              className="size-14 object-contain transition-transform duration-300 group-hover:scale-105 sm:size-20 lg:size-24"
            />
          </Link>

          <div className="flex min-w-0 flex-1 items-center justify-center gap-3 sm:gap-6">
            <p className="hidden shrink-0 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground md:block lg:text-base">
              Project of K Group
            </p>
            <span aria-hidden="true" className="hidden h-12 w-0.5 shrink-0 bg-secondary md:block lg:h-14" />
            <p className="min-w-0 text-center text-base font-extrabold uppercase leading-tight tracking-wide text-secondary sm:text-xl md:text-left lg:text-3xl">
              Kanzul Islam Computer College
              <span className="mt-0.5 block text-[0.65rem] font-semibold tracking-[0.2em] text-muted-foreground sm:text-xs md:hidden">
                Project of K Group
              </span>
            </p>
          </div>

          <span
            aria-label="K Group"
            role="img"
            className="inline-flex size-12 shrink-0 items-center justify-center rounded-full border-4 border-secondary text-2xl font-black text-secondary sm:size-16 sm:text-3xl lg:size-20 lg:text-4xl"
          >
            K
          </span>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-white/95 px-4 shadow-[0_8px_24px_-18px_rgba(44,44,44,0.35)] backdrop-blur-xl sm:px-6 lg:px-8">
        <div className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between md:h-16 md:justify-center">
          <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => <NavigationItem key={item.to} {...item} />)}
          </nav>

          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground md:hidden">Menu</span>
          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex size-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary/10 hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/40 md:hidden"
          >
            {menuOpen ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
          </button>
        </div>

        <AnimatePresence initial={false}>
          {menuOpen && (
            <motion.nav
              id="mobile-navigation"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: "easeInOut" }}
              className="overflow-hidden bg-navbar md:hidden"
            >
              <div className="mx-auto flex w-full max-w-7xl flex-col py-3">
                {navItems.map((item) => <NavigationItem key={item.to} {...item} onClick={closeMenu} />)}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
      <NeonCursorTrail />
    </>
  );
}
