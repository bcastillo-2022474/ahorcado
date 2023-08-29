const API_RANDOM_WORD = "https://random-word-api.herokuapp.com/word?lang=es";
const lettersContainer = document.getElementById("letters-container");
const wordInputsContainer = document.getElementById("word-container");
const lifesContainer = document.getElementById("lifes-container");
const disabledLetters = {};
const lettersMatched = {};
let LIFE = 7;
let GLOBAL_WORD;
console.log(lettersContainer, wordInputsContainer)

const getRandomWord = async () => {
    const response = await fetch(API_RANDOM_WORD)
    if (!response.ok) {
        return "Error";
    }

    return response.json().then(([word]) => word);
}

const minusALife = () => {
    console.log("minusLife")
    LIFE--;
    lifesContainer.innerHTML = "";
    displayLifes();
}

const checkLetter = (letter) => {
    GLOBAL_WORD.split("").forEach((letterOfWord, i) => {
        if (letter == letterOfWord.toLowerCase()) lettersMatched[i] = true;
    })

    if (lttersMatched.length === 0) return minusALife();
    
    wordInputsContainer.innerHTML = "";
    GLOBAL_WORD.split("").forEach((letter, i) => {
        const letterMatched = lettersMatched[i] ? letter : "";
        wordInputsContainer.insertAdjacentHTML("beforeend", `<div class="border border-b w-[30px] border-b-black flex items-center justify-center">${letterMatched}</div>`)
    })
}

const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "h", "i", "j", "k", "l", "m",
                 "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "z", "x", "y", "z"]

const displayLifes = () => {
    for (let i = 0; i < LIFE; i++) {
        lifesContainer.insertAdjacentHTML("afterbegin", `<img class="w-[10px]" src="img/heart.png"></img>`)
    }
}

displayLifes();

letters.forEach((letter) => {
    lettersContainer.insertAdjacentHTML("beforeend", `<button class="border-none px-2 py-1 bg-red-100 btn-letter">${letter}</button>`)
})
getRandomWord().then(word => {
    GLOBAL_WORD = word;
    console.log({GLOBAL_WORD})
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
    checkLetter(litter);
    disabledLetters[btn.textContent] = true;
});