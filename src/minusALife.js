import {state} from "./state.js";
import {displayLives} from "./displayLives.js";
import {livesContainer} from "./constants.js";
import {iterator} from "./dollAnimationIterator.js";

const wait = (sec) => new Promise((resolve) => setTimeout(resolve, sec * 1000));
export const minusALife = async () => {
    console.log("minusLife")
    state.lives--;
    livesContainer.innerHTML = "";
    document.body.classList.add("shake");
    await wait(0.5);
    document.body.classList.remove("shake");
    const step = iterator.next();
    displayLives();
    if (step.done) {
        // TODO: show modal with game over message
        alert("Game over, the word was: " state.globalWord);
        // disable everything
        return;
    }
    step.value();
}
