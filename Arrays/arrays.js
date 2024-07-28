//arrays

// const arr = [1,2,3,4,5 , true , 'John'] also an array 

// in the the array index value starts from 0 

const arr = ['John' , 'Jack' , 'Jimmy']
console.log(arr);

const arr2 = new Array(1,2,3,4,5)
console.log(arr2);




//array methods
let myArr = [0,1,2,3,4,5]

//push
myArr.push(6) //6 will be add in the last 
console.log(myArr); //[1,2,3,4,5,6]

//pop
myArr.pop() //will remove last element from the array
console.log(myArr); // [1,2,3,4,5]

//unshift 
myArr.unshift(0) //9 will be add in the start
console.log(myArr);

//shift 
myArr.shift() //will remove first element from the array
console.log(myArr);


//includes
console.log(myArr.includes(8)); //false

//indexof
console.log(myArr.indexOf(1)); //1
console.log(myArr.indexOf(9)); //false

const newArr = myArr.join()
console.log(newArr); //add all the element of an array intro string 
console.log(typeof newArr); //string

// //slice
const anotherArr = [1,2,3,4,5]
console.log(anotherArr); //[1,2,3,4,5]
const anotherArr2 = anotherArr.slice(1,3)
console.log(anotherArr2);//[2,3]
console.log(anotherArr); // [1,2,3,4,5]
// Returns: A new array containing the extracted elements.
// Original Array: Does not modify the original array.



//splice
const anotherArr3 = [1,2,3,4,5]
console.log(anotherArr3);//[1,2,3,4,5]
const anotherArr4 = anotherArr3.splice(1,3)
console.log(anotherArr4); //[2,3,4] //last value also included
console.log(anotherArr3); //[1,5]
//Return : An array containing deleted element
//Original Array : Modify the original array.

const arrr = [1, 2, 3, 4, 5];
const removed = arrr.splice(1, 2, 'a', 'b'); // [2, 3]
console.log(arr); // [1, 'a', 'b', 4, 5] (original array is modified)


// **slice** creates a new array containing a subset of the original array's elements without modifying the original array.
// **splice** changes the contents of the original array by adding, removing, or replacing elements and returns an array of the deleted elements.
