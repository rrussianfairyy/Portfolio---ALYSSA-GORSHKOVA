let lastScrollTop = 0;
const header = document.querySelector('header');

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
