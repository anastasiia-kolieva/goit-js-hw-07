"use strict";

const categoriesRef = document.querySelector("#categories").children;
console.log(`В списке ${categoriesRef.length} категории`);

const itemListRef = document.querySelectorAll("li.item");

const categoriesList = [];

itemListRef.forEach((element) =>
  categoriesList.push(
    `Категория:${element.firstChild.textContent}, 
     Количество: ${element.firstElementChild.children.length}`
  )
);

console.log(categoriesList);
