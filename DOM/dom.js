// Examine the document object
console.dir(document); // Logs the entire document object for inspection

console.log(document.domain); // Logs the domain of the document
console.log(document.URL); // Logs the full URL of the document
console.log(document.title); // Logs the title of the document
// document.title = 123; // Uncomment to change the document title
console.log(document.doctype); // Logs the document type (e.g., <!DOCTYPE html>)
console.log(document.head); // Logs the <head> section of the document
console.log(document.body); // Logs the <body> section of the document
console.log(document.all); // Logs all elements in the document
console.log(document.all[10]); // Logs the 11th element in the document
console.log(document.forms); // Logs all <form> elements in the document
console.log(document.links); // Logs all <a> (link) elements in the document
console.log(document.images); // Logs all <img> elements in the document

// Get element by ID
console.log(document.getElementById("header-title")); // Fetches the element with ID 'header-title'
var headerTitle = document.getElementById("header-title"); // Stores the element in a variable
var header = document.getElementById("main-header"); // Fetches the element with ID 'main-header'

console.log(headerTitle); // Logs the 'header-title' element
headerTitle.textContent = 'hello'; // Changes the text content
headerTitle.innerText = 'goodbye'; // Changes the inner text
headerTitle.innerHTML = '<h3>hello</h3>'; // Inserts HTML inside the element
headerTitle.style.borderBottom = 'solid 3px #000'; // Adds a black border
header.style.borderBottom = 'solid 3px red'; // Adds a red border to 'main-header'

// Get elements by class name
var items = document.getElementsByClassName('list-group-items'); // Fetches all elements with the class 'list-group-items'
console.log(items); // Logs the collection of elements
console.log(items[1]); // Logs the second element in the collection
items[1].textContent = 'hello'; // Changes the text content of the second element
items[1].style.fontWeight = 'bold'; // Makes the text bold
items[1].style.backgroundColor = 'yellow'; // Sets the background color to yellow

// Change the background color of all items
for (var i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = 'red'; // Sets the background color to red
}

// Get elements by tag name
var li = document.getElementsByTagName('li'); // Fetches all <li> elements
console.log(li); // Logs the collection of <li> elements
console.log(li[1]); // Logs the second <li> element
li[1].textContent = 'hello'; // Changes the text content of the second <li>
li[1].style.fontWeight = 'bold'; // Makes the text bold
li[1].style.backgroundColor = 'yellow'; // Sets the background color to yellow

// Change the background color of all <li> elements
for (var i = 0; i < li.length; i++) {
  li[i].style.backgroundColor = 'red'; // Sets the background color to red
}

// Using querySelector
var header = document.querySelector('#main-header'); // Fetches the element with ID 'main-header'
header.style.borderBottom = 'solid 4px red'; // Adds a red border

var input = document.querySelector('input'); // Fetches the first <input> element
input.value = 'hello world'; // Sets the value of the input field

var submit = document.querySelector('input[type="submit"]'); // Fetches the <input> element with type 'submit'
submit.value = 'SEND'; // Changes the value to 'SEND'

var item = document.querySelector('.list-group-items'); // Fetches the first element with class 'list-group-items'
item.style.color = 'red'; // Changes the text color to red

var lastItem = document.querySelector('.list-group-items:last-child'); // Fetches the last child of elements with class 'list-group-items'
lastItem.style.color = 'blue'; // Changes the text color to blue

var secondItem = document.querySelector('.list-group-items:nth-child(2)'); // Fetches the second child
secondItem.style.color = 'coral'; // Changes the text color to coral

// Using querySelectorAll
var titles = document.querySelectorAll('.title'); // Fetches all elements with class 'title'
console.log(titles); // Logs the NodeList of elements
titles[0].textContent = 'hello'; // Changes the text content of the first title

// Apply styles to odd and even <li> elements
var odd = document.querySelectorAll('li:nth-child(odd)'); // Fetches odd <li> elements
for (var i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = 'coral'; // Sets the background color to coral
}

var even = document.querySelectorAll('li:nth-child(even)'); // Fetches even <li> elements
for (var i = 0; i < even.length; i++) {
  even[i].style.backgroundColor = 'gray'; // Sets the background color to gray
}

// Traversing the DOM
var itemList = document.querySelector('#items'); // Fetches the element with ID 'items'

// Parent node
console.log(itemList.parentNode); // Logs the parent node
itemList.parentNode.style.backgroundColor = 'coral'; // Sets the background color of the parent
console.log(itemList.parentNode.parentNode); // Logs the grandparent node

// Parent element
console.log(itemList.parentElement); // Logs the parent element
itemList.parentElement.style.backgroundColor = 'coral'; // Sets the background color
console.log(itemList.parentElement.parentElement); // Logs the grandparent element

// Child nodes
console.log(itemList.childNodes); // Logs all child nodes (includes text nodes)
console.log(itemList.children); // Logs only element children
console.log(itemList.children[2]); // Logs the third child element
itemList.children[2].style.backgroundColor = 'red'; // Sets its background color to red

// First and last child
console.log(itemList.firstChild); // Logs the first child (includes text nodes)
console.log(itemList.firstElementChild); // Logs the first element child
itemList.firstElementChild.textContent = 'hello 1'; // Changes its text content
console.log(itemList.lastElementChild); // Logs the last element child
itemList.lastElementChild.textContent = 'hello 4'; // Changes its text content

// Sibling navigation
console.log(itemList.nextSibling); // Logs the next sibling (may include text nodes)
console.log(itemList.nextElementSibling); // Logs the next element sibling
console.log(itemList.previousSibling); // Logs the previous sibling
console.log(itemList.previousElementSibling); // Logs the previous element sibling
itemList.previousElementSibling.style.backgroundColor = 'red'; // Changes its background color

// Create and insert elements
var newDiv = document.createElement('div'); // Creates a new <div> element
newDiv.className = 'hello'; // Adds a class to the <div>
newDiv.id = 'hii'; // Adds an ID to the <div>
newDiv.setAttribute('title', 'hello div'); // Adds a title attribute
var newDivText = document.createTextNode('hello'); // Creates a text node
newDiv.appendChild(newDivText); // Adds the text node to the <div>
var container = document.querySelector('header .container'); // Fetches the container
var h1 = document.querySelector('header h1'); // Fetches the <h1> element
newDiv.style.fontSize = '30px'; // Sets font size
container.insertBefore(newDiv, h1); // Inserts the new <div> before the <h1>

// Event listeners
var button = document.getElementById('button').addEventListener('click', buttonClick);
function buttonClick(e) {
  console.log('button clicked'); // Logs when button is clicked
  document.getElementById('header-title').textContent = 'changed'; // Changes text content
  document.querySelector('#main').style.backgroundColor = 'red'; // Changes background color
  console.log(e.target); // Logs the target element
  console.log(e.type); // Logs the event type
  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`; // Changes body background color
}
