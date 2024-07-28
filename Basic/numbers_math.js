// //Numbers
// const score = 100
// const balance = new Number(100)//
// console.log(score); //100
// console.log(balance); //[Number : 100]

// const number = 100
// console.log(number.toFixed(1)); //100.1

// const anotherNumber = 542.657
// console.log(anotherNumber.toPrecision(4)); //542.7

// const numbers = 200000
// console.log(numbers.toLocaleString()); //200,000
// console.log(numbers.toLocaleString('en-IN')); //2,00,000 



// //Maths
// console.log(Math);
// console.log(Math.abs(-4)); //4 //use to change the value of negative to positive

// console.log(Math.round(4.3));//4

// console.log(Math.round(4.6));//5

// console.log(Math.ceil(4.2)); // ceil will always take the upper value

// console.log(Math.floor(4.9));//floor will always take the lowest value

// console.log(Math.max(1,2,3,4,5)); //5

// console.log(Math.min(1,2,3,4,5)); //1

console.log(Math.random()); //will always give the value between 0 and 1

// to select range between other number we can multiply by 10

console.log(Math.random()*10); // will always give the value between 1 and 10

console.log((Math.random()*10) + 1); // we add 1 so we don't get the 0 value

const min = 10
const max = 20 

console.log(Math.floor(Math.random() * (max - min + 1)) + min) //formula , we add + min at last because we need minimum value 10 
console.log(Math.floor(Math.random() * (max - min + 1)) + min )