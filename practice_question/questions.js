
//1. Write a Program to reverse a string in JavaScript.
function reverseString(str) {
  // Step 1: Use split("") to convert the string into an array of characters.
  // Why? The reverse() method works only on arrays, not strings.
  let charArray = str.split(""); // Example: "Hello JavaScript" -> ["H", "e", "l", "l", "o", " ", "J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

  // Step 2: Reverse the array of characters using reverse().
  // Why? This reverses the order of elements in the array.
  let reversedArray = charArray.reverse(); // Example: ["H", "e", "l", "l", "o", ...] -> ["t", "p", "i", "r", "c", "S", "a", "v", "a", "J", " ", "o", "l", "l", "e", "H"]

  // Step 3: Join the reversed array back into a string using join("").
  // Why? After reversing, we need to combine the characters into a single string.
  let reversedString = reversedArray.join(""); // Example: ["t", "p", "i", "r", "c", ...] -> "tpircSavaJ olleH"

  // Step 4: Return the reversed string.
  return reversedString;
}

// Test the function with a sample input.
console.log(reverseString("Hello JavaScript")); 
// Output: "tpircSavaJ olleH"

/* 
   Why use split(), reverse(), and join()?
   1. Strings in JavaScript are immutable, so we can't modify them directly.
   2. The reverse() method is specifically for arrays, not strings.
   3. split("") converts the string into an array of characters, allowing us to use reverse().
   4. join("") converts the reversed array back into a single string after reversing.
   5. This approach is simple and leverages built-in methods for clarity and efficiency.
*/

//without using function reverse the string
function reverseStr(str) {
  // Initialize an empty string to store the reversed result
  let reversed = "";

  // Loop through the string starting from the last character (index str.length - 1)
  // Continue the loop until the first character (index 0)
  for (let i = str.length - 1; i >= 0; i--) {
    // Append the character at the current index (str[i]) to the 'reversed' string
    reversed += str[i];
  }

  // After the loop ends, the 'reversed' string contains the input string in reverse order
  return reversed;
}

// Test the function with a sample input
console.log(reverseStr("hello")); 
// Output: "olleh"

/* 
   Explanation:
   1. Strings in JavaScript are immutable, so we can't modify them directly.
   2. This function constructs a new reversed string character by character.
   3. The loop starts at the last character (index str.length - 1) and ends at the first character (index 0).
   4. Each character is appended to the 'reversed' string using +=, building the reversed string step by step.
   5. This approach doesn't require converting the string into an array, avoiding the use of split(), reverse(), and join().
*/


//2.Write a Program to check whether a string is a palindrome string.
function isPalindrome(str){
  const reverseString =str.split().reverse().join();
  return str == reverseString;
}
console.log(isPalindrome("radar")); //true




//3.Find the largest number in an array in JavaScript.
function isLargest(nums){
  let largest = arr[0];
  for(let i = 0 ; i < arr.length ; i++){
    if(arr[i] > largest){
      largest = arr[i]
    }
  }
  return largest
}
let arr = [1,2,3,4,5]
console.log(`Largest number present in given array is ${isLargest(arr)}`);


//Find the largest number in an array in JavaScript , using function
function isLargest2(arr){
  let largest = Math.max(...arr)
  return largest
}
let arr2 = [100,344,544,344,989]
console.log(isLargest2(arr2))


// 4. How Remove the first element from an array in JavaScript?
function removeFirst(num){
  result = num.slice(1)
  return result
}
let arr3 = [1,2,3,4,5]
console.log(removeFirst(arr3));




//5. Write a Program to use a callback function?
// Define a function called `greet` that takes two parameters:
// - `name`: a string representing the name of a person.
// - `callback`: a function that will be called inside `greet`.
function greet(name, callback) {
  // Call the callback function and pass it a formatted message
  callback(`Hello, ${name}!`);
}

// Call the `greet` function with:
// - The name 'Geek'.
// - A callback function defined using an arrow function (`message => console.log(message)`).
greet('Geek', message => console.log(message));

// Explanation of the callback:
// - `message` is the argument passed to the callback function from inside `greet`.
// - The callback function logs the `message` to the console.


//6. Write a code to create an arrow function?
const add = (a, b) => a + b;
console.log(add(6, 2));


//Write a JavaScript program to display the current day and time in the following format. 
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
// Check for special cases when hour is 0
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