//for loop

for(let i = 0 ; i < 10 ; i++){
  // console.log(i);
} 

//we can write like this also
let l = 0;
for( ; l < 10 ;){
  console.log("value of l is : ",l++);
}

//We can actually remove everything, creating an infinite loop:

for (;;) {
  // repeats without limits
}


//loop with conditional
for(let i = 0 ; i < 10 ; i++){
  const ans = i 
  if(i == 5){
  }
  console.log(ans);
}

//nested loop
for(let i = 0 ; i < 10 ; i++){
  console.log(`outer loop value ${i}`);
  for(let j = 0 ; j < 10 ; j++){
    console.log(`inner loop ${j}`);
  }
}

//print table 
for(let i = 0 ; i <= 10 ; i++){
  console.log(`Table of : ${i}`);
  for(let j = 1 ; j <= 10 ; j++){
    console.log(i + "*" + j + "=" + i*j);
  }
}


//array
const myArr = ["John" , "Doe" , "Nick"]
for(let i = 0 ; i < myArr.length ; i++){
  console.log(myArr[i]);
}


//break and continue
//break
for(let i = 0 ; i <= 10 ; i++){
  if(i == 3){
    console.log(`Detected 3`);
    break
  }
  console.log(`Value of i is : ${i}`);
}


//continue
for(let i = 0 ; i <= 10 ; i++){
  if(i == 3){
    console.log(`Detected 3`);
    continue
  }
  console.log(`Value of i is : ${i}`);
}


//while loop 
let i = 0 
while(i < 10){
  console.log(`Vale of i is : ${i}`);
  i++
}


//array 
let arr = ["John" , "Doe" , "Nick"]
let index = 0
while(index < arr.length){
  console.log(`Element in arrays are :  ${arr[index]}`);
  index++
}


//do while loop 
let total = 100
do{console.log(`Total is  ${total}`);
  total++
}while(total <= 110);



//Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.
// The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.
// Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.

let number;

do {
    number = +prompt("Enter a number greater than 100:", "");
    if (number === null || number === "") {
        break; // Exit the loop if the user cancels or enters an empty line
    }
} while (number <= 100);

if (number !== null && number !== "") {
    alert(`You entered ${number}, which is greater than 100!`);
} else {
    alert("Input was canceled or left empty.");
}
