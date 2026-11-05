import {
  ArrowUpRight,
  BriefcaseBusiness,
  Camera,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Play,
  Users,
} from "lucide-react";
import { Link } from "react-router";
import logo from "../../assets/logo.png";

const quickLinks = [
  { label: "FAQs", href: "/faqs" },
  { label: "Admission", href: "/admission" },
  { label: "Online IT Training", href: "/courses" },
  { label: "Class Schedule", href: "/class-schedule" },
  { label: "Blog", href: "/blog" },
];

const contactDetails = [
  { label: "Email us", value: "info@skillcells.com", href: "mailto:info@skillcells.com", icon: Mail },
];

const footerAddress = "Sham Nagar Road, Main Boulevard, Gulshan-e-Ravi, Lahore, Pakistan";
const mapQuery = encodeURIComponent(footerAddress);
const mapEmbedUrl = `https://maps.google.com/maps?q=${mapQuery}&z=14&output=embed`;
const mapOpenUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/", icon: Users },
  { label: "Instagram", href: "https://www.instagram.com/", icon: Camera },
  { label: "YouTube", href: "https://www.youtube.com/", icon: Play },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: BriefcaseBusiness },
  { label: "Twitter", href: "https://twitter.com/", icon: MessageCircle },
];

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-footer text-footer-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-48 -z-10 size-[30rem] rounded-full bg-primary/15 blur-[120px]"
      />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-x-10 gap-y-12 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:gap-y-10 lg:px-8 lg:py-16">
        <div className="min-w-0">
          <Link to="/" aria-label="Kanzul Islam home" className="inline-flex w-fit">
            <img
              src={logo}
              alt="Kanzul Islam"
              className="block object-contain"
              style={{ width: "9rem", height: "3rem", maxWidth: "100%" }}
            />
          </Link>

          <p className="mt-6 max-w-sm text-sm leading-6 text-footer-foreground/75">
            We focus on technologies like Routing &amp; Switching, Cyber Security,
            Cloud Computing, DevOps, Ethical Hacking, Web Development, Graphic
            Designing, SEO, Digital Marketing, and Operating Systems.
          </p>

          <div className="mt-6 flex items-center gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${label}`}
                className="inline-flex size-10 items-center justify-center rounded-xl bg-white/10 text-footer-foreground/75 shadow-[0_8px_20px_-12px_rgba(0,0,0,0.45)] transition-all hover:-translate-y-1 hover:bg-primary hover:text-white hover:shadow-[0_12px_24px_-10px_rgba(249,115,22,0.35)]"
              >
                <Icon aria-hidden="true" className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer quick links" className="min-w-0">
          <h2 className="text-lg font-semibold text-foreground">Quick Links</h2>
          <ul className="mt-5 space-y-3">
            {quickLinks.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className="group inline-flex items-center gap-1 text-sm text-footer-foreground/75 transition-colors hover:text-secondary"
                >
                  {item.label}
                  <ArrowUpRight aria-hidden="true" className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="min-w-0">
          <h2 className="text-lg font-semibold text-foreground">Our Location</h2>

          <div className="mt-5 overflow-hidden rounded-2xl bg-card shadow-[0_18px_42px_-18px_rgba(0,0,0,0.85)]">
            <iframe
              title="Map of Gulshan-e-Ravi, Lahore, Pakistan"
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
            className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-secondary transition-colors hover:text-primary"
          >
            Open in Google Maps <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </div>

        <div className="min-w-0">
          <h2 className="text-lg font-semibold text-foreground">Contact Us</h2>

          <div className="flex flex-row gap-4">
            <MapPin aria-hidden="true" className="mt-1 size-5 shrink-0 text-secondary" />
            <div>
              <h3 className="font-semibold text-footer-foreground">Find Us</h3>
              <p className="mt-2 text-sm leading-6 text-footer-foreground/75">
                Sham Nagar Road, Main Boulevard,<br />
                Gulshan-e-Ravi, Lahore, Pakistan
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-6">
            {contactDetails.map(({ label, value, href, icon: Icon }) => (
              <div key={`${label}-${value}`} className="flex gap-3">
                <Icon aria-hidden="true" className="mt-1 size-5 shrink-0 text-secondary" />
                <div>
                  <h3 className="font-semibold text-footer-foreground">{label}</h3>
                  <a
                    href={href}
                    className="mt-1 inline-block text-sm text-footer-foreground/75 transition-colors hover:text-secondary"
                  >
                    {value}
                  </a>
                </div>
              </div>
            ))}

            <div className="flex gap-3">
              <Phone aria-hidden="true" className="mt-1 size-5 shrink-0 text-secondary" />
              <div>
                <h3 className="font-semibold text-footer-foreground">Call us</h3>
                <div className="mt-2 flex flex-col gap-1.5">
                  <a
                    href="tel:+9231548313393"
                    className="text-sm text-footer-foreground/75 transition-colors hover:text-secondary"
                  >
                    0315-4831393
                  </a>
                  <a
                    href="tel:+923154752910"
                    className="text-sm text-footer-foreground/75 transition-colors hover:text-secondary"
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
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2.5 text-sm font-semibold text-secondary transition-colors hover:bg-primary/20"
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
