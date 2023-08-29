import {API_RANDOM_WORD} from "./constants.js";

export const getRandomWord = async () => {
    const response = await fetch(API_RANDOM_WORD)
    if (!response.ok) {
        return "Error";
    }

    return response.json().then(([word]) => word);
}