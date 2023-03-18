

document.addEventListener('DOMContentLoaded', function() {
    // add code
    let contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', handleSubmit);

    function handleSubmit(event) {
        // prevent form submission 
        event.preventDefault();

        // Get elements from the DOM and store their values 
        let name = document.getElementById('name').value;
        console.log(name)
        let email = document.getElementById('email').value;
        console.log(email)
        let subject = document.getElementById('subject').value;
        console.log(subject)
        let message = document.getElementById('message').value;

        // validate data 

        // Display success message in UI 
        response = document.getElementById('response');
        response.innerHTML = 
            `Hey ${name}, thank you for contacting us. We'll respond to your mail as soon as possible.`;

        response.style.color = 'green'

    }

})