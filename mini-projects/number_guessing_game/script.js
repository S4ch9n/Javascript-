// NUMBER GUESSING GAME 
let minNum = 1;
let maxNum = 10;

let answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}:`);
  
  if (guess == null) {
    window.alert("Game canceled ❌");
    break;
  }

  guess = Number(guess);

  if (isNaN(guess) || guess > maxNum || guess < minNum) {
    window.alert(`Please enter a valid number between ${minNum} and ${maxNum} 🚀`);
  } else {
    attempts++;
    if (guess > answer) {
      window.alert("Number is too High 🙂");
    } else if (guess < answer) {
      window.alert("Number is too low 😒");
    } else {
      window.alert(`CORRECT! THE ANSWER WAS ${answer} 🥳 and you took ${attempts} attempts`);
      running = false;
    }
  }
}
