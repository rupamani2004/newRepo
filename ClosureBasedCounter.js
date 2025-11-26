// Question 1: Closure-Based Counter Implementation
function createCounter() {
    let count = 0;
    return {
        increment: function() {
            count++;
            console.log("Current count:", count);
        },
        decrement: function() {
            count--;
            console.log("Current count:", count);
        },
        display: function() {
            console.log("Current count:", count);
        }
    };
}

// Example Usage for Counter
const counter = createCounter();
counter.increment(); 
counter.increment(); 
counter.decrement(); 
counter.display();   

// Question 2: Simulating Private Variables with Closures (Bank Account)
function createBankAccount() {
    let balance = 500;
    return {
        deposit: function(amount) {
            if (amount > 0) {
                balance += amount;
                console.log("Deposited:", amount, "New Balance:", balance);
            }
        },
        withdraw: function(amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                console.log("Withdrawn:", amount, "New Balance:", balance);
            } else {
                console.log("Insufficient balance");
            }
        },
        checkBalance: function() {
            console.log("Balance:", balance);
        }
    };
}

// Example Usage for Bank Account
const account = createBankAccount();
account.deposit(250);     
account.withdraw(200);    
account.withdraw(800);    
account.checkBalance();   
