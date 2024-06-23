import enquirer from "enquirer";
import { generateInitialGuess, updateGuessArray } from "./hangmanUtils.js";
const { prompt } = enquirer;

async function mainTask() {
    let gameInProgress = true;
    const targetWord = "apple";

    const targetWordLetters = targetWord.split("");

    let guessArray = generateInitialGuess(targetWord);

    console.log(guessArray.join(" "));
    const guessedLetter = await askForLetter();
    updateGuessArray(guessArray, targetWordLetters, guessedLetter);

    if (!guessArray.includes("_")) {
        gameInProgress = false;
    }

    if (gameInProgress) {
        mainTask();
    } else {
        console.log("congratulations, the answer was " + targetWord);
    }
}

async function askForLetter() {
    const promptResult = await prompt({
        type: "input",
        message: "Guess a letter!",
        name: "guessedLetter",
    });
    // @ts-ignore
    return promptResult.guessedLetter;
}

mainTask();
