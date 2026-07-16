import { Baby, CookingPot, Salad, Soup, UtensilsCrossed } from "lucide-react";
import type { Dish } from "@/data/dishes";
import { cn } from "@/lib/utils";

/**
 * Branded placeholder shown until a real dish photograph is added to
 * /public/assets/dishes/ (see that folder's README for specs). Deliberately
 * abstract — we never fake food photography.
 */
const categoryStyles: Record<
  Dish["category"],
  { icon: typeof Soup; classes: string }
> = {
  "Rice & One-Pot": { icon: CookingPot, classes: "from-evergreen-800 to-evergreen-950" },
  "Gravies & Curries": { icon: Soup, classes: "from-gold-600 to-terracotta-700" },
  "Dry Sautés": { icon: Salad, classes: "from-evergreen-700 to-evergreen-900" },
  "Street Classics": { icon: UtensilsCrossed, classes: "from-terracotta-500 to-terracotta-700" },
  "Kids' Corner": { icon: Baby, classes: "from-gold-500 to-gold-700" },
};

export function DishVisual({ dish, className }: { dish: Dish; className?: string }) {
  const { icon: Icon, classes } = categoryStyles[dish.category];
  return (
    <div
      aria-hidden
      className={cn(
        "flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br",
        classes,
        className,
      )}
    >
      {/* subtle dot texture */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: "radial-gradient(rgba(247,243,233,0.9) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />
      <Icon className="relative size-12 text-cream/85" strokeWidth={1.25} />
      <span className="relative px-6 text-center font-display text-sm italic text-cream/75">
        {dish.name}
      </span>
    </div>
  );
}
