// Smooth scroll function for navigation
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

// Form validation and success message
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic form validation
    if (name && email && message) {
        // Display a success message after form submission
        const successMessage = `
            <p>Thank you, ${name}! Your message has been received.</p>
            <p>We'll get back to you at ${email} shortly.</p>
        `;
        
        document.getElementById('responseMessage').innerHTML = successMessage;
        document.getElementById('responseMessage').style.display = 'block';

        // Reset form after submission
        document.getElementById('contactForm').reset(); 
    } else {
        // If any field is empty, show an alert
        alert('Please fill in all fields.');
    }
});
