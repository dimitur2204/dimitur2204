// Works each discipline motif the way cross-stitch is worked by hand, the
// first time it scrolls into view: along each row the first leg of every
// cross goes in left to right, then the return pass crosses them right to
// left, row by row down the motif. The <img> stays as it is when motion is
// reduced or this script never runs; otherwise it is swapped for the same
// drawing inline, so each leg can be laid separately. This script blocks the
// first render, so .stitch-motifs can hide the images before they paint
// whole and are then taken apart; any image that cannot be swapped is shown.
// Wrapped in a block: classic scripts share one global scope.
{
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const motifs = document.querySelectorAll("img.motif, img.entry-motif");

  // The whole motif takes about this long, however many crosses it has.
  const TOTAL = 800;
  const LEG = 140;
  const SVG = "http://www.w3.org/2000/svg";

  const sources = new Map();
  const fetchSvg = (src) => {
    if (!sources.has(src)) sources.set(src, fetch(src).then((r) => r.text()));
    return sources.get(src);
  };

  // Each path is a run of crosses, two "M x y L x y" legs apiece.
  const legsOf = (path) => {
    const legs = [...path.getAttribute("d").matchAll(/M([\d.]+) ([\d.]+)L([\d.]+) ([\d.]+)/g)].map((m) =>
      m.slice(1).map(Number)
    );
    const stroke = path.getAttribute("stroke");
    const crosses = [];
    for (let i = 0; i + 1 < legs.length; i += 2) {
      const [x1, y1] = legs[i];
      crosses.push({ x: x1, y: y1, legs: [legs[i], legs[i + 1]], stroke });
    }
    return crosses;
  };

  const line = ([x1, y1, x2, y2], stroke) => {
    const el = document.createElementNS(SVG, "line");
    for (const [k, v] of Object.entries({ x1, y1, x2, y2, stroke, pathLength: 1 })) el.setAttribute(k, v);
    el.style.strokeDasharray = "1";
    el.style.strokeDashoffset = "1";
    return el;
  };

  const inline = async (img) => {
    const doc = new DOMParser().parseFromString(await fetchSvg(img.getAttribute("src")), "image/svg+xml");
    const source = doc.documentElement;
    const svg = document.createElementNS(SVG, "svg");
    for (const name of ["viewBox", "fill", "stroke-width", "stroke-linecap"]) {
      svg.setAttribute(name, source.getAttribute(name));
    }
    svg.setAttribute("width", img.getAttribute("width"));
    svg.setAttribute("height", img.getAttribute("height"));
    svg.setAttribute("class", img.className);
    svg.setAttribute("aria-hidden", "true");

    // Rows top to bottom; within a row, the outward pass then the return.
    const rows = new Map();
    for (const cross of [...source.querySelectorAll("path")].flatMap(legsOf)) {
      const key = Math.round(cross.y);
      if (!rows.has(key)) rows.set(key, []);
      rows.get(key).push(cross);
    }
    const order = [];
    for (const key of [...rows.keys()].sort((a, b) => a - b)) {
      const row = rows.get(key).sort((a, b) => a.x - b.x);
      for (const c of row) order.push(line(c.legs[0], c.stroke));
      for (const c of [...row].reverse()) order.push(line(c.legs[1], c.stroke));
    }
    svg.append(...order);
    img.replaceWith(svg);
    return { svg, order };
  };

  const stitch = ({ order }) => {
    const step = Math.max(2, (TOTAL - LEG) / order.length);
    order.forEach((leg, i) => {
      leg
        .animate([{ strokeDashoffset: 1 }, { strokeDashoffset: 0 }], {
          duration: LEG,
          delay: i * step,
          easing: "cubic-bezier(0.16, 1, 0.3, 1)",
          fill: "forwards",
        })
        .finished.then(() => {
          leg.style.strokeDashoffset = "0";
        });
    });
  };

  if (!reduce && "IntersectionObserver" in window && motifs.length) {
    document.documentElement.classList.add("stitch-motifs");
    const pending = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          observer.unobserve(entry.target);
          stitch(pending.get(entry.target));
        }
      },
      { rootMargin: "0px 0px -15% 0px" }
    );
    for (const img of motifs) {
      inline(img)
        .then((motif) => {
          pending.set(motif.svg, motif);
          observer.observe(motif.svg);
        })
        .catch(() => {
          img.style.visibility = "visible";
        });
    }
  }
}
