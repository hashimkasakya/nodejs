document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Fetch username and password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Here you can perform additional validation before signup if needed
    
    // For demonstration purposes, just redirect to login page
    window.location.href = "login_page.html";
  });