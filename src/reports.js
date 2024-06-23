/**
 *
 * @param {string} targetWord
 */
function reportWin(targetWord) {
    console.log(
        "🌈 🌈 🌈 congratulations, the answer was " + targetWord + " 🌈 🌈 🌈",
    );
}

/**
 *
 *
 * @param {LetterBoard} letterBoard
 * @param {number} counter
 */
function reportLetterBoard(letterBoard, counter) {
    console.log("STATUS: ", letterBoard.join(" "), " count: ", counter);
}

function reportLoss(targetWord) {
    console.log("Sorry you lose! The word was: " + targetWord);
}

export { reportLetterBoard, reportLoss, reportWin };
