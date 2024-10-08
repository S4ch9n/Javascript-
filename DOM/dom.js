// Examine the document object
console.dir(document)

console.log(document.domain);
console.log(document.URL);
console.log(document.title);
// document.title = 123
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
console.log(document.forms);
console.log(document.links);

console.log(document.images);



// getElementByID
console.log(document.getElementById("header-title"));
var headerTitle = document.getElementById("header-title");
var header = document.getElementById("main-header");

console.log(headerTitle);
headerTitle.textContent= 'hello'
headerTitle.innerText = 'goodbye'
headerTitle.innerHTML = '<h3>hello</h1>'
headerTitle.style.borderBottom = 'solid 3px #000'
header.style.borderBottom = 'solid 3px red'


// getElementByClassName by class name
var items = document.getElementsByClassName('list-group-items');
console.log(items);
console.log(items[1]);
items[1].textContent='hello'
items[1].style.fontWeight = 'bold'
items[1].style.backgroundColor = 'yellow'


for(var i = 0 ; i < items.length ; i++){
  items[i].style.backgroundColor = 'red'
}
// } to change the color of every list



// getElementBy tag name 
var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent='hello'
li[1].style.fontWeight = 'bold'
li[1].style.backgroundColor = 'yellow'

for(var i = 0 ; i < li.length ; i++){
  li[i].style.backgroundColor = 'red'
}



// querySelector
var header = document.querySelector('#main-header')
header.style.borderBottom = 'solid 4px  red '


 var input = document.querySelector('input')
 input.value = 'hello world'


var submit = document.querySelector('input[type="submit"]')
submit.value = 'SEND'

var item = document.querySelector('.list-group-items')
item.style.color = 'red'



var lastItem = document.querySelector('.list-group-items:last-child');
lastItem.style.color = 'blue'


var secondItem = document.querySelector('.list-group-items:nth-child(2)');
secondItem.style.color = 'coral'




// querySelectorAll
var titles = document.querySelectorAll('.title')
console.log(titles);
titles[0].textContent = 'hello'


var odd = document.querySelectorAll('li:nth-child(odd)')
for(var i = 0 ; i < odd.length ; i++){
  odd[i].style.backgroundColor = 'coral'
}


var even = document.querySelectorAll('li:nth-child(even)')
for(var i = 0 ; i < even.length ; i++){
  even[i].style.backgroundColor = 'gray'
}






// traversing the dom
var itemList = document.querySelector('#items')//ul
parentNode
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = 'coral'
console.log(itemList.parentNode.parentNode);


// parentElement
var itemList = document.querySelector('#items') 
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = 'coral'
console.log(itemList.parentElement.parentElement);


childNodes
var itemList = document.querySelector('#items')


 console.log(itemList.childNodes);
 console.log(itemList.children);
 console.log(itemList.children[2]);
 itemList.children[2].style.backgroundColor = 'red';


//  firstChild
 console.log(itemList.firstChild);
 

//  firstElementChild
 console.log(itemList.firstElementChild);
 itemList.firstElementChild.textContent = 'hello 1'




// lastElementChild
console.log(itemList.lastElementChild);
 itemList.lastElementChild.textContent = 'hello 4'


console.log(itemList.nextSibling
);

//nextElementSibling
console.log(itemList.nextElementSibling);

//previousSibling
console.log(itemList.previousSibling);

// previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.backgroundColor = 'red'


createElement

// create a div 
 var newDiv = document.createElement('div');
 //add class
newDiv.className = 'hello'

//add id
newDiv.id = 'hii'

//add atr
newDiv.setAttribute('title' , 'hello div')

//create a text node
var newDivText = document.createTextNode('hello') 
//add text to div
newDiv.appendChild(newDivText)

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1')

 console.log(newDiv);

newDiv.style.fontSize = '30px'

 container.insertBefore(newDiv , h1)




// Events Listener
var button = document.getElementById('button').addEventListener('click', buttonClick)
function buttonClick(e){
  console.log('button clicked');
document.getElementById('header-title').textContent = 'changed';
document.querySelector('#main').style.backgroundColor = 'red'
console.log(e.target);
console.log(e.target.id);
console.log(e.target.className);
console.log(e.target.classList);
var output = document.getElementById('output');
output.innerHTML = '<h3>' + e.target.id + '</h3'

console.log(e.type);
console.log(e.clientX);
console.log(e.clientY);

console.log(e.offsetX);
console.log(e.offsetY);

console.log(e.altKey);
console.log(e.ctrKey);
console.log(e.shiftKey);
}






var button = document.getElementById('button')

var box = document.getElementById('box')

button.addEventListener('click', runEvent)
button.addEventListener('dblclick', runEvent)
button.addEventListener('click', runEvent)
button.addEventListener('mouseup', runEvent)

box.addEventListener('mouseenter' , runEvent)
box.addEventListener('mouseleave' , runEvent)

box.addEventListener('mouseover' , runEvent)
box.addEventListener('mouseout' , runEvent)


box.addEventListener('mousemove' , runEvent) 

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form')
form.addEventListener('submit' , runEvent)

itemInput.addEventListener('keydown' , runEvent)
itemInput.addEventListener('keyup' , runEvent)

function runEvent(e){
  e.preventDefault();
  console.log('EVENT TYPE : ' + e.type);
  console.log(e.target.value);
  document.getElementById('output').innerHTML  = '<h3>' + e.target.value + '</h3>';

  output.innerHTML = '<h3> MouseX : ' + e.offsetX +' </h3> <h3>MouseY ' + e.offsetY+ '</h3'

  document.body.style.backgroundColor = "rgb("+e.offsetX+" , "+e.offsetY+",40)"
}
