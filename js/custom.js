let lastScrollTop = 0;
const header = document.querySelector('header');

// Scroll event to adjust header opacity
window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // If scrolling down, decrease opacity
    if (currentScroll > lastScrollTop) {
        header.style.opacity = '0.5'; // Opacity when scrolling down
    } else {
        header.style.opacity = '1'; // Full opacity when scrolling up
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative values
});

// Ensure particles.js initialization
document.addEventListener("DOMContentLoaded", function () {
    console.log("Particles.js Initialization Started");

    // Initialize particles.js after the DOM is ready
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 1000,
                "density": {
                    "enable": true,
                    "value_area": 200
                }
            },
            "color": { "value": "#2C59CA" }, // Set particle color to #2C59CA
            "shape": {
                "type": "circle",
                "stroke": { "width": 1, "color": " #2C59CA" }
            },
            "opacity": {
                "value": 0.5,
                "random": true
            },
            "size": {
                "value": 1,
                "random": true
            },
            "line_linked": {
                "enable": false,
                "distance": 0,
                "color": "#2C59CA", // Set line color to #2C59CA
                "opacity": 0,
                "width": 0
            },
            "move": {
                "enable": true,
                "speed": 0.5
            }
        },
        
        "retina_detect": true
    });

    // Select the portfolio title
    const portfolioElement = document.querySelector('.portfolio-title');

    // Remove the shuffle effect and just keep the original text
    portfolioElement.innerText = 'PORTFOLIO';
});
