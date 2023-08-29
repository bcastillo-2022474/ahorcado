import {state} from "./state.js";
import {livesContainer} from "./constants.js";

export const displayLives = () => {
    livesContainer.innerHTML = "";
    for (let i = 0; i < state.lives; i++) {
        // this is because of the github pages, but dont worry, you can change this to the local path
        // ../img/heart.png
        livesContainer.insertAdjacentHTML("afterbegin", `<img alt="Heart" class="w-[10px]" src="https://bcastillo-2022474.github.io/ahorcado/img/heart.png">`)
    }
}