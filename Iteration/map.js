
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