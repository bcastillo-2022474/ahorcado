import {NUMBER_OF_LIFES} from "./constants.js";
import {iteratorLength} from "./dollAnimationIterator.js";

export const state = {
    // right now this state is not useful, but who knows,
    // maybe in the future we will need it
    lives: (iteratorLength + 1) || NUMBER_OF_LIFES,
    globalWord: undefined,
    globalWordLettersSet: new Set(),
}