// closure : A function defined inside of another function
 // the inner function has access to the variable
 // and scope of the outer function
 // Allow for private variables and state maintainance
 // used frequently in JS frameworks : React , Vue , Angular

function outer(){
  let message = "Hello";
  function inner(){
    console.log(message)
  }
  inner();
}
outer();