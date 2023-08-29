import {state} from "./state.js";
import {livesContainer} from "./constants.js";

export const displayLives = () => {
    livesContainer.innerHTML = "";
    for (let i = 0; i < state.lives; i++) {
        livesContainer.insertAdjacentHTML("afterbegin", `<img alt="Heart" class="w-[10px]" src="../img/heart.png">`)
    }
}