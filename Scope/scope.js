// {} scope 
if (true) {
  let a = 1
  const b = 2
  var c = 3
}
console.log(a); //will throw reference error as ,a is not defined , because a is inside scope.
console.log(b); //will throw reference error as, b is not defined ,  because b is inside scope.
console.log(c); //will not throw error because var is a global , so 3 will print , even if its inside the scope.



//nested scope 
function one() {
  const userName = 'John'
  function two() {
    const app = "Linkedin"
    console.log(userName); //child function can access parent function's variable
  }
  // console.log(app);//will throw error because , its outside the scope 

  two()
} 
one()




//nested statements
if(true){
  const username = 'John'
  if(username === 'John'){
    const app = "youtube"
    console.log(username +" " +  app);
  }
  // console.log(website); error 
}
// console.log(username); error 




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
