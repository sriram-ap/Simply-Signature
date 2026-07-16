# Simply Signature — agent notes

Production website for a community home kitchen (fully static Next.js 16 + Tailwind v4, hosted on Vercel). Read `ARCHITECTURE.md` for the full picture.

## Commands

- `npm run dev` — dev server
- `npm run typecheck && npm run lint && npm run build` — the quality gate; all three must pass before any commit

## Hard rules

- **No backend.** No API routes, server actions, databases or trackers. Orders are WhatsApp deep links composed client-side.
- **Weekly content lives in `config/*.json`** (menu, gallery, reviews) and `public/assets/posters/` — never hardcode weekly details into components. The admin edits JSON only.
- **No AI-generated, stock, watermarked or unlicensed food imagery.** Dish cards use the branded `DishVisual` placeholder until a real, licensed photo is added (specs in `public/assets/dishes/README.md`).
- **Never fabricate reviews** in `config/reviews.json`.
- Brand tokens (evergreen/cream/gold/terracotta, Fraunces/Inter) are defined in `@theme` in `src/app/globals.css` — extend there, never inline hex values.
- Keep accessibility intact: landmarks, labels, focus-visible states, `prefers-reduced-motion` support.
