import {state} from "./state.js";

export const checkWin = () => {
    if (state.globalWordLettersSet.size === new Set([...state.globalWord]).size) {
        // TODO: show modal with win message
        alert("You won");
    }
}