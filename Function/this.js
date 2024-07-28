const user = {
  username : 'John',
  price : 599,
  message : function(){
    console.log(`${this.username} , welcome to world`)
    // we can use this , here because it refer to same context 
  }
}
user.message() //John , welcome to world
user.username = 'Doe'
user.message() //Doe , welcome to world

console.log(this); //{}




//
function code(){
  let fname = "John"
  console.log(this.fname); // we cant access this for function , but for object we can access this . 
}
code()//undefined