const num = [1,2,3,4,5,6,7,8,9,10]
const result = num.filter((newNum)=> newNum > 4)
console.log(result); //[ 5, 6, 7, 8, 9, 10 ]




//find greater than with for each 
const newNum = [1,2,3,4,5,6,7,8,9,10]
const greatNum = newNum.filter((num)=>{
  return num > 7
})
console.log(greatNum); //[ 8, 9, 10 ]


//
