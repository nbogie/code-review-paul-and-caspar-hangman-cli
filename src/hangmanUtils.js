function generateInitialGuess(answer) {
    const guessArray = [];
    for (let _letter of answer) {
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

function makeAlphabetLetterArray() {
    return [...Array(26)].map((_val, i) => String.fromCharCode(i + 97));
}

export { generateInitialGuess, updateGuessArray, makeAlphabetLetterArray };
