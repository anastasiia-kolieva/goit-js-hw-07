"use strict";

const inputRef = document.querySelector("#validation-input");
const availebaleAmoutOfSymbols = +inputRef.dataset.length;

inputRef.addEventListener("blur", () => {
  if (inputRef.value.length <= availebaleAmoutOfSymbols) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
});
