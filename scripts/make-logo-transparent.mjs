// Removes the outer white background from public/Koding.png and writes
// public/Koding-transparent.png. Uses a flood fill from the image borders so
// that white *inside* the QR code and the cat's eyes is preserved — only white
// connected to the edges becomes transparent.
import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dir = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(dir, "..", "public", "Koding.png");
const out = path.join(dir, "..", "public", "Koding-transparent.png");

const THRESHOLD = 232; // pixels with r,g,b all >= this count as "white"

const { data, info } = await sharp(src)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info; // channels === 4 (RGBA)
const idx = (x, y) => (y * width + x) * channels;

const isWhite = (i) =>
  data[i] >= THRESHOLD && data[i + 1] >= THRESHOLD && data[i + 2] >= THRESHOLD;

// Flood fill (BFS) from every border pixel that is white.
const visited = new Uint8Array(width * height);
const stack = [];
const push = (x, y) => {
  if (x < 0 || y < 0 || x >= width || y >= height) return;
  const p = y * width + x;
  if (visited[p]) return;
  visited[p] = 1;
  if (isWhite(idx(x, y))) stack.push(x, y);
};

for (let x = 0; x < width; x++) {
  push(x, 0);
  push(x, height - 1);
}
for (let y = 0; y < height; y++) {
  push(0, y);
  push(width - 1, y);
}

let cleared = 0;
while (stack.length) {
  const y = stack.pop();
  const x = stack.pop();
  data[idx(x, y) + 3] = 0; // alpha -> transparent
  cleared++;
  push(x + 1, y);
  push(x - 1, y);
  push(x, y + 1);
  push(x, y - 1);
}

await sharp(data, { raw: { width, height, channels } })
  .png()
  .toFile(out);

console.log(`Done. Cleared ${cleared} background pixels -> ${out}`);
