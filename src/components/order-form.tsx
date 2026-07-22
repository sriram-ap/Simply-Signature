"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  Bike,
  CalendarDays,
  Clock,
  Minus,
  MessageCircle,
  Plus,
  ShoppingBag,
} from "lucide-react";
import type { ComboTier, MenuItem, WeeklyMenu } from "@/lib/menu";
import { Badge } from "@/components/ui/badge";
import { cn, formatINR } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CopyButton } from "@/components/copy-button";

type Fulfilment = "Delivery" | "Takeaway";

interface FormState {
  name: string;
  mobile: string;
  flat: string;
  remarks: string;
}

export function OrderForm({
  menu,
  deliveryLabel,
}: {
  menu: WeeklyMenu;
  deliveryLabel: string;
}) {
  const [qty, setQty] = useState<Record<string, number>>({});
  const [comboQty, setComboQty] = useState<Record<string, number>>({});
  const [fulfilment, setFulfilment] = useState<Fulfilment>("Delivery");
  const [form, setForm] = useState<FormState>({ name: "", mobile: "", flat: "", remarks: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState | "items", string>>>({});

  const combos = useMemo(() => menu.combos?.tiers ?? [], [menu.combos]);
  const mains = menu.items.filter((i) => i.kind === "main");
  const addons = menu.items.filter((i) => i.kind === "addon");

  const lines = useMemo(
    () =>
      menu.items
        .map((item) => ({ item, count: qty[item.id] ?? 0 }))
        .filter((l) => l.count > 0),
    [menu.items, qty],
  );
  const comboLines = useMemo(
    () =>
      combos
        .map((combo) => ({ combo, count: comboQty[combo.id] ?? 0 }))
        .filter((l) => l.count > 0),
    [combos, comboQty],
  );
  const itemsTotal = lines.reduce((sum, l) => sum + l.item.price * l.count, 0);
  const combosTotal = comboLines.reduce((sum, l) => sum + l.combo.price * l.count, 0);
  const total = itemsTotal + combosTotal;

  function change(item: MenuItem, delta: number) {
    setQty((q) => {
      const next = Math.max(0, (q[item.id] ?? 0) + delta);
      const capped = item.maxQty ? Math.min(item.maxQty, next) : next;
      return { ...q, [item.id]: capped };
    });
    setErrors((e) => ({ ...e, items: undefined }));
  }

  function changeCombo(combo: ComboTier, delta: number) {
    setComboQty((q) => ({ ...q, [combo.id]: Math.max(0, (q[combo.id] ?? 0) + delta) }));
    setErrors((e) => ({ ...e, items: undefined }));
  }

  function set<K extends keyof FormState>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate(): boolean {
    const next: typeof errors = {};
    if (total === 0) next.items = "Please add at least one combo or item to your order.";
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!/^[6-9]\d{9}$/.test(form.mobile.trim()))
      next.mobile = "Please enter a valid 10-digit mobile number.";
    if (!form.flat.trim()) next.flat = "Please enter your block / flat number.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function buildMessage(): string {
    const comboMsgLines = comboLines.map(
      (l) => `• ${l.combo.name} (${l.combo.serves}) × ${l.count} — ${formatINR(l.combo.price * l.count)}`,
    );
    const itemMsgLines = lines.map(
      (l) => `• ${l.item.name} × ${l.count} — ${formatINR(l.item.price * l.count)}`,
    );
    const itemLines = [...comboMsgLines, ...itemMsgLines].join("\n");
    return [
      `Hello ${menu.whatsapp.contactName}! I'd like to place an order with Simply Signature. 🌿`,
      "",
      `*${menu.service.day} ${menu.service.meal} — ${deliveryLabel}*`,
      `${menu.special.name}`,
      "",
      "*Order*",
      itemLines,
      "",
      `*Total: ${formatINR(total)}*`,
      "",
      `Name: ${form.name.trim()}`,
      `Mobile: ${form.mobile.trim()}`,
      `${menu.community.flatLabel}: ${form.flat.trim()} (${menu.community.name})`,
      `Fulfilment: ${fulfilment}`,
      form.remarks.trim() ? `Remarks: ${form.remarks.trim()}` : null,
      "",
      "Thank you!",
    ]
      .filter((line): line is string => line !== null)
      .join("\n");
  }

  function orderOnWhatsApp() {
    if (!validate()) {
      document.getElementById("order-errors")?.focus();
      return;
    }
    const url = `https://wa.me/${menu.whatsapp.number}?text=${encodeURIComponent(buildMessage())}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const hasErrors = Object.values(errors).some(Boolean);

  if (!menu.orderingOpen) {
    return (
      <Card className="mx-auto max-w-xl text-center">
        <CardHeader>
          <CardTitle className="text-2xl">Orders are closed for this week</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-ink-soft">
            We cook in small batches, and this week&rsquo;s portions are spoken for. Message{" "}
            {menu.whatsapp.contactName} on WhatsApp to hear about next week&rsquo;s menu first.
          </p>
          <a
            href={`https://wa.me/${menu.whatsapp.number}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-[#128c4b] px-6 text-sm font-medium text-white hover:bg-[#0f7a41]"
          >
            <MessageCircle className="size-4" aria-hidden />
            Message on WhatsApp
          </a>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
      {/* Left column — build the order */}
      <div className="space-y-8">
        <section aria-labelledby="choose-items">
          <h2 id="choose-items" className="mb-1 font-display text-2xl font-semibold text-evergreen-900">
            1 · Choose your items
          </h2>
          <p className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink-soft">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="size-4 text-gold-600" aria-hidden />
              {deliveryLabel}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-4 text-gold-600" aria-hidden />
              {menu.service.deliveryWindow}
            </span>
          </p>

          {combos.length > 0 && (
            <>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-terracotta-700">
                Mexican Combos
              </h3>
              {menu.combos?.note && (
                <p className="mb-3 text-xs leading-relaxed text-ink-soft">{menu.combos.note}</p>
              )}
              <div className="space-y-3">
                {combos.map((combo) => (
                  <ComboRow
                    key={combo.id}
                    combo={combo}
                    count={comboQty[combo.id] ?? 0}
                    onChange={changeCombo}
                  />
                ))}
              </div>
            </>
          )}

          <div className="space-y-3">
            {mains.map((item) => (
              <ItemRow key={item.id} item={item} count={qty[item.id] ?? 0} onChange={change} featured />
            ))}
          </div>

          {addons.length > 0 && (
            <>
              <h3 className="mb-3 mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-gold-700">
                À la carte
              </h3>
              <div className="space-y-3">
                {addons.map((item) => (
                  <ItemRow key={item.id} item={item} count={qty[item.id] ?? 0} onChange={change} />
                ))}
              </div>
            </>
          )}
          {errors.items && (
            <p role="alert" className="mt-3 text-sm font-medium text-terracotta-600">
              {errors.items}
            </p>
          )}
        </section>

        <section aria-labelledby="your-details" className="space-y-4">
          <h2 id="your-details" className="font-display text-2xl font-semibold text-evergreen-900">
            2 · Your details
          </h2>

          <fieldset>
            <legend className="mb-2 text-sm font-medium text-evergreen-900">
              Delivery or takeaway?
            </legend>
            <div className="grid grid-cols-2 gap-3">
              {(
                [
                  { value: "Delivery", icon: Bike, hint: `Within ${menu.community.name}` },
                  { value: "Takeaway", icon: ShoppingBag, hint: "Collect from JVT-343" },
                ] as const
              ).map(({ value, icon: Icon, hint }) => (
                <label
                  key={value}
                  className={cn(
                    "flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-gold-500",
                    fulfilment === value
                      ? "border-evergreen-700 bg-evergreen-900 text-cream"
                      : "border-evergreen-900/15 bg-white text-ink hover:border-evergreen-400",
                  )}
                >
                  <input
                    type="radio"
                    name="fulfilment"
                    value={value}
                    checked={fulfilment === value}
                    onChange={() => setFulfilment(value)}
                    className="sr-only"
                  />
                  <Icon
                    className={cn("size-5 shrink-0", fulfilment === value ? "text-gold-400" : "text-evergreen-600")}
                    aria-hidden
                  />
                  <span className="flex flex-col">
                    <span className="text-sm font-semibold">{value}</span>
                    <span className={cn("text-xs", fulfilment === value ? "text-cream/70" : "text-ink-soft")}>
                      {hint}
                    </span>
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="name">Full name *</Label>
              <Input
                id="name"
                autoComplete="name"
                value={form.name}
                onChange={(e) => set("name", e.target.value)}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                placeholder="Your name"
              />
              {errors.name && (
                <p id="name-error" role="alert" className="text-xs font-medium text-terracotta-600">
                  {errors.name}
                </p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="mobile">Mobile number *</Label>
              <Input
                id="mobile"
                type="tel"
                inputMode="numeric"
                autoComplete="tel-national"
                maxLength={10}
                value={form.mobile}
                onChange={(e) => set("mobile", e.target.value.replace(/\D/g, ""))}
                aria-invalid={!!errors.mobile}
                aria-describedby={errors.mobile ? "mobile-error" : undefined}
                placeholder="10-digit mobile"
              />
              {errors.mobile && (
                <p id="mobile-error" role="alert" className="text-xs font-medium text-terracotta-600">
                  {errors.mobile}
                </p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="apartment">Apartment / Community</Label>
              <Input id="apartment" value={menu.community.name} readOnly aria-readonly />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="flat">{menu.community.flatLabel} *</Label>
              <Input
                id="flat"
                value={form.flat}
                onChange={(e) => set("flat", e.target.value)}
                aria-invalid={!!errors.flat}
                aria-describedby={errors.flat ? "flat-error" : undefined}
                placeholder="e.g. B-1203"
              />
              {errors.flat && (
                <p id="flat-error" role="alert" className="text-xs font-medium text-terracotta-600">
                  {errors.flat}
                </p>
              )}
            </div>
            <div className="space-y-1.5 sm:col-span-2">
              <Label htmlFor="remarks">Remarks (optional)</Label>
              <Textarea
                id="remarks"
                value={form.remarks}
                onChange={(e) => set("remarks", e.target.value)}
                placeholder="Less spice, no nuts, deliver after 1 PM…"
              />
            </div>
          </div>
        </section>
      </div>

      {/* Right column — live summary */}
      <aside aria-labelledby="order-summary" className="lg:sticky lg:top-24 lg:self-start">
        <Card>
          <CardHeader>
            <CardTitle id="order-summary" className="text-xl">
              Order summary
            </CardTitle>
            <p className="text-xs text-ink-soft">
              {menu.service.day} {menu.service.meal} · order by {menu.service.orderBy}
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            {comboLines.length === 0 && lines.length === 0 ? (
              <p className="rounded-xl bg-cream-deep/60 p-4 text-sm text-ink-soft">
                Nothing here yet — add the{" "}
                {combos.find((c) => c.recommended)?.name ?? mains[0]?.name ?? "Simply Signature Meal"} to
                begin.
              </p>
            ) : (
              <ul className="space-y-2.5">
                {comboLines.map((l) => (
                  <li key={l.combo.id} className="flex items-baseline justify-between gap-3 text-sm">
                    <span className="text-ink">
                      {l.combo.name} <span className="text-ink-soft">× {l.count}</span>
                    </span>
                    <span className="font-semibold text-evergreen-900 tabular-nums">
                      {formatINR(l.combo.price * l.count)}
                    </span>
                  </li>
                ))}
                {lines.map((l) => (
                  <li key={l.item.id} className="flex items-baseline justify-between gap-3 text-sm">
                    <span className="text-ink">
                      {l.item.name} <span className="text-ink-soft">× {l.count}</span>
                    </span>
                    <span className="font-semibold text-evergreen-900 tabular-nums">
                      {formatINR(l.item.price * l.count)}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            <div className="flex items-baseline justify-between border-t border-dashed border-evergreen-900/20 pt-4">
              <span className="text-sm font-semibold uppercase tracking-wide text-evergreen-900">
                Grand total
              </span>
              <span className="font-display text-3xl font-semibold text-evergreen-900 tabular-nums">
                {formatINR(total)}
              </span>
            </div>

            <div
              id="order-errors"
              tabIndex={-1}
              aria-live="polite"
              className={cn("text-sm font-medium text-terracotta-600", !hasErrors && "sr-only")}
            >
              {hasErrors ? "Please fix the highlighted fields above." : ""}
            </div>

            <Button variant="whatsapp" size="lg" className="w-full" onClick={orderOnWhatsApp}>
              <MessageCircle className="size-5" aria-hidden />
              Order on WhatsApp
            </Button>
            <CopyButton
              text={buildMessage()}
              label="Copy order message"
              className="w-full"
            />
            <p className="text-center text-xs leading-relaxed text-ink-soft">
              Your order opens as a pre-filled WhatsApp message to{" "}
              {menu.whatsapp.contactName} ({menu.whatsapp.display}). Nothing is sent
              until you press send — and no details are stored by this website.
            </p>
          </CardContent>
        </Card>
      </aside>
    </div>
  );
}

function ComboRow({
  combo,
  count,
  onChange,
}: {
  combo: ComboTier;
  count: number;
  onChange: (combo: ComboTier, delta: number) => void;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-4 rounded-xl border p-4 transition-colors",
        combo.recommended ? "border-terracotta-500/50 bg-terracotta-500/8" : "border-evergreen-900/10 bg-white",
        count > 0 && "border-evergreen-700",
      )}
    >
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <p className="font-semibold text-evergreen-900">
            {combo.name} <span className="ml-1 text-gold-700">{formatINR(combo.price)}</span>
          </p>
          {combo.recommended && <Badge variant="terracotta">Recommended</Badge>}
          {combo.savings ? <Badge variant="gold">Save {formatINR(combo.savings)}</Badge> : null}
        </div>
        <p className="mt-0.5 text-xs leading-relaxed text-ink-soft">
          {combo.serves} · {combo.detail}
        </p>
      </div>
      <div className="flex shrink-0 items-center gap-1" role="group" aria-label={`${combo.name} quantity`}>
        <button
          type="button"
          onClick={() => onChange(combo, -1)}
          disabled={count === 0}
          aria-label={`Decrease ${combo.name}`}
          className="inline-flex size-9 items-center justify-center rounded-full border border-evergreen-900/15 bg-white text-evergreen-900 transition-colors hover:border-evergreen-600 disabled:opacity-35 disabled:hover:border-evergreen-900/15"
        >
          <Minus className="size-4" aria-hidden />
        </button>
        <span className="w-8 text-center text-base font-semibold text-evergreen-900 tabular-nums" aria-live="polite">
          {count}
        </span>
        <button
          type="button"
          onClick={() => onChange(combo, +1)}
          aria-label={`Increase ${combo.name}`}
          className="inline-flex size-9 items-center justify-center rounded-full bg-evergreen-900 text-cream transition-colors hover:bg-evergreen-800"
        >
          <Plus className="size-4" aria-hidden />
        </button>
      </div>
    </div>
  );
}

function ItemRow({
  item,
  count,
  onChange,
  featured = false,
}: {
  item: MenuItem;
  count: number;
  onChange: (item: MenuItem, delta: number) => void;
  featured?: boolean;
}) {
  const atMax = item.maxQty !== undefined && count >= item.maxQty;
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-4 rounded-xl border p-4 transition-colors",
        featured
          ? "border-gold-500/40 bg-gold-500/8"
          : "border-evergreen-900/10 bg-white",
        count > 0 && "border-evergreen-700",
      )}
    >
      <div className="flex min-w-0 items-center gap-3.5">
        {item.image && (
          <Image
            src={item.image}
            alt=""
            width={112}
            height={84}
            sizes="56px"
            className="hidden h-14 w-[74px] shrink-0 rounded-lg object-cover sm:block"
          />
        )}
        <div className="min-w-0">
          <p className="font-semibold text-evergreen-900">
            {item.name} <span className="ml-1 text-gold-700">{formatINR(item.price)}</span>
          </p>
          <p className="mt-0.5 text-xs leading-relaxed text-ink-soft">{item.detail}</p>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-1" role="group" aria-label={`${item.name} quantity`}>
        <button
          type="button"
          onClick={() => onChange(item, -1)}
          disabled={count === 0}
          aria-label={`Decrease ${item.name}`}
          className="inline-flex size-9 items-center justify-center rounded-full border border-evergreen-900/15 bg-white text-evergreen-900 transition-colors hover:border-evergreen-600 disabled:opacity-35 disabled:hover:border-evergreen-900/15"
        >
          <Minus className="size-4" aria-hidden />
        </button>
        <span className="w-8 text-center text-base font-semibold text-evergreen-900 tabular-nums" aria-live="polite">
          {count}
        </span>
        <button
          type="button"
          onClick={() => onChange(item, +1)}
          disabled={atMax}
          aria-label={`Increase ${item.name}`}
          className="inline-flex size-9 items-center justify-center rounded-full bg-evergreen-900 text-cream transition-colors hover:bg-evergreen-800 disabled:opacity-35"
        >
          <Plus className="size-4" aria-hidden />
        </button>
      </div>
    </div>
  );
}
