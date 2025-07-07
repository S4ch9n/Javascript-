//1 . Write a Program to reverse a string in JavaScript.
function reverseStr(char){
  let reverse = char.split("").reverse().join("");
  return reverse;
}
let char = "Hello";
let resultChar = reverseStr(char);
console.log(`The reverse of given string ${char} is : ${resultChar}`);


// 2. without using function
function reverstr2(char2){
  let reverse = "";
  for(let i = char2.length - 1 ; i >= 0 ; i--){
    reverse += char2[i];
  }
  return reverse;
}
let char2 = "John";
let char2Result = reverstr2(char2)
console.log(`The reverse of given string ${char2} is : ${char2Result}`)

//reverse array
function reverseNum(arr){
  let reverse = arr.reverse();
  return reverse;
}
let arr = [1,2,3,4,5];
let numResult = reverseNum(arr);
console.log(`Reverse number of [${arr}] is : [${numResult}]`);


//withou using function reverse an array
function reverseArray(revArr) {
  let reverse = [];
  for (let i = revArr.length - 1; i >= 0; i--) {
    reverse.push(revArr[i]);
  }
  return reverse;
}

let revArr = [1, 2, 3, 4, 5];
let revArrResult = reverseArray(revArr);
console.log(`The reverse of the given array [${revArr}] without using any function is: [${revArrResult}]`);


//5. Write a Program to use a callback function?
function greet(name, callback) {
  // Call the callback function and pass it a formatted message
  callback(`Hello, ${name}!`);
}

greet('Geek', message => console.log(message));



//6. Write a code to create an arrow function?
const add = (a, b) => a + b;
console.log(add(6, 2));


// 7. Write a JavaScript program to display the current day and time in the following format. 
// Get the current date and time
var today = new Date();
// Get the day of the week (0-6, where 0 is Sunday and 6 is Saturday)
var day = today.getDay();
// Array of day names
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// Display the current day
console.log("Today is: " + daylist[day] + ".");
// Get the current hour, minute, and second
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
// Determine if it's AM or PM
var prepand = (hour >= 12) ? " PM " : " AM ";
// Convert 24-hour format to 12-hour format
hour = (hour >= 12) ? hour - 12 : hour;
// Check for special cases when hour is 0
if (hour === 0 && prepand === ' PM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Noon';
    } else {
        hour = 12;
        prepand = ' PM';
    }
}
// 8.  Check for special cases when hour is 0
if (hour === 0 && prepand === ' AM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Midnight';
    } else {
        hour = 12;
        prepand = ' AM';
    }
}
// Display the current time
console.log("Current Time: " + hour + prepand + " : " + minute + " : " + second)


// How to concatenate two strings in JavaScript?
let str1 = "Hello";
let str2 = "World";

let combine = str1 + " " +  str2;

console.log(combine);


//9 . the output of the given code
console.log([1, 2, 3].reduce((a, b) => a + b));//adds numbers in the array, together using the reduce mehtod

//output of the given code
console.log('gfg'.repeat(3)); //create a new string by repeating orignal string 3 time.


//10. sum of an array
function sum(arr1){
  let sum = 0;
  for(let i = 0 ; i < arr1.length ; i++){
    sum += arr1[i];
  }
  return sum;
}
let arr1 = [1,2,3,4,5];
let result2 = sum(arr1);
console.log(`The sum of element in the given array is : ${result2}`)




//'null' represents the absence of any value and 'undefined' represents a variable that has been declared but not assigned any value. The answer is true because JavaScript treats them equal because of '==' loose equality operator.
console.log(null == undefined);