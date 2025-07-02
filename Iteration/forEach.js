// forEach Method in JavaScript
// The forEach method is used to execute a provided function once for each array element. It does not return a new array or any value; it's purely used for iterating and performing operations on each element.

//syntax
array.forEach(callback(element, index, array), thisArg)


// some example for forEach
let numbers = [1,2,3,4,5];
numbers.forEach(cube);
numbers.forEach(display);

function double(element , index , array){
  array[index] = element * 2;
}
function triple(element , index , array){
    array[index] = element * 3;
}
function square(element , index , array){
    array[index] = Math.pow(element , 2)
}
function cube(element , index , array){
    array[index] = Math.pow(element , 3);
}
function display(element){
    console.log(element)
}

//simple iteration forEach
const arr = ['nick', 'fury', 'john'];

arr.forEach((result) => {
  console.log(result);
});
// Output:
// nick
// fury
// john


// Explanation:
// The forEach method iterates over each element in the arr array.

// For each element, the callback logs the value to the console.


// Example 2: Finding Greater Numbers with forEach
// You can use forEach to perform conditional operations, such as finding numbers greater than a certain value.
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = [];
num.forEach((newNum) => {
  if (newNum > 4) {
    result.push(newNum);
  }
});
console.log(result); // Output: [5, 6, 7, 8, 9, 10]
// Explanation:

// forEach iterates over each element in the num array.

// For each newNum, the condition newNum > 4 is checked.

// If true, newNum is added to the result array using the push method.

// After the loop, the result array contains all numbers greater than 4.



// Key Features of forEach:
// Does Not Return a Value:

// Unlike methods like map or filter, forEach does not create or return a new array.

// It simply executes the provided function for each element.

// Side Effects:

// Typically used for performing side effects like logging, updating variables, or modifying objects.

// Modifies External Arrays:

// You can push items into an external array, as shown in the example above, but this is manual and not as direct as filter.

// When to Use forEach vs Other Methods
// Use forEach when you want to perform an action on each element, like logging, counting, or modifying existing variables.

// Use map, filter, or reduce when you want to create a new transformed or filtered array based on certain criteria.

