// spread operator : ...allow an iterable such as an array or string to be exapnd into separate elements(unpacks the elements)

// Define an array of numbers
let numbers = [1, 2, 3, 4, 5];

// Use the spread operator to pass the array elements as arguments to Math.max
let maximum = Math.max(...numbers); // Finds the maximum value in the array

// Use the spread operator to pass the array elements as arguments to Math.min
let minimum = Math.min(...numbers); // Finds the minimum value in the array

// Output the maximum value
console.log(maximum); // Output: 5

// Output the minimum value
console.log(minimum); // Output: 1



//2
// Define an array of fruits
let fruits = ["mango", "apple", "banana", "peach"];

// Define an array of vegetables
let vegies = ["brinjal", "carrots", "potato"];

// Combine the fruits, vegetables, and additional food items ("eggs" and "milks")
// using the spread operator to create a new array
let foods = [...fruits, ...vegies, "eggs", "milks"];

// Convert the foods array into a single string where each element is separated by a comma
console.log(foods.join(",")); // Output the combined string
