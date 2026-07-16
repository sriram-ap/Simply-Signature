import Link from "next/link";
import { Heart, MapPin, MessageCircle } from "lucide-react";
import { LogoLockup } from "@/components/logo";
import { site, waLink } from "@/lib/site";

const footerLinks = [
  { href: "/menu", label: "Menu" },
  { href: "/specials", label: "This Week's Special" },
  { href: "/order", label: "Order" },
  { href: "/about", label: "Our Story" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-evergreen-950 text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div className="space-y-4">
          <LogoLockup dark />
          <p className="max-w-xs text-sm leading-relaxed text-cream/70">
            Small-batch, homestyle vegetarian meals — cooked fresh every weekend,
            exactly as we would for our own family.
          </p>
          <p className="text-xs uppercase tracking-[0.18em] text-gold-400">
            Est. {site.established}
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">
            Explore
          </h2>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-cream/80 transition-colors hover:text-gold-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">
            Reach Us
          </h2>
          <ul className="space-y-3 text-sm text-cream/80">
            <li className="flex items-start gap-2.5">
              <MessageCircle className="mt-0.5 size-4 shrink-0 text-gold-400" aria-hidden />
              <span>
                <a
                  href={waLink(site.contact.whatsappPrimary.number)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold-300"
                >
                  {site.contact.whatsappPrimary.display}
                </a>{" "}
                ({site.contact.whatsappPrimary.name})
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <MessageCircle className="mt-0.5 size-4 shrink-0 text-gold-400" aria-hidden />
              <a
                href={waLink(site.contact.whatsappSecondary.number)}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gold-300"
              >
                {site.contact.whatsappSecondary.display}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold-400" aria-hidden />
              <span>
                {site.location.unit} · {site.location.community}
              </span>
            </li>
          </ul>
          <div className="mt-5 space-y-1 text-sm text-cream/70">
            {site.serviceDays.map((s) => (
              <p key={s.day}>
                <span className="inline-block w-20 font-medium text-cream/90">{s.day}</span>
                {s.meals}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-cream/60 sm:px-6 md:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. 100% vegetarian · Homemade with{" "}
            <Heart className="inline size-3 fill-gold-400 text-gold-400" aria-label="love" />
          </p>
          <p>Thank you for supporting community home kitchens.</p>
        </div>
      </div>
    </footer>
  );
}
