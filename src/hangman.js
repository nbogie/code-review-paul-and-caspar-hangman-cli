import enquirer from "enquirer";
import {
    generateInitialGuessArray,
    guessIsComplete,
    updateGuessArray,
} from "./hangmanUtils.js";
import { reportGuessArray, reportLoss, reportWin } from "./reports.js";
import lodash from "lodash";
const { sample } = lodash;
const { prompt } = enquirer;

async function mainTask() {
    const targetWord = chooseARandomTargetWord();
    let lives = 3;
    const guessArray = generateInitialGuessArray(targetWord);

    while (!guessIsComplete(guessArray) && lives > 0) {
        reportGuessArray(guessArray, lives);

        const guessedLetter = await askForLetter();
        const wasGuessInWord = updateGuessArray(
            guessArray,
            targetWord,
            guessedLetter,
        );
        if (!wasGuessInWord) {
            lives--;
        }
    }

    if (lives > 0) {
        reportWin(targetWord);
    } else {
        reportLoss(targetWord);
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

/**
 *
 * @returns {string}
 */
function chooseARandomTargetWord() {
    return sample(["apple", "banana"]);
}

mainTask();
