// Navbar Sticky Effect on Scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('sticky', window.scrollY > 50);
});

// Typewriter Effect
const textElement = document.getElementById('typewriter');
const phrases = ["Full-Stack Developer", "Data Analyst", "UI/UX Enthusiast"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(type, 2000); // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? 100 : 150);
    }
}

document.addEventListener('DOMContentLoaded', type);

// Mobile Menu Toggle (Simplified)
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

if(burger) {
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
    });
}
