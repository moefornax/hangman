import { WORDS } from "./words.js";
import {
  renderCorrectLetter,
  renderButtonUsed,
  renderButtonUsedAndWrong,
  renderAllButtonsDisabled,
  renderMessage,
} from "./renders.js";
import { drawOnCanvas } from "./canvasHandler.js";

let randomWordLetters;
let wrongChecks = 0;
let goodChecks;
let arrayGoodChecks;

export const getRandomWord = () => {
  const randomWord = WORDS[Math.floor(Math.random() * WORDS.length)];
  randomWordLetters = randomWord.split("");
  return randomWord.split("");
};

export const checkLetter = (_this) => {
  const letter = _this.value;
  if (randomWordLetters.includes(letter)) {
    let indexes = [],
      i;
    for (i = 0; i < randomWordLetters.length; i++) {
      if (randomWordLetters[i] === letter) {
        indexes.push(i);
      }
    }
    renderCorrectLetter(indexes, letter);
    renderButtonUsed(_this);
    storeGoodCheckInArray();
    checkWin();
  } else {
    renderButtonUsedAndWrong(_this);
    wrongChecks++;
    drawOnCanvas(wrongChecks);
    if (wrongChecks === 9) {
      renderAllButtonsDisabled();
      renderMessage("lose");
    }
  }
};

export const resetWrongChecks = () => {
  wrongChecks = 0;
};

const storeGoodCheckInArray = () => {
  goodChecks = document.getElementsByClassName("line");
  arrayGoodChecks = [];

  for (let i = 0; i < goodChecks.length; i++) {
    arrayGoodChecks.push(goodChecks.item(i).innerHTML);
  }
};

const compareArrays = (a, b) => {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
};

const checkWin = () => {
  if (compareArrays(arrayGoodChecks, randomWordLetters)) {
    renderMessage("won");
  }
};
