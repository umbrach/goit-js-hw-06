const categoriesEl = document.querySelectorAll("#categories .item");
console.log("Number of categories:", categoriesEl.length);

categoriesEl.forEach((category) => {
  console.log("");
  console.log("Category:", category.querySelector("h2").textContent);
  console.log("Elements:", category.querySelectorAll("li").length);
});
