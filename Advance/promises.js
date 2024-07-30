const promiseOne = new Promise(function (resolve, response) {
  //Do an async task
  // DB calls, cryptography , network
  setTimeout(function () {
    console.log('Async task in complete'); //Async task in complete
    resolve()
  }, 1000)
})
promiseOne.then(function () { //.then has connection with resolve
  console.log('Promise consumed'); //Promise consumed
})



//
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log('Async task two'); //Async task two
    resolve()
  }, 1000)
}).then(function () {
  console.log('Async two resolved'); //Async two resolved
})


//
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "John", email: "example@gmail.com" })
  }, 1000)
})
promiseThree.then(function (user) {
  console.log(user);
})


//
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Nick", password: 1234 })
    } else {
      reject('Error : Something went wrong')
    }//rejection
  }, 1000)
})
promiseFour.then((user) => {
  console.log(user);
  return user.username
}).then((username) => {
  console.log(username);
}).catch(function (error) {
  console.log(error);
}).finally(()=>{
  console.log('The promise is either  resolved or rejected');
})



//
const promiseFive = new Promise(function(resolve , reject){
  setTimeout(function(){
    let error = true
    if(!error){
      resolve({username : 'Thor' , password : 'Thunder'})
    }else{
      reject('Error : JS went wrong')
    }
  },1000)
})
async  function consumePromiseFive(){
  try{
    const response = await promiseFive
    console.log(response);
  } catch(err){
    console.log(err);
  }
}
consumePromiseFive()
//Error : Something went wrong



