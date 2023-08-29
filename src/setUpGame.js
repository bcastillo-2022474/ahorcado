import {state} from "./state.js";
import {getRandomWord} from "./getRandomWord.js";
import {displayLives} from "./displayLives.js";
import {LETTERS} from "./constants.js";
import {checkLetter} from "./checkLetter.js";
import {lettersContainer, wordInputsContainer} from "./constants.js";
import {setCanvasHangingStructure} from "./setCanvasHangingStructure.js";
import {checkWin} from "./checkWin.js";

export const setUpGame = () => {
    setCanvasHangingStructure();
    const disabledLetters = {};
    displayLives();
    LETTERS.forEach((letter) => {
        lettersContainer.insertAdjacentHTML("beforeend", `<button class="border-none px-3 py-2 rounded bg-red-100 btn-letter">${letter}</button>`)
    })
    getRandomWord().then(word => {
        state.globalWord = word;
        console.log(state.globalWord);
        word.split("").forEach(letter => {
            wordInputsContainer.insertAdjacentHTML("beforeend", `<div class="border border-b w-[30px] border-b-black"></div>`)
        })
    })

    lettersContainer.addEventListener("click", (e) => {
        const btn = e.target.closest(".btn-letter")
        if (!btn) return;
        if (disabledLetters[btn.textContent]) return;

        const letter = btn.textContent
        console.log(letter);
        checkLetter(letter);
        disabledLetters[btn.textContent] = true;
        btn.disabled = true;
        btn.classList.remove("bg-red-100");
        btn.classList.add("bg-gray-300")
        checkWin();
    });
}