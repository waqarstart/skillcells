import { ArrowUpRight, Globe, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import type { SVGProps } from "react";
import { Link } from "react-router";
import { usePage } from "@/lib/content";
import { assetUrl } from "@/lib/api";
import Rich from "@/components/shared/Rich";
import { ui } from "@/styles/ui";
import { cn } from "@/lib/utils";

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M14 8.2V6.1c0-.7.1-1.1 1.1-1.1H17V2h-2.4C11.7 2 10 3.6 10 6.4v1.8H8v3h2V22h3.2V11.2h2.3l.5-3H13.2z" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2zm0 7.9a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2zm6.1-8.1a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0zm3.1 1.1c-.1-1.8-.5-3.4-1.8-4.7S16.2 1.8 14.4 1.7C12.5 1.6 11.5 1.6 12 1.6s-.5 0-2.4.1C7.8 1.8 6.2 2.2 4.9 3.5S2.2 6.6 2.1 8.4C2 10.3 2 11.3 2 12s0 .5.1 2.4c.1 1.8.5 3.4 1.8 4.7s2.9 1.7 4.7 1.8c1.9.1 2.9.1 3.4.1s.5 0 2.4-.1c1.8-.1 3.4-.5 4.7-1.8s1.7-2.9 1.8-4.7c.1-1.9.1-2.9.1-3.4s0-.5-.1-2.4zm-2.1 9.1a4 4 0 0 1-2.3 2.3c-1.5.6-5.2.5-6.9.5s-5.4.1-6.9-.5a4 4 0 0 1-2.3-2.3c-.6-1.5-.5-5.2-.5-6.9s-.1-5.4.5-6.9a4 4 0 0 1 2.3-2.3c1.5-.6 5.2-.5 6.9-.5s5.4-.1 6.9.5a4 4 0 0 1 2.3 2.3c.6 1.5.5 5.2.5 6.9s.1 5.4-.5 6.9z" />
    </svg>
  );
}

function YouTubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.8 15.5v-7L16 12l-6.2 3.5z" />
    </svg>
  );
}

function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M19.6 7.2a6.6 6.6 0 0 1-3.8-1.2v7.3a5.7 5.7 0 1 1-4.9-5.6v3a2.7 2.7 0 1 0 1.9 2.6V2.2h3a3.6 3.6 0 0 0 3.8 3.5v1.5z" />
    </svg>
  );
}

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

const SOCIAL_ICONS: Record<string, { label: string; icon: (p: SVGProps<SVGSVGElement>) => React.JSX.Element }> = {
  facebook: { label: "Facebook", icon: FacebookIcon },
  instagram: { label: "Instagram", icon: InstagramIcon },
  youtube: { label: "YouTube", icon: YouTubeIcon },
  tiktok: { label: "TikTok", icon: TikTokIcon },
  linkedin: { label: "LinkedIn", icon: LinkedInIcon },
  twitter: { label: "X (Twitter)", icon: Globe as never },
  whatsapp: { label: "WhatsApp", icon: MessageCircle as never },
};

/** "0315-4831393" -> "+923154831393" (Pakistan numbers); numbers already starting with + are kept. */
const telHref = (n: string) => {
  const digits = n.replace(/[^\d+]/g, "");
  return `tel:${digits.startsWith("+") ? digits : digits.startsWith("0") ? `+92${digits.slice(1)}` : `+${digits}`}`;
};

