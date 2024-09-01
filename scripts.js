let scannedProducts = [];

// Mock product database
const productDatabase = {
    "123456": { name: "Soap", price: 20, weight: "50g", discount: "5%", expiry: "2024-12-31" },
    "789012": { name: "Shampoo", price: 120, weight: "200ml", discount: "10%", expiry: "2024-11-30" },
    "345678": { name: "Toothpaste", price: 45, weight: "100g", discount: "8%", expiry: "2024-10-15" }
};

function loadPage(page) {
    fetch(`html/${page}`)
        .then(response => response.text())
        .then(html => {
            document.getElementById('main-content').innerHTML = html;
            if (page === 'scanner.html') {
                document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?scanner')";
                clearScannerForm();
            }
        })
        .catch(error => console.error('Error loading page:', error));
}

function logout() {
    alert("You have been logged out.");
    window.location.href = 'login.html'; // Adjust as needed
}

// Add the remaining JavaScript functions here, like `addToCart`, `calculateTotal`, etc.

function showContainer(containerId) {
    const containers = document.querySelectorAll(".container");
    containers.forEach(container => container.style.display = "none");
    document.getElementById(containerId).style.display = "block";
}

function clearScannerForm() {
    document.getElementById("scanner-form").reset();
    document.getElementById("product-details").innerHTML = "";
}

// Event listeners for buttons, etc. should be added here
document.addEventListener("DOMContentLoaded", () => {
    // Initialize the page, if necessary
});
