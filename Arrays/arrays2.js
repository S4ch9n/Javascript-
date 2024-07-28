const name1 = ['John' , 'Jack' , 'Jimmy']
const name2 = ['Nick' , 'Neon' , 'Stark']
//  name1.push(name2)
//  console.log(name1); //[ 'John', 'Jack', 'Jimmy', [ 'Nick', 'Neon', 'Stark' ] ]
//  console.log(name2); //[ 'Nick', 'Neon', 'Stark' ]


//concat
const together = name1.concat(name2)
console.log(together); //[ 'John', 'Jack', 'Jimmy', 'Nick', 'Neon', 'Stark' ]s
//concat return new array , so we need to take another variable



//spread operator 
const name3 = ['hawk' ,'fury' ,'eli']
const all_name = [...name1 ,...name2,...name3] 
//combine two arrays

console.log(all_name); //['John',  'Jack','Jimmy', 'Nick','Neon',  'Stark','hawk',  'fury','eli']



//flat 
const anArr = [1,2,3,4,5,[6,7,8],9,[10,11,12],[13]]
const result = anArr.flat(Infinity)
console.log(result); //[1,2,3,4,5,6,7,8,9,10,11,12,13]


console.log(Array.isArray('John'));//false
console.log(Array.from('John')); //[ 'J', 'o', 'h', 'n' ]   //this will create an array 

let team1 = 500
let team2 = 600
let team3 = 700
console.log(Array.of(team1 , team2 , team3)); //[ 500, 600, 700 ]