import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import {  Menu, X } from "lucide-react";
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
      <header className={cn("sticky top-0 z-40 backdrop-blur-xl bg-white")}>
        <div className="mx-auto flex h-[4.5rem] w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            onClick={closeMenu}
            aria-label="Kanzul Islam home"
            className="group inline-flex shrink-0 items-center rounded-lg focus-visible:outline-none focus-visible:shadow-[0_0_18px_var(--primary)]"
          >
            <img
              src={logo}
              alt="Kanzul Islam"
              className="h-10 w-28 object-contain transition-transform duration-300 group-hover:scale-105 sm:h-11 sm:w-32"
            />
          </Link>
          <div className="flex flex-row gap-5">
          <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => <NavigationItem key={item.to} {...item} />)}
          </nav>

          {/* <Link
            to="/courses"
            className="group hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-200 hover:-translate-y-1 hover:bg-secondary hover:text-secondary-foreground hover:shadow-[0_0_24px_color-mix(in_srgb,var(--secondary)_50%,transparent)] focus-visible:outline-none focus-visible:shadow-[0_0_24px_var(--secondary)] md:inline-flex"
          >
            Enroll now
            <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link> */}
</div>
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
              <div className="mx-auto flex w-full max-w-7xl flex-col px-4 py-3 sm:px-6">
                {navItems.map((item) => <NavigationItem key={item.to} {...item} onClick={closeMenu} />)}
                {/* <Link
                  to="/courses"
                  onClick={closeMenu}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-secondary hover:text-secondary-foreground focus-visible:outline-none focus-visible:shadow-[0_0_18px_var(--secondary)]"
                >
                  Enroll now <ArrowUpRight aria-hidden="true" className="size-4" />
                </Link> */}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
      <NeonCursorTrail />
    </>
  );
}
