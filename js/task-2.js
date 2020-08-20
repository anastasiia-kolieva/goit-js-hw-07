"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

// Не уверенна в адекватности данного кода, но вроде работает)

const ingredientsRef = document.querySelector("#ingredients");

const createIngredient = ingredients.map((ingredient) => {
  const list = document.createElement("li");
  list.textContent = ingredient;
  console.log(list);
  ingredientsRef.appendChild(list);
  return;
});

console.log(ingredientsRef);

// Ещё один вариант решения, но ОЧЕНЬ долгий. "Ручками" всё прописанно.  

// const list1 = document.createElement("li");
// list1.textContent = "Картошка";
// console.log(list1);

// const list2 = document.createElement("li");
// list2.textContent = "Грибы";
// console.log(list2);

// const list3 = document.createElement("li");
// list3.textContent = "Чеснок";
// console.log(list3);

// const list4 = document.createElement("li");
// list4.textContent = "Помидоры";
// console.log(list4);

// const list5 = document.createElement("li");
// list5.textContent = "Зелень";
// console.log(list5);

// const list6 = document.createElement("li");
// list6.textContent = "Приправы";
// console.log(list6);

// const ingredientsRef = document.querySelector("#ingredients");
// console.log(ingredientsRef);

// ingredientsRef.appendChild(list1);
// ingredientsRef.appendChild(list2);
// ingredientsRef.appendChild(list3);
// ingredientsRef.appendChild(list4);
// ingredientsRef.appendChild(list5);
// ingredientsRef.appendChild(list6);
