import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock, MessageCircle, Timer, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CopyButton } from "@/components/copy-button";
import { Reveal } from "@/components/reveal";
import { deliveryDateLabel, weeklyMenu } from "@/lib/menu";
import { formatINR } from "@/lib/utils";

export const metadata: Metadata = {
  title: "This Week's Special",
  description: `This week from Simply Signature: ${weeklyMenu.special.name}. Pre-order by ${weeklyMenu.service.orderBy}.`,
  alternates: { canonical: "/specials" },
};

export default function SpecialsPage() {
  const menu = weeklyMenu;
  const dateLabel = deliveryDateLabel(menu);

  return (
    <>
      <section className="bg-evergreen-950 text-cream">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 md:py-20">
          <Badge variant="gold" className="bg-gold-500/10 text-gold-300">
            This {menu.service.day} · {menu.service.meal}
          </Badge>
          <h1 className="mt-5 font-display text-3xl font-semibold leading-tight sm:text-5xl">
            {menu.special.name}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-cream/80">
            {menu.special.description}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr]">
          <Reveal>
            <figure className="overflow-hidden rounded-2xl border border-evergreen-900/10 bg-cream-soft p-3 shadow-card-hover">
              <Image
                src={menu.special.poster}
                alt={menu.special.posterAlt}
                width={menu.special.posterWidth}
                height={menu.special.posterHeight}
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="w-full rounded-xl"
              />
              <figcaption className="px-2 pb-1 pt-3 text-xs text-ink-soft">
                This week&rsquo;s poster — save it, share it, forward it to a hungry
                neighbour.
              </figcaption>
            </figure>
          </Reveal>

          <div className="space-y-6">
            <Reveal>
              <Card>
                <CardHeader>
                  <CardTitle>Service details</CardTitle>
                </CardHeader>
                <CardContent>
                  <dl className="space-y-3.5 text-sm">
                    <div className="flex items-start gap-3">
                      <CalendarDays className="mt-0.5 size-4 shrink-0 text-gold-600" aria-hidden />
                      <div>
                        <dt className="font-semibold text-evergreen-900">Delivery day</dt>
                        <dd className="text-ink-soft">{dateLabel}</dd>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="mt-0.5 size-4 shrink-0 text-gold-600" aria-hidden />
                      <div>
                        <dt className="font-semibold text-evergreen-900">Delivery window</dt>
                        <dd className="text-ink-soft">{menu.service.deliveryWindow}</dd>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Timer className="mt-0.5 size-4 shrink-0 text-gold-600" aria-hidden />
                      <div>
                        <dt className="font-semibold text-evergreen-900">Order by</dt>
                        <dd className="text-ink-soft">{menu.service.orderBy}</dd>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="mt-0.5 size-4 shrink-0 text-gold-600" aria-hidden />
                      <div>
                        <dt className="font-semibold text-evergreen-900">Portions</dt>
                        <dd className="text-ink-soft">{menu.portionsNote}</dd>
                      </div>
                    </div>
                  </dl>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal delay={0.08}>
              <Card>
                <CardHeader>
                  <CardTitle>This week&rsquo;s pricing</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="divide-y divide-evergreen-900/8">
                    {menu.items.map((item) => (
                      <li key={item.id} className="flex items-baseline justify-between gap-4 py-3 first:pt-0 last:pb-0">
                        <div>
                          <p className="text-sm font-semibold text-evergreen-900">{item.name}</p>
                          <p className="text-xs text-ink-soft">{item.detail}</p>
                        </div>
                        <span className="font-display text-lg font-semibold text-evergreen-900 tabular-nums">
                          {formatINR(item.price)}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/order"
                    className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-gold-500 text-sm font-semibold text-evergreen-950 transition-colors hover:bg-gold-400"
                  >
                    Build Your Order
                  </Link>
                  <a
                    href={`https://wa.me/${menu.whatsapp.number}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-evergreen-300 text-sm font-medium text-evergreen-900 transition-colors hover:border-evergreen-600 hover:bg-evergreen-50"
                  >
                    <MessageCircle className="size-4" aria-hidden />
                    Ask {menu.whatsapp.contactName} on WhatsApp
                  </a>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      <section aria-labelledby="mygate-heading" className="bg-cream-deep/50">
        <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 md:py-16">
          <Reveal>
            <h2 id="mygate-heading" className="font-display text-2xl font-semibold text-evergreen-900 sm:text-3xl">
              Spread the word on MyGate
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-ink-soft">
              Community kitchens grow by word of mouth. Copy this week&rsquo;s
              ready-made announcement and share it on the MyGate community feed or
              your tower&rsquo;s group.
            </p>
            <div className="mx-auto mt-6 max-w-xl rounded-2xl border border-evergreen-900/10 bg-white p-5 text-left">
              <p className="whitespace-pre-line text-sm leading-relaxed text-ink">
                {menu.mygateMessage}
              </p>
            </div>
            <CopyButton
              text={menu.mygateMessage}
              label="Copy MyGate announcement"
              variant="primary"
              className="mt-5"
            />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 text-center sm:px-6">
        <p className="text-sm text-ink-soft">
          Curious what we served before?{" "}
          <Link href="/gallery" className="font-semibold text-evergreen-800 underline decoration-gold-500 underline-offset-4 hover:text-terracotta-600">
            Browse the poster archive
          </Link>
        </p>
      </section>
    </>
  );
}
