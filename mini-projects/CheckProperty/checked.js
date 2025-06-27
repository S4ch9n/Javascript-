// .checked  = property that determines the checked state of an HTML checkbox or radio button element
const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterBtn = document.getElementById("masterCard"); // Fixed the ID name to match HTML
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function() {
  // Check subscription status
  if (myCheckbox.checked) {
    subResult.textContent = `You are subscribed`;
  } else {
    subResult.textContent = `You are not subscribed`;
  }
  if(visaBtn.checked){
    paymentResult.textContent = `You are paying with Visa`;
  }
  else if(masterBtn.checked){
    paymentResult.textContent = `You are paying with MasterCard`;
  } 
  else if(payPalBtn.checked){
    paymentResult.textContent = `You are paying with MasterCard`;
  }
  else{
    paymentResult.textContent = `You must select a payment type`;
  }
}