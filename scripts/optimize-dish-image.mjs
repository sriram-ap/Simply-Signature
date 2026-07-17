#!/usr/bin/env node
/**
 * Optimize a dish photograph for the website.
 *
 * Usage:
 *   node scripts/optimize-dish-image.mjs <input> <output-name> [zoom] [brightness]
 *
 *   <input>        Path to the source photo (jpg/png/webp)
 *   <output-name>  Dish slug, e.g. "maharashtrian-misal" — written to
 *                  public/assets/dishes/<output-name>.webp
 *   [zoom]         Optional centre-zoom factor, default 1 (e.g. 1.3 crops in 30%)
 *   [brightness]   Optional brightness multiplier, default 1 (e.g. 1.12)
 *
 * Output is a 1600×1200 (4:3) centre-cropped WebP at quality 80 — the card and
 * detail pages both use this ratio, and next/image generates all responsive
 * sizes from it at request time.
 */
import { stat } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import sharp from "sharp";

const [input, outputName, zoomArg, brightnessArg] = process.argv.slice(2);
if (!input || !outputName) {
  console.error("Usage: node scripts/optimize-dish-image.mjs <input> <output-name> [zoom] [brightness]");
  process.exit(1);
}

const zoom = Number(zoomArg ?? 1) || 1;
const brightness = Number(brightnessArg ?? 1) || 1;
const ASPECT = 4 / 3;
const outFile = path.join("public", "assets", "dishes", `${outputName}.webp`);

const img = sharp(input).rotate(); // respect EXIF orientation
const meta = await img.metadata();
if (!meta.width || !meta.height) {
  console.error(`Could not read dimensions of ${input}`);
  process.exit(1);
}

// Largest centred 4:3 box, shrunk by the zoom factor.
let boxWidth = Math.min(meta.width, meta.height * ASPECT) / zoom;
let boxHeight = boxWidth / ASPECT;
boxWidth = Math.floor(boxWidth);
boxHeight = Math.floor(boxHeight);
const left = Math.floor((meta.width - boxWidth) / 2);
const top = Math.floor((meta.height - boxHeight) / 2);

let pipeline = img.extract({ left, top, width: boxWidth, height: boxHeight });
if (brightness !== 1) {
  pipeline = pipeline.modulate({ brightness });
}
await pipeline
  .resize(1600, 1200, { fit: "fill" })
  .webp({ quality: 80 })
  .toFile(outFile);

const { size } = await stat(outFile);
console.log(`${outFile} — ${(size / 1024).toFixed(0)} KB (from ${meta.width}x${meta.height}, zoom ${zoom})`);
