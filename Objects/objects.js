//object literals
 const user  = {
  fname : "John",
  lname : 'Doe',
  age : 19,
  location : "USA",
  email : "example@gmail.com",
  isLog : false,
 }
 console.log(user.email);//dot notation //example@gmail.com
 console.log(user["email"]); //square notation
 //we have to put the keys into string to get the value  //example@gmail.com

user.fname = 'Nick' 
console.log(user);


//function is objects
user.hello = function(){
  console.log('hello from js');
}
console.log(user.hello()); //hello from js



user.hello2 = function(){
  console.log(`hello from Javascript ${this.fname}`);
}
console.log(user.hello2()); //hello from Javascript Nick

console.log(user);