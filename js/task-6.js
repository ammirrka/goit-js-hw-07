function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const container = document.querySelector('#boxes');
function createBoxes(amount) {
  let size = 30;
  for (let i = 0; i <= amount; i++) {
    const div = document.createElement('div');
    container.insertAdjacentElement('beforeend', div);
    div.style.width += `${size}px`;
    div.style.height += `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    size += 10;
  }
}

const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');

createBtn.addEventListener('click', () => {
  input.value <= 100 && input.value >= 1
    ? createBoxes(input.value)
    : alert('Please enter a valid number');
});
