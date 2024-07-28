//function
function hello(){
  console.log('Hello function');
}
hello()
//Hello function




//parameter and arguments
function addNumbers(num1 , num2){ //num1 and num2 is parameter
  console.log(num1 + num2);
}
addNumbers(3 , 4) //7
//3 and 4 is argument that pass into num1 and num2
//7



//return
function addNum(n1 , n2){
  return n1 + n2
}
const result = addNum(10,5)
console.log(result); //15



//return with template literals
function userMessage(username){
  return `${username} login` 
}
console.log(userMessage('John')); //John login



//default value
function user(fname = 'John'){ //if we will not pass any argument to the user or our parameter then fname will take 'John' as a default .
  return `${fname} is learning programming`
}
console.log(user('Kite')); //Kite is learning programming



//rest operator(...)
function restOperator(...num1){
  return num1
}
console.log(restOperator(1,2,3,4)); //[ 1, 2, 3, 4 ]



//function in object 
const user1 =  {
  username : 'John',
  password : 1234
}
// function funInObj(obj){
//   return `username is ${obj.username} and his password is ${obj.password} `
// }
// console.log(funInObj(user1)); //username is John and his password is 1234

function funInObj(obj){
 console.log(`username is ${obj.username} and his password is ${obj.password}`)
}
funInObj(user1) //username is John and his password is 1234



//function in array
const arr = [10,20,30,40]
function thirdValue(getValue){
  return getValue[2] //will get the value of index 2
}
console.log(thirdValue(arr));



//We can also print array like this
function arr2(getValue){
  return getValue[1] //will get the value of index 1
}
console.log(arr2([10,20,30,40]));


//function expression
addOne(5) // in function expression we can call the function before declaration / initialization
function addOne(num){
  return num + 1
}



//function expression 
addTwo(5)
// in function expression we cant call the function , before declaration / initialization
const addTwo = function(num){
  return num + 1
}