const subscribeBtn = document.querySelector('.subscribe-btn');
const emailInput = document.getElementById('error-input');
const errorMessage = document.getElementById('error-label');
const signupPage = document.querySelector('.sign-up');
const successPage = document.querySelector('.success');
const emailDisplay = document.querySelector('.success-email');
const dismissMessage = document.querySelector('.dismiss-message');

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

subscribeBtn.addEventListener('click',(event) =>{
  let email = emailInput.value;
  if(validateEmail(email))
  {
    signupPage.style = "display: none;";
    successPage.style = "display: block;";
    emailDisplay.textContent = email;
  }
  else{
    emailInput.classList.add('error-input');
    errorMessage.classList.add('error-label');
    errorMessage.style = "display: inline;"
    console.log('Invalid email');
  }
  console.log();
})

dismissMessage.addEventListener('click',() =>{
  window.location.reload();
})