import { createContext, useContext, useEffect, type ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchSite, type Obj, type SiteContent } from "./api";

const Ctx = createContext<SiteContent | null>(null);

/** Admin theme keys -> CSS variables used by the Tailwind tokens in styles/theme.css. */
const THEME_VARS: Record<string, string[]> = {
  primary: ["--primary"],
  secondary: ["--secondary", "--tertiary"],
  background: ["--background", "--surface"],
  foreground: ["--foreground", "--surface-foreground"],
  announcementBg: ["--announcement"],
  announcementText: ["--announcement-foreground"],
  cardBg: ["--card", "--accent"],
  cardText: ["--card-foreground", "--accent-foreground"],
  footerBg: ["--footer"],
  footerText: ["--footer-foreground"],
};

function applyTheme(theme: Obj | undefined) {
  if (!theme) return;
  const root = document.documentElement.style;
  for (const [key, vars] of Object.entries(THEME_VARS)) {
    const value = theme[key];
    if (typeof value === "string" && value) vars.forEach((v) => root.setProperty(v, value));
  }
}

export function SiteProvider({ children }: { children: ReactNode }) {
  const { data, error, refetch, isLoading } = useQuery({
    queryKey: ["site"],
    queryFn: fetchSite,
    staleTime: 15_000,
    refetchOnWindowFocus: true, // picks up portal edits when the visitor returns to the tab
    refetchInterval: 60_000,
    retry: 1,
  });

  useEffect(() => applyTheme(data?.common?.theme), [data]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center" role="status" aria-label="Loading">
        <span className="size-10 animate-spin rounded-full border-4 border-secondary/20 border-t-secondary" />
      </div>
    );
  }
  if (!data) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center">
        <h1 className="text-2xl font-bold">We couldn’t load the site right now.</h1>
        <p className="text-muted-foreground">{error instanceof Error ? error.message : "Please check your connection."}</p>
        <button onClick={() => refetch()} className="rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-white">Try again</button>
      </div>
    );
  }
  return <Ctx.Provider value={data}>{children}</Ctx.Provider>;
}

/** Content of one CMS page: "common" | "home" | "about" | "courses" | "contact" | "schedule" | "experts". */
export function usePage(key: keyof SiteContent): Obj {
  const site = useContext(Ctx);
  if (!site) throw new Error("usePage must be used inside <SiteProvider>");
  return site[key] ?? {};
}
