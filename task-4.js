"use strict";

let counterValue = 0;

const increment = () => {
  counterValue += 1;
  counterValue = document.querySelector("#value").textContent;
  return counterValue;
};

const decrement = () => {
  counterValue -= 1;
  counterValue = document.querySelector("#value").textContent;
  return counterValue;
};

const btnIncrementRef = document.querySelector('increment');
btnIncrementRef.addEventListener("click", increment);

const btnDecrementRef = document.querySelector('decrement');
btnDecrementRef.addEventListener("click", decrement);