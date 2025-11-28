// Function to output a greeting
function displayMessage(name) {
  console.log("Hello, " + name + "!");
}

// Function that simulates fetching a username and then calls the callback
function getUserInput(callback) {
  setTimeout(function () {
    const username = "Alice"; // simulated fetched username
    callback(username);
  }, 1000); // 1 second delay
}

// Call getUserInput with displayMessage as the callback
getUserInput(displayMessage);
