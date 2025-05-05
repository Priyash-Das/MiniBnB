// * Self-executing function for Bootstrap form validation with custom password validation
// * Combines standard HTML5 validation with custom password complexity checks
(() => {
  // Enable strict mode to catch common coding mistakes
  "use strict";

  // Find all forms on the page that need validation
  const forms = document.querySelectorAll(".needs-validation");

  // Convert NodeList to Array and process each form
  Array.from(forms).forEach((form) => {
    // Add submit event listener to each form
    form.addEventListener(
      "submit",
      function (event) {
        // =============================================
        // CUSTOM PASSWORD VALIDATION SECTION
        // =============================================
        // Find password field within this specific form
        const passwordField = form.querySelector("#password");

        // Check password validity if field exists, otherwise assume valid (true)
        // This makes the code work for forms without password fields
        const passwordValid = passwordField
          ? checkPasswordRequirements(passwordField.value)
          : true;

        // =============================================
        // FORM VALIDATION LOGIC
        // =============================================
        // Check if either standard validation fails OR password is invalid
        if (!form.checkValidity() || !passwordValid) {
          // Prevent form submission if invalid
          event.preventDefault();
          // Stop event bubbling up the DOM
          event.stopPropagation();
        }

        // Add Bootstrap's validation styling class
        // This will display validation messages for invalid fields
        form.classList.add("was-validated");
      },
      false
    ); // Use capturing phase (false) for better performance
  });
})();

// ----------------------------------------------------------------------------------

// For error.ejs
// Staggered animation for error elements
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(
    ".error-container, .error-code, .error-message"
  );
  elements.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.1}s`;
  });
});

// ----------------------------------------------------------------------------------

// For signup.ejs
// New helper function to update password requirement indicators
function updateIndicator(symbolEl, wrapperEl, condition) {
  symbolEl.textContent = condition ? "✓" : "✗";
  wrapperEl.classList.remove("text-success", "text-danger");
  wrapperEl.classList.add(condition ? "text-success" : "text-danger");
}
// Password validation checks
function checkPasswordRequirements(password) {
  const hasMinLength = password.length >= 8;
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);

  updateIndicator(
    document.getElementById("lengthCheck"),
    document.getElementById("lengthCheckWrapper"),
    hasMinLength
  );
  updateIndicator(
    document.getElementById("upperCheck"),
    document.getElementById("upperCheckWrapper"),
    hasUpper
  );
  updateIndicator(
    document.getElementById("lowerCheck"),
    document.getElementById("lowerCheckWrapper"),
    hasLower
  );
  updateIndicator(
    document.getElementById("numberCheck"),
    document.getElementById("numberCheckWrapper"),
    hasNumber
  );

  return hasMinLength && hasUpper && hasLower && hasNumber;
}

// Real-time password validation
document.getElementById("password").addEventListener("input", function () {
  const password = this.value;
  checkPasswordRequirements(password);
});

// Password generator
document
  .getElementById("generatePassword")
  .addEventListener("click", function () {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let password = "";
    for (let i = 0; i < 12; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    const passwordField = document.getElementById("password");
    passwordField.value = password;
    passwordField.dispatchEvent(new Event("input")); // Trigger validation
  });

// Toggle password visibility when eye icon is clicked
const toggleBtn = document.getElementById("togglePassword");
if (toggleBtn) {
  toggleBtn.addEventListener("click", function () {
    const passwordField = document.getElementById("password");
    const icon = this.querySelector("i");

    if (passwordField.type === "password") {
      passwordField.type = "text";
      icon.classList.replace("bi-eye", "bi-eye-slash");
    } else {
      passwordField.type = "password";
      icon.classList.replace("bi-eye-slash", "bi-eye");
    }
  });
}

// Get references to password input and related elements
const passwordInput = document.getElementById("password");
const passwordContainer = document.querySelector(".password-container");
const inputGroupAppend = document.querySelector(".input-group-append");

// Check password validity on input and adjust styling
passwordInput.addEventListener("input", function () {
  // Check if password meets validation requirements
  const valid = passwordInput.checkValidity();
  // Toggle CSS classes based on validation state
  inputGroupAppend.classList.toggle("adjust-position", valid);
  passwordContainer.classList.toggle("adjust-position", valid);
});

// ----------------------------------------------------------------------------------
