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
// let num3 = prompt("First number: ");  >>>>

// Prompt the user for the second number and store it in num4 (as a string)
// let num4 = prompt("Second number: ");  >>>>

// Convert num3 and num4 from strings to numbers using Number() 
// and add them together, then log the result to the console.
// console.log(Number(num3) + Number(num4)); 


// Without using the Number() function, we can use the unary plus operator
// let a = +prompt("First number?", 1);
// let b = +prompt("Second number?", 2);

// alert(a + b); // 3

// Or in the alert directly : 
// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);

// alert(+a + +b); // 3



//logical operators
//There are four logical operators in JavaScript: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing).

//OR || operator 
//if any of its arguments is true then it return true , otherwise it return false
console.log( true || true );   // true
console.log( false || true );  // true
console.log( true || false );  // true
console.log( false || false ); // false

//
if (1 || 0) { // works just like if( true || false )
  console.log( 'truthy!' );
}

//
let time = 12;
let isTrue = true;
if(time <  24 || time > 18 || isTrue){
  console.log("weekend time");
}

//if all operands have been evaluated , i.e all are false , then returned the last operand.
// In other words, a chain of OR || returns the first truthy value or the last one if no truthy value is found.

console.log( 1 || 0 ); // 1 (1 is truthy)
console.log( null || 1 ); // 1 (1 is the first truthy value)
console.log( null || 0 || 1 ); // 1 (the first truthy value)
console.log( undefined || null || 0 ); // 0 (all falsy, returns the last value)


let firstName = ""; // Empty string is falsy in JavaScript.
let lastName = ""; // Empty string is also falsy in JavaScript.
let nickName = "coderThePro"; // Non-empty string is truthy.
console.log(firstName || lastName || nickName || "if all the values are false, then this gets printed");
// The output will be "coderThePro" because it's the first truthy value.


//Another feature of OR || operator is the so-called “short-circuit” evaluation.
//It means that || processes its arguments until the first truthy value is reached, and then the value is returned immediately, without even touching the other argument.


//
true || console.log("hello");
// The OR (||) operator stops evaluation as soon as it encounters a truthy value.
// Since the first operand (`true`) is truthy, "hello" will not be printed.

false || console.log("hii");
// The first operand (`false`) is falsy, so the OR operator evaluates the second operand.
// As a result, "hii" will be printed.


//AND && operator
// In classical programming, AND returns true if both operands are truthy and false otherwise:
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false


//
let hour = 12;
let minute = 30;
if(hour == 12 && minute == 30){ //here both operands are true
  console.log("the time is 12 : 30");
}

if(1 && 0){ //// evaluated as true && false
  console.log("hello"); //will not print , because here one operand is true and other is false
}else{
  console.log("not executed"); //this will be print , because if condition will be incorrect
}

// The AND (&&) operator evaluates operands from left to right.
// If all operands are truthy, it returns the last operand.
let ab = "hello"; // truthy
let cd = "hii";   // truthy
let ef = "whats up"; // truthy
console.log(ab && cd && ef); // All operands are truthy, so it returns "whats up".



// If any operand is falsy, the AND (&&) operator stops evaluation and returns the first falsy value.
console.log(1 && 2 && null && 3); 
// Output: null, because null is the first falsy value encountered.

// If all operands are truthy, the AND (&&) operator evaluates all operands and returns the last one.
console.log(1 && 2 && 3); 
// Output: 3, because all operands are truthy, so the last value is returned.


//Note : Precedence of AND && is higher than OR ||
//So the code a && b || c && d is essentially the same as if the && expressions were in parentheses: (a && b) || (c && d).



//! (NOT)
// The boolean NOT operator is represented with an exclamation sign !.
//converts the operand to its boolean type .true or false.
//return the inverse value

console.log(!false); //true
console.log(!true); //false


//A double NOT !! is sometimes used for converting a value to boolean type:
console.log(!!("hello my name is John")); //true
console.log(!!""); //false
//That is, the first NOT converts the value to boolean and returns the inverse, and the second NOT inverses it again. In the end, we have a plain value-to-boolean conversion.


//q-1
console.log( console.log(1) || 2 || console.log(3) );

//q-2
console.log( null || 2 || undefined );
//The answer is 2, that’s the first truthy value.

//q-3
console.log( 1 && null && 2 );
//the answer is null , returned first falsy value

//q-4
console.log(console.log(1) && console.log(2));
// Step 1: The inner `console.log(1)` is executed first.
// This prints `1` to the console and returns `undefined` (because `console.log` always returns `undefined`).

// Step 2: The AND (&&) operator evaluates the left-hand operand.
// Since `undefined` is falsy, the `&&` operator short-circuits and does not evaluate `console.log(2)`.

// Step 3: The outer `console.log` prints the result of the expression.
// The value of the entire expression is `undefined` because the `&&` operator returned the first falsy value (`undefined`).


