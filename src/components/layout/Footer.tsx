import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import type { SVGProps } from "react";
import { Link } from "react-router";
import logo from "../../assets/logo.png";
import { ui } from "@/styles/ui";
import { cn } from "@/lib/utils";

const contactEmail = "waqar.rehmat1993@gmail.com";

const footerAddress =
  "Building no 58-A, Street 6 Rizwan Park Near Shezan Factory Bund Road Lahore.";
const mapQuery = encodeURIComponent(footerAddress);
const mapEmbedUrl = `https://maps.google.com/maps?q=${mapQuery}&z=14&output=embed`;
const mapOpenUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

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

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61596479728017",
    icon: FacebookIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/kanzul_islam_computer_college/",
    icon: InstagramIcon,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@arstudio540",
    icon: YouTubeIcon,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@waqar_rehmat_ali?lang=en",
    icon: TikTokIcon,
  },
];

export default function Footer() {
  return (
    <footer className={cn("relative isolate overflow-hidden", ui.footer)}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-48 -z-10 size-[30rem] rounded-full bg-primary/20 blur-[120px]"
      />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-x-8 gap-y-12 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:gap-y-10 lg:px-8 lg:py-16">
        {/* Column 1: brand */}
        <div className="min-w-0">
          <Link
            to="/"
            aria-label="Kanzul Islam home"
            className="inline-flex items-center"
          >
            <img
              src={logo}
              alt="Kanzul Islam"
              className="h-12 w-auto object-contain object-left"
            />
          </Link>

          <p className="mt-6 max-w-sm text-sm leading-6 text-footer-foreground/75">
            We focus on technologies like Routing &amp; Switching, Cyber Security,
            Cloud Computing, DevOps, Ethical Hacking, Web Development, Graphic
            Designing, SEO, Digital Marketing, and Operating Systems.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${label}`}
                className="inline-flex size-10 items-center justify-center rounded-xl bg-white/10 text-footer-foreground/90 transition-all hover:-translate-y-1 hover:bg-white hover:text-foreground"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: find us */}
        <div className="min-w-0">
          <h2 className="text-lg font-semibold text-footer-foreground">Contact Us</h2>

          <div className="mt-5 flex gap-3">
            <MapPin aria-hidden="true" className="mt-1 size-5 shrink-0 text-white" />
            <div>
              <h3 className="font-semibold text-footer-foreground">Find Us</h3>
              <p className="mt-2 text-sm leading-6 text-footer-foreground/75">
                Building no 58-A, Street 6 Rizwan Park
                <br />
                Near Shezan Factory Bund Road Lahore.
              </p>
            </div>
          </div>
        </div>

        {/* Column 3: location map */}
        <div className="min-w-0">
          <h2 className="text-lg font-semibold text-footer-foreground">Our Location</h2>

          <div className="mt-5 overflow-hidden rounded-2xl border border-white/15 bg-white shadow-lg">
            <iframe
              title="Map of Rizwan Park, Bund Road, Lahore"
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
          <h2 className="text-lg font-semibold text-footer-foreground">Get in touch</h2>

          <div className="mt-5 space-y-5">
            <div className="flex gap-3">
              <Mail aria-hidden="true" className="mt-1 size-5 shrink-0 text-white" />
              <div>
                <h3 className="font-semibold text-footer-foreground">Email us</h3>
                <a
                  href={`mailto:${contactEmail}`}
                  className="mt-1 inline-block break-all text-sm text-footer-foreground/75 transition-colors hover:text-white"
                >
                  {contactEmail}
                </a>
              </div>
            </div>

            <div className="flex gap-3">
              <Phone aria-hidden="true" className="mt-1 size-5 shrink-0 text-white" />
              <div>
                <h3 className="font-semibold text-footer-foreground">Call us</h3>
                <div className="mt-2 flex flex-col gap-1.5">
                  <a
                    href="tel:+9231548313393"
                    className="text-sm text-footer-foreground/75 transition-colors hover:text-white"
                  >
                    0315-4831393
                  </a>
                  <a
                    href="tel:+923154752910"
                    className="text-sm text-footer-foreground/75 transition-colors hover:text-white"
                  >
                    0315-4752910
                  </a>
                </div>
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/923154752910"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-white/90"
          >
            <MessageCircle aria-hidden="true" className="size-4" />
            Free consultation on WhatsApp
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 pb-6 text-xs text-footer-foreground/55 sm:px-6 lg:px-8">
        &copy; {new Date().getFullYear()} Kanzul Islam. All rights reserved.
      </div>
    </footer>
  );
}
