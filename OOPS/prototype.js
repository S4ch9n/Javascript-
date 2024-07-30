let myHeroes = ['thor' , 'hulk']

let heroPower = {
  thor : "hammer" , 
  hulk : 'smash',
  getHulkPower : function(){
    console.log(`hulk power is ${this.hulk}`);
  }
}
Object.prototype.john = function(){
  console.log(`john is present in all objects`);
}
Array.prototype.doe = function(){
  console.log(`doe says hello`);
}

heroPower.john() //john is present in all objects

myHeroes.john() //john is present in all objects

myHeroes.doe() //doe says hello

// heroPower.doe()//object doesn't have the access of array



//inheritance
const user = {
  name : 'John',
  email : 'example@gmail.com'
}
const teacher = {
  class : true ,
}
const teacherAssistant = {
  isAvailable : false
}
const support = {
  assignments : 'Programming assignments',
  fullTime : true,
  __proto__ : teacherAssistant //reference //support will inherit the all properties of teacherAssistant
}
//we can also write like this
teacher.__proto__ = user //old approach //teacher will inherit all the properties of user

//modern or new syntax / approach
Object.setPrototypeOf(teacherAssistant ,teacher)


let userName = "Hello    "
String.prototype.trueLength = function(){
  console.log(`${this}`);
  // console.log(`${this.name}`);
  console.log(`True length is : ${this.trim().length}`);
}
userName.trueLength()
'John'.trueLength()