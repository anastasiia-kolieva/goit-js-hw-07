"use strict";

const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listRef = document.querySelector("#gallery");
listRef.classList.add("gallery-styles");

const itemRefs = images.map((image) => `<li><img src="${image.url}" alt="${image.alt}" /></li>`);

listRef.insertAdjacentHTML("beforeend", ...itemRefs);

console.log(listRef);




// Я ещё думала над таким вариантом решения.

// const listRef = document.querySelector("#gallery");
// listRef.classList.add("gallery-styles");
// const createListOfItems = images.map((image) => {
//   const itemRef = document.createElement("li");
//   const imageRef = document.createElement("img");

//   imageRef.setAttribute("src", image.url);
//   imageRef.setAttribute("alt", image.alt);

//   itemRef.append(imageRef);
//   return itemRef;
// });
// // На выходе массив li

// createListOfItems.forEach((item)=>listRef.insertAdjacentHTML('beforeend',item));

// console.log(listRef);

