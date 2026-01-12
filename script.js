document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;
    let response = document.getElementById("response");

    if (name === "" || message === "") {
        response.textContent = "Please fill out all fields.";
        response.className = "error-text"; // Uses our CSS class
    } else {
        response.textContent = "Thank you for contacting us, " + name + "! We will get back to you soon.";
        response.className = "success-text"; // Uses our CSS class
        this.reset(); // Clears the form fields
    }
});