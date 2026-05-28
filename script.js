document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the page from refreshing

    const btn = document.getElementById('send-btn');
    btn.innerText = 'Sending...';

    // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual IDs from EmailJS
    emailjs.sendForm('service_jkfo40y', 'template_9mrw8ec', this)
        .then(function() {
            btn.innerText = 'Send';
            alert('Message sent successfully!');
            document.getElementById('contact-form').reset(); // Clears the form fields
        }, function(error) {
            btn.innerText = 'Send';
            alert('Failed to send message. Please try again. Error: ' + JSON.stringify(error));
        });
});