export default function Footer() {
  const f = usePage("common").footer ?? {};
  const socials = ((f.socials ?? []) as { platform: string; url: string }[]).filter((x) => x.url);
  const phones = ((f.phones ?? []) as { number: string }[]).filter((x) => x.number);
  const mapQuery = encodeURIComponent(f.mapQuery ?? "");
  const mapEmbedUrl = `https://maps.google.com/maps?q=${mapQuery}&z=14&output=embed`;
  const mapOpenUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
  return (
    <footer className={cn("relative isolate overflow-hidden", ui.footer)}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-48 -z-10 size-[30rem] rounded-full bg-primary/20 blur-[120px]"
      />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-12 sm:grid-cols-2 sm:gap-y-12 sm:px-6 lg:grid-cols-4 lg:gap-x-10 lg:px-8 lg:py-16">
        {/* Column 1: brand */}
        <div className="min-w-0">
          <Link
            to="/"
            aria-label={`${f.brandName ?? "Home"} home`}
            className="group inline-flex items-center gap-3"
          >
            <span className="inline-flex size-16 shrink-0 items-center justify-center rounded-full bg-white p-1.5 shadow-lg shadow-black/15 ring-4 ring-white/20 transition-transform group-hover:scale-105">
              <img src={assetUrl(f.logo)} alt="" className="size-full object-contain" />
            </span>
            <span className="text-base font-bold leading-tight tracking-tight text-footer-foreground">
              {f.brandName}
              <span className="block text-xs font-medium uppercase tracking-[0.18em] text-footer-foreground/70">
                {f.brandSub}
              </span>
            </span>
          </Link>

          <Rich html={f.about} className="mt-6 max-w-sm text-sm leading-6 text-footer-foreground/75" />

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {socials.map(({ platform, url }) => {
              const { label, icon: Icon } = SOCIAL_ICONS[platform] ?? { label: platform, icon: Globe as never };
              return (
              <a
                key={`${platform}-${url}`}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${label}`}
                className="inline-flex size-10 items-center justify-center rounded-xl bg-white/10 text-footer-foreground/90 transition-all hover:-translate-y-1 hover:bg-white hover:text-foreground"
              >
                <Icon className="size-4" />
              </a>
              );
            })}
          </div>
        </div>

        {/* Column 2: find us */}
        <div className="min-w-0">
          <h2 className="text-lg font-semibold text-footer-foreground">{f.contactTitle}</h2>

          <div className="mt-5 flex gap-3">
            <MapPin aria-hidden="true" className="mt-1 size-5 shrink-0 text-white" />
            <div>
              <h3 className="font-semibold text-footer-foreground">{f.addressTitle}</h3>
              <p className="mt-2 whitespace-pre-line text-sm leading-6 text-footer-foreground/75">{f.address}</p>
            </div>
          </div>
        </div>

        {/* Column 3: location map */}
        <div className="min-w-0">
          <h2 className="text-lg font-semibold text-footer-foreground">{f.locationTitle}</h2>

          <div className="mt-5 overflow-hidden rounded-2xl border border-white/15 bg-white shadow-lg">
            <iframe
              title={`Map of ${f.mapQuery ?? "our location"}`}
              src={mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="aspect-[4/3] w-full border-0"
            />
          </div>
          <a
            href={mapOpenUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-white transition-colors hover:text-white/80"
          >
            Open in Google Maps <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </div>

        {/* Column 4 (right): email, call, WhatsApp */}
        <div className="min-w-0">
          <h2 className="text-lg font-semibold text-footer-foreground">{f.touchTitle}</h2>

          <div className="mt-5 space-y-5">
            <div className="flex gap-3">
              <Mail aria-hidden="true" className="mt-1 size-5 shrink-0 text-white" />
              <div>
                <h3 className="font-semibold text-footer-foreground">Email us</h3>
                <a
                  href={`mailto:${f.email}`}
                  className="mt-1 inline-block break-all text-sm text-footer-foreground/75 transition-colors hover:text-white"
                >
                  {f.email}
                </a>
              </div>
            </div>

            <div className="flex gap-3">
              <Phone aria-hidden="true" className="mt-1 size-5 shrink-0 text-white" />
              <div>
                <h3 className="font-semibold text-footer-foreground">Call us</h3>
                <div className="mt-2 flex flex-col gap-1.5">
                  {phones.map((p) => (
                    <a key={p.number} href={telHref(p.number)} className="text-sm text-footer-foreground/75 transition-colors hover:text-white">
                      {p.number}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <a
            href={`https://wa.me/${f.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-full items-center justify-between gap-2 rounded-2xl bg-white px-4 py-3 text-left text-sm font-semibold text-foreground shadow-lg shadow-black/10 transition-all hover:-translate-y-0.5 hover:bg-white/90 sm:w-auto lg:w-full"
          >
            <span className="inline-flex items-center gap-2">
              <MessageCircle aria-hidden="true" className="size-4 shrink-0" />
              {f.whatsappLabel}
            </span>
            <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
          </a>
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-t border-white/15 py-6 text-center text-xs text-footer-foreground/60 sm:text-left">
          &copy; {new Date().getFullYear()} {f.copyright}
        </div>
      </div>
    </footer>
  );
}
