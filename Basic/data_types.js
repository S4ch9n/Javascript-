"use strict"; // treat all JS code as newer version


//Primitive datatypes

//number
let number = 1223
console.log(number);
console.log('Type of number is : ' + typeof number);


//string
let name = 'Jhon';
console.log(name);
console.log('Type of name is : ' + typeof name);

//boolean
 let isBoolean = true;
 console.log(isBoolean);
console.log('Type of isBoolean is : ' + typeof isBoolean);


 //bigInit
 let bigInit = 1749379048028832489038908384n
 console.log(bigInit);
console.log('Type of bigInit is : ' + typeof bigInit);


 //null => standalone value
 let nullValue = null
 console.log(nullValue);
console.log('Type of nullValue is : ' + typeof  null);
// or null returns "object" – this is an error in the language, it’s not actually an object.

 
 // undefined 
 let state; //variable is declared but the value not assigned
 console.log(state);
console.log('Type of state is : ' + typeof state);


 //symbol => for unique 
/*  in JavaScript, when you use the var keyword to declare a variable, you can redeclare the variable within the same scope without causing an error. This behavior is due to how variable declarations and hoisting work in JavaScript. */


//  these all are primitive datatypes 


//there is also another type of datatypes called non-primitive data types :
//Object




//assignments
let fname = "Rahul";

// the expression is a number 1
alert( `hello ${1}` ); // hello 1

// the expression is a string "name"
alert( `hello ${"name"}` ); // hello name

// the expression is a variable, embed it
alert( `hello ${fname}` ); // hello Rahul

