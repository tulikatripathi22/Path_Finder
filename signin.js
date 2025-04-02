// DOM Elements
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const signInForm = document.querySelector(".sign-in-form");
const signUpForm = document.querySelector(".sign-up-form");
const signinError = document.getElementById("signin-error");
const signupError = document.getElementById("signup-error");

// User database (in a real app, this would be stored on a server)
let users = JSON.parse(localStorage.getItem("users")) || [];

// Check if we're coming from the home page with a specific action
document.addEventListener("DOMContentLoaded", () => {
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const action = urlParams.get('action');
    const redirect = urlParams.get('redirect');
    
    // Store redirect URL if present
    if (redirect) {
        localStorage.setItem("redirectAfterLogin", redirect);
    }
    
    // Switch to sign up mode if requested
    if (action === 'signup') {
        container.classList.add("sign-up-mode");
    }
});

// Toggle between sign in and sign up
sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

// Sign Up Form Submission
signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Get form values
    const username = document.getElementById("signup-username").value.trim();
    const email = document.getElementById("signup-email").value.trim();
    const password = document.getElementById("signup-password").value;
    const confirmPassword = document.getElementById("signup-confirm-password").value;
    
    // Clear previous error
    signupError.textContent = "";
    
    // Validate form
    if (password !== confirmPassword) {
        signupError.textContent = "Passwords do not match";
        return;
    }
    
    // Check if username already exists
    if (users.some(user => user.username === username)) {
        signupError.textContent = "Username already exists";
        return;
    }
    
    // Check if email already exists
    if (users.some(user => user.email === email)) {
        signupError.textContent = "Email already exists";
        return;
    }
    
    // Password validation
    if (password.length < 6) {
        signupError.textContent = "Password must be at least 6 characters long";
        return;
    }
    
    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        signupError.textContent = "Please enter a valid email address";
        return;
    }
    
    // Create new user
    const newUser = {
        username,
        email,
        password: hashPassword(password), // In a real app, you should hash passwords
    };
    
    // Save user
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    
    // Set as logged in
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    
    // Show success message
    signupError.textContent = "Account created successfully!";
    signupError.style.color = "green";
    
    // Clear form
    signUpForm.reset();
    
    // Redirect to dashboard or stored redirect URL
    const redirectUrl = localStorage.getItem("redirectAfterLogin") || "dashboard.html";
    
    setTimeout(() => {
        window.location.href = redirectUrl;
    }, 1500);
});

// Sign In Form Submission
signInForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Get form values
    const username = document.getElementById("login-username").value.trim();
    const password = document.getElementById("login-password").value;
    
    // Clear previous error
    signinError.textContent = "";
    
    // Find user
    const user = users.find(user => user.username === username);
    
    // Check if user exists and password is correct
    if (!user || user.password !== hashPassword(password)) {
        signinError.textContent = "Invalid username or password";
        return;
    }
    
    // Save login status - set variables needed by dashboard.js
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", user.username);
    localStorage.setItem("email", user.email);
    
    // Show success message
    signinError.textContent = "Login successful!";
    signinError.style.color = "green";
    
    // Redirect to dashboard or stored redirect URL
    const redirectUrl = localStorage.getItem("redirectAfterLogin") || "dashboard.html";
    localStorage.removeItem("redirectAfterLogin"); // Clear the redirect after using it
    
    setTimeout(() => {
        window.location.href = redirectUrl;
    }, 1500);
});

// Simple password hashing function (NOT secure, just for demo purposes)
// In a real app, use a proper hashing library
function hashPassword(password) {
    let hash = 0;
    if (password.length === 0) return hash;
    
    for (let i = 0; i < password.length; i++) {
        const char = password.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    
    return hash.toString();
}

// Check if user is already logged in
function checkLoggedInStatus() {
    if (localStorage.getItem("isLoggedIn") === "true") {
        // User is already logged in, redirect to dashboard or stored redirect URL
        const redirectUrl = localStorage.getItem("redirectAfterLogin") || "dashboard.html";
        localStorage.removeItem("redirectAfterLogin"); // Clear the redirect after using it
        window.location.href = redirectUrl;
    }
}

// Run on page load
checkLoggedInStatus();