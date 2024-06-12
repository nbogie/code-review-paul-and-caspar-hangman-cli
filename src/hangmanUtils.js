function generateInitialGuess(answer) {
  const guessArray = [];
  for (let letter of answer) {
    guessArray.push("_");
  }
  return guessArray;
}

function updateGuessArray(guessArray, answer, guess) {
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] === guess) {
      guessArray[i] = guess;
    }
  }
  return guessArray;
}

export { generateInitialGuess, updateGuessArray };
