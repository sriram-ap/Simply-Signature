# Contribution Guide

Thanks for helping a community home kitchen! This project values **low maintenance** above cleverness — please keep changes boring, typed and static.

## Ground rules

1. **No backend.** The site must remain fully static — no databases, no API routes, no server actions, no third-party trackers. The order flow is a WhatsApp deep link by design.
2. **Weekly content is config, not code.** Anything that changes weekly belongs in `config/*.json` or `public/assets/posters/`. If a PR makes the admin edit TypeScript for a routine update, it's the wrong shape.
3. **No fake imagery, no fake reviews.** Never add AI-generated or unlicensed food photos (see `public/assets/dishes/README.md`), and never seed `reviews.json` with invented testimonials.
4. **Accessibility is a feature.** Keep semantic landmarks, labels, focus states and `prefers-reduced-motion` support intact. New interactive elements need keyboard support and ARIA labelling.

## Workflow

```bash
git checkout -b feat/short-description
npm install
npm run dev
```

Before opening a PR, all three must pass:

```bash
npm run typecheck
npm run lint
npm run build
```

CI runs the same three checks on every push and PR (`.github/workflows/ci.yml`); Vercel attaches a preview deployment to the PR for visual review.

## Code style

- TypeScript strict; no `any` unless unavoidable and commented.
- Tailwind utilities over custom CSS; new colours/fonts go into `@theme` in `src/app/globals.css`, not inline hex values.
- Components follow the existing shadcn/ui-style pattern (`cva` variants + `cn()`); server components by default, `"use client"` only where interactivity demands it.
- Follow the file naming already in place: kebab-case files, one component per file.

## Commit messages

Short imperative subject, context in the body when useful:

```
Menu: Bisi Bele Bath — 2 Aug 2026
Fix: order form allowed 0-item WhatsApp send
Docs: clarify poster dimensions step
```

## Releases

`main` is production. Every merge to `main` auto-deploys via Vercel. Keep `main` green — if a deploy goes bad, promote the previous deployment in the Vercel dashboard and fix forward.
