// //an label is an identifier with an colon before loop
// //basic syntax
// // lableName : for(){
// //   //code
// // }
let i;
let j;
outer: for (i = 0; i < 3; i++) { // The outer loop is labeled as `outer`
  for (j = 0; j < 3; j++) {      // The inner loop has no label
    console.log(`value of i is ${i} and the value of j is ${j}`);
    if (i == 2) {                // When `i` is 2:
      console.log("Here, the value of i becomes 2, and the outer loop ends.");
      break outer;               // This `break` uses the `outer` label to exit both loops.
    }
  }
  console.log(`value of i is ${i} and the value of j is ${j}`); 
  // This line is skipped when `break outer` is called.
}


