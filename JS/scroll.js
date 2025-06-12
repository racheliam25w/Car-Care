// JavaScript for the scroll back up button
window.addEventListener('scroll', () => {
    const scrollToTopButton = document.getElementById('scrollToTopBtn');

    // Display the button when the user scrolls down
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Smooth scroll to top when the button is clicked
document.getElementById('scrollToTopBtn').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
