
// The map() function in JavaScript is an array method that creates a new array populated with the results of calling a provided function on every element in the calling array. It is often used for transforming data by applying a specific operation to each element in an array.

// How map() Works:
// Takes a Callback Function: The map() method requires a callback function as its argument. This callback function is executed once for each element in the array.

// Does Not Mutate the Original Array: Instead of modifying the original array, it creates and returns a new array.

// Callback Arguments: The callback function can take up to three arguments:

// currentValue: The current element being processed in the array.

// index (optional): The index of the current element.

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = num.map((newNum) => {
  return newNum + 2;
});

console.log(result); // Output: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12]


const num2 = [10,20,30,40,50]
const result2 = num2.map((newNum2) => {
  return newNum2 * 10
})
console.log(result2);

// Step-by-Step Explanation:
// Original Array: num contains [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].

// Callback Function:

// The callback takes newNum (the current element of the array) as input.

// Adds 2 to newNum and returns it.

// Transformation:

// Each element of the array is processed:

// 1 + 2 = 3

// 2 + 2 = 4

// ...

// 10 + 2 = 12.

// New Array:

// The map() method returns a new array with the transformed values: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12].

// Common Use Cases:
// Transformation: Convert an array of numbers to their squares:
const nums = [1, 2, 3];
const squares = nums.map(x => x * x);
console.log(squares); // [1, 4, 9]

// Extract Properties: Extract specific properties from an array of objects:
const users = [{ name: "Alice" }, { name: "Bob" }];
const names = users.map(user => user.name);
console.log(names); // ["Alice", "Bob"]


// Generate New Data: Create a new array with formatted data:
const prices = [5, 10, 15];
const priceTags = prices.map(price => `$${price}`);
console.log(priceTags); // ["$5", "$10", "$15"]

// In summary, map() is a powerful tool for processing and transforming arrays in JavaScript, offering a clean and functional way to create new data structures.