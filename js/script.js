// Ensure smooth scrolling for the new Achievements link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Optional: If you have an intersection observer for animations
const achievementCards = document.querySelectorAll('.achievement-card');
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in'); // Matches your existing animations
        }
    });
}, observerOptions);

achievementCards.forEach(card => observer.observe(card));
