# Hangman Game

A simple Hangman game implemented in JavaScript and HTML using the Canvas API and various modules. [Here you can play it](https://bcastillo-2022474.github.io/ahorcado/)

## Overview

This Hangman game allows players to guess a hidden word by selecting letters. If the guessed letter matches any letters in the hidden word, they are revealed. However, if the guessed letter does not match, the player loses a life, and a hanging figure is progressively drawn using the Canvas API. The goal is to guess the entire word before running out of lives or completing the drawing of the hanging figure.

## Project Structure

The project consists of multiple JavaScript files, each responsible for specific functionalities:

-   `constants.js`: Defines constants, including the API for fetching random words, the number of lives, available letters, and HTML element references.
-   `state.js`: Contains the state object that keeps track of game-related data, such as remaining lives, the global word, and a matched letter set of the guesses of word's letters.
-   `setUpGame.js`: Sets up the game by initializing the hanging structure on the canvas, displaying available letters, and handling user interactions.
-   `getRandomWord.js`: Fetches a random word from an API to be used as the target word for the game.
-   `displayLives.js`: Displays the remaining lives as heart icons on the screen.
-   `checkLetter.js`: Checks if the guessed letter matches any letters in the global word and updates the game state accordingly.
-   `displayCurrentWord.js`: Displays the current state of the guessed word, revealing matched letters.
-   `checkWin.js`: Checks if the player has won the game by guessing all the letters in the global word.
-   `minusALife.js`: Decreases the number of remaining lives, triggers an animation, and updates the displayed lives.
-   `setCanvasHangingStructure.js`: Sets up the hanging structure on the canvas using the Canvas API.
-   `dollAnimationIterator.js`: Defines the steps to draw the hanging figure progressively using the Canvas API.

## How to Play

1. Load the game in a web browser.
2. The hanging structure will be displayed on the canvas.
3. Available letters are displayed below the canvas.
4. Click on a letter to guess it.
5. If the guessed letter matches any letters in the hidden word, they will be revealed.
6. If the guessed letter does not match, you lose a life, and the hanging figure is drawn further.
7. Continue guessing letters until you complete the word or run out of lives.

## Demo

[Try it here!!!](https://bcastillo-2022474.github.io/ahorcado/)
