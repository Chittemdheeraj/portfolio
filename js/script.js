// Typewriter
const roles = ["Full-Stack Developer", "Data Analyst", "Web Enthusiast"];
let r = 0, c = 0, del = false;
const el = document.getElementById("typewriter");

function type() {
  el.textContent = roles[r].substring(0, c);
  c += del ? -1 : 1;

  if (!del && c === roles[r].length) setTimeout(() => del = true, 1200);
  if (del && c === 0) { del = false; r = (r + 1) % roles.length; }

  setTimeout(type, del ? 80 : 120);
}
type();
