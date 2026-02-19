/* ===== Typing / Role Text ===== */
const textElement = document.querySelector(".typing-text");

const roles = [
  "BCA Graduate",
  "Aspiring Software Developer",
  "Data Analyst Enthusiast",
  "Web Developer"
];

let index = 0;

setInterval(() => {
  if (textElement) {
    textElement.textContent = roles[index];
    index = (index + 1) % roles.length;
  }
}, 2000);

/* ===== Scroll Reveal Animation ===== */
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.15 }
);

sections.forEach(section => {
  section.style.opacity = "0";
  section.style.transform = "translateY(40px)";
  section.style.transition = "all 0.8s ease";
  observer.observe(section);
});
