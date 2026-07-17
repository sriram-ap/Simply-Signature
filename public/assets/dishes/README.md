# Dish photographs

Real photos of the signature dishes. Current images are freely licensed
photographs from Wikimedia Commons — sources, authors and licences are listed in
[/IMAGE-CREDITS.md](../../../IMAGE-CREDITS.md). Until an accurate photo exists
for a dish, the site shows a branded placeholder (gradient + icon) — **by
design, we never use stock-watermarked or AI-generated food imagery.**

## Adding a photo

1. Use your **own photograph**, or a **freely licensed photo** (CC0 / CC BY /
   CC BY-SA — record author, source URL and licence in IMAGE-CREDITS.md, and set
   `imageCredit` in `src/data/dishes.ts`). Never use watermarked, scraped or
   AI-generated images.
2. Run `node scripts/optimize-dish-image.mjs <photo> <dish-slug>` — it crops to
   4:3, resizes to 1600×1200 and writes an optimised `.webp` into this folder.
3. Name it after the dish slug from `src/data/dishes.ts`:

   | Dish | Filename |
   | --- | --- |
   | Iyengar Puliyodarai with Avial | `iyengar-puliyodarai-avial.webp` |
   | Navaratna Kurma | `navaratna-kurma.webp` |
   | Capsicum Shengdana Subzi | `capsicum-shengdana-subzi.webp` |
   | Pepper Gobi Dry | `pepper-gobi-dry.webp` |
   | Pepper Paneer Dry | `pepper-paneer-dry.webp` |
   | Pepper Baby Corn Dry | `pepper-baby-corn-dry.webp` |
   | Usal Pav | `usal-pav.webp` |
   | Maharashtrian Misal | `maharashtrian-misal.webp` |
   | Paneer Butter Masala | `paneer-butter-masala.webp` |
   | Thecha Bhaat | `thecha-bhaat.webp` |
   | Kids' Friendly Pasta | `kids-friendly-pasta.webp` |
   | Bisi Bele Bath | `bisi-bele-bath.webp` |
   | Andhra Veg Biryani | `andhra-veg-biryani.webp` |

4. In `src/data/dishes.ts`, set that dish's `image` field:

   ```ts
   image: "/assets/dishes/navaratna-kurma.jpg",
   ```

5. Commit and push. The card and the dish page switch from placeholder to photo
   automatically.
