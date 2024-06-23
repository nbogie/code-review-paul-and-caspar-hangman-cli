import enquirer from "enquirer";
import {
    generateInitialLetterBoard,
    letterBoardIsComplete,
    updateLetterBoard,
} from "./hangmanUtils.js";
import { reportLetterBoard, reportLoss, reportWin } from "./reports.js";
import lodash from "lodash";
const { sample } = lodash;
const { prompt } = enquirer;

async function mainTask() {
    const targetWord = chooseARandomTargetWord();
    let lives = 3;
    const letterBoard = generateInitialLetterBoard(targetWord);

    while (!letterBoardIsComplete(letterBoard) && lives > 0) {
        reportLetterBoard(letterBoard, lives);

        const guessedLetter = await askForLetter();
        const wasGuessInWord = updateLetterBoard(
            letterBoard,
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
