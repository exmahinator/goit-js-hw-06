const validationRef = document.querySelector('#validation-input');

const validationFunction = function () {
  if (validationRef.value.length !== Number(validationRef.dataset.length)) {
    validationRef.classList.add('invalid');
    validationRef.classList.remove('valid');
    return;
  }
  validationRef.classList.remove('invalid');
  validationRef.classList.add('valid');
};

validationRef.addEventListener('blur', validationFunction);
