// Step 1: Declare a global variable 'age' and assign it a value.
var age = 25;

// Step 2: Create a function 'displayAge' that logs the value of 'age'.
function displayAge() {
    console.log("Current age is:", age);
}

// Step 3: Create a second function 'changeAge', which changes the value of 'age'.
function changeAge() {
    age = 30; // Update the global variable
    console.log("Age after update is:", age);
}

// Step 4: Call displayAge and changeAge and check how the value of age is updated.
displayAge();    // Output: Current age is: 25
changeAge();     // Output: Age after update is: 30
displayAge();    // Output: Current age is: 30
