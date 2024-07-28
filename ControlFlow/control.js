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