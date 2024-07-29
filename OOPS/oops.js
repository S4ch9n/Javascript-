//object literals
const user = {
  username : "John",
  login : 10,
  signedIN : true,

  userDetail : function(){
    // console.log('User details');
    // console.log(`User : ${this.username}`);
    console.log(this);
  }
}
console.log(user.username);
console.log(user.userDetail());



// constructor function
// const promiseOne = new Promise()

function User(username , loginCount , isLogin){
  this.username = username; //this.username is the variable 
  this.loginCount = loginCount;
  this.isLogin = isLogin;
  this.greeting = function(){
    console.log(`Welcome ${this.username}`);
  }
  // return this
}
const userOne = new User('John' , 2 , true)
//when we use new keyword an empty object got created 
const userTwo = new User('Nick' , 12 , false)
console.log(userOne);
console.log(userTwo);
