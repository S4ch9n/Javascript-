//arrow function ()=>{}
// let func = (arg1 , arg2 ,...,argN) => expression

const res = require("express/lib/response");

 
// this in arrow function   
const code = () => {
  let username = "code"
  // console.log(this); //{} we cant access this in the arrow function
  console.log(this.username); //undefined
}
code()



//arrow function
const addNum = (num1 , num2)=>{
  return num1 + num2
}
console.log(addNum(2,3));


const num =(n1 , n2) => n1 + n2;
console.log(num(5,5));

//If we have only one argument, then parentheses around parameters can be omitted, making that even shorter.

let single = num3 => num3;
console.log(single(4));


const username = () => console.log("no arguments are present");
console.log(username());


const fname = (name) => {
  return `My name is ${name} `;
};

// Call the function and store the result
const result2 = fname('john');

// Output the result
console.log(result2); // My name is john

//Arrow functions can be used in the same way as Function Expressions.
let age = 18 
let result = (age >= 18) ? 
()=> console.log("user is adult") :
() => console.log("user is teenager");
result();

//multiline arrow function 
let sum = (a, b) => {  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};

console.log( sum(1, 2) ); // 3
//implicit return
const iReturn = (num1 , num2) =>  num1 + num2
// const iReturn = (num1 , num2) =>  (num1 + num2)
// in both we don't have to write return 

console.log(iReturn(1,2)); // 3



///object 
const obj = (num1 , num2) => ({username : 'John'})
console.log(obj(1,2)); //{ username: 'John' }

//Rewrite with arrow functions
// Replace Function Expressions with arrow functions in the code below:

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Do you agree?",
//   function() { alert("You agreed."); },
//   function() { alert("You canceled the execution."); }
// );

let ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
};

ask(
  "Do you agree?",
  () => console.log("You agreed."),
  () => console.log("You canceled the execution.")
);

