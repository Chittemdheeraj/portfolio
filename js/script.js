// Sticky Navbar
window.addEventListener('scroll', () => {
  document.querySelector('nav')
    .classList.toggle('sticky', window.scrollY > 50);
});

// Burger Menu
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
});

// Theme Toggle
const toggle = document.getElementById('themeToggle');
toggle.onclick = () => {
  document.body.classList.toggle('light');
  toggle.textContent = document.body.classList.contains('light') ? '🌞' : '🌙';
};

// Typewriter
const text = ["Full-Stack Developer", "Data Analyst", "Web Enthusiast"];
let i = 0, j = 0, del = false;
const el = document.getElementById('typewriter');

function type() {
  el.textContent = text[i].substring(0, j);
  j += del ? -1 : 1;

  if (!del && j === text[i].length) setTimeout(() => del = true, 1200);
  if (del && j === 0) { del = false; i = (i+1)%text.length; }

  setTimeout(type, del ? 80 : 120);
}
type();
