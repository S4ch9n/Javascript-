//basic syntax
// switch(x) {
//   case 'value1':  // if (x === 'value1')
//     ...
//     [break]

//   case 'value2':  // if (x === 'value2')
//     ...
//     [break]

//   default:
//     ...
//     [break]
// }
//The value of x is checked for a strict equality to the value from the first case (that is, value1) then to the second (value2) and so on.
// If the equality is found, switch starts to execute the code starting from the corresponding case, until the nearest break (or until the end of switch).
// If no case is matched then the default code is executed (if it exists).


const month = 4
switch (month) {
  case 1:
    console.log('Jan');
    break;
  case 2:
    console.log('feb');
    break;

  case 3:
    console.log('march');
    break;

  case 4:
    console.log('april');
    break;

}


const year = 2005
switch (year) {
  case 2000:
    console.log('Year 2001');
    break;
  case 2001:
    console.log('Year 2002');
    break;

  case 2002:
    console.log('Year 2002');
    break;

  case 2003:
    console.log('Year 2003');
    break;

  case 2004:
    console.log('Year 2004');
    break;

  case 2005:
    console.log('Year 2005');
    break;
  default:
    console.log('no match');
}

//grouping of case : 
let a = 3;
switch (a) {
  case 4:
    console.log('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    console.log('Wrong!');
    console.log("Why don't you take a math class?");
    break;

  default:
    console.log('The result is strange. Really.');
}


//task - 1
//Write the code using if..else which would correspond to the following switch:
// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }
let browser = prompt("Please enter browser name: ");

if (browser === 'Edge') {
  alert("You've got the Edge!");
} else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
  alert('Okay we support these browsers too');
} else {
  alert('We hope that this page looks ok!');
}
let input = +prompt("Enter a number: ");
switch (input) {
  case 0:
    console.log(0);
    break;
  case 1:
    console.log(1);
    break;
  case 2:
  case 3:
    console.log('2,3');
    break;
  default:
    console.log("Not a valid value");
}
