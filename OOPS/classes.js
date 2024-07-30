//class

class User {
  constructor(username , email , password){
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encryptPassword(){
    return `${this.password}abc`
  }
  changeUsername(){
    return `${this.username.toUpperCase()}`
  }
}
const user = new User('John' , 'example@gmail.com' , '123')
console.log(user.encryptPassword()); //123abc
console.log(user.changeUsername()); //JOHN