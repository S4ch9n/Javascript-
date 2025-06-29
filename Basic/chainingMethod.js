//method chaining : calling one method after another in one continuous line of code.
 // ---- NO METHOD CHAINING ------
 let username = window.prompt("enter your username");
 username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraChar  = username.slice(1);
extraChar = extraChar.toLowerCase();
username = letter + extraChar;

console.log(username);

 //---- METHOD CHAINING -------
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLocaleLowerCase();
console.log(username);
