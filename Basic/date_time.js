//date   form 1 January 1970,UTC .
//type of date is object
let myDate = new Date()

console.log(myDate); //2024-07-26T06:59:19.711Z

console.log(myDate.toString()); //Fri Jul 26 2024 12:29:19 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); //Fri Jul 26 2024

console.log(myDate.toLocaleDateString()); // 7/26/2024

console.log(myDate.toLocaleString()); //7/26/2024, 12:32:24 PM

console.log(myDate.toLocaleTimeString()); //12:32:24 PM

console.log(myDate.toJSON()); //2024-07-26T07:02:24.084Z

console.log(myDate.toISOString()); //2024-07-26T07:02:24.084Z

console.log(typeof myDate); //object

//Note : In JS months start from 0.

// let myCreatedDate = new Date(2024 , 0 , 23)
let myCreatedDate = new Date("03-23-2001") //Fri Mar 23 2001 00:00:00 GMT+0530 (India Standard Time)
 //(Month - date - year)

console.log(myCreatedDate.toString());  //Tue Jan 23 2024 00:00:00 GMT+0530 (India Standard Time)


let timeStamp = Date.now()
console.log(timeStamp); //in milliseconds
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)); //convert in seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

console.log(`Year is ${newDate.getFullYear()} and month is ${newDate.getMonth() + 1 } , and time is ${newDate.getTime()} and date is ${newDate.getDate()}`);


newDate.toLocaleString('default' , {
  weekday : "long"
})
