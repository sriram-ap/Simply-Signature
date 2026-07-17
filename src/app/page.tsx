import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  ChefHat,
  HandHeart,
  HeartPulse,
  Leaf,
  MessageCircle,
  Sparkles,
  Timer,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { DishCard } from "@/components/dish-card";
import { Reveal } from "@/components/reveal";
import { dishes } from "@/data/dishes";
import { deliveryDateLabel, weeklyMenu } from "@/lib/menu";
import { site } from "@/lib/site";
import { formatINR } from "@/lib/utils";

const valueIcons = [Sparkles, Leaf, ChefHat, HeartPulse];

export default function HomePage() {
  const menu = weeklyMenu;
  const featured = dishes.slice(0, 3);
  const mainItem = menu.items.find((i) => i.kind === "main");

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-evergreen-950 text-cream">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(rgba(214,180,122,0.9) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[1.1fr_1fr]">
          <div className="max-w-xl">
            <Badge variant="gold" className="mb-6 bg-gold-500/10 text-gold-300">
              Est. {site.established} · {site.location.community}
            </Badge>
            <h1 className="font-display text-4xl leading-[1.1] sm:text-5xl md:text-6xl">
              <em className="font-light italic text-cream">Simply</em>{" "}
              <span className="font-semibold text-gold-400">Signature</span>
            </h1>
            <p className="mt-4 text-sm font-medium uppercase tracking-[0.24em] text-gold-300/90">
              Premium Vegetarian · From Gayathri&rsquo;s Kitchen
            </p>
            <p className="mt-6 text-lg leading-relaxed text-cream/80">
              One thoughtfully chosen menu every weekend. Cooked fresh in small
              batches, in a real home kitchen — started with conviction on{" "}
              {site.established}, supporting community home kitchens.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/order"
                className="inline-flex h-13 items-center rounded-full bg-gold-500 px-8 text-base font-semibold text-evergreen-950 shadow-card transition-colors hover:bg-gold-400"
              >
                Order This Week
              </Link>
              <Link
                href="/menu"
                className="inline-flex h-13 items-center rounded-full border border-cream/30 px-8 text-base font-medium text-cream transition-colors hover:border-gold-400 hover:text-gold-300"
              >
                Explore Menu
              </Link>
            </div>
          </div>

          <Reveal delay={0.15}>
            {menu.special.poster ? (
              <figure className="relative rounded-2xl border border-gold-500/25 bg-evergreen-900/60 p-3 shadow-card-hover">
                <Image
                  src={menu.special.poster}
                  alt={menu.special.posterAlt}
                  width={menu.special.posterWidth}
                  height={menu.special.posterHeight}
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="w-full rounded-xl"
                />
                <figcaption className="flex items-center justify-between gap-3 px-2 pb-1 pt-3 text-xs text-cream/70">
                  <span>
                    This {menu.service.day} · {menu.special.shortName}
                  </span>
                  <span className="text-gold-400">{deliveryDateLabel(menu)}</span>
                </figcaption>
              </figure>
            ) : (
              <div className="relative rounded-2xl border border-gold-500/25 bg-evergreen-900/60 p-8 text-center shadow-card-hover sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-400">
                  This {menu.service.day} · {menu.service.meal}
                </p>
                <p className="mt-4 font-display text-3xl font-semibold leading-tight text-cream">
                  {menu.special.name}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-cream/75">
                  {menu.special.description}
                </p>
                <p className="mt-6 text-sm text-gold-300">
                  {deliveryDateLabel(menu)} · {menu.service.deliveryWindow}
                </p>
                <p className="mt-2 text-xs italic text-cream/60">{menu.portionsNote}</p>
              </div>
            )}
          </Reveal>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────── */}
      <section aria-labelledby="values-heading" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <h2 id="values-heading" className="sr-only">
          Why our table
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {site.values.map((value, i) => {
            const Icon = valueIcons[i % valueIcons.length];
            return (
              <Reveal key={value} delay={i * 0.08}>
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-evergreen-900/8 bg-cream-soft p-6 shadow-card">
                  <Icon className="size-6 text-gold-600" aria-hidden strokeWidth={1.5} />
                  <p className="font-display text-lg leading-snug text-evergreen-900">{value}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ── This week ────────────────────────────────────────── */}
      <section aria-labelledby="week-heading" className="bg-evergreen-900 text-cream">
        <div
          className={
            menu.special.poster
              ? "mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-2"
              : "mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-20"
          }
        >
          <Reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-400">
                This {menu.service.day} · {menu.service.meal}
              </p>
              <h2 id="week-heading" className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
                {menu.special.name}
              </h2>
              <p className="mt-4 leading-relaxed text-cream/80">{menu.special.description}</p>
              <dl className="mt-6 space-y-2.5 text-sm">
                <div className="flex items-center gap-2.5">
                  <CalendarDays className="size-4 text-gold-400" aria-hidden />
                  <dt className="sr-only">Delivery</dt>
                  <dd>
                    {deliveryDateLabel(menu)} · {menu.service.deliveryWindow}
                  </dd>
                </div>
                <div className="flex items-center gap-2.5">
                  <Timer className="size-4 text-gold-400" aria-hidden />
                  <dt className="sr-only">Order by</dt>
                  <dd>Pre-order by {menu.service.orderBy}</dd>
                </div>
                {mainItem && (
                  <div className="flex items-center gap-2.5">
                    <ChefHat className="size-4 text-gold-400" aria-hidden />
                    <dt className="sr-only">Price</dt>
                    <dd>
                      {mainItem.name} {formatINR(mainItem.price)} — {mainItem.detail}
                    </dd>
                  </div>
                )}
              </dl>
              <p className="mt-4 text-sm italic text-gold-300/90">{menu.portionsNote}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/order"
                  className="inline-flex h-12 items-center rounded-full bg-gold-500 px-7 text-sm font-semibold text-evergreen-950 transition-colors hover:bg-gold-400"
                >
                  Order Now
                </Link>
                <Link
                  href="/specials"
                  className="inline-flex h-12 items-center rounded-full border border-cream/30 px-7 text-sm font-medium text-cream transition-colors hover:border-gold-400 hover:text-gold-300"
                >
                  Full Details
                </Link>
              </div>
            </div>
          </Reveal>
          {menu.special.poster && (
            <Reveal delay={0.1}>
              <Image
                src={menu.special.poster}
                alt={menu.special.posterAlt}
                width={menu.special.posterWidth}
                height={menu.special.posterHeight}
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="w-full rounded-2xl border border-gold-500/25 shadow-card-hover"
              />
            </Reveal>
          )}
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────── */}
      <section aria-labelledby="how-heading" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <Reveal>
          <h2 id="how-heading" className="text-center font-display text-3xl font-semibold text-evergreen-900 sm:text-4xl">
            How it works
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-ink-soft">
            No apps to install, no accounts to create. Just the way a neighbourhood
            kitchen should work.
          </p>
        </Reveal>
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "See the week's menu",
              body: "One special per service, chosen from our shortlisted signature menu and announced with the weekly poster.",
            },
            {
              title: "Pre-order on WhatsApp",
              body: "Build your order here, tap once, and a ready-made WhatsApp message goes to Gayathri. Order before the weekly cut-off.",
            },
            {
              title: "Fresh to your door",
              body: "Cooked the same day in a small batch and delivered within JVT — or collect it warm from JVT-343.",
            },
          ].map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <li className="relative h-full rounded-2xl border border-evergreen-900/8 bg-cream-soft p-7 shadow-card">
                <span
                  aria-hidden
                  className="font-display text-5xl font-semibold text-gold-500/30"
                >
                  {i + 1}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold text-evergreen-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* ── Signature dishes ─────────────────────────────────── */}
      <section aria-labelledby="dishes-heading" className="bg-cream-deep/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 id="dishes-heading" className="font-display text-3xl font-semibold text-evergreen-900 sm:text-4xl">
                  From the signature menu
                </h2>
                <p className="mt-3 max-w-lg text-ink-soft">
                  The dishes we&rsquo;ve perfected at home — each weekend&rsquo;s
                  special is chosen from this list.
                </p>
              </div>
              <Link
                href="/menu"
                className="inline-flex h-11 items-center rounded-full border border-evergreen-300 px-6 text-sm font-medium text-evergreen-900 transition-colors hover:border-evergreen-600 hover:bg-evergreen-50"
              >
                See all {dishes.length} dishes
              </Link>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featured.map((dish, i) => (
              <Reveal key={dish.slug} delay={i * 0.08}>
                <DishCard dish={dish} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Community band ───────────────────────────────────── */}
      <section aria-labelledby="community-heading" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-evergreen-950 px-6 py-14 text-center text-cream sm:px-12">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage: "radial-gradient(rgba(214,180,122,0.9) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />
            <HandHeart className="relative mx-auto size-8 text-gold-400" aria-hidden strokeWidth={1.5} />
            <h2 id="community-heading" className="relative mx-auto mt-4 max-w-2xl font-display text-2xl font-medium leading-snug sm:text-3xl">
              &ldquo;Not a restaurant — a home kitchen. Every plate is cooked exactly
              as it would be for our own family.&rdquo;
            </h2>
            <p className="relative mt-4 text-sm uppercase tracking-[0.2em] text-gold-400">
              {site.founder} · Founder
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/order"
                className="inline-flex h-12 items-center rounded-full bg-gold-500 px-7 text-sm font-semibold text-evergreen-950 transition-colors hover:bg-gold-400"
              >
                Order This Week
              </Link>
              <a
                href={`https://wa.me/${menu.whatsapp.number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-cream/30 px-7 text-sm font-medium text-cream transition-colors hover:border-gold-400 hover:text-gold-300"
              >
                <MessageCircle className="size-4" aria-hidden />
                Say hello on WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
