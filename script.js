// Get the user's IP address
const userIP = '192.149.67.147'; // Replace with your desired IP address

// Function to close the tab
function closeTab() {
  window.close(); // Close the current tab
}

// Check if the user's IP matches the specified IP address
if (userIP === window.location.hostname) {
  closeTab(); // Close the tab if the IP matches
}
