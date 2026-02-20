// 1. Dynamic Typewriter Effect
const textElement = document.getElementById('typewriter');
const phrases = ['Full-Stack Developer', 'Data Specialist', 'BCA Graduate', 'Creative Thinker'];
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

    let typeSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 2500; // Pause at the end of the word
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 400;
    }

    setTimeout(type, typeSpeed);
}

// 2. Scroll Reveal Animation
const reveal = () => {
    const reveals = document.querySelectorAll("[data-reveal]");
    reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            el.classList.add("active");
        }
    });
};

// 3. Smooth Anchor Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    type(); // Start typewriter
    
    // Set initial reveal classes
    document.querySelectorAll('.skill-card, .project-card').forEach(el => {
        el.classList.add('reveal');
    });
    
    window.addEventListener("scroll", reveal);
    reveal(); // Run once on load
});
