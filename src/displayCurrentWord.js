import {wordInputsContainer} from "./constants.js";
import {state} from "./state.js";

const wait = (sec) => new Promise((resolve) => setTimeout(resolve, sec * 1000));
export const displayCurrentWord = async () => {
    wordInputsContainer.innerHTML = "";
    document.body.classList.add("check");
    await wait(0.5);
    document.body.classList.remove("check");

    state.globalWord.split("").forEach((letter) => {
        const letterMatched = state.globalWordLettersSet.has(letter) ? letter : "";
        wordInputsContainer.insertAdjacentHTML("beforeend", `<div class="border-b w-[30px] border-b-black flex items-center justify-center">${letterMatched}</div>`)
    })
}