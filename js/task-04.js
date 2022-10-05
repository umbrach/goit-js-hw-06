// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.



let counterValue = 0;
const valueRef = document.querySelector("#value");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

const getDecrement = () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
};
const getIncrement = () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
  return;
};

decrementBtn.addEventListener("click", getDecrement);

incrementBtn.addEventListener("click", getIncrement);
