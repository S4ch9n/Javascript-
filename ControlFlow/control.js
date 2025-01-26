//Conditional statements

//if
let num = 32
if(num > 10){
  console.log('num is greater than 10');
}else{
  console.log('num is smaller than 10');
}

//implicit scope
const balanced = 1200
if(balanced > 100) console.log(balanced);



//nested
const  balance = 700
if(balance < 500){
  console.log('smaller than 500');
}else if(balance < 800){
  console.log('less than 800');
}else if(balance < 1000){
  console.log('smaller then 1000');
}else{
  console.log('balance is more then 1000');
}





//
 const fname = true
 const lname = false
 if(fname && lname ){
  console.log('first name and last name has entered');
 }else{
  console.log('please enter both first and last name');
 } //please enter both first and last name
 // both should be true

const userEmail = false ; 
const userPassword = true;
if(userEmail || userPassword) console.log('User log'); //user log
//at least one should be true


//ternary operator
let age = 18;
let result = (age >= 18) ? true : false;
console.log(result);



//multiple ?
let age2 = prompt('age?', 18);
let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );


//q-1  : to check if user is adult or teenager
let value = prompt("enter your age : ");
let result2 = value >= 18 ? 'user is adult' : 'user is teenager';
console.log(result2);


//change to ? operator 
// let result;

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }
let result4 = (a + b < 4) ? 'Below' : 'Over';


//change to ? operator 
// let message;
// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }
let message2 = (login == 'Employee') ? 'Hello':
(login == 'Director') ? 'Greetings':
(login == '') ? 'No login':
'';
