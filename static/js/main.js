// Scroll-reveal using IntersectionObserver
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
);

document.querySelectorAll(".reveal, .reveal-item").forEach((el) => {
  observer.observe(el);
});

// Nav shadow on scroll
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    nav.style.borderBottomColor = "rgba(255,255,255,0.08)";
  } else {
    nav.style.borderBottomColor = "rgba(255,255,255,0.06)";
  }
});

// Smooth-scroll nav links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
