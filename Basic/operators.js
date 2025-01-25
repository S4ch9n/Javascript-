//basic operator in js

let a = 5;
let b = 4;
console.log(a + b);//addition operator
console.log(a - b);//subtraction operator
console.log(a * b);//multiplication operator
console.log(a / b);//division operator
console.log(a % b);//remainder operator
console.log(a ** b);//exponentiation operator



//string concatenation with binary +

let str = "My" + " name is " + "John"
console.log(str);


//Note of any of the other operator is a string , then the other is converted to a string too.
console.log("2" + 1);
console.log("1" + 2);


console.log("2" + 1 + 1); //211
//Here, operators work one after another. The first + sums two numbers, so it returns 4, then the next + adds the string 1 to it, so it’s like 4 + '1' = '41'.

console.log(1 + 1 + "2"); //22
//Here, the first operand is a string, the compiler treats the other two operands as strings too. The 2 gets concatenated to '1', so it’s like '1' + 2 = "12" and "12" + 2 = "122".


console.log( 6 - '2' ); // 4, converts '2' to a number
console.log( '6' / '2' ); // 3, converts both operands to numbers


//// No effect on numbers
let x = 1;
console.log( +x ); // 1

let y = -2;
console.log( +y ); // -2

// Converts non-numbers
console.log( +true ); // 1
console.log( +"" );   // 0

let str1 = "123"
console.log(str1);
console.log(typeof str1);
let num = +str1;
console.log(num);
console.log(typeof num);


let num1 = "2";
let num2 = "3";
console.log(+num1 + +num2); //both tge value converted to number before the binary plus.
//Same as Number(value) function but in short way

//with number function . the longer variant
console.log(Number(num1) + Number(num2));


//chaining assignments
let g ,h ,i;
g = h = i = 2 + 2;
console.log(g); //4
console.log(h); //4
console.log(i); //4
//Chained assignments evaluate from right to left. First, the rightmost expression 2 + 2 is evaluated and then assigned to the variables on the left: c, b and a. At the end, all the variables share a single value.

//modify-in-place
let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)

console.log(n); // 14



//
let n2 = 2;
n2 *= 3 + 5; // right part evaluated first, same as n *= 8
console.log(n2);; // 16


//increment and decrement
//increasing or decreasing a number by one is among the most common numerical operations.
let sum2 = 12;
sum2++
console.log(sum2);
sum2--
console.log(sum2);

//Increment/decrement can only be applied to variables. Trying to use it on a value like 5++ will give an error.

//The operators ++ and -- can be placed either before or after a variable.
// When the operator goes after the variable, it is in “postfix form”: counter++.
// The “prefix form” is when the operator goes before the variable: ++counter.


// If we’d like to increase a value and immediately use the result of the operator, we need the prefix form:
let counter = 0;
console.log( ++counter ); // 1

// If we’d like to increment a value but use its previous value, we need the postfix form:
let counter2 = 0;
console.log( counter++ ); // 0


let n1 = 2;
console.log(2 * ++n1) ; //6


//comma operator
let a2 = (1 + 2, 3 + 4);
console.log(a2); // 7 (the result of 3 + 4) //only the last one is returned
//The comma operator allows us to evaluate several expressions, dividing them with a comma ,. Each of them is evaluated but only the result of the last one is returned.


//q-1
let a1 = 1, b1 = 1;

let c1 = ++a1;  //prefix form return the new value
let d1 = b1++; //postfix form return the old value
console.log(a1); //2
console.log(b1); //2
console.log(c1); //2
console.log(d1); //1


//q-2
// An empty string concatenated with 1 becomes "1" (string concatenation), 
// then concatenated with 0 becomes "10".
console.log("" + 1 + 0); // Output: "10"

// An empty string is treated as 0 when used in subtraction. 
// 0 - 1 = -1, and then -1 + 0 = -1.
console.log("" - 1 + 0); // Output: -1

// true is converted to 1, and false is converted to 0. 
// 1 + 0 = 1.
console.log(true + false); // Output: 1

// "3" is converted to the number 3. 6 / 3 = 2.
console.log(6 / "3"); // Output: 2

// Both "2" and "3" are converted to numbers. 2 * 3 = 6.
console.log("2" * "3"); // Output: 6

// 4 + 5 = 9 (number addition). Then, "px" is appended to form "9px".
console.log(4 + 5 + "px"); // Output: "9px"

// "$" is concatenated with 4 to form "$4". Then 5 is appended, resulting in "$45".
console.log("$" + 4 + 5); // Output: "$45"

// "4" is converted to the number 4. 4 - 2 = 2.
console.log("4" - 2); // Output: 2

// "4px" cannot be converted to a number, so the result is NaN (Not-a-Number).
console.log("4px" - 2); // Output: NaN

// "  -9  " is treated as a string. Adding 5 results in string concatenation: "  -9  5".
console.log("  -9  " + 5); // Output: "  -9  5"

// "  -9  " is converted to -9. Subtracting 5 results in -14.
console.log("  -9  " - 5); // Output: -14

// null is treated as 0 in arithmetic. 0 + 1 = 1.
console.log(null + 1); // Output: 1

// undefined cannot be converted to a valid number, so the result is NaN.
console.log(undefined + 1); // Output: NaN

// " \t \n" (whitespace-only string) is treated as 0. 0 - 2 = -2.
console.log(" \t \n" - 2); // Output: -2


//q-3
// Prompt the user for the first number and store it in num3 (as a string)
let num3 = prompt("First number: ");  

// Prompt the user for the second number and store it in num4 (as a string)
let num4 = prompt("Second number: ");  

// Convert num3 and num4 from strings to numbers using Number() 
// and add them together, then log the result to the console.
console.log(Number(num3) + Number(num4)); 


// Without using the Number() function, we can use the unary plus operator
// let a = +prompt("First number?", 1);
// let b = +prompt("Second number?", 2);

// alert(a + b); // 3

// Or in the alert directly : 
// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);

// alert(+a + +b); // 3
