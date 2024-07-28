// alert
// It shows the pop message and wait for the user to press ok 
alert('hello')
// we cant interact with the rest of page until we click on the ok button

//prompt 
/* 
prompt function accept two arguments
result = prompt(title, [default]);
it pops a message with a text and an input field , title is an text message and default here is an here our input field */
 let result = prompt('your number is ' ,)
alert(result)
// in this a pop message will come with the text and input field . The text will be "Your number is " and you have to enter the value on that input field.


// we can also set default value in input field , like 
let age = prompt('How old are you?', 100);

alert(`You are ${age} years old!`); // You are 100 years old!
// in this 87 will be in the input field , but we can change the value of that input 



//Confirm
let isBoolean = confirm('Are you the boss')
alert(isBoolean);
// it shows a window model with a question yes or no, in yes it will return true or in no it will return false 

// Create a web-page that asks for a name and outputs it.
let fname = prompt("enter your name")
alert(fname)