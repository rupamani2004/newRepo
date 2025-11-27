const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Step 1: Ask the user for countdown time
rl.question("Enter number of seconds for countdown: ", (input) => {
  let seconds = Number(input);
  let stopPressed = false;

  console.log("Countdown Started! Press 's' anytime to stop.");

  // Step 2: Detect key press using setTimeout
  setTimeout(() => {
    process.stdin.on("data", (key) => {
      if (key.toString().trim() === "s") {
        stopPressed = true;
      }
    });
  }, 1000);

  // Step 3: Start countdown using setInterval
  let timer = setInterval(() => {
    if (stopPressed) {
      console.log("Countdown Stopped by User!");
      clearInterval(timer);
      rl.close();
      process.exit();
    }

    console.log("Time left:", seconds, "seconds");

    if (seconds === 0) {
      console.log("Countdown Complete!");
      clearInterval(timer);
      rl.close();
      process.exit();
    }

    seconds--;
  }, 1000);
});
