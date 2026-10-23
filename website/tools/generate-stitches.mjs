// Generates the cross-stitch SVGs in assets/img/stitch/ from cell matrices.
// Every motif sits on an 8-unit cell; each cell is one cross stitch (an X).
// Run with: node tools/generate-stitches.mjs
import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const out = fileURLToPath(new URL("../assets/img/stitch/", import.meta.url));
mkdirSync(out, { recursive: true });

const RED = "#A8121E";
const BLACK = "#1C1414";
const WHITE = "#FFFFFF";
const CELL = 8;

// Builds an SVG from a (x, y) => colour | null function over a cols x rows grid.
function stitch(cols, rows, colourAt) {
  const byColour = new Map();
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const colour = colourAt(x, y);
      if (!colour) continue;
      const a = x * CELL + 1.6;
      const b = x * CELL + CELL - 1.6;
      const c = y * CELL + 1.6;
      const d = y * CELL + CELL - 1.6;
      const path = `M${a} ${c}L${b} ${d}M${b} ${c}L${a} ${d}`;
      byColour.set(colour, (byColour.get(colour) || "") + path);
    }
  }
  const paths = [...byColour]
    .map(([colour, d]) => `<path stroke="${colour}" d="${d}"/>`)
    .join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${cols * CELL} ${rows * CELL}" width="${cols * CELL}" height="${rows * CELL}" fill="none" stroke-width="1.9" stroke-linecap="round">${paths}</svg>\n`;
}

const write = (name, svg) => writeFileSync(out + name, svg);

// Hem band: broad red rhombus "eyes" with black hearts between two edge
// rows, each pair parted by a small diamond. 24 x 11 cells; the tile edge
// falls on a small diamond.
function hem(primary, secondary) {
  return stitch(24, 11, (x, y) => {
    if (y === 0 || y === 10) return x % 2 === 0 ? secondary : primary;
    const d = Math.min(Math.abs(x - 6), Math.abs(x - 18)) + Math.abs(y - 5);
    if (d === 4 || d === 2) return primary;
    if (d === 3) return primary;
    if (d === 0) return secondary;
    const gap = Math.min(Math.abs(x - 12), x, 24 - x) + Math.abs(y - 5);
    if (gap <= 1) return gap === 0 ? secondary : primary;
    if ((y === 2 || y === 8) && x % 12 === 0) return primary;
    return null;
  });
}
write("hem.svg", hem(RED, BLACK));
write("hem-on-red.svg", hem(WHITE, BLACK));

// Section opener: a chain of small red diamonds, black at each centre,
// between sparse black edge rows. 4 x 7 cells.
write(
  "zigzag.svg",
  stitch(4, 7, (x, y) => {
    if (y === 0 || y === 6) return x % 4 === 0 ? BLACK : null;
    const off = Math.abs(x - 2);
    if (y - 1 === off || 5 - y === off) return RED;
    if (x === 2 && y === 3) return BLACK;
    return null;
  }),
);

// Frontend: the rhombus "eye", concentric diamonds. 9 x 9.
write(
  "motif-frontend.svg",
  stitch(9, 9, (x, y) => {
    const d = Math.abs(x - 4) + Math.abs(y - 4);
    if (d === 4 || d <= 1) return RED;
    if (d === 2) return BLACK;
    return null;
  }),
);

// Fullstack: the tree, a black trunk with red branches angled down. 9 x 11.
write(
  "motif-fullstack.svg",
  stitch(9, 11, (x, y) => {
    const dx = Math.abs(x - 4);
    if (dx === 0 && y <= 1) return RED;
    if (dx === 0) return BLACK;
    for (const top of [2, 4, 6]) {
      if (dx >= 1 && dx <= 3 && y - top === dx - 1) return RED;
    }
    return null;
  }),
);

// Operations: the stepped cross, red arms edged in black. 9 x 9.
write(
  "motif-ops.svg",
  stitch(9, 9, (x, y) => {
    const dx = Math.abs(x - 4);
    const dy = Math.abs(y - 4);
    const arm = (dx <= 1 && dy <= 4) || (dy <= 1 && dx <= 4);
    if (!arm) return null;
    if (dx + dy === 0 || dx === 4 || dy === 4) return BLACK;
    return dx === 0 || dy === 0 ? RED : BLACK;
  }),
);

// Study: two small stacked diamonds. 7 x 9.
write(
  "motif-study.svg",
  stitch(7, 9, (x, y) => {
    for (const cy of [2, 6]) {
      const d = Math.abs(x - 3) + Math.abs(y - cy);
      if (d === 2) return BLACK;
      if (d === 0) return RED;
    }
    return null;
  }),
);

// A single red stitch, used for list markers and separators.
write("cross.svg", stitch(1, 1, () => RED));
