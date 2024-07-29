//for loop

for(let i = 0 ; i < 10 ; i++){
  // console.log(i);
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
}while(total <= 110)