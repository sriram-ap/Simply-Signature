# Simply Signature

**Premium Vegetarian • From Gayathri's Kitchen** — the production website for a community home kitchen at Jal Vayu Towers, established 12 June 2026.

Live site: **https://simplysignature.in**

![100% Vegetarian](https://img.shields.io/badge/100%25-Vegetarian-1c3a2c) ![Next.js](https://img.shields.io/badge/Next.js-16-black) ![Tailwind](https://img.shields.io/badge/TailwindCSS-4-38bdf8)

---

## What this site does

- Presents the weekly special (one curated menu per weekend service).
- Lets customers build an order and send it as a **pre-filled WhatsApp message** — no backend, no database, no login.
- Generates a copyable **MyGate-friendly announcement** for community posting.
- Showcases the 12-dish signature menu with full provenance (origin, ingredients, technique, spice level, digestion notes).
- Fully static: every page is pre-rendered at build time. The weekly menu lives in one JSON file.

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router, static prerendering, Turbopack) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 (design tokens in `src/app/globals.css`) |
| Animation | Framer Motion (reduced-motion aware) |
| Components | shadcn/ui-style primitives (`src/components/ui/`) |
| Icons | Lucide |
| Config | Static JSON in `/config` |
| Hosting | Vercel |

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
```

Quality gates (all must pass before pushing):

```bash
npm run typecheck  # TypeScript
npm run lint       # ESLint
npm run build      # Production build (also validates config JSON shape)
```

## Weekly update (the 5-minute admin workflow)

1. Drop the new poster into `public/assets/posters/` (e.g. `2026-07-26-usal-pav.png`).
2. Edit `config/menu.json` — dish name, items, prices, dates, poster path.
3. Optionally append the poster to `config/gallery.json` (archive page).
4. Commit & push:
   ```bash
   git add -A
   git commit -m "Menu: Usal Pav — 26 July 2026"
   git push
   ```
5. Vercel builds and deploys automatically (~1 minute).

Full details: **[WEEKLY-UPDATE-GUIDE.md](WEEKLY-UPDATE-GUIDE.md)** and **[MENU-CONFIGURATION-GUIDE.md](MENU-CONFIGURATION-GUIDE.md)**. No coding required.

## Repository map

```
config/                  ← Admin-editable JSON (menu, gallery, reviews)
public/assets/posters/   ← Weekly poster images
public/assets/dishes/    ← Real dish photos (optional, see folder README)
src/app/                 ← Routes (home, about, specials, menu, order, …)
src/components/          ← UI components (order form, cards, header, footer)
src/data/                ← Dish library & FAQ content (rarely changes)
src/lib/                 ← Types, config loaders, site constants
.github/workflows/       ← CI (typecheck + lint + build on every push)
```

Deeper dive: **[ARCHITECTURE.md](ARCHITECTURE.md)**.

## Deployment (Vercel)

1. Import the GitHub repo at [vercel.com/new](https://vercel.com/new) — Next.js is auto-detected; no settings needed.
2. Add the custom domain `simplysignature.in` under **Project → Settings → Domains** and point DNS as instructed (A record `76.76.21.21` or CNAME `cname.vercel-dns.com`).
3. Every push to `main` deploys automatically. Pull requests get preview URLs.

`vercel.json` adds security headers and long-cache headers for poster assets.

## Images policy

No AI-generated or stock food photography is used anywhere. Dish cards render a branded placeholder until a real photograph is added — see `public/assets/dishes/README.md` for specs and licensing rules.

## Contributing

See **[CONTRIBUTING.md](CONTRIBUTING.md)**.

---

Homemade with ♥ at JVT-343 · Thank you for supporting community home kitchens.
