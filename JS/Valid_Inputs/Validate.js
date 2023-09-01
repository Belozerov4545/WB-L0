let submit_btn = document.getElementsByClassName('button_part_btn');
let form = document.getElementById('recipient_info_container');

let formInputs = form.querySelectorAll('.js-input');

let firstNameInput = form.querySelector('#first_name_input');
let lastNameInput = form.querySelector('#last_name_input');
let emailInput = form.querySelector('#email_input');
let telInput = form.querySelector('#tel_input');
let innInput = form.querySelector('#inn_input');


function validateEmail(email) {
  let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(String(email).toLowerCase());
}

function validatePhone(phone) {
  let reg = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
  return reg.test(String(phone));
}

function validFirstName(firstName) {
  let reg = /^[A-Za-z]+$/;
  return reg.test(firstName);
}

function validLastName(lastName) {
  let reg = /^[A-Za-z]+$/;
  return reg.test(lastName);
}

form.addEventListener('submit', function (event) {
  event.preventDefault()
  let firstNameVal = firstNameInput.value;
  let lastNameVal = lastNameInput.value;
  let emailVal = emailInput.value;
  let telVal = telInput.value;
  let emptyInputs = Array.from(formInputs).filter(input => input.value === '');

  formInputs.forEach((input) => {
    if (input.value === '') {
      input.classList.add('error');
      console.log('Заполните поле');
    } else {
      input.classList.remove('error');
    }
  })

  if (emptyInputs.length !== 0) {
    return false
  }

  if (!validFirstName(firstNameVal)) {
    console.log('невалидное имя');
    firstNameInput.classList.add('error');
    if (firstNameInput.classList.contains('error')) {
      firstNameInput.style.borderBottom = '1px red solid';
    }
    return false;
  } else {
    firstNameInput.classList.remove('error');
    firstNameInput.style.borderBottom = 'none';
  }

  if (!validLastName(lastNameVal)) {
    console.log('невалидная фамилия');
    lastNameInput.classList.add('error');
    if (lastNameInput.classList.contains('error')) {
      lastNameInput.style.borderBottom = '1px red solid';
    }
    return false;
  } else {
    lastNameInput.classList.remove('error');
    lastNameInput.style.borderBottom = 'none';
  }

  if (!validateEmail(emailVal)) {
    console.log('невалидный имейл');
    emailInput.classList.add('error');
    if (emailInput.classList.contains('error')) {
      emailInput.style.borderBottom = '1px red solid';
    }
    return false;
  } else {
    emailInput.classList.remove('error');
    emailInput.style.borderBottom = 'none';
  }

  if (!validatePhone(telVal)) {
    console.log('невалидный телефон');
    console.log(telInput.classList);
    telInput.classList.add('error');
    if (telInput.classList.contains('error')) {
      telInput.style.borderBottom = '1px red solid';
    }
    return false;
  } else {
    telInput.classList.remove('error');
    telInput.style.borderBottom = 'none';
  }
})

