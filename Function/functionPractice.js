//simple function declaration
function printMe(){
  console.log("function declaration");
}
printMe();

//function declaration with parameter
function printMeAgain(param1){
  console.log(param1);
}
printMeAgain("function declaration with parameter")

//function expression
const printMeAgainWithExpression = function(){
  console.log("function expression");
}
printMeAgainWithExpression();

//function expression with parameter 
const printMeAgainWithExpressionWithParameter = function(param){
  console.log(param);
}
printMeAgainWithExpressionWithParameter("function expression with passing argument");

//function with return statement
function printUSingReturn(a,b){
  return a + b;
}
console.log(printUSingReturn(5,6));

//
function printUSingReturn2(a, b){
  let total = a + b;
  return total;
}
let result = printUSingReturn(1,2);
console.log(result);


//default parameter
function add(a , b = 0){
  return 2 * (a + b);
}
console.log(add(2));
//we don't pass any argument or value to the b , so it is taking b as 0 , as a default parameter

//rest operator : The rest operator in JavaScript is represented by three dots (...) and is used to collect all remaining elements of an array, object, or function arguments into a single array or object. It is primarily useful for handling situations where the number of arguments or properties is dynamic.

//a function declaration can have only one rest operator , and it must be the last parameter you define in the function 
function restOperator(a,...b){
  console.log(a);
  console.log(b);
}
restOperator(1,2,3,4,5,6,7,8,9,10); //1 will be stored in a , and the rest of value from 2 - 10 will be stored in the b , in array format 


//arrow function
const sub = (a,b) => a - b ; //don't have to use {} , if we have only one statement
console.log(sub(15,6));

//nested function
function outer(){
  console.log("outer function");
  function inner(){
    console.log("inner function");
  }
  inner();
}
outer();

//nested function with parameters
function outerWithParam(a,b){
  console.log(a , b);
  function innerWithParam(x,y){
    console.log(x,y);
  }
  innerWithParam(1,2);
}
outerWithParam(2,5)


//scope
//global scope
//variable declared outside any function have global scope , meaning they can be accessed anywhere in the script.These variable are accessible by all function including nested function
let a = 10;
let b = 20;
let c = 30;

function printVariables(){
  console.log(a);
  console.log(b);
  console.log(c);
}
printVariables();

//local scope  : variable declared within a function have local scope , meaning they are only accessible within that function (including any nested function).Local variable take precedence over global variable with the same name function

// function printVariable2(){
//   let x = 10;
//   let y = 20;
//   let z = 30;
// }
// console.log(x);
// console.log(y);
// console.log(z);
//will throw undefined to all value


// The outerFunc function creates a closure by returning an inner function (innerFunc).
// This allows the inner function to "remember" and access the variable `x` from its enclosing scope, 
// even after outerFunc has finished executing.
function outerFunc(x) {
  // innerFunc is defined inside outerFunc and has access to `x` because of closure.
  function innerFunc(y) {
    // innerFunc can access `x` (from the outer function's scope) and `y` (its own parameter).
    return x + y;
  }
  // Returning the inner function creates a closure where `x` is retained in memory.
  return innerFunc;
}

// When we call outerFunc(10), it executes and returns the innerFunc, 
// capturing the value of `x` (10) in the closure.
const outerReturn = outerFunc(10); 

// Now, outerReturn refers to innerFunc, which still has access to the `x` variable (value 10) 
// from when outerFunc was called. 
// Even though outerFunc's execution has ended, `x` is preserved in the closure.
console.log(outerReturn(5)); // Output: 15 (10 + 5)




//callback function
function foo(bar) {
  // This is the foo function, which takes another function (bar) as an argument.
  console.log("This is foo function");
  // The bar function is then called inside the foo function.
  bar();
}

// Calling foo and passing an anonymous function as the argument.
// This demonstrates how a function can be passed as an argument to another function.
foo(function() {
  console.log("This is bar function");
});


// Function to simulate user authentication
function authenticateUser(username, password, callback) {
  console.log("Authenticating user...");

  // Simulating a delay to represent an async operation
  setTimeout(() => {
    if (username === "admin" && password === "12345") {
      console.log("Authentication successful!");
      
      // If authentication is successful, execute the callback
      callback(null, "Welcome, admin!");
    } else {
      console.log("Authentication failed.");
      
      // If authentication fails, execute the callback with an error
      callback("Invalid username or password.", null);
    }
  }, 2000); // 2-second delay
}

// Callback function to handle the result of authentication
function handleAuthentication(error, message) {
  if (error) {
    console.error(`Error: ${error}`);
  } else {
    console.log(`Success: ${message}`);
  }
}

// Using the authenticateUser function and passing handleAuthentication as a callback
authenticateUser("admin", "12345", handleAuthentication); // Successful login
authenticateUser("user", "wrong-password", handleAuthentication); // Failed login



//high order function
// A higher-order function is a function that does one or both of the following:
// Takes one or more functions as arguments.
// Returns a function as its result.

// Higher-order function that takes a function as an argument
function calculate(a, b, operation) {
  return operation(a, b); // Executes the function passed as 'operation'
}

// Regular functions to be used as arguments
function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

// Using the higher-order function
console.log(calculate(5, 3, add));       // Output: 8
console.log(calculate(5, 3, multiply));  // Output: 15



// Pure Function: A function that, given the same input, will always produce the same output
// and has no side effects (does not modify external state or rely on external variables).

function sayGreeting(name) {
  // Returns a string based solely on the input `name`.
  return `Hello ${name}`;
}

console.log(sayGreeting("John")); // Output: Hello John


// Impure Function: A function is impure if it relies on or modifies external state, 
// causing side effects that may make the output unpredictable in some contexts.
let greeting = 'Hello'; // External state

function sayGreeting2(name) {
  // Modifying the external variable 'greeting' is a side effect, making this function impure.
  greeting = 'hii';
  return `${greeting} ${name}`;
}

console.log(sayGreeting2('Nick')); // Output: hii Nick
console.log(greeting); // The external variable 'greeting' is now changed to 'hii'.