//q-5
console.log(null || 2 && 3 || 4); 
// Step 1: Evaluate `2 && 3` -> Result is `3`
// Expression becomes: `null || 3 || 4`
// Step 2: Evaluate `null || 3` -> Result is `3`
// Step 3: Evaluate `3 || 4` -> Result is `3`
// Final Output: 3


// Q-6
// Write an if condition to check if age is between 14 and 90 inclusively.
let age = 24;

// Check if age is greater than or equal to 14 AND less than or equal to 90.
if (age >= 14 && age <= 90) {
  console.log("age is between 14 and 90");
} else {
  console.log("age does not lie between 14 and 90");
}


//q-6
//Write an if condition to check that age is NOT between 14 and 90 inclusively.
// Create two variants: the first one using NOT !, the second one – without it.

let age2 = 67;
// Check if age is NOT between 14 and 90 inclusively using NOT (!).
if (!(age2 >= 14 && age2 <= 90)) {
  console.log("age is NOT between 14 and 90");
} else {
  console.log("age is between 14 and 90");
}


//the second one
let age3 = 44;
// Check if age is NOT between 14 and 90 inclusively without using NOT (!).
if (age3 < 14 || age3 > 90) {
  console.log("age is NOT between 14 and 90");
} else {
  console.log("age is between 14 and 90");
}


//q-7
// First condition: if (-1 || 0)
if (-1 || 0) {
  console.log('first'); // -1 is truthy, so OR (||) operator returns -1 and the condition is true
}

// Second condition: if (-1 && 0)
if (-1 && 0) {
  console.log('second'); // -1 is truthy, but 0 is falsy, so AND (&&) operator returns 0 and the condition is false
}

// Third condition: if (null || -1 && 1)
if (null || -1 && 1) {
  console.log('third'); // -1 && 1 evaluates to 1 (truthy), so OR (||) operator returns 1 and the condition is true.
}


//q-8
// Write the code which asks for a login with prompt.

// If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

// The password is checked as follows:

// If it equals “TheMaster”, then show “Welcome!”,
// Another string – show “Wrong password”,
// For an empty string or cancelled input, show “Canceled”


let user = prompt("Please enter your login details: "); // Prompt for login

if (user === 'Admin') {
    // Prompt for password if login is Admin
    let password = prompt("Please enter your password: ");

    // Check the password
    if (password === "TheMaster") {
        console.log("Welcome!");  // Correct password
    } else if (password === "" || password === null) { //// "" > for empty string and null > null is the value returned when the user presses the Esc button or cancels the prompt entirely.
        console.log("Canceled");  // Cancelled input (empty string or null)
    } else {
        console.log("Wrong password");  // Incorrect password
    }
} else if (user === "" || user === null) { // "" > for empty string and null > null is the value returned when the user presses the Esc button or cancels the prompt entirely.
    console.log("Canceled");  // Cancelled input (empty string or null)
} else {
    console.log("I don't know you");  // If login is not Admin
}



//Nullish coalescing operator '??'
//The nullish coalescing operator is written as two question marks ??.
// As it treats null and undefined similarly,
//The result of a ?? b is:
// if a is defined, then a,
// if a isn’t defined, then b.
// In other words, ?? returns the first argument if it’s not null/undefined. Otherwise, the second one.
// The nullish coalescing operator isn’t anything completely new. It’s just a nice syntax to get the first “defined” value of the two.

// For example, here we show user if its value isn’t null/undefined, otherwise Anonymous:
let user2;
console.log(user2 ?? "Anonymous"); // Anonymous (user is undefined)

//with user defined
let user3 = "admin";
console.log(user3 ?? "Anonymous"); //'admin' will print


//
let firstName2 = null;
let lastName2 = null;
let nickName2 = "Supercoder";

// shows the first defined value:
console.log(firstName2 ?? lastName2 ?? nickName2 ?? "Anonymous"); // Supercoder


//The important difference between or || and nullish coalescing ?? is that:
// || returns the first truthy value.
//In other words, || doesn’t distinguish between false, 0, an empty string "" and null/undefined. They are all the same – falsy values. If any of these is the first argument of ||, then we’ll get the second argument as the result.

// ?? returns the first defined value.

let height = 0;

console.log(height || 100); // 100
console.log(height ?? 100); // 0
// The height || 100 checks height for being a falsy value, and it’s 0, falsy indeed.
// so the result of || is the second argument, 100.
// The height ?? 100 checks height for being null/undefined, and it’s not,
// so the result is height “as is”, that is 0

//The precedence of the ?? operator is the same as ||.
// That means that, just like ||, the nullish coalescing operator ?? is evaluated before = and ?, but after most other operations, such as +, *.

// So we may need to add parentheses in expressions like this:

let height2 = null;
let width = null;

// important: use parentheses
let area = (height2 ?? 100) * (width ?? 50);

console.log(area); // 5000

// The operator ?? has a very low precedence, only a bit higher than ? and =, so consider adding parentheses when using it in an expression.
// It’s forbidden to use it with || or && without explicit parentheses.
