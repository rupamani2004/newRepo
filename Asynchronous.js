// timer function that takes duration (in ms) and a callback onComplete
function timer(duration, onComplete) {
  setTimeout(function () {
    const message = "Timer of " + duration + " ms finished";
    onComplete(message);  // call the callback with the message
  }, duration);
}

// Example usage:
timer(2000, function (msg) {
  console.log(msg);  // Output after 2 seconds: "Timer of 2000 ms finished"
});
