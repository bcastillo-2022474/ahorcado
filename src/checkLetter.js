import {state} from "./state.js";
import {minusALife} from "./minusALife.js";
import {displayCurrentWord} from "./displayCurrentWord.js";


export const checkLetter = (letter) => {
    const isLetterMatched = new Set([...state.globalWord]).has(letter);
    if (!isLetterMatched) minusALife();
    else {
        // update state of lettersMatched
        state.globalWordLettersSet.add(letter);
        displayCurrentWord();
    }

}