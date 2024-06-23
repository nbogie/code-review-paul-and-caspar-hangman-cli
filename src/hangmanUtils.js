/**
 * @typedef {string[]} LetterBoard
 */

/**
 *
 * @param {string} targetWord
 * @returns {LetterBoard}
 */
function generateInitialLetterBoard(targetWord) {
    return targetWord.split("").map((_ch) => "_");
}

/**
 *
 * @param {LetterBoard} letterBoard - this will be mutated
 * @param {string} targetWord
 * @param {string} guess
 * @returns {boolean} whether guess occurs at least once in targetWord
 */
function updateLetterBoard(letterBoard, targetWord, guess) {
    let letterWasFound = false;
    for (let i = 0; i < targetWord.length; i++) {
        if (targetWord[i] === guess) {
            letterBoard[i] = guess;
            letterWasFound = true;
        }
    }
    return letterWasFound;
}

function makeAlphabetLetterArray() {
    return [...Array(26)].map((_val, i) => String.fromCharCode(i + 97));
}

function letterBoardIsComplete(letterBoard) {
    return !letterBoard.includes("_");
}

export {
    generateInitialLetterBoard,
    updateLetterBoard,
    makeAlphabetLetterArray,
    letterBoardIsComplete,
};
