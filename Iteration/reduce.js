const num = [1,2,3,4,5]
const result =  num.reduce(function (accumulator  , currentValue){
  console.log(`accumulator : ${accumulator} and currentValue ${currentValue}`);
  return accumulator + currentValue
}, 0) //0 is the accumulator value which will start from 0 
console.log(result); //15


//arrow function
const result2 = num.reduce((accumulator  , currentValue)=> accumulator + currentValue,0)
console.log(result2);//15



