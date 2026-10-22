// Survey station on the kerb: the start year of the entry being read,
// stencilled at reading height. Decorative; the dates are in each entry.
const station = document.querySelector(".kerb-station");
const entries = document.querySelectorAll("[data-station]");

if (station && entries.length && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (changes) => {
      for (const change of changes) {
        if (change.isIntersecting) {
          station.textContent = change.target.dataset.station;
          station.classList.add("is-on");
        } else if (station.textContent === change.target.dataset.station) {
          station.classList.remove("is-on");
        }
      }
    },
    // A thin band at reading height, where the station is drawn.
    { rootMargin: "-38% 0px -60% 0px" }
  );
  entries.forEach((entry) => observer.observe(entry));
}
