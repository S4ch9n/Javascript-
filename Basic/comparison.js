// Number comparison
console.log( 2 > 1 );  // true
console.log( 2 == 1 ); // false 
console.log( 2 != 1 ); // true 

// String comparison
// To see whether a string is greater than another, JavaScript uses the so-called “dictionary” or “lexicographical” order.
console.log('B' > ' A'); // true
console.log('BEE' > 'TEE'); //false
console.log('BEE' > 'BE'); //true
console.log('BE' > 'BEE'); //FALSE
console.log('BCD' > 'ABC'); //TRUE


console.log('A' > 'a');
// it is false because javascript take unicode value of character , so  A unicode value is 65 and a unicode is 97 . So A < a  , because(65 < 97)


// comparison of two different datatypes
// when we are comparing the value of two different types then js converts the value to number 
console.log("2" > 1);// true
console.log('1' == 1 ); // true
console.log('1' === 1); //false
// in === operator , javascript  check the datatypes of both values , one is string and other is number so it will return false  

//boolean 
console.log(true == 1);//true 
console.log(true === 1);//false
console.log(false == 0);//false
console.log(false === 0);//false

let a = 0;
console.log( Boolean(a) ); // false

let b = "0";
console.log( Boolean(b) ); // true
console.log(a == b); // true!



// Strictly operator
// A strict equality operator === checks the equality without type conversion.

// In other words, if a and b are of different types, then a === b immediately returns false without an attempt to convert them.

console.log('' === false);//false
console.log('he' === true); //false;
console.log(0 === false); //false
console.log(1 === true); //false


// For a strict equality check ===
// These values are different, because each of them is a different type.

console.log( null === undefined ); // false


// For a non-strict check ==
// There’s a special rule. These two are a “sweet couple”: they equal each other (in the sense of ==), but not any other value.

console.log( null == undefined ); // true




//null
console.log(null > 0)//false (when using compare js convert null to number)
console.log(null == 0) //false , because null is only equal to undefined when using the == operator.
console.log(null >= 0)//true , null got convert into number , so 0 >= 0 , 0 is equal to zero, so it will return true



//undefined
console.log( undefined > 0 ); // false  , here undefined got convert into NaN and NaN is a special numeric value which returns false for all comparisons.
console.log( undefined < 0 ); // false , here undefined got convert into NaN and NaN is a special numeric value which returns false for all comparisons.
console.log( undefined == 0 ); //false , because null is only equal to undefined when using the == operator.