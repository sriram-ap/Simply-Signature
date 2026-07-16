import type { Metadata } from "next";
import Link from "next/link";
import { DishCard } from "@/components/dish-card";
import { Reveal } from "@/components/reveal";
import { dishes, type Dish } from "@/data/dishes";

export const metadata: Metadata = {
  title: "Menu — 12 Signature Vegetarian Dishes",
  description:
    "The Simply Signature dish library: 12 homestyle vegetarian dishes from across India — from Iyengar Puliyodarai to Andhra-style biryani. Each weekend's special is chosen from this menu.",
  alternates: { canonical: "/menu" },
};

const categoryOrder: Dish["category"][] = [
  "Rice & One-Pot",
  "Gravies & Curries",
  "Dry Sautés",
  "Street Classics",
  "Kids' Corner",
];

export default function MenuPage() {
  return (
    <>
      <section className="bg-evergreen-950 text-cream">
        <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-400">
            The Signature Menu
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Twelve dishes,
            <em className="font-light italic text-gold-300"> perfected at home</em>
          </h1>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-cream/80">
            This is our shortlisted repertoire — dishes we&rsquo;ve cooked for years
            and trust completely. Every weekend, one is chosen as the special.{" "}
            <Link href="/specials" className="text-gold-300 underline decoration-gold-500/50 underline-offset-4 hover:text-gold-200">
              See what&rsquo;s cooking this week →
            </Link>
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-16">
        {categoryOrder.map((category) => {
          const group = dishes.filter((d) => d.category === category);
          if (group.length === 0) return null;
          return (
            <section key={category} aria-label={category} className="mb-16 last:mb-0">
              <Reveal>
                <div className="mb-8 flex items-center gap-4">
                  <h2 className="font-display text-2xl font-semibold text-evergreen-900 sm:text-3xl">
                    {category}
                  </h2>
                  <div className="h-px flex-1 bg-gradient-to-r from-gold-500/50 to-transparent" aria-hidden />
                </div>
              </Reveal>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {group.map((dish, i) => (
                  <Reveal key={dish.slug} delay={i * 0.06}>
                    <DishCard dish={dish} />
                  </Reveal>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <section className="mx-auto max-w-3xl px-4 pb-20 text-center sm:px-6">
        <Reveal>
          <div className="rounded-3xl bg-evergreen-900 px-6 py-12 text-cream sm:px-10">
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Have a favourite from this list?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-cream/75">
              Tell Gayathri on WhatsApp — weekly specials are often chosen by
              neighbourly demand.
            </p>
            <Link
              href="/order"
              className="mt-7 inline-flex h-12 items-center rounded-full bg-gold-500 px-8 text-sm font-semibold text-evergreen-950 transition-colors hover:bg-gold-400"
            >
              Order This Week&rsquo;s Special
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
