//function : Quite often we need to perform a similar action in many places of the script.
//syntax
function name(parameter1, parameter2, ... parameterN) {
  // body
 }


 //function declaration
function hello(){
  console.log('Hello function');
}
hello()
//Hello function


//local variable  : A variable declare inside a function is only visible inside a function
function showMessage(){
  let message = "Hello my name is abc "
  console.log(message);
}
showMessage()
// console.log(message); here the message will not print , because message is local to that variable


//outer variable : A function can access outer variable as well
let fname = 'John'
function userName(){
  console.log("hello " + fname);
}
userName();

//the function has full access to that variable , we can access it as well
let cname = 'Ajax';
function changeOuter(){
  cname = 'JSoN';
  // console.log("hello " + cname);
}
console.log('before calling the function , the value of cname is : ' , cname);
changeOuter();
console.log('after calling the function , the value of cname is : ',cname);

//If a same-named variable is declared inside the function then it shadows the outer one. For instance, in the code below the function uses the local userName. The outer one is ignored:
let userName2 = 'Nick';
function sameName(){
  let userName2 = 'Fury';
  let message = "hello , " + userName2;
  console.log(message);
}
sameName();
console.log(userName2);

//parameter and arguments
function addNumbers(num1 , num2){ //num1 and num2 is parameter
  console.log(num1 + num2);
}
addNumbers(3 , 4) //7
//3 and 4 is argument that pass into num1 and num2
//7

//
function getMessage(from, text) { // Parameters (temporary placeholders for the actual values)
  console.log(from + " : " + text); // Logs a message combining the sender and the text
}

getMessage("Nick", "Hello"); // Arguments (actual values passed to the parameters)
getMessage("Jasmine", "hii"); // Another example of calling the function with arguments


//return
function addNum(n1 , n2){
  return n1 + n2
}
const result = addNum(10,5)
console.log(result); //15
//The directive return can be in any place of the function. When the execution reaches it, the function stops, and the value is returned to the calling code (assigned to result above).

//occurrences of return in single function 


function checkAge(age){
  if(age >= 18){
    return true;
  }else{
    return confirm("Have permission or not ?")
  }
}
let age;
age = +prompt("enter you age : ");
if(checkAge(age)){
  console.log("Valid");
}else{
  console.log("Not valid");
}


//A function with an empty return or without it returns undefined
// If a function does not return a value, it is the same as if it returns undefined:
function doNothing() { /* empty */ }

console.log( doNothing() === undefined ); // true

function haveNothing(){

}
console.log(haveNothing()); //undefined


//return with template literals
function userMessage(username){
  return `${username} login` 
}
console.log(userMessage('John')); //John login





//default value
function user(fname = 'John'){ //if we will not pass any argument to the user or our parameter then fname will take 'John' as a default .
  return `${fname} is learning programming`
}
console.log(user('Kite')); //Kite is learning programming

//
function getMessage(from, text = "if no argument is given, this will add") { 
  // Parameters: 'from' is required, 'text' has a default value
  console.log(from + " , " + text); // Logs a message combining 'from' and 'text'
}
getMessage("Dis"); // 'from' is provided, 'text' uses its default value


//
function showMessage(from, text = anotherFunction()) {
  // anotherFunction() only executed if no text given
  // its result becomes the value of text
}
//Evaluation of default parameters
// In JavaScript, a default parameter is evaluated every time the function is called without the respective parameter.
// In the example above, anotherFunction() isn’t called at all, if the text parameter is provided.
// On the other hand, it’s independently called every time when text is missing.


//function with nullish operator
function showCount(count) {
  // if count is undefined or null, show "unknown"
  alert(count ?? "unknown");
}

showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown


//rest operator(...)
function restOperator(...num1){
  return num1
}
console.log(restOperator(1,2,3,4)); //[ 1, 2, 3, 4 ]



//function in object 
const user1 =  {
  username : 'John',
  password : 1234
}
// function funInObj(obj){
//   return `username is ${obj.username} and his password is ${obj.password} `
// }
// console.log(funInObj(user1)); //username is John and his password is 1234

function funInObj(obj){
 console.log(`username is ${obj.username} and his password is ${obj.password}`)
}
funInObj(user1) //username is John and his password is 1234



//function in array
const arr = [10,20,30,40]
function thirdValue(getValue){
  return getValue[2] //will get the value of index 2
}
console.log(thirdValue(arr));



//We can also print array like this
function arr2(getValue){
  return getValue[1] //will get the value of index 1
}
console.log(arr2([10,20,30,40]));


//function expression
addOne(5) // in function expression we can call the function before declaration / initialization
function addOne(num){
  return num + 1
}



//function expression 
// addTwo(5)
// in function expression we cant call the function , before declaration / initialization
const addTwo = function(num){
  return num + 1
}