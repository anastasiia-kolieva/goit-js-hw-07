"use strict";

const inputRef = document.querySelector("#font-size-control");
const spanRef = document.querySelector("#text");

const changingSizeOfText = (event) => {
  spanRef.style.fontSize = event.currentTarget.value + "px";
};

inputRef.addEventListener("input", changingSizeOfText);
