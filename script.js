document.addEventListener("DOMContentLoaded", function () {
  // Step 1: Form Selection
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  // Step 2: Form Submission and Event Prevention
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Step 3: Input Retrieval and Trimming
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Step 4: Validation Logic
    let isValid = true; // Overall validation status
    const messages = []; // Array to store error messages

    // Username Validation
    if (username.length < 3) {
      isValid = false;
      messages.push("Username must be at least 3 characters long.");
    }

    // Email Validation
    if (!email.includes("@") || !email.includes(".")) {
      isValid = false;
      messages.push("Please enter a valid email address.");
    }

    // Password Validation
    if (password.length < 8) {
      isValid = false;
      messages.push("Password must be at least 8 characters long.");
    }

    // Step 5: Displaying Feedback
    feedbackDiv.style.display = "block"; // Make feedback division visible

    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745"; // Success color (green)
    } else {
      feedbackDiv.innerHTML = messages.join("<br>"); // Display error messages
      feedbackDiv.style.color = "#dc3545"; // Error color (red)
    }
  });
});
