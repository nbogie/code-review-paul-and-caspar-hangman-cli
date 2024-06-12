import enquirer from "enquirer";
import { generateInitialGuess, updateGuessArray } from "./hangmanUtils.js";
const { prompt } = enquirer;

let lives = 9;
let gameInProgress = true;
const answer = "apple";

const answerArray = answer.split("");

let letterLeftToGuess = (() => {
  const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
  return caps.map((letter) => letter.toLowerCase());
})();

let guessArray = generateInitialGuess(answer);

mainTask();

async function mainTask() {
  console.log(guessArray.join(" "));
  const guessedLetter = await askForLetter();
  updateGuessArray(guessArray, answerArray, guessedLetter);

  if (!guessArray.includes("_")) {
    gameInProgress = false;
  }

  if (gameInProgress) {
    mainTask();
  } else {
    console.log("congratulations, the answer was " + answer);
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
