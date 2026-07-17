import type { Metadata } from "next";
import Image from "next/image";
import { OrderForm } from "@/components/order-form";
import { deliveryDateLabel, weeklyMenu } from "@/lib/menu";

export const metadata: Metadata = {
  title: "Order This Week",
  description: `Pre-order this week's Simply Signature special: ${weeklyMenu.special.name}. Order by ${weeklyMenu.service.orderBy} — limited portions, delivered fresh within Jal Vayu Towers.`,
  alternates: { canonical: "/order" },
};

export default function OrderPage() {
  const menu = weeklyMenu;
  const dateLabel = deliveryDateLabel(menu);

  return (
    <>
      <section className="bg-evergreen-950 text-cream">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
          <div
            className={
              menu.special.poster
                ? "grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]"
                : "max-w-3xl"
            }
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-400">
                {menu.service.day} {menu.service.meal} · {dateLabel}
              </p>
              <h1 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
                {menu.special.name}
              </h1>
              {menu.special.tagline && (
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
                  {menu.special.tagline}
                </p>
              )}
              <p className="mt-4 max-w-xl leading-relaxed text-cream/80">
                {menu.special.description}
              </p>
              <p className="mt-4 text-sm italic text-gold-300/90">{menu.portionsNote}</p>
            </div>
            {menu.special.poster && (
              <Image
                src={menu.special.poster}
                alt={menu.special.posterAlt}
                width={menu.special.posterWidth}
                height={menu.special.posterHeight}
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="w-full rounded-2xl border border-gold-500/25 shadow-card-hover"
              />
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <OrderForm menu={menu} deliveryLabel={dateLabel} />
      </section>
    </>
  );
}
