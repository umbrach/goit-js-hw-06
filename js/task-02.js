const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const parentEl = document.querySelector("#ingredients");

function insertItem(ingredients, parentEl) {
  const result = ingredients
    .map((ingredient) => {
      return `<li>${ingredient}</li>`;
    })
    .join("");

  parentEl.insertAdjacentHTML("beforeend", result);
}

insertItem(ingredients, parentEl);
