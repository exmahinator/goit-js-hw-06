function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorInfoRef = document.querySelector('.color');
const changeBodyColorBtnRef = document.querySelector('.change-color');

changeBodyColorBtnRef.addEventListener('click', onClickBodyChange);

function onClickBodyChange() {
  const colorHex = getRandomHexColor();
  document.body.style.backgroundColor = colorHex;
  colorInfoRef.textContent = colorHex;
}
