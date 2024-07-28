// const app = new Object()

const app ={}
app.id = '345cd'
app.name = 'John'
app.login = false

// console.log(app);


//nested objects
const user = {
  email : "example@gmail.com",
  fullName : {
    fname : 'John',
    lname : 'Doe'
  }
}
console.log(user);/* {
  email: 'example@gmail.com',
  fullName: { fname: 'John', lname: 'Doe' }
} */

console.log(user.fullName); // { fname: 'John', lname: 'Doe' }
console.log(user.fullName.fname); //John



//combine object
const obj1 = {1 : "a" , 2 : "b"}
const obj2 = {3 : 'a' , 4: "b"}
const combineObject = Object.assign({} , obj1 , obj2) // here {} is target , and obj1 , obj2 is source
console.log(combineObject); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


//but we mostly use spread operator for combining two array
 const combine = {...obj1,...obj2}
 console.log(combine); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }



 //array of objects

 const arrObj = [
  {
    id : 1 ,
    email : "abc@gmail.com"
  },
   {
    id : 2 ,
    email : "def@gmail.com"
  }
 ]
 console.log(arrObj);/* [
  { id: 1, email: 'abc@gmail.com' },
  { id: 2, email: 'def@gmail.com' }
] */
 console.log(arrObj[1]); //{ id: 2, email: 'def@gmail.com' }



 console.log(Object.keys(user)); //[ 'email', 'fullName' ]


 console.log(Object.values(user)); //[ 'example@gmail.com', { fname: 'John', lname: 'Doe' } ]


 console.log(Object.entries(user)); /*  [
  [ 'email', 'example@gmail.com' ],
  [ 'fullName', { fname: 'John', lname: 'Doe' } ]
] */

  

  //to check object has property or not 

  console.log(user.hasOwnProperty(('fullName'))); //true
  console.log(user.hasOwnProperty(('loginId'))); //false
  