// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Fade-in on scroll
const sections = document.querySelectorAll('.section');

const reveal = () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 80) {
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
    }
  });
};

sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = 'translateY(30px)';
  section.style.transition = 'all 0.6s ease';
});

window.addEventListener('scroll', reveal);
reveal();
