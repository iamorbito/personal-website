// Get all the navigation links
const navLinks = document.querySelectorAll('.nav-link');

// Loop over each navigation link to add separate event listeners
navLinks.forEach(link => {
    link.addEventListener('mousemove', (e) => {
        // Get the link's position on the page
        const rect = link.getBoundingClientRect();

        // Calculate the distance from the mouse to the center of the link
        const linkCenterX = rect.left + rect.width / 2;
        const linkCenterY = rect.top + rect.height / 2;

        const deltaX = e.clientX - linkCenterX;
        const deltaY = e.clientY - linkCenterY;

        // Move the link a fraction of the distance
        const translateX = deltaX * 0.15;
        const translateY = deltaY * 0.1;

        // Apply the transform
        link.style.transform = `translate(${translateX}px, ${translateY}px)`;
    });

    // Add a mouseleave event to reset the link when the mouse leaves it
    link.addEventListener('mouseleave', () => {
        link.style.transform = `translate(0, 0)`;
    });
});