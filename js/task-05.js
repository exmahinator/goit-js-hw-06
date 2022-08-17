const inputFieldRef = document.querySelector('#name-input');
const nameOnButtonRef = document.querySelector('#name-output');

const inputFunction = function () {
  if (inputFieldRef.value === '') {
    nameOnButtonRef.textContent = 'Anonymous';
    return;
  }
  nameOnButtonRef.textContent = inputFieldRef.value;
};

inputFieldRef.addEventListener('input', inputFunction);
