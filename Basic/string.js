const fname = 'Jhon'

const count = 23

console.log(fname + count + " Age");


//Backstick
console.log(`Hello my name is ${fname} , and my age is ${count}`);

const playerName = new String('hello')

console.log(playerName.length);//5

console.log(playerName.charAt(2));//l
//charAt is a function in JS to see which character are present in the given index.

console.log(playerName.indexOf('e'));//1
//this will give the index value selected character

const anotherString = playerName.substring(0, 4)//hell , last will be explicit
console.log(anotherString);

// const slice  = playerName.slice(0, 3) //hell
// const slice  = playerName.slice(0, 3) //hell

const slice  = playerName.slice(-4,2)
console.log(slice);


const newString = "  Akash   "
console.log(newString);
console.log(newString.trim());


const url = "https://example.com/example%20example"
console.log(url.replace('%20', '-'))
//in this the %20 will be replace by - , %20 is the value that we want to replace and - is the value we want to replace with

console.log(url.includes('example')) // true
// include is used to see the value are present in the the given string or not , if it is present then it will give true otherwise it will give false.

console.log(url.includes('hahah'))//false



//convert string into array based on something
console.log(playerName.split(' ' , 2));
