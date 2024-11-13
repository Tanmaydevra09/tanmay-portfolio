// Smooth scroll function for navigation
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

// Form validation and success message
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Basic form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('responseMessage').style.display = 'block';
        document.getElementById('contactForm').reset(); // Reset form after submission
    } else {
        alert('Please fill in all fields.');
    }
});
