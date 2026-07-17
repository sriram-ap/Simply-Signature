# Image Credits

All dish photographs are authentic, human-taken photos under licences that
permit commercial reuse — Pexels License (no attribution required, credited
anyway) and Wikimedia Commons free licences. No AI-generated, watermarked or
unlicensed imagery is used anywhere on this site. Images were selected
quality-first: every candidate was visually vetted and scored before use, and
several permissively-licensed but unappetising photos were rejected.

Each photo was cropped to 4:3, resized to 1600×1200 and converted to WebP
(quality 80) with `scripts/optimize-dish-image.mjs`. CC BY-SA photographs are
attributed here **and** on the dish's own page; modified versions remain under
their original licences.

| File (public/assets/dishes/) | Dish | Source | Author | Licence |
| --- | --- | --- | --- | --- |
| `maharashtrian-misal.webp` | Maharashtrian Misal | [Kolhapuri Misal Pav](https://commons.wikimedia.org/wiki/File:Kolhapuri_Misal_Pav.jpg) (Wikimedia) | Ankushkr2020 | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |
| `buttered-pav.webp` | Buttered Pav | [Pexels #166653](https://www.pexels.com/photo/166653/) | Digitalbuggu | [Pexels License](https://www.pexels.com/license/) |
| `iyengar-puliyodarai-avial.webp` | Iyengar Puliyodarai with Avial | [Tamarind Rice (Puliyogare)](https://commons.wikimedia.org/wiki/File:Tamarind_Rice_(Puliyogare).jpg) (Wikimedia) | Talupu | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |
| `navaratna-kurma.webp` | Navaratna Kurma | [Pexels #33430561](https://www.pexels.com/photo/33430561/) | ShootSaga | [Pexels License](https://www.pexels.com/license/) |
| `paneer-butter-masala.webp` | Paneer Butter Masala | [Pexels #12737805](https://www.pexels.com/photo/12737805/) | Dhiraj Jain | [Pexels License](https://www.pexels.com/license/) |
| `kids-friendly-pasta.webp` | Kids' Friendly Pasta | [Penne Arrabbiata](https://commons.wikimedia.org/wiki/File:Penne_Arrabbiata.jpg) (Wikimedia) | Petar Milošević | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |
| `bisi-bele-bath.webp` | Bisi Bele Bath | [Bisi Bele Bath with Boondi](https://commons.wikimedia.org/wiki/File:Bisi_Bele_Bath_with_Boondi.jpg) (Wikimedia) | ManasaRao | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |
| `andhra-veg-biryani.webp` | Andhra Style Spicy Vegetable Biryani | [Pexels #7593267](https://www.pexels.com/photo/7593267/) | Ahmad | [Pexels License](https://www.pexels.com/license/) |

## Dishes flagged for our own photography

No excellent, accurately representative, legally reusable photograph exists for
these — an inferior or wrong-dish photo would hurt the brand more than the
branded placeholder does, so they wait for photos of Gayathri's real plates:

- **Thecha Bhaat** — this week's special; photograph the actual batch!
- Maharashtrian Capsicum Shengdana Subzi
- Pepper Gobi Dry / Pepper Paneer Dry / Pepper Baby Corn Dry
- Usal Pav
- **Bisi Bele Bath** — current image is authentic but 7.5/10 (extreme close-up);
  replace with our own plated shot when available

**How:** shoot in daylight, plate in a steel/brass/kadai vessel, then run
`node scripts/optimize-dish-image.mjs <photo> <dish-slug>` and remove that
dish's `imageCredit` in `src/data/dishes.ts` (own photos need no attribution).
