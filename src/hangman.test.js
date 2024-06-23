import {
    generateInitialGuessArray,
    guessIsComplete,
    updateGuessArray,
} from "./hangmanUtils";

test("test generateInitialGuessArray", () => {
    const input1 = ["a"];
    const expected1 = ["_"];
    expect(generateInitialGuessArray(input1)).toEqual(expected1);
    const input2 = ["a", "p", "p", "l", "e"];
    const expected2 = ["_", "_", "_", "_", "_"];
    expect(generateInitialGuessArray(input2)).toEqual(expected2);
});

test("test for blank guessArray", () => {
    const guessArray = ["_", "_", "_", "_", "_"];
    const answer = "apple";
    const guess = "a";
    const expected = ["a", "_", "_", "_", "_"];
    updateGuessArray(guessArray, answer, guess);
    expect(guessArray).toEqual(expected);
});

test("test for partially filled guessArray", () => {
    const guessArray = ["a", "_", "_", "_", "_"];
    const answer = "apple";
    const guess = "l";
    const expected = ["a", "_", "_", "l", "_"];
    updateGuessArray(guessArray, answer, guess);
    expect(guessArray).toEqual(expected);
});

test("test for letter that occurs more than once", () => {
    const guessArray = ["_", "_", "_", "_", "_"];
    const answer = "apple";
    const guess = "p";
    const expected = ["_", "p", "p", "_", "_"];
    updateGuessArray(guessArray, answer, guess);
    expect(guessArray).toEqual(expected);
});

test(guessIsComplete.name, () => {
    expect(guessIsComplete("_pple".split(""))).toBe(false);
    expect(guessIsComplete("apple".split(""))).toBe(true);
    expect(guessIsComplete("".split(""))).toBe(true);
    expect(guessIsComplete("i".split(""))).toBe(true);
    expect(guessIsComplete("mississip_i".split(""))).toBe(false);
    expect(guessIsComplete("mi__i__i__i".split(""))).toBe(false);
});
