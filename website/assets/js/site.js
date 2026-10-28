// Two small things for the reader who looks closer: the footer's "Copy
// address" control, which stitches a single cross when it has worked, and
// the frontend motif worked in the console for anyone who opens DevTools.
// Wrapped in a block: classic scripts share one global scope.
{
  const SVG = "http://www.w3.org/2000/svg";
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // One cross, its two legs laid one after the other.
  const cross = () => {
    const svg = document.createElementNS(SVG, "svg");
    svg.setAttribute("viewBox", "0 0 8 8");
    svg.setAttribute("class", "copy-cross");
    svg.setAttribute("aria-hidden", "true");
    const legs = [
      [1.6, 1.6, 6.4, 6.4],
      [6.4, 1.6, 1.6, 6.4],
    ].map(([x1, y1, x2, y2]) => {
      const leg = document.createElementNS(SVG, "line");
      for (const [k, v] of Object.entries({ x1, y1, x2, y2, pathLength: 1 })) leg.setAttribute(k, v);
      return leg;
    });
    svg.append(...legs);
    if (!reduce) {
      legs.forEach((leg, i) =>
        leg.animate([{ strokeDashoffset: 1 }, { strokeDashoffset: 0 }], {
          duration: 160,
          delay: i * 140,
          easing: "cubic-bezier(0.16, 1, 0.3, 1)",
          fill: "backwards",
        })
      );
    }
    return svg;
  };

  for (const button of document.querySelectorAll("[data-copy]")) {
    if (!navigator.clipboard) continue;
    const label = button.querySelector(".copy-label");
    const status = button.parentElement.querySelector("[data-copy-status]");
    const idle = label.textContent;
    let timer;
    button.hidden = false;
    button.addEventListener("click", async () => {
      clearTimeout(timer);
      button.querySelector(".copy-cross")?.remove();
      try {
        await navigator.clipboard.writeText(button.dataset.copy);
        button.prepend(cross());
        label.textContent = "Copied";
        status.textContent = "Email address copied.";
      } catch {
        label.textContent = "Couldn't copy. Select it above";
        status.textContent = "Couldn't copy the address. Select it above instead.";
      }
      timer = setTimeout(() => {
        button.querySelector(".copy-cross")?.remove();
        label.textContent = idle;
        status.textContent = "";
      }, 2800);
    });
  }

  // The frontend motif, cell for cell: r is red thread, k is black.
  const MOTIF = ["....r....", "...r.r...", "..r.k.r..", ".r.krk.r.", "r.krrrk.r", ".r.krk.r.", "..r.k.r..", "...r.r...", "....r...."];
  const thread = { r: "color:#a8121e;font-weight:700", k: "color:#1c1414;font-weight:700", ".": "color:transparent" };
  const styles = [];
  const art = MOTIF.map((row) =>
    [...row]
      .map((cell) => {
        styles.push(thread[cell]);
        return "%cx ";
      })
      .join("")
  ).join("\n");
  console.log(art, ...styles);
  console.log(
    "Hi. This site is plain HTML, CSS and a little JavaScript: no framework, no build step. Every length is a whole number of 8px stitch cells.\n— Dimitar, dimitur2204@gmail.com"
  );
}
