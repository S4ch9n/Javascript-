//calback : a function that is passed as an argument to another function .

const { func } = require("prop-types");

// used to handle asynchronos operation:
// 1. Reading a file.
// 2. Network reuests.
// 3. Interacting with database.

// "Hey , when you are done, call this next."

//example
function hello(callback){
  console.log("hello");
  callback()
}
function goodbye(){
  console.log("Goodbye");
}
hello(goodbye);


//example 2

function sum(callback , x, y){
  let result = x + y;
  callback(result)
}
function displaySum(result){
  console.log(result)
}
sum(displaySum , 2 ,3);



// This is a callback function example
function ask(question, yes, no) {
  // 'question': The message to display in the confirmation dialog.
  // 'yes': A function reference that will be called if the user agrees (clicks "OK").
  // 'no': A function reference that will be called if the user disagrees (clicks "Cancel").

  // The built-in 'confirm' function displays a dialog box with 'OK' and 'Cancel' buttons.
  // If the user clicks 'OK', 'confirm' returns true; otherwise, it returns false.
  if (confirm(question)) {
    yes(); // Call the function passed as the 'yes' argument (e.g., 'showOk').
  } else {
    no(); // Call the function passed as the 'no' argument (e.g., 'showCancel').
  }
}

// Function to execute when the user agrees
function showOk() {
  console.log("You agreed"); // This message will be logged if the user clicks "OK".
}

// Function to execute when the user disagrees
function showCancel() {
  console.log("You rejected the execution"); // This message will be logged if the user clicks "Cancel".
}

// Call 'ask' with a question, and the two callback functions ('showOk' for yes, 'showCancel' for no)
ask("Do you agree?", showOk, showCancel); 

// Explanation of the flow:
// 1. When 'ask' is called, the 'showOk' function is passed as the 'yes' parameter, 
//    and the 'showCancel' function is passed as the 'no' parameter.
// 2. If 'confirm(question)' is true (user clicks "OK"), 'yes()' is called, which runs 'showOk'.
// 3. If 'confirm(question)' is false (user clicks "Cancel"), 'no()' is called, which runs 'showCancel'.




//function declaration vs function expression
// Function Declaration: a function, declared as a separate statement, in the main code flow:
// Function Declaration
function sum(a, b) {
  return a + b;
}


// Function Expression: a function, created inside an expression or inside another syntax construct.
// Function Expression
let sum = function(a, b) {
  return a + b;
};

//
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  function() { alert("Hello!"); } :
  function() { alert("Greetings!"); };

welcome(); //


//task 2
// A function that takes a callback as an argument
function processUserInput(name, callback) {
  console.log(`Hello, ${name}!`);
  callback();
}

// Callback function
function displayThanks() {
  console.log("Thank you for providing your name!");
}

// Calling the function with the callback
processUserInput("Alice", displayThanks);
