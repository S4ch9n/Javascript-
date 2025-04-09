// reduce Method in JavaScript
// The reduce method is used to apply a function to an accumulator and each element of the array, reducing the array to a single value. It's a powerful method for aggregating data or performing operations like summing, finding averages, or even flattening arrays.
//syntax
// array.reduce(callback(accumulator, currentValue, index, array), initialValue)

// callback: A function that is executed for each element in the array.

// accumulator: The accumulated result from the previous callback execution.

// currentValue: The current element being processed.

// index (optional): The index of the current element.

// array (optional): The original array.

// initialValue (optional): The initial value of the accumulator. If not provided, the first element of the array is used as the initial value, and the iteration starts from the second element.

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15
// Explanation:
// Initial State: accumulator = 0 (because initialValue is 0).

// Each element is added to accumulator:

// Step 1: 0 + 1 = 1

// Step 2: 1 + 2 = 3

// Step 3: 3 + 3 = 6

// Step 4: 6 + 4 = 10

// Step 5: 10 + 5 = 15


//Example 2: Flattening an Array
const nested = [[1, 2], [3, 4], [5]];
const flattened = nested.reduce((accumulator, currentValue) => {
  return accumulator.concat(currentValue);
}, []);

console.log(flattened); // Output: [1, 2, 3, 4, 5]

// Explanation:
// accumulator starts as an empty array ([]).

// For each currentValue, the concat method adds its elements to the accumulator.



// Example 3: Counting Occurrences

const items = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const count = items.reduce((accumulator, currentValue) => {
  accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
  return accumulator;
}, {});

console.log(count);
// Output: { apple: 3, banana: 2, orange: 1 }

// Explanation:
// accumulator starts as an empty object ({}).

// For each currentValue, increment the count in the object.

// Key Points About reduce:
// Flexible Output:

// The reduce method is not limited to numbers. You can use it to generate arrays, objects, or other data structures.

// Initial Value Matters:

// If you don't provide an initialValue, the first array element becomes the initial accumulator, and the iteration starts from the second element.

// It’s safer to always provide an initialValue to avoid unexpected results.

// Error Handling:

// If the array is empty and no initialValue is provided, reduce throws a TypeError.

// When to Use reduce:
// When you need to derive a single value (like a sum, average, or count) from an array.

// When transforming or aggregating data in a complex way, like flattening or grouping elements.

// reduce is one of the most versatile array methods, but it can be tricky to read and debug. For simpler use cases, consider alternatives like map, filter, or forEach.