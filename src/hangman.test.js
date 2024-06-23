import { generateInitialGuess, updateGuessArray } from "./hangmanUtils";

test("test generateInitialGuess", () => {
    const input1 = ["a"];
    const expected1 = ["_"];
    expect(generateInitialGuess(input1)).toEqual(expected1);
    const input2 = ["a", "p", "p", "l", "e"];
    const expected2 = ["_", "_", "_", "_", "_"];
    expect(generateInitialGuess(input2)).toEqual(expected2);
});

test("test for blank guessArray", () => {
    const guessArray = ["_", "_", "_", "_", "_"];
    const answer = "apple";
    const guess = "a";
    const expected = ["a", "_", "_", "_", "_"];
    expect(updateGuessArray(guessArray, answer, guess)).toEqual(expected);
});

test("test for partially filled guessArray", () => {
    const guessArray = ["a", "_", "_", "_", "_"];
    const answer = "apple";
    const guess = "l";
    const expected = ["a", "_", "_", "l", "_"];
    expect(updateGuessArray(guessArray, answer, guess)).toEqual(expected);
});

test("test for letter that occurs more than once", () => {
    const guessArray = ["_", "_", "_", "_", "_"];
    const answer = "apple";
    const guess = "p";
    const expected = ["_", "p", "p", "_", "_"];
    expect(updateGuessArray(guessArray, answer, guess)).toEqual(expected);
});
