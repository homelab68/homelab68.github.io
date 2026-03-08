#!/usr/bin/env node
/**
 * Convert PNG/JPG/JPEG screenshots to WebP for better performance.
 * Usage: node scripts/convert-to-webp.mjs [dir] [--quality=82]
 *   dir      Base directory to scan (default: public)
 *   --quality=N  WebP quality 1-100 (default: 82)
 *
 * Output: writes .webp next to each image. Does not delete originals.
 * Update your app to use .webp paths (or serve both and use <picture>).
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const EXTENSIONS = new Set([".png", ".jpg", ".jpeg"]);

function parseArgs() {
  const args = process.argv.slice(2);
  let dir = "public";
  let quality = 82;
  for (const arg of args) {
    if (arg.startsWith("--quality=")) {
      quality = Math.max(1, Math.min(100, parseInt(arg.slice(10), 10) || 82));
    } else if (!arg.startsWith("--")) {
      dir = arg;
    }
  }
  return { dir: path.resolve(ROOT, dir), quality };
}

function* walkImages(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      yield* walkImages(full);
    } else if (EXTENSIONS.has(path.extname(e.name).toLowerCase())) {
      yield full;
    }
  }
}

async function convertToWebp(inputPath, quality) {
  const outPath = inputPath.replace(/\.[^.]+$/i, ".webp");
  if (inputPath === outPath) return null;
  await sharp(inputPath)
    .webp({ quality, effort: 4 })
    .toFile(outPath);
  const inStat = fs.statSync(inputPath);
  const outStat = fs.statSync(outPath);
  return {
    input: path.relative(ROOT, inputPath),
    output: path.relative(ROOT, outPath),
    saved: Math.round((1 - outStat.size / inStat.size) * 100),
  };
}

async function main() {
  const { dir, quality } = parseArgs();
  console.log(`Converting images in ${path.relative(ROOT, dir)} to WebP (quality=${quality})...\n`);

  const files = [...walkImages(dir)];
  if (files.length === 0) {
    console.log("No PNG/JPG images found.");
    process.exit(0);
  }

  const results = [];
  for (const file of files) {
    try {
      const r = await convertToWebp(file, quality);
      if (r) results.push(r);
    } catch (err) {
      console.error(`Error ${file}:`, err.message);
    }
  }

  for (const r of results) {
    console.log(`  ${r.input} → ${r.output} (${r.saved}% smaller)`);
  }
  console.log(`\nDone. ${results.length} WebP file(s) written. Update image paths to use .webp for best performance.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
