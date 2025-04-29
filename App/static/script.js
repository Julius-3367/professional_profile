document.addEventListener('DOMContentLoaded', function () {
    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
    });

    // Typed.js Initialization
    var typed = new Typed("#typedTagline", {
        strings: ["Full-Stack Developer", "Cloud Architect", "Technology Innovator"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });

    // Particles.js Initialization
    particlesJS.load('particles-js', 'https://cdn.jsdelivr.net/gh/VincentGarreau/particles.js/particles.json', function () {
        console.log('Particles.js loaded.');
    });
});
