let value = true
console.log('type of value is : ' + typeof value); // here the type of value is boolean
value = String(value)
console.log('type of value is  : ' + typeof value);// here the value is String

let sum1 = "2"
let sum2 = "2"
let totalSum = sum1 / sum2  // here the value of string will convert into number 
let totalSum2 = sum1 + sum2 // here the two strings will be concatenate

console.log(totalSum);
console.log(totalSum2);

//we can also change the string into number 
let string = '1233'//here 1233 is string because it is under the single quote
console.log('type of string : ' + typeof string);
string = Number(string)
console.log('type of string : ' + typeof string);


alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (error reading a number at "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0


alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false

//note: the string with zero "0" is true
// in JavaScript, a non-empty string is always true.

alert( Boolean("0") ); // true
alert( Boolean(" ") ); // spaces, also true (any non-empty string is true)


let num1 = "1"+ 2
console.log(num1);
console.log(typeof num1);

let num2 = 2 + "1"
console.log(num2);
console.log(typeof num2);

let num3 = 1 + 2 + "3"
console.log(num3);
console.log(typeof num3);

let num4 = 1 + "2" + 3
console.log(num4);
console.log(typeof num4);

let num5 = "1" + 2 + 3
console.log(num5);
console.log(typeof num5);


console.log(-true); //-1
console.log(+true); 1
console.log(+""); //0
console.log(+" ");//0
console.log(+"hello"); //Nan 
console.log(+"123"); //number

let num6 = "54" 
console.log(typeof num6); //string
console.log(typeof +num6); //number
console.log(typeof -num6); //number


// NOTE : The binary + is the only operator that supports strings in such a way. Other arithmetic operators work only with numbers and always convert their operands to numbers.

let countPlus = 100
countPlus++ // the postfix return the old value
// called postfix , in this value will be increment by one
++countPlus  // the prefix return the new value
// called prefix , in this value will be increment by one
console.log(countPlus);



// Assignment = returns a value
let a = 1;
let b = 2;
let c = 3 - (a = b + 1);
console.log( a ); // 3
console.log( c ); // 0


// Chaining assignments
let d , e , f
 d = e = f = 2
 console.log(d);//2
 console.log(e);//2
 console.log(f);//2




//  Modify-in-place
let n = 2;
/* let n = 2;
n = n + 5;
n = n * 2; */
//  we can also write it like this
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)
console(n); // 14



let sum = 3;
sum += 2 * 3
console.log(sum);//9


// Prefix Increment
let prefix = 5;
let result = ++prefix; // prefix is incremented first, then assigned to result
console.log(result); // Output: 6

// Postfix Increment
let postfix = 5;
let result2 = postfix++; // postfix is assigned to result2 first, then incremented
console.log(result2); // Output: 5

// In summary, ++prefix increments the value before using it in the expression, while postfix++ uses the current value in the expression and increments it afterwards.





// If we’d like to increase a value and immediately use the result of the operator, we need the prefix form:
let counter = 0;
alert( ++counter ); // 1


// If we’d like to increment a value but use its previous value, we need the postfix form:
let counter2 = 0;
alert( counter2++ ); // 0



let counter3 = 1;
console.log( 2 * counter3 );//2
counter3++;//1


let counter4 = 1;
console.log( 2 * counter4 );//2
++counter4;//2



let total = (1 + 2, 3 + 4);
console.log(total); // 7 (the result of 3 + 4)
// Here, the first expression 1 + 2 is evaluated and its result is thrown away. Then, 3 + 4 is evaluated and returned as the result.