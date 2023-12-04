// charity_profile.js

// Function to show the volunteer form
function showVolunteerForm() {
    var volunteerForm = document.getElementById("volunteerForm");
    volunteerForm.style.display = "block";
}

// Function to handle form submission
function submitVolunteerForm(event) {
    event.preventDefault(); // Prevent the form from submitting (for demonstration purposes)

    // Get user input
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    // For demonstration purposes, log the user input (replace with your backend logic)
    console.log("Volunteer Form Submitted:");
    console.log("Name: " + name);
    console.log("Email: " + email);

    // You can add further logic here, such as sending the data to a server, etc.
}

// Function to enhance interactivity (example: show additional details on hover)
function showAdditionalDetails() {
    var additionalDetails = document.getElementById("additionalDetails");
    additionalDetails.style.display = "block";
}

// Link the "Volunteer Now" button click event to show the form
document.addEventListener("DOMContentLoaded", function () {
    var volunteerButton = document.getElementById("volunteerButton");
    if (volunteerButton) {
        volunteerButton.addEventListener("click", showVolunteerForm);
    }

    // Link the form submission to the submitVolunteerForm function
    var volunteerForm = document.getElementById("volunteerForm");
    if (volunteerForm) {
        volunteerForm.addEventListener("submit", submitVolunteerForm);
    }

    // Link the interactivity function to an element (example: additionalDetails)
    var hoverElement = document.getElementById("hoverElement");
    if (hoverElement) {
        hoverElement.addEventListener("mouseover", showAdditionalDetails);
    }
});