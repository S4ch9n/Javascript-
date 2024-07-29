//forEach

const arr = ['nick' , 'fury' , 'john']

arr.forEach((result)=>{
  console.log(result);
})


//find greater , with forEach 
const num = [1,2,3,4,5,6,7,8,9,10]
const result = []
num.forEach((newNum)=>{
  if(newNum > 4){
    result.push(newNum)
  }
})
console.log(result); //[ 5, 6, 7, 8, 9, 10 ]



