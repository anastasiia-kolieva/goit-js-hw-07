"use strict";

const categoriesRef = document.querySelector("#categories").children;
console.log(`В списке ${categoriesRef.length} категории`);

const itemListRef = document.querySelectorAll("li.item");


itemListRef.forEach((element) =>{
    console.log(`Категория:${element.firstElementChild.textContent}`), 
    console.log(`Количество: ${element.lastElementChild.children.length}`)
}
);

