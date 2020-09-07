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

const createIngredient = ingredients.map((ingredient) => {
  const list = document.createElement("li");
  list.textContent = ingredient;
  return ingredient;
});

ingredientsRef.append(...createIngredient);
console.log(ingredientsRef);
