# Weekly posters

The poster shown on the home page, specials page and order page for the current
week, plus the archive shown on `/gallery`.

## Adding a new week's poster

1. Export the poster as PNG or JPG (portrait 1080×2350 or landscape ~1672×941 —
   any size works, but note the pixel dimensions).
2. Name it `YYYY-MM-DD-dish-name.png`, e.g. `2026-07-26-usal-pav.png`.
3. Drop it in this folder.
4. Point `config/menu.json → special.poster` at it (path starts with
   `/assets/posters/`) and set `posterWidth`/`posterHeight` to the real pixel size.
5. Optionally add it to `config/gallery.json` so it appears in the archive.

The website picks up the change on the next deploy — no code edits needed.

## Rules

- Only posters created for Simply Signature (they're brand assets — keep them all;
  the archive is part of the story).
- Keep files under ~1.5 MB where possible; Next.js optimises them at request time,
  but smaller sources build faster.
