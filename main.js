// main.js

document.addEventListener('DOMContentLoaded', () => {
    
    // Header Glassmorphism Scroll Effect
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(10, 10, 10, 0.85)';
            header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
        } else {
            header.style.background = 'rgba(10, 10, 10, 0.6)';
            header.style.boxShadow = 'none';
        }
    });

    // Intersection Observer for scroll animations
    const faders = document.querySelectorAll('.fade-in, .fade-in-up');
    
    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(
        entries,
        appearOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // Initial load animation for hero text
    setTimeout(() => {
        const heroContent = document.querySelector('.hero-content');
        if(heroContent) {
            heroContent.classList.add('appear');
        }
    }, 100);
});
