//rest parameters : (...rest) allow a function workk with a variable number of arguments by bundling them into array

// spread = expands an array into separate elements.

//rest = bundles separate elements into an array

function openfridge(...foods){
  console.log(...foods); //combine with spread
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen"
openfridge(food1,food2,food3,food4,food5)



//2
function combineWords(...string){
  return string.join(" ")
}

const string = combineWords("Hello" , "My" , "Name" , "is" , "ABC");
console.log(string);