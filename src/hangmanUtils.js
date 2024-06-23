function generateInitialGuessArray(answer) {
    const guessArray = [];
    for (let _letter of answer) {
        guessArray.push("_");
    }
    return guessArray;
}
/**
 *
 * @param {string[]} guessArray - this will be mutated
 * @param {string} targetWord
 * @param {string} guess
 * @returns {boolean} whether guess occurs at least once in targetWord
 */
function updateGuessArray(guessArray, targetWord, guess) {
    let letterWasFound = false;
    for (let i = 0; i < targetWord.length; i++) {
        if (targetWord[i] === guess) {
            guessArray[i] = guess;
            letterWasFound = true;
        }
    }
    return letterWasFound;
}

function makeAlphabetLetterArray() {
    return [...Array(26)].map((_val, i) => String.fromCharCode(i + 97));
}

function guessIsComplete(guessArray) {
    return !guessArray.includes("_");
}

export {
    generateInitialGuessArray,
    updateGuessArray,
    makeAlphabetLetterArray,
    guessIsComplete,
};
