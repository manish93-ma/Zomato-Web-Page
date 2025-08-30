document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector('input');
    
    searchInput.addEventListener('focus', function() {
        this.style.border = "2px solid #ffcc00"; // Change border color on focus
    });

    searchInput.addEventListener('blur', function() {
        this.style.border = "none"; // Remove border on blur
    });

    // Optional: Adding a simple search suggestion (mock)
    searchInput.addEventListener('input', function() {
        // This is a placeholder for future search logic
        console.log("Searching for: " + this.value);
    });
});
