"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsRef = document.querySelector("#ingredients");

const createIngredient = ingredients.forEach((ingredient) => {
  const list = document.createElement("li");
  list.textContent = ingredient;
  ingredientsRef.appendChild(list);
});

console.log(ingredientsRef);
