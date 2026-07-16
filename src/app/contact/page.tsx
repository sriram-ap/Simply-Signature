import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, MapPin, MessageCircle, Timer } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { weeklyMenu } from "@/lib/menu";
import { site, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Simply Signature on WhatsApp: +91 97658 44659 (Gayathri). Located at JVT-343, Jal Vayu Towers. Weekend pre-orders only.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-evergreen-950 text-cream">
        <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-400">
            Contact
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            One message away
          </h1>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-cream/80">
            Everything at Simply Signature happens on WhatsApp — orders, questions,
            feedback and the occasional recipe chat.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 md:py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2.5">
                  <MessageCircle className="size-5 text-gold-600" aria-hidden />
                  WhatsApp
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-ink-soft">Orders &amp; everything else</p>
                  <a
                    href={waLink(site.contact.whatsappPrimary.number)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-2xl font-semibold text-evergreen-900 hover:text-terracotta-600"
                  >
                    {site.contact.whatsappPrimary.display}
                  </a>
                  <p className="text-sm text-ink-soft">({site.contact.whatsappPrimary.name})</p>
                </div>
                <div>
                  <p className="text-sm text-ink-soft">Alternate</p>
                  <a
                    href={waLink(site.contact.whatsappSecondary.number)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-xl font-semibold text-evergreen-900 hover:text-terracotta-600"
                  >
                    {site.contact.whatsappSecondary.display}
                  </a>
                </div>
                <a
                  href={waLink(
                    site.contact.whatsappPrimary.number,
                    `Hello ${site.founder}! I found Simply Signature online and would like to know more.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#128c4b] text-sm font-semibold text-white transition-colors hover:bg-[#0f7a41]"
                >
                  <MessageCircle className="size-4" aria-hidden />
                  Start a chat
                </a>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={0.08}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2.5">
                  <MapPin className="size-5 text-gold-600" aria-hidden />
                  Find us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div>
                  <p className="font-semibold text-evergreen-900">{site.location.unit}</p>
                  <p className="text-sm text-ink-soft">{site.location.community}</p>
                  <p className="mt-1 text-xs text-ink-soft">
                    Takeaway pickup is from this address during the delivery window.
                  </p>
                </div>
                <div className="space-y-2 border-t border-evergreen-900/8 pt-4">
                  <p className="flex items-center gap-2 text-sm font-semibold text-evergreen-900">
                    <CalendarDays className="size-4 text-gold-600" aria-hidden />
                    Service days
                  </p>
                  {site.serviceDays.map((s) => (
                    <p key={s.day} className="text-sm text-ink-soft">
                      <span className="inline-block w-24 font-medium text-ink">{s.day}</span>
                      {s.meals}
                    </p>
                  ))}
                </div>
                <div className="border-t border-evergreen-900/8 pt-4">
                  <p className="flex items-center gap-2 text-sm font-semibold text-evergreen-900">
                    <Timer className="size-4 text-gold-600" aria-hidden />
                    This week&rsquo;s order deadline
                  </p>
                  <p className="mt-1 text-sm text-ink-soft">{weeklyMenu.service.orderBy}</p>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>

        <p className="mt-10 text-center text-sm text-ink-soft">
          Ready to eat well this weekend?{" "}
          <Link
            href="/order"
            className="font-semibold text-evergreen-800 underline decoration-gold-500 underline-offset-4 hover:text-terracotta-600"
          >
            Place your order
          </Link>
        </p>
      </section>
    </>
  );
}
