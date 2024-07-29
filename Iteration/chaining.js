const num = [1,2,3,4,5,6,7,8,9,10]
const result = num.map((newNum)=>{
  return newNum * 10
}).map((newNum)=>{
  return newNum + 1
})
console.log(result); //[11, 21, 31, 41,  51,61, 71, 81, 91, 101]


//chaining with filter 
const result2 = num
.map((newNum)=> newNum * 10)
.map((newNum)=> newNum + 1)
.filter((newNum)=> newNum >= 30)
console.log(result2); //[ 31, 41,  51,61, 71, 81, 91, 101]