/**
 * Chittem Dheeraj - Portfolio Logic 2026
 * Handles: Mobile Menu, Smooth Scrolling, AOS Init, and Navbar Effects
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Initialize AOS (Animate on Scroll)
    // This makes your sections fade/slide in beautifully
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            mirror: false,
            easing: 'ease-in-out',
        });
    }

    // 2. Mobile Navigation Toggle
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Toggle between hamburger and close icon
            const icon = menuBtn.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // 3. Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuBtn.querySelector('i').classList.add('fa-bars');
                menuBtn.querySelector('i').classList.remove('fa-times');
            }

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80, // Offset for sticky header
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. Navbar Background Change on Scroll
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.padding = '1rem 8%';
            nav.style.background = 'rgba(3, 7, 18, 0.95)';
            nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
        } else {
            nav.style.padding = '2rem 8%';
            nav.style.background = 'rgba(3, 7, 18, 0.5)';
            nav.style.boxShadow = 'none';
        }
    });

    // 5. Active Link Highlighter
    // Highlights the nav item based on which section is on screen
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active');
                a.style.color = 'var(--accent)';
            } else {
                a.style.color = 'var(--text)';
            }
        });
    });

    // 6. Simple Interactive Console Message
    console.log("%c Portfolio of Chittem Dheeraj ", "color: #00e5ff; font-weight: bold; font-size: 1.2rem; background: #111; padding: 10px; border-radius: 5px;");
    console.log("Looking for a developer? Let's connect!");
});
