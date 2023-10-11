// Get the user's IP address
const userIP = '192.149.67.147'; // Replace with your desired IP address

// Function to display an alert message
function showAlert() {
  alert('Access denied. You are not allowed to access this website.'); // Display the alert message
}

// Check if the user's IP matches the specified IP address
if (userIP === window.location.hostname) {
  showAlert(); // Display the alert if the IP matches
}
