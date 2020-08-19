import { renderLines, renderClearButtons } from "./renders.js";
import { checkLetter, resetWrongChecks } from "./operationsOnWords.js";
import { clearCanvas } from "./canvasHandler.js";

window.addEventListener("load", renderLines());

document
  .getElementById("resetWord_button")
  .addEventListener("click", function () {
    renderLines();
    renderClearButtons();
    clearCanvas();
    resetWrongChecks();
  });

Array.from(document.getElementsByClassName("checkLetter_button")).forEach(
  function (element) {
    element.addEventListener("click", function () {
      checkLetter(this);
    });
  }
);
