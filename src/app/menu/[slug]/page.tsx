import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CookingPot,
  Flame,
  HandHeart,
  HeartPulse,
  Leaf,
  UtensilsCrossed,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { DishVisual } from "@/components/dish-visual";
import { Reveal } from "@/components/reveal";
import { dishes, getDish } from "@/data/dishes";
import { site } from "@/lib/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return dishes.map((dish) => ({ slug: dish.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const dish = getDish(slug);
  if (!dish) return {};
  return {
    title: dish.name,
    description: dish.description,
    alternates: { canonical: `/menu/${dish.slug}` },
  };
}

export default async function DishPage({ params }: Props) {
  const { slug } = await params;
  const dish = getDish(slug);
  if (!dish) notFound();

  const loveTrio = [
    { icon: HandHeart, title: "Why it's homely", body: dish.whyHomely },
    { icon: HeartPulse, title: "Why it's healthy", body: dish.whyHealthy },
    { icon: Leaf, title: "Easy on digestion", body: dish.whyEasyOnDigestion },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MenuItem",
    name: dish.name,
    description: dish.description,
    url: `${site.url}/menu/${dish.slug}`,
    suitableForDiet: "https://schema.org/VegetarianDiet",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 md:py-14">
        <Link
          href="/menu"
          className="inline-flex items-center gap-2 text-sm font-medium text-evergreen-800 transition-colors hover:text-terracotta-600"
        >
          <ArrowLeft className="size-4" aria-hidden />
          Back to the menu
        </Link>

        <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-evergreen-900/10 shadow-card lg:sticky lg:top-24 lg:self-start">
            {dish.image ? (
              <Image
                src={dish.image}
                alt={dish.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            ) : (
              <DishVisual dish={dish} />
            )}
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="cream">{dish.category}</Badge>
              <Badge variant={dish.spiceLevel === "Hot" || dish.spiceLevel === "Medium–Hot" ? "terracotta" : "gold"}>
                <Flame className="size-3" aria-hidden />
                {dish.spiceLevel}
              </Badge>
            </div>
            <h1 className="mt-4 font-display text-3xl font-semibold leading-tight text-evergreen-900 sm:text-4xl">
              {dish.name}
            </h1>
            <p className="mt-2 text-sm font-medium uppercase tracking-[0.14em] text-gold-700">
              {dish.origin}
            </p>
            <p className="mt-5 text-lg leading-relaxed text-ink">{dish.description}</p>

            <section aria-labelledby="ingredients-heading" className="mt-8">
              <h2 id="ingredients-heading" className="flex items-center gap-2 font-display text-xl font-semibold text-evergreen-900">
                <Leaf className="size-5 text-gold-600" aria-hidden />
                What goes in
              </h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {dish.ingredients.map((ing) => (
                  <li
                    key={ing}
                    className="rounded-full border border-evergreen-900/10 bg-white px-3.5 py-1.5 text-sm text-ink"
                  >
                    {ing}
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="technique-heading" className="mt-8">
              <h2 id="technique-heading" className="flex items-center gap-2 font-display text-xl font-semibold text-evergreen-900">
                <CookingPot className="size-5 text-gold-600" aria-hidden />
                How we cook it
              </h2>
              <p className="mt-3 leading-relaxed text-ink-soft">{dish.technique}</p>
            </section>

            <section aria-labelledby="serve-heading" className="mt-8">
              <h2 id="serve-heading" className="flex items-center gap-2 font-display text-xl font-semibold text-evergreen-900">
                <UtensilsCrossed className="size-5 text-gold-600" aria-hidden />
                Best served with
              </h2>
              <p className="mt-3 leading-relaxed text-ink-soft">{dish.bestServedWith}</p>
            </section>
          </div>
        </div>

        <section aria-label="Why you'll love it" className="mt-14 grid gap-6 md:grid-cols-3">
          {loveTrio.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.07}>
              <div className="flex h-full flex-col gap-3 rounded-2xl border border-evergreen-900/8 bg-cream-soft p-7 shadow-card">
                <item.icon className="size-6 text-gold-600" aria-hidden strokeWidth={1.5} />
                <h2 className="font-display text-lg font-semibold text-evergreen-900">
                  {item.title}
                </h2>
                <p className="text-sm leading-relaxed text-ink-soft">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </section>

        <Reveal>
          <div className="mt-14 rounded-3xl bg-evergreen-900 px-6 py-10 text-center text-cream sm:px-10">
            <h2 className="font-display text-2xl font-semibold">
              Want {dish.name} on an upcoming weekend?
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-cream/75">
              Specials are picked by neighbourly demand — a WhatsApp nudge works
              wonders.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href={`https://wa.me/${site.contact.whatsappPrimary.number}?text=${encodeURIComponent(
                  `Hello ${site.founder}! Could you please make "${dish.name}" one of the upcoming weekend specials at Simply Signature? 🙏`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center rounded-full bg-gold-500 px-7 text-sm font-semibold text-evergreen-950 transition-colors hover:bg-gold-400"
              >
                Request this dish
              </a>
              <Link
                href="/specials"
                className="inline-flex h-12 items-center rounded-full border border-cream/30 px-7 text-sm font-medium text-cream transition-colors hover:border-gold-400 hover:text-gold-300"
              >
                See this week&rsquo;s special
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </>
  );
}
