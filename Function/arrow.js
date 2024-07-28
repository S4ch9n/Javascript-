//arrow function ()=>{}

 
// this in arrow function   
const code = () => {
  let username = "code"
  // console.log(this); //{} we cant access this in the arrow function
  console.log(this.username); //undefined
}
code()



//arrow function
const addNum = (num1 , num2)=>{
  return num1 + num2
}
console.log(addNum(2,3));




//implicit return
const iReturn = (num1 , num2) =>  num1 + num2
// const iReturn = (num1 , num2) =>  (num1 + num2)
// in both we don't have to write return 

console.log(iReturn(1,2)); // 3



///object 
const obj = (num1 , num2) => ({username : 'John'})
console.log(obj(1,2)); //{ username: 'John' }

