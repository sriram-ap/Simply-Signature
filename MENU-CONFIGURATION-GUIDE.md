# Menu Configuration Guide

Complete reference for `config/menu.json` — the single file that controls the weekly menu, the order page, pricing, WhatsApp routing and the MyGate announcement.

The file is validated at build time: if a required field is missing or malformed, the deployment fails (the live site keeps the previous good version).

---

## Top level

| Field | Type | Purpose |
| --- | --- | --- |
| `orderingOpen` | boolean | `false` = order page shows a polite "orders closed" card. Everything else stays live. |
| `service` | object | When food is delivered and when orders close. |
| `special` | object | The week's dish and its poster. |
| `portionsNote` | string | Scarcity note, e.g. "only 10 portions this week". Shown on home, specials and order pages. |
| `items` | array | The orderable line items (see below). |
| `whatsapp` | object | Where orders are sent. |
| `community` | object | Community name + flat-number field label. |
| `mygateMessage` | string | The copyable announcement on `/specials`. Use `\n` for line breaks. |

## `service`

```json
"service": {
  "day": "Saturday",                        // Weekday name, shown as "This Saturday"
  "meal": "Lunch",                          // Lunch / Dinner
  "deliveryDate": "2026-07-18",             // ISO date — used to render the long date
  "deliveryWindow": "12:30 PM – 1:30 PM IST",
  "orderBy": "Friday, 17 July 2026 · 9:00 PM IST"   // Free text, shown verbatim
}
```

## `special`

```json
"special": {
  "name": "Thecha Bhaat + Maharashtrian Misal",                  // Full headline
  "shortName": "Thecha Bhaat & Misal Combo",                     // Compact contexts
  "tagline": "Premium Vegetarian • Home Cooked",                 // OPTIONAL promo line
  "description": "One appetising sentence.",
  "poster": "/assets/posters/2026-07-18-thecha-bhaat-misal.png", // Path under public/
  "posterAlt": "Describe the poster for screen readers & SEO",
  "posterWidth": 1080,                                           // Pixel dimensions of
  "posterHeight": 2350                                           // the poster file
}
```

- The poster file must exist in `public/assets/posters/` **before** you reference it.
- Width/height must match the actual image (Windows: right-click → Properties → Details) so the page reserves the right space and never jumps while loading.
- Set `poster` to `""` to hide poster imagery for a week (the pages fall back to text-only layouts).

## `items`

Each entry is one row on the order page:

```json
{
  "id": "main-set",            // Unique, stable, kebab-case. Never reuse across different products.
  "name": "Main Set",          // Shown in bold + in the WhatsApp message
  "detail": "Thecha Bhaat + Maharashtrian Misal + 2 Pav",
  "price": 300,                // Whole rupees, no symbol
  "kind": "main",              // "main" = featured first · "addon" = listed under Add-ons
  "maxQty": 1                  // OPTIONAL per-order cap (omit for unlimited)
}
```

Rules:

- At least one `"kind": "main"` item should exist.
- `maxQty` is enforced in the UI (the + button disables at the cap).
- You can have any number of items; the order summary and totals adapt automatically.

## `whatsapp`

```json
"whatsapp": {
  "number": "919765844659",      // Digits only, with country code, no +
  "display": "+91 97658 44659",  // Human-readable
  "contactName": "Gayathri"      // Used in the message greeting
}
```

## `community`

```json
"community": {
  "name": "Jal Vayu Towers (JVT)",   // Shown read-only on the order form
  "flatLabel": "Block / Flat No"     // Label for the flat field
}
```

## `mygateMessage`

Plain text with `\n` escapes for new lines. Keep it under ~1000 characters so MyGate doesn't truncate it. Emojis are fine.

---

## Related config files

### `config/gallery.json`

Array of poster archive entries, newest first: `src`, `alt`, `caption`, `date`, `width`, `height`. Powers `/gallery`.

### `config/reviews.json`

Array of neighbour reviews: `name`, `flat`, `date`, `rating` (1–5), `text`. Powers `/reviews`. An empty array `[]` shows a tasteful "we're just getting started" card — never fake a review.

---

## Validating before you push

```bash
npm run build
```

If the build passes locally, the deploy will pass. A JSON syntax error fails fast with the offending line number. (Or paste the JSON into https://jsonlint.com.)
