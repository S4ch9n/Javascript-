function setUserName(username){
  this.username = username;
}

function createUser(username , email , password){
  setUserName.call(this, username)
  this.email = email
  this.password = password
}
const ans = new createUser('John' , 'example@123' , "123")
console.log(ans);