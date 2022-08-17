function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlRef = document.querySelector('#controls');
const createBoxBtnRef = controlRef.querySelector('[data-create]');
const destroyBoxBtnRef = controlRef.querySelector('[data-destroy]');
const amountOfBoxesRef = controlRef.querySelector('[type="number"]');
const boxesRef = document.querySelector('#boxes');

createBoxBtnRef.addEventListener('click', () => {
  const template = createBoxes(amountOfBoxesRef.value);
  boxesRef.innerHTML = '';
  boxesRef.insertAdjacentHTML('afterbegin', template);
});

destroyBoxBtnRef.addEventListener('click', () => {
  boxesRef.innerHTML = '';
  amountOfBoxesRef.value = 0;
});

function createBoxes(amount) {
  const template = Array(Number(amount))
    .fill(null)
    .map((_, index) => {
      return `<div style='background-color: ${getRandomHexColor()}; width: ${
        30 + 10 * index
      }px; height: ${30 + 10 * index}px; border: 1px solid #000; margin: auto;'></div>`;
    })
    .join('');
  return template;
}
