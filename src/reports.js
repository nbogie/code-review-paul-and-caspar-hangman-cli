/**
 *
 * @param {string} targetWord
 */
function reportWin(targetWord) {
    console.log(
        "🌈 🌈 🌈 congratulations, the answer was " + targetWord + " 🌈 🌈 🌈",
    );
}

function reportGuessArray(guessArray, counter) {
    console.log("STATUS: ", guessArray.join(" "), " count: ", counter);
}

function reportLoss(targetWord) {
    console.log("Sorry you lose! The word was: " + targetWord);
}

export { reportGuessArray, reportLoss, reportWin };
