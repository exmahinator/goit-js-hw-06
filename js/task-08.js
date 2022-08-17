const formRef = document.querySelector('.login-form');
const emailInputRef = document.querySelector('[type="email"]');
const passwordInputRef = document.querySelector('[type="password"]');
const submitButtonRef = document.querySelector('[type="submit"]');

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  if (emailInputRef.value === '' || passwordInputRef.value === '') {
    alert('All fields must to be filled!');
    return;
  }

  const formFields = event.currentTarget.elements;

  console.log(formFields);

  const email = formFields.email.value;
  const password = formFields.password.value;

  const sendForm = {
    email,
    password,
  };

  console.log(sendForm);
  this.reset();

  return sendForm;
}
