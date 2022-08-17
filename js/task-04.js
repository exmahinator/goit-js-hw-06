const decrementBtnRef = document.querySelector('[data-action="decrement"]');
const incrementBtnRef = document.querySelector('[data-action="increment"]');
const valueChangerRef = document.querySelector('#value');

let counterValue = 0;

decrementBtnRef.addEventListener('click', () => {
  counterValue -= 1;
  valueChangerRef.textContent = counterValue;
});

incrementBtnRef.addEventListener('click', () => {
  counterValue += 1;
  valueChangerRef.textContent = counterValue;
});
