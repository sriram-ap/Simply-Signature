# Weekly Update Guide

*For Gayathri (or whoever is running the kitchen this week). No coding knowledge needed — you will edit one text file and copy one image.*

Total time: **about 5 minutes**.

---

## What you need

- The new week's **poster image** (PNG or JPG).
- The week's details: dish, prices, delivery date/time, order deadline.
- Git installed, and this repository cloned (one-time setup — ask any developer friend, or use the GitHub web interface entirely, see "No-Git option" below).

## Step 1 — Add the poster

Copy the poster file into:

```
public/assets/posters/
```

Name it with the date and dish so the archive stays tidy:

```
2026-07-26-usal-pav.png
```

## Step 2 — Edit `config/menu.json`

Open `config/menu.json` in any text editor (Notepad works). Update the values — a full field-by-field reference is in [MENU-CONFIGURATION-GUIDE.md](MENU-CONFIGURATION-GUIDE.md). The typical weekly edits:

| Field | Example |
| --- | --- |
| `service.deliveryDate` | `"2026-07-26"` |
| `service.deliveryWindow` | `"12:30 PM – 1:30 PM IST"` |
| `service.orderBy` | `"Saturday, 25 July 2026 · 9:00 PM IST"` |
| `special.name` | `"Usal Pav (Maharashtrian Style)"` |
| `special.description` | one appetising sentence |
| `special.poster` | `"/assets/posters/2026-07-26-usal-pav.png"` |
| `special.posterWidth` / `posterHeight` | the image's pixel size (right-click → Properties → Details) |
| `items` | names, details and prices for this week |
| `mygateMessage` | the announcement text for MyGate |

**Careful with JSON:** keep the double quotes, keep the commas between fields, no comma after the last field in a block. If unsure, paste the file into https://jsonlint.com to check.

To **pause ordering** (sold out / travelling): set `"orderingOpen": false`. The order page shows a graceful "orders closed" message.

## Step 3 — (Optional) Add the poster to the archive

Open `config/gallery.json` and add a new entry **at the top** of the list:

```json
{
  "src": "/assets/posters/2026-07-26-usal-pav.png",
  "alt": "Weekly poster: Usal Pav, Maharashtrian sprouted-bean curry with pav",
  "caption": "Usal Pav",
  "date": "Sunday, 26 July 2026",
  "width": 1080,
  "height": 2350
},
```

## Step 4 — Publish

In a terminal, from the repository folder:

```bash
git add -A
git commit -m "Menu: Usal Pav — 26 July 2026"
git push
```

Vercel notices the push and deploys automatically. The live site updates in about a minute. Done.

---

## No-Git option (GitHub website only)

1. Go to the repo on github.com → `public/assets/posters` → **Add file → Upload files** → upload the poster → Commit.
2. Go to `config/menu.json` → click the **pencil icon** → edit → **Commit changes**.
3. Vercel deploys automatically. That's it — the whole update can be done from a phone browser.

## Adding a customer review

Open `config/reviews.json` and add (with the neighbour's permission):

```json
{
  "name": "R. Sharma",
  "flat": "Tower B",
  "date": "July 2026",
  "rating": 5,
  "text": "The kurma tasted exactly like a home feast."
}
```

## Adding a real dish photo

See `public/assets/dishes/README.md`. Short version: add `<dish-slug>.jpg` (1200×900, your own photo or properly licensed), then set the `image` field for that dish in `src/data/dishes.ts` to `"/assets/dishes/<dish-slug>.jpg"`.

## If something breaks

- **The site didn't update** — check the Vercel dashboard; a red build usually means a typo in `menu.json` (missing quote or comma). Fix and push again.
- **Emergency rollback** — in Vercel → Deployments → previous green deployment → "…" → *Promote to Production*. Instant.
