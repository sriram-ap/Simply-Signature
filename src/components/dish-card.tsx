import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Flame } from "lucide-react";
import type { Dish } from "@/data/dishes";
import { Badge } from "@/components/ui/badge";
import { DishVisual } from "@/components/dish-visual";

function spiceVariant(level: Dish["spiceLevel"]) {
  return level === "Hot" || level === "Medium–Hot" ? "terracotta" : "gold";
}

export function DishCard({ dish }: { dish: Dish }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-evergreen-900/8 bg-cream-soft shadow-card transition-shadow duration-300 hover:shadow-card-hover">
      <div className="relative aspect-[4/3] overflow-hidden">
        {dish.image ? (
          <Image
            src={dish.image}
            alt={dish.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <DishVisual dish={dish} />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="cream">{dish.category}</Badge>
          <Badge variant={spiceVariant(dish.spiceLevel)}>
            <Flame className="size-3" aria-hidden />
            {dish.spiceLevel}
          </Badge>
        </div>
        <h3 className="font-display text-xl font-semibold leading-snug text-evergreen-900">
          <Link
            href={`/menu/${dish.slug}`}
            className="after:absolute after:inset-0 after:content-['']"
          >
            {dish.name}
          </Link>
        </h3>
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-gold-700">
          {dish.origin}
        </p>
        <p className="line-clamp-3 text-sm leading-relaxed text-ink-soft">{dish.description}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-evergreen-800 transition-colors group-hover:text-terracotta-600">
          Read the story
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
        </span>
      </div>
    </article>
  );
}
