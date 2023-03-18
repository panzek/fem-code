

document.addEventListener('DOMContentLoaded', function() {
    
    let contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', handleSubmit);

    function handleSubmit(event) {
        // prevent form submission 
        event.preventDefault();

        // Get elements from the DOM and store their values 
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let subject = document.getElementById('subject').value;
        let message = document.getElementById('message').value;

        let nameError = document.getElementById('name-error');
        let emailError = document.getElementById('email-error');
        let subjectError = document.getElementById('subject-error');
        let messageError = document.getElementById('message-error');

        // Form data validation and clear validation message after correct input

        // Validate name  
        if(name.length < 5) {
            nameError.innerHTML = "Please enter valid name";
            nameError.style.color = 'red';
            return false;
        // clear validation message after correct input 
        } else {
            nameError.innerHTML = "";
        }

        // Validate email 
        if(email.indexOf("@") == -1 || email.length < 10) {
            emailError.innerHTML = "Please enter valid email address";
            emailError.style.color = 'red';
            return false;
        // clear validation message after correct input
        } else {
            emailError.innerHTML = "";
        }

        // Validate subject 
        if(subject.length < 4) {
            subjectError.innerHTML = "Subject is required";
            subjectError.style.color = 'red';
            return false;
        // clear validation message after correct input
        } else {
            subjectError.innerHTML = "";
        }

        // Validate message 
        if(message.length < 100) {
            messageError.innerHTML = "Message must be more than 100 characters";
            messageError.style.color = 'red';
            return false;
        // clear validation message after correct input
        } else {
            messageError.innerHTML = "";
        }

        // Display success message in UI 
        response = document.getElementById('response');
        response.innerHTML = 
            `Hey ${name}, thank you for contacting us. We'll respond to your mail as soon as possible.`;

        response.style.color = 'green';

        return true;

    }

})