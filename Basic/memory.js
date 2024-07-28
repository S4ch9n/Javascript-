// there are two types of memory 
/* 1. Stack : Stack memory is used in primitive data type .Whenever we used stack memory , we get copy of variable we declare.


2. Heap memory : Heap memory is used in non - primitive type . Whenever something got into heap memory then we get the reference of original value. */


let fname = 'Jhon'
let anotherFname = fname

anotherFname = 'Jack'
console.log(fname);
console.log(anotherFname);

let UserOne = {
  fname : 'Rahul',
  lname : 'Thakur'
} 
let userTwo = UserOne 
 userTwo.lname = 'Kumar'
 console.log(UserOne);
 console.log(userTwo);
 
 