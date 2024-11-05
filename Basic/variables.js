const changeId = 1234
changeId = 456 
console.log(changeId); // cant change the value of const if already declared 

let fname; //value will be undefined , because value not assigned to this variable
console.log(fname);
fname = 'Jho'
console.log(fname); //here the jho will be stored in fname

var lname = 'doe'
console.log(lname);
var lname = 'sac'
console.log(lname);
/* in JavaScript, when you use the var keyword to declare a variable, you can redeclare the variable within the same scope without causing an error. This behavior is due to how variable declarations and hoisting work in JavaScript. */

let ffname = 'John';
let lname;
lname = ffname ;
console.log(lname);
//here we are declaring to variable but initializing only one variable and copying the value of initialized variable into another value.


let this = 'hello';
let this = 'hi';
// this will throw syntax error as we cant declare the variable with the same name.

let userName = 'nick'; //this case called camel case , where first letter is small and another is capital

let user123 = 'fury';
let _ = 'hi';
let $ = 'ho';
let _123 = 'haha';
let $ahsd123 = 'can';
//we can declare variable like this

let 1a = '123';
let hi-hah = 'rat';
//these will throw error as we cant declare the variable like this , we cant use hyphen and number before declaring any variable .


// Note : we can use any other language also to declare any variable like chinese , japanese , hindi and many more . We also don't use keywords as a variable name like let , const , if , else , etc.

declare = 'happy';
console.log(declare);
//we can also declare variable in js without using let , var , const if we are not using strict method

// NOTE 

// => // is used for single line comment , javascript ignore these comments and it didn't effect our code


/*  */
/*
is 
used for multiline comments
*/