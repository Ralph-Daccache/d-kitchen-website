// d. Kitchen - Main JavaScript Entry Point
// Heritage Modernism Design System

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  console.log('d. Kitchen website loaded');

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
