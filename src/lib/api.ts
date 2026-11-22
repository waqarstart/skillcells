/** Base URL of the CMS API (set VITE_API_URL in .env). */
const SERVER_API_URL:string = 'https://kanzul-islam-server.vercel.app/api/v1'
export const API_URL: string = SERVER_API_URL as string | undefined ?? "http://localhost:5000/api/v1";
const ORIGIN = API_URL.replace(/\/api\/v\d+\/?$/, "");

/** Uploaded images are stored as `/uploads/...` — prefix them with the API origin. */
export function assetUrl(path?: string | null): string {
  if (!path) return "";
  return /^(https?:|data:|blob:|\/\/)/.test(path) ? path : `${ORIGIN}${path.startsWith("/") ? "" : "/"}${path}`;
}

export async function fetchSite(): Promise<SiteContent> {
  const res = await fetch(`${API_URL}/public/site`);
  if (!res.ok) throw new Error(`Could not load site content (${res.status})`);
  return res.json();
}

export type InquiryPayload = { name: string; email: string; phone: string; course: string; message: string; source: string; website?: string };

export async function sendInquiry(data: InquiryPayload): Promise<string> {
  const res = await fetch(`${API_URL}/public/inquiries`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(body.message ?? "Could not send your inquiry. Please try again.");
  return body.message as string;
}

// Content is edited freely in the admin portal, so pages read it defensively.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Obj = Record<string, any>;
export type SiteContent = Record<"common" | "home" | "about" | "courses" | "contact" | "schedule" | "experts", Obj>;
