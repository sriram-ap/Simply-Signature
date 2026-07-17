# Image Credits

All dish photographs are authentic, human-taken photos sourced from Wikimedia
Commons under free licences. No AI-generated, stock-watermarked or unlicensed
imagery is used anywhere on this site. Each photo below was cropped to 4:3,
resized to 1600×1200 and converted to WebP (quality 80) with
`scripts/optimize-dish-image.mjs`; the Paneer Butter Masala photo was also
brightened ~12%.

CC BY-SA licensed photographs are attributed here **and** on the dish's own
page. The modified (cropped/optimised) versions remain under their original
licences.

| File (public/assets/dishes/) | Dish | Source | Author | Licence |
| --- | --- | --- | --- | --- |
| `maharashtrian-misal.webp` | Maharashtrian Misal | [Kolhapuri Misal Pav](https://commons.wikimedia.org/wiki/File:Kolhapuri_Misal_Pav.jpg) | Ankushkr2020 | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |
| `buttered-pav.webp` | Buttered Pav | [Pav - Bun Maska](https://commons.wikimedia.org/wiki/File:Pav_-_Bun_Maska.jpg) | Mokshjuneja | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |
| `iyengar-puliyodarai-avial.webp` | Iyengar Puliyodarai with Avial | [Tamarind Rice (Puliyogare)](https://commons.wikimedia.org/wiki/File:Tamarind_Rice_(Puliyogare).jpg) | Talupu | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |
| `navaratna-kurma.webp` | Navaratna Kurma | [Navratan Korma (Mughal Kitchen)](https://commons.wikimedia.org/wiki/File:Navratan_Korma_(Mughal_Kitchen).JPG) | Miansari66 | [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/) |
| `paneer-butter-masala.webp` | Paneer Butter Masala | [Paneer butter masala 3](https://commons.wikimedia.org/wiki/File:Paneer_butter_masala_3.jpg) | Gannu03 | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |
| `kids-friendly-pasta.webp` | Kids' Friendly Pasta | [Penne Arrabbiata](https://commons.wikimedia.org/wiki/File:Penne_Arrabbiata.jpg) | Petar Milošević | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |
| `bisi-bele-bath.webp` | Bisi Bele Bath | [Bisi Bele Bath with Boondi](https://commons.wikimedia.org/wiki/File:Bisi_Bele_Bath_with_Boondi.jpg) | ManasaRao | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |
| `andhra-veg-biryani.webp` | Andhra Style Spicy Vegetable Biryani | [Vegetable Biryani IMG 001](https://commons.wikimedia.org/wiki/File:Vegetable_Biryani_IMG_001.jpg) | Phadke09 | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |

## Dishes still using the branded placeholder

No accurately representative, freely licensed photograph could be found for
these dishes — a wrong-dish photo would misrepresent the food, so they keep the
tasteful branded placeholder until we photograph our own plates:

- Thecha Bhaat (the only Commons "thecha" photo is watermarked raw ingredients)
- Maharashtrian Capsicum Shengdana Subzi
- Pepper Gobi Dry / Pepper Paneer Dry / Pepper Baby Corn Dry
- Usal Pav (available photos were low-resolution home snapshots)

**The best upgrade path:** photograph the real dishes from Gayathri's kitchen
(they're cooked fresh every weekend!) and run
`node scripts/optimize-dish-image.mjs <photo> <dish-slug>` — own photos need no
attribution and can replace the Commons images above too.
