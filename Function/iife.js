//IIFE > Immediately invoked function expression

(function invoked(){
  // this also called named iife 
  console.log("Immediately invoked function"); //Immediately invoked function
})(); //immediately invoked function
// ()()  : (function definition) () function call 




// NOTE : We have to use semicolon ; to stop the IIFE , if we another IIFE function



//Arrow function without parameter
(()=>{
  console.log('Arrow iife function'); //Arrow iife function
})();

//Arrow function with parameter
((name)=>{
  console.log(`Arrow iife function ${name}`); //Arrow iife function John
})('John');