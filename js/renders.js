import { getRandomWord } from "./operationsOnWords.js";

export const renderLines = () => {
  let randomWordLetters = getRandomWord();
  let wordContainer = document.getElementById("word_container");
  wordContainer.innerHTML = "";

  randomWordLetters.forEach(() => {
    wordContainer.innerHTML =
      wordContainer.innerHTML + `<div class="line">&nbsp;</div>&nbsp;`;
  });
};

export const renderCorrectLetter = (indexes, letter) => {
  indexes.forEach((element) => {
    document.getElementsByClassName("line")[element].innerHTML = letter;
  });
};

export const renderButtonUsed = (buttonToChange) => {
  buttonToChange.disabled = true;
};

export const renderButtonUsedAndWrong = (buttonToChange) => {
  buttonToChange.classList.add("is-danger");
  buttonToChange.disabled = true;
};

export const renderClearButtons = () => {
  Array.from(document.getElementsByClassName("checkLetter_button")).forEach(
    function (element) {
      element.disabled = false;
      element.classList.remove("is-danger");
    }
  );
};

export const renderAllButtonsDisabled = () => {
  Array.from(document.getElementsByClassName("checkLetter_button")).forEach(
    function (element) {
      element.disabled = true;
    }
  );
};

export const renderMessage = (msg) => {
  if (msg === "lose") {
    alert("You lose.");
  } else {
    alert("Congrats! You won!");
    //window.open("https://youtu.be/W9l0fVBQPvQ?t=14", "_blank"); Optional easter egg :)
  }
};
