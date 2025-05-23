/* ========== Mobile Nav Toggle ========== */
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
hamburger.addEventListener("click", () => {
  nav.classList.toggle("open");
});

/* ========== Counter Animation ========== */
const counters = document.querySelectorAll(".counter");
const speed = 100; // lower = faster

const runCounters = () => {
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-val");
      const count = +counter.innerText;
      const inc = Math.ceil(target / speed);
      if (count < target) {
        counter.innerText = count + inc;
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
};
const sectionAchv = document.getElementById("achievements");
const observer = new IntersectionObserver(
  entries => {
    if (entries[0].isIntersecting) {
      runCounters();
      observer.disconnect();
    }
  },
  { threshold: 0.4 }
);
observer.observe(sectionAchv);
/* ===== Mission bullet fade‑in ===== */
const missionItems = document.querySelectorAll(".mission-bullets li");
const mObserver = new IntersectionObserver(
  entries => {
    entries.forEach((entry, idx) => {
      if (entry.isIntersecting) {
        entry.target.style.setProperty("--stagger", `${idx * 120}ms`);
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.3 }
);
missionItems.forEach(item => mObserver.observe(item));

/* ========== FAQ Accordion ========== */
const accBtns = document.querySelectorAll(".acc-btn");
accBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    const panel = btn.nextElementSibling;
    panel.style.display = panel.style.display === "block" ? "none" : "block";
  });
});
