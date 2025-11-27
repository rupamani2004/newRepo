// Simulate a loading screen using setInterval

let secondsPassed = 0;

const intervalId = setInterval(function () {
  console.log("Loading...");
  secondsPassed++;

  if (secondsPassed === 5) {
    clearInterval(intervalId);        // stop repeating after 5 seconds
    console.log("Loaded successfully!");
  }
}, 1000); // runs every 1000 ms = 1 second
