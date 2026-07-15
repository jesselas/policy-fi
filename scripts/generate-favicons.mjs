// Generate raster favicon assets from the SVG source.
// Run: npm run favicons   (outputs into src/assets/img/, committed to the repo)
import sharp from 'sharp';
import pngToIco from 'png-to-ico';
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const imgDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'assets', 'img');
const src = join(imgDir, 'favicon.svg');

const PNGS = [
  { file: 'favicon-16.png', size: 16 },
  { file: 'favicon-32.png', size: 32 },
  { file: 'favicon-48.png', size: 48 },
  { file: 'apple-touch-icon.png', size: 180 },
  { file: 'icon-192.png', size: 192 },
  { file: 'icon-512.png', size: 512 },
  { file: 'icon-maskable-512.png', size: 512 },
];

const svg = await readFile(src);

for (const { file, size } of PNGS) {
  await sharp(svg, { density: 384 })
    .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(join(imgDir, file));
  console.log('wrote', file);
}

// Multi-resolution ICO (16/32/48) for legacy clients.
const icoBuf = await pngToIco([16, 32, 48].map((s) => join(imgDir, `favicon-${s}.png`)));
await writeFile(join(imgDir, 'favicon.ico'), icoBuf);
console.log('wrote favicon.ico');
