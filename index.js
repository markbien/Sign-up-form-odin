const password = document.querySelector('#password');
const passwordConfirmation = document.querySelector('#password_confirmation');

function clearClass(){
  password.classList.remove("error");
  passwordConfirmation.classList.remove('error');

  password.classList.remove("match");
  passwordConfirmation.classList.remove('match');
}

function toggleErrorClass(){
  password.classList.add('error');
  passwordConfirmation.classList.add('error');

  password.classList.remove('match');
  passwordConfirmation.classList.remove('match');
}

function toggleMatchClass(){
  password.classList.remove('error');
  passwordConfirmation.classList.remove('error');

  password.classList.add('match');
  passwordConfirmation.classList.add('match');
}

function comparePassword(){
  if (password.value.length === 0 && passwordConfirmation.value.length === 0) {
    clearClass();
    return;
  }
  
  if (password.value === passwordConfirmation.value) {
    toggleMatchClass();
  } else {
    toggleErrorClass();
  }
}

password.addEventListener('keyup', comparePassword);
passwordConfirmation.addEventListener('keyup', comparePassword)