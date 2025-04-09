// filter Method in JavaScript
// The filter method is used to create a new array that includes only the elements of the original array that meet a specific condition (predicate). The condition is defined by a callback function passed to filter.
//synatx:
// array.filter(callback(element, index, array), thisArg)
// callback: A function that tests each element. It returns true to keep the element or false to exclude it.

// element: The current element being processed.

// index (optional): The index of the current element.

// array (optional): The original array.

// thisArg (optional): Value to use as this when executing the callback.
const num = [1,2,3,4,5,6,7,8,9,10];
const result = num.filter((newNum) => newNum > 4);
console.log(result); // Output: [ 5, 6, 7, 8, 9, 10 ]


const num2 = [10,20,30,40,50]
const result2 = num2.filter((newNum2)=> newNum2 > 30);
console.log(result2); // Output : [ 40, 50 ]

// Key Differences Between filter and forEach:
// Return Value:

// filter: Returns a new array with elements that pass the test.

// forEach: Does not return a new array; you need to create and manage the array manually.

// Use Case:

// Use filter when you need a subset of the array based on a condition.

// Use forEach for general operations on each element, like logging, summing, or performing side effects.