// Smooth Scrolling for Nav Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Animation on Scroll for Achievement Cards
const reveal = () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const windowHeight = window.innerHeight;
        const revealTop = card.getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
};

window.addEventListener('scroll', reveal);
