/**
 * Shared Tailwind class bundles.
 * Palette tokens live in theme.css — edit either file to restyle the whole app.
 * Colors: Pure White · Royal Blue · Charcoal (no orange/amber).
 */

export const ui = {
  page: "bg-background text-foreground",
  section: "bg-background px-4 py-4 sm:px-6 lg:px-8 lg:py-4",
  sectionAlt: "bg-muted/50 px-4 py-4 sm:px-6 lg:px-8 lg:py-4",

  eyebrow:
    "text-sm font-semibold uppercase tracking-[0.2em] text-secondary",
  heading:
    "text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl",
  headingSm: "text-3xl font-bold tracking-tight text-foreground sm:text-4xl",
  lead: "mt-4 text-base leading-7 text-muted-foreground sm:text-lg",
  body: "text-base leading-7 text-muted-foreground",

  /** Royal Blue card surface — use card* text helpers inside */
  card: "rounded-2xl bg-card text-card-foreground shadow-[0_16px_40px_-20px_rgba(65,105,225,0.35)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_26px_56px_-20px_rgba(65,105,225,0.45)]",
  cardStatic:
    "rounded-2xl bg-card text-card-foreground shadow-[0_16px_40px_-20px_rgba(65,105,225,0.35)]",
  cardMuted: "text-sm leading-6 text-card-foreground/80",
  cardTitle: "font-semibold text-card-foreground",
  cardEyebrow:
    "text-sm font-semibold uppercase tracking-[0.2em] text-card-foreground/90",

  /** Royal Blue CTAs */
  button:
    "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-1 hover:bg-primary/90",
  buttonSm:
    "inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-1 hover:bg-primary/90",
  buttonGhost:
    "inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground shadow-sm transition-all hover:-translate-y-1 hover:border-secondary/40 hover:text-secondary",

  /** On blue cards: white icon plate + charcoal glyph */
  iconBox:
    "inline-flex size-12 items-center justify-center rounded-xl bg-white text-foreground",
  /** On imagery / cards: white badge + charcoal label */
  badge:
    "inline-flex rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-foreground",

  header: "bg-navbar text-navbar-foreground",
  footer: "bg-footer text-footer-foreground",
  announcement: "bg-announcement text-announcement-foreground",

  navItem:
    "group relative inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold text-foreground transition-colors duration-200 focus-visible:outline-none",
  navItemActive: "text-white",
  navItemIdle: "text-foreground",
  navItemActiveBg: "pointer-events-none absolute inset-0 rounded-full bg-secondary",

  linkOnDark: "text-white transition-colors hover:text-white/80",
  linkOnLight: "text-secondary transition-colors hover:text-secondary/80",
  partnerTile:
    "flex h-24 w-52 items-center justify-center overflow-hidden rounded-2xl border border-border bg-background shadow-[0_12px_30px_-16px_rgba(44,44,44,0.18)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_42px_-16px_rgba(65,105,225,0.28)]",

} as const;

export type UiKey = keyof typeof ui;
