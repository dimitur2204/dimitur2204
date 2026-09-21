document.addEventListener("DOMContentLoaded", () => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const isCompact = window.matchMedia("(max-width: 768px)").matches;
  const styles = getComputedStyle(document.documentElement);
  const accent = styles.getPropertyValue("--accent").trim();
  const text = styles.getPropertyValue("--text").trim();

  document.querySelectorAll(".menu-text").forEach((element, menuIndex) => {
    const label =
      (isCompact && element.dataset.textMobile) || element.dataset.text;

    element.textContent = "";
    const chars = [...label].map((char) => {
      const span = document.createElement("span");
      span.textContent = char === " " ? " " : char;
      element.appendChild(span);
      return span;
    });

    if (reduceMotion.matches) return;

    gsap.from(chars, {
      opacity: 0,
      y: 60,
      rotateX: -70,
      stagger: 0.04,
      delay: 0.3 + menuIndex * 0.12,
      duration: 0.7,
      ease: "power3.out",
    });

    const menuLink = element.closest(".menu-link");
    const menuItem = menuLink.closest(".menu-item");

    menuLink.addEventListener("mouseenter", () => {
      gsap.to(chars, {
        y: -8,
        color: accent,
        stagger: { each: 0.025, from: "start" },
        duration: 0.4,
        ease: "power2.out",
      });
    });

    menuLink.addEventListener("mouseleave", () => {
      gsap.to(chars, {
        y: 0,
        color: text,
        stagger: { each: 0.025, from: "start" },
        duration: 0.4,
        ease: "power2.inOut",
      });
      gsap.to(menuItem, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.5)",
      });
    });

    // Magnetic pull, damped enough that the text stays readable.
    menuLink.addEventListener("mousemove", (e) => {
      const rect = menuItem.getBoundingClientRect();
      gsap.to(menuItem, {
        x: (e.clientX - (rect.left + rect.width / 2)) * 0.08,
        y: (e.clientY - (rect.top + rect.height / 2)) * 0.12,
        duration: 0.4,
        ease: "power2.out",
      });
    });
  });
});
