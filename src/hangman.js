const { prompt } = require('enquirer')

let lives = 9
let gameInProgress = true
const answer = 'apple'

const answerArray = answer.split('')

let letterLeftToGuess = (() => {
    const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
    return caps.map(letter => letter.toLowerCase());
  })();

let correctGuessArray = generateInitialGuess(answer)

while(gameInProgress){
    mainTask()
}

async function mainTask(){
    const prompt = await askForLetter()

}

function askForLetter(){
    return prompt({
        type: 'input',
        message: 'Guess a letter!',
        name: 'guessedLetter'
    })
}

function generateInitialGuess(answer){
    const guessArray = []
    for(let letter in answer){
        guessArray.push('_')
    }
    return guessArray
}

