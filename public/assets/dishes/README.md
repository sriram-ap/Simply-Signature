# Dish photographs

Real photos of the 12 signature dishes. Until a photo exists for a dish, the site
shows a branded placeholder (gradient + icon) — **by design, we never use stock or
AI-generated food imagery.**

## Adding a photo

1. Use your **own photograph**, or a **royalty-free photo with a clear licence**
   (e.g. Unsplash/Pexels licence). Keep a note of the source and licence in this
   folder if it isn't your own shot. Never use watermarked, scraped or
   AI-generated images.
2. Crop to **4:3 landscape, 1200×900 px** (that's the card and detail-page ratio),
   JPG preferred, under ~300 KB.
3. Name it after the dish slug from `src/data/dishes.ts`:

   | Dish | Filename |
   | --- | --- |
   | Iyengar Puliyodarai with Avial | `iyengar-puliyodarai-avial.jpg` |
   | Navaratna Kurma | `navaratna-kurma.jpg` |
   | Capsicum Shengdana Subzi | `capsicum-shengdana-subzi.jpg` |
   | Pepper Gobi Dry | `pepper-gobi-dry.jpg` |
   | Pepper Paneer Dry | `pepper-paneer-dry.jpg` |
   | Pepper Baby Corn Dry | `pepper-baby-corn-dry.jpg` |
   | Usal Pav | `usal-pav.jpg` |
   | Paneer Butter Masala | `paneer-butter-masala.jpg` |
   | Thecha Bhaat | `thecha-rice.jpg` |
   | Kids' Friendly Pasta | `kids-friendly-pasta.jpg` |
   | Bisi Bele Bath | `bisi-bele-bath.jpg` |
   | Andhra Veg Biryani | `andhra-veg-biryani.jpg` |

4. In `src/data/dishes.ts`, set that dish's `image` field:

   ```ts
   image: "/assets/dishes/navaratna-kurma.jpg",
   ```

5. Commit and push. The card and the dish page switch from placeholder to photo
   automatically.
