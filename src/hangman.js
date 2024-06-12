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

let correctGuessArray = generateInitialGuess(answer);

mainTask();

async function mainTask() {
  console.log(correctGuessArray.join(" "));
  const prompt = await askForLetter();
  console.log("hello");
}

function askForLetter() {
  return prompt({
    type: "input",
    message: "Guess a letter!",
    name: "guessedLetter",
  });
}
