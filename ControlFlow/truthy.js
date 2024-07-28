const password = 'abc123'
// const password = ''
// for empty string it will print else statements
if(password){
  console.log('Got password');
}else{
  console.log('no password');
}



//falsy values
// false , 0 , -0 ,BigInt 0n ,'' , null , undefined , NaN 


//truthy values
// '0' , 'false' , any value written in string is truthy , " " , [] , {} .function(){} 


if(password.length === 0){
  console.log('Array is empty');
}

const empObj = {}
if(Object.keys(empObj).length === 0){
  console.log('Object is empty');
}//object is empty



//Nullish Coalescing Operator (??) : null undefined
//null
let value;
value = null ?? 10
console.log(value);//10


//undefined
let value2;
value2 = undefined ?? 20;
console.log(value2);//20

//
let value3;
value3 = null ?? 10 ?? 20;
console.log(value3);//10
// in this first value after null will be printed 




//ternary  operator 
// condition ? true : false ;

const temp = 50
temp >= 50 ? console.log('temperature is more than 50') : console.log('temperature is less than 50');  //temperature is more than 50