// Procedural texture generator for the Utility Locate world. Deterministic (seeded PRNG),
// drawn on canvas in headless Chrome, exported as PNG. Re-run to reproduce.
import { chromium } from "playwright";
import { writeFileSync } from "node:fs";
const out = process.argv[2];
const b = await chromium.launch({ channel: "chrome" });
const p = await b.newPage();
const results = await p.evaluate(() => {
  function rng(seed) { return () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
  const gauss = (r) => { let u = 0; for (let i = 0; i < 6; i++) u += r(); return u / 6 - 0.5; };
  const out = {};
  // --- sprayed stroke (horizontal), white with alpha ---
  function spray(w, h, seed, vertical, tile) {
    const c = document.createElement("canvas"); c.width = vertical ? h : w; c.height = vertical ? w : h;
    const x = c.getContext("2d"); const r = rng(seed);
    if (vertical) { x.translate(h, 0); x.rotate(Math.PI / 2); }
    const mid = h / 2, core = h * 0.19;
    // centre wobble and density along the run
    let wob = 0, dens = 1;
    for (let px = 0; px < w; px += 1) {
      wob += (r() - 0.5) * 0.35; wob *= tile ? 0.97 : 0.985;
      dens += (r() - 0.5) * 0.09; dens = Math.min(1.2, Math.max(0.55, dens));
      const t = px / w; const taper = tile ? 1 : Math.min(1, t / 0.012, (1 - t) / 0.02);
      const cy = mid + wob;
      const half = core * (0.55 + 0.45 * taper) * (0.85 + r() * 0.3) * (0.8 + 0.3 * dens);
      // solid-ish core with ragged edge
      const a = Math.min(1, 0.95 * dens) * Math.max(0.1, taper);
      x.fillStyle = `rgba(255,255,255,${a})`;
      x.fillRect(px, cy - half + (r() - 0.5) * 1.6, 1, half * 2 + (r() - 0.5) * 1.6);
      // overspray dots
      const n = Math.floor(22 * dens * Math.max(0.3, taper));
      for (let k = 0; k < n; k++) {
        const dy = gauss(r) * h * 1.25;
        const rad = 0.3 + r() * 1.1;
        const da = Math.max(0, 0.75 - Math.abs(dy) / (h * 0.42)) * (0.45 + r() * 0.55);
        x.fillStyle = `rgba(255,255,255,${da})`;
        x.beginPath(); x.arc(px + r(), cy + dy, rad, 0, Math.PI * 2); x.fill();
      }
    }
    // a few build-up blobs where the can paused
    for (let k = 0; k < Math.floor(w / 260); k++) {
      const bx = r() * w * 0.9 + w * 0.05; const g = x.createRadialGradient(bx, mid, 0, bx, mid, core * 2.2);
      g.addColorStop(0, "rgba(255,255,255,0.9)"); g.addColorStop(1, "rgba(255,255,255,0)");
      x.fillStyle = g; x.fillRect(bx - core * 3, mid - core * 3, core * 6, core * 6);
    }
    return c.toDataURL("image/png");
  }
  // three distinct runs, one per locate line; repeat-x tiles (no end taper)
  out["spray-h-a.png"] = spray(2400, 48, 7, false, true);
  out["spray-h-b.png"] = spray(2400, 48, 19, false, true);
  out["spray-h-c.png"] = spray(2400, 48, 43, false, true);
  // --- sprayed dashed horizontal tile (proposed dig) ---
  (() => {
    const c = document.createElement("canvas"); c.width = 120; c.height = 48; const x = c.getContext("2d"); const r = rng(23);
    for (let px = 8; px < 80; px++) { const t = Math.min(1, (px - 8) / 6, (80 - px) / 6);
      x.fillStyle = `rgba(255,255,255,${0.92 * t})`; x.fillRect(px, 24 - 4 + (r() - .5) * 1.4, 1, 8 + (r() - .5) * 1.4);
      for (let k = 0; k < 7; k++) { const dy = gauss(r) * 40; x.fillStyle = `rgba(255,255,255,${Math.max(0, .55 - Math.abs(dy) / 22) * r()})`; x.beginPath(); x.arc(px + r(), 24 + dy, .4 + r() * .8, 0, 7); x.fill(); } }
    out["spray-dash-h.png"] = c.toDataURL("image/png");
  })();
  // --- sprayed dashed frame for border-image (proposed dig outline) ---
  (() => {
    const S = 168, B = 24; const c = document.createElement("canvas"); c.width = S; c.height = S; const x = c.getContext("2d"); const r = rng(31);
    const dot = (px, py, a) => { x.fillStyle = `rgba(255,255,255,${a})`; x.fillRect(px, py, 1, 1); };
    const seg = (x0, y0, x1, y1) => { const len = Math.hypot(x1 - x0, y1 - y0); for (let i = 0; i < len; i++) { const t = i / len; const px = x0 + (x1 - x0) * t, py = y0 + (y1 - y0) * t; const tp = Math.min(1, i / 4, (len - i) / 4);
      for (let k = -2; k <= 2; k++) { const nx = (y1 - y0) / len, ny = -(x1 - x0) / len; dot(px + nx * k + (r() - .5), py + ny * k + (r() - .5), (k === -2 || k === 2 ? .45 : .95) * tp); }
      for (let k = 0; k < 4; k++) { const off = gauss(r) * 16; const nx = (y1 - y0) / len, ny = -(x1 - x0) / len; x.fillStyle = `rgba(255,255,255,${Math.max(0, .45 - Math.abs(off) / 14) * r()})`; x.beginPath(); x.arc(px + nx * off, py + ny * off, .4 + r() * .6, 0, 7); x.fill(); } } };
    const m = B / 2; // dashes along each edge, corners solid
    const gap = 11;
    for (let s = m; s < S - m; ) { const dash = 13 + r() * 10; const e = Math.min(S - m, s + dash);
      seg(s, m, e, m); seg(s, S - m, e, S - m); seg(m, s, m, e); seg(S - m, s, S - m, e); s = e + gap + r() * 4; }
    out["dig-frame.png"] = c.toDataURL("image/png");
  })();
  // --- tileable textures ---
  function tile(size, seed, base, flecks) {
    const c = document.createElement("canvas"); c.width = size; c.height = size; const x = c.getContext("2d"); const r = rng(seed);
    x.fillStyle = base; x.fillRect(0, 0, size, size);
    for (const f of flecks) for (let i = 0; i < f.n; i++) {
      const px = r() * size, py = r() * size, rad = f.min + r() * (f.max - f.min);
      const col = f.color(r);
      for (const ox of [-size, 0, size]) for (const oy of [-size, 0, size]) {
        if (rad > 8) { // large mottling: soft-edged
          const g = x.createRadialGradient(px + ox, py + oy, 0, px + ox, py + oy, rad);
          g.addColorStop(0, col); g.addColorStop(1, col.replace(/[\d.]+\)$/, "0)"));
          x.fillStyle = g; x.fillRect(px + ox - rad, py + oy - rad, rad * 2, rad * 2);
        } else { x.fillStyle = col; x.beginPath(); x.ellipse(px + ox, py + oy, rad, rad * (0.6 + r() * 0.5), r() * 3, 0, 7); x.fill(); }
      }
    }
    return c;
  }
  const asphalt = tile(384, 3, "#26282a", [
    { n: 1600, min: 0.4, max: 1.2, color: (r) => `rgba(255,255,255,${0.035 + r() * 0.05})` },
    { n: 380, min: 0.9, max: 2.4, color: (r) => `rgba(200,195,185,${0.045 + r() * 0.05})` },
    { n: 900, min: 0.5, max: 1.6, color: (r) => `rgba(0,0,0,${0.12 + r() * 0.14})` },
  ]);
  out["asphalt.png"] = asphalt.toDataURL("image/png");
  const concrete = tile(384, 5, "#cbc8c0", [
    { n: 26, min: 30, max: 80, color: (r) => `rgba(120,116,108,${0.035 + r() * 0.035})` },
    { n: 22, min: 30, max: 90, color: (r) => `rgba(255,255,255,${0.05 + r() * 0.05})` },
    { n: 2200, min: 0.3, max: 0.9, color: (r) => `rgba(60,58,54,${0.05 + r() * 0.05})` },
    { n: 600, min: 0.4, max: 1.0, color: (r) => `rgba(255,255,255,${0.06 + r() * 0.06})` },
    { n: 90, min: 0.7, max: 2.0, color: (r) => `rgba(70,68,64,${0.18 + r() * 0.12})` },
  ]);
  out["concrete.png"] = concrete.toDataURL("image/png");
  // poured slab: coarser aggregate; no joints, since the slab carries body text
  (() => { const slab = tile(384, 9, "#cbc8c0", [
      { n: 26, min: 30, max: 90, color: (r) => `rgba(120,116,108,${0.05 + r() * 0.04})` },
      { n: 22, min: 30, max: 90, color: (r) => `rgba(255,255,255,${0.06 + r() * 0.05})` },
      { n: 2600, min: 0.3, max: 1.0, color: (r) => `rgba(60,58,54,${0.07 + r() * 0.06})` },
      { n: 260, min: 1.0, max: 2.6, color: (r) => `rgba(110,104,94,${0.16 + r() * 0.14})` },
      { n: 140, min: 0.8, max: 2.2, color: (r) => `rgba(255,255,255,${0.18 + r() * 0.12})` },
    ]);
    out["concrete-slab.png"] = slab.toDataURL("image/png"); })();
  // kerb tile: concrete with one sawcut expansion joint per 480px
  (() => { const c = document.createElement("canvas"); c.width = 64; c.height = 480; const x = c.getContext("2d");
    x.drawImage(concrete, 0, 0); x.drawImage(concrete, 0, 384);
    x.fillStyle = "rgba(40,38,35,0.55)"; x.fillRect(0, 478, 64, 2); x.fillStyle = "rgba(255,255,255,0.25)"; x.fillRect(0, 476, 64, 1);
    out["kerb.png"] = c.toDataURL("image/png"); })();
  return out;
});
for (const [name, url] of Object.entries(results)) writeFileSync(`${out}/${name}`, Buffer.from(url.split(",")[1], "base64"));
console.log(Object.keys(results).join(" "));
await b.close();
