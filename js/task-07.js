const fontSizeControlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');
textRef.style.fontSize = `${fontSizeControlRef.value}px`;

const onSlideDrag = function () {
  textRef.style.fontSize = `${fontSizeControlRef.value}px`;
};

fontSizeControlRef.addEventListener('input', onSlideDrag);
