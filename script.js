const scrollingWrapper = document.getElementById('auto-scroll');
let scrollAmount = 0;
let scrollStep = 1;
let maxScroll;

// Calculate the max scrollable width dynamically
const updateMaxScroll = () => {
    maxScroll = scrollingWrapper.scrollWidth - scrollingWrapper.clientWidth;
};

window.addEventListener('resize', updateMaxScroll);
updateMaxScroll(); // Initial setup

const autoScroll = () => {
    scrollAmount += scrollStep;
    scrollingWrapper.scrollLeft = scrollAmount;

    if (scrollAmount >= maxScroll || scrollAmount <= 0) {
        scrollStep = -scrollStep; // Reverse scroll direction
    }

    requestAnimationFrame(autoScroll); // Continuously call autoScroll
};

// Start auto-scrolling
autoScroll();
