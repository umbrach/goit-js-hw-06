function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}




const colorChangerBtn = document.querySelector(".change-color");
const colorValueEl = document.querySelector(".color");

const changeColor = () => {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  colorValueEl.textContent = newColor;
};
colorChangerBtn.addEventListener("click", changeColor);