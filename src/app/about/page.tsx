import type { Metadata } from "next";
import Link from "next/link";
import { CookingPot, Flame, HandHeart, Leaf, Scale, Wheat } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Simply Signature began on 12 June 2026 — not as a commercial restaurant, but from a conviction that families deserve authentic homemade vegetarian food prepared with care.",
  alternates: { canonical: "/about" },
};

const pillars = [
  {
    icon: Leaf,
    title: "Fresh ingredients",
    body: "Vegetables bought for the batch, not the month. Spices ground in small quantities so they never go stale.",
  },
  {
    icon: Flame,
    title: "Traditional cooking",
    body: "Slow-roasted masalas, hand-pounded thecha, dum-sealed biryani — the techniques our recipes were born with.",
  },
  {
    icon: CookingPot,
    title: "Small batches",
    body: "Five to ten portions per service. Enough to share, small enough that nothing is ever bulk-cooked or reheated.",
  },
  {
    icon: HandHeart,
    title: "Home style",
    body: "No commercial kitchens, no shortcuts, no flavour sachets. If we wouldn't serve it at our own table, we don't serve it at yours.",
  },
  {
    icon: Scale,
    title: "Balanced spices",
    body: "Rich in flavour, measured in heat. Spice is used for aroma and depth first — chilli is a choice, never a default.",
  },
  {
    icon: Wheat,
    title: "Light on the stomach",
    body: "Meals that end with comfort, not heaviness — gentle oils, probiotic sides, and digestion-friendly tempering.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-evergreen-950 text-cream">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-400">
            Our Story
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            It started with a conviction,
            <br />
            <em className="font-light italic text-gold-300">not a business plan.</em>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-20">
        <Reveal>
          <div className="space-y-6 text-lg leading-relaxed text-ink">
            <p>
              <strong className="font-semibold text-evergreen-900">
                Simply Signature began on {site.established}.
              </strong>{" "}
              Not as a commercial restaurant — there was no franchise deck, no cloud
              kitchen, no investor pitch. There was a home kitchen at{" "}
              {site.location.unit}, {site.location.community}, and a conviction:
              families deserve authentic, homemade vegetarian food prepared with
              genuine care.
            </p>
            <p>
              So {site.founder} started cooking for neighbours the way she cooks for
              her own family. One thoughtfully chosen dish per weekend service.
              Ingredients bought fresh for that batch. Masalas roasted and ground the
              same morning. Portions capped at what one pair of careful hands can cook
              beautifully — usually five to ten.
            </p>
            <p>
              The first weekend, two families at JVT ordered. They came back. Then
              their neighbours did. That&rsquo;s the whole growth story, and we like
              it that way — a community home kitchen, growing at the pace of trust.
            </p>
            <p className="border-l-2 border-gold-500 pl-5 font-display text-xl italic text-evergreen-800">
              Every plate is prepared exactly as it would be for our own family —
              because until it leaves the kitchen, it is.
            </p>
          </div>
        </Reveal>
      </section>

      <section aria-labelledby="pillars-heading" className="bg-cream-deep/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
          <Reveal>
            <h2 id="pillars-heading" className="text-center font-display text-3xl font-semibold text-evergreen-900 sm:text-4xl">
              What we will never compromise
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.06}>
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-evergreen-900/8 bg-cream-soft p-7 shadow-card">
                  <pillar.icon className="size-6 text-gold-600" aria-hidden strokeWidth={1.5} />
                  <h3 className="font-display text-xl font-semibold text-evergreen-900">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-soft">{pillar.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 md:py-20">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-evergreen-900">
            Taste the difference this weekend
          </h2>
          <p className="mx-auto mt-3 max-w-md text-ink-soft">
            One menu. Limited portions. Cooked the day you eat it.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/specials"
              className="inline-flex h-12 items-center rounded-full bg-evergreen-900 px-7 text-sm font-semibold text-cream transition-colors hover:bg-evergreen-800"
            >
              See This Week&rsquo;s Special
            </Link>
            <Link
              href="/menu"
              className="inline-flex h-12 items-center rounded-full border border-evergreen-300 px-7 text-sm font-medium text-evergreen-900 transition-colors hover:border-evergreen-600 hover:bg-evergreen-50"
            >
              Explore the Menu
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
