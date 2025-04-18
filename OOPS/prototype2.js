
// // Constructor function to create user objects
// function createUser(username, score) {
//   // The 'this' keyword refers to the new object being created when called with 'new'
//   this.username = username;
//   this.score = score;
// }

// // Adding a method to the prototype of createUser
// // This ensures that all instances of createUser share this method
// createUser.prototype.increment = function () {
//   // The 'increment' method increases the 'score' property of the object
//   this.score++;
// };

// // Adding another method to the prototype
// createUser.prototype.printMe = function () {
//   // The 'printMe' method logs the current score of the object
//   console.log(`score is ${this.score}`);
// };

// // Create instances of createUser using 'new'
// // The 'new' keyword creates an empty object, sets its prototype to 'createUser.prototype',
// // and binds 'this' to that object in the constructor function
// const p1 = new createUser("hello", 25);
// const p2 = new createUser("world", 250);

// // Demonstrating how the shared prototype methods work
// p1.increment(); // Calls the 'increment' method defined on the prototype
// p1.printMe();   // Logs "score is 26", showing that the 'score' was updated

// p2.printMe();   // Logs "score is 250", as 'p2' remains unaffected by changes to 'p1'



let myHeros = ["thor" , 'spiderman']

let heroPower = {
  thor : "hammer",
  spiderman : "sling"

}