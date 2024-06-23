import {
    generateInitialLetterBoard,
    letterBoardIsComplete,
    updateLetterBoard,
} from "./hangmanUtils";

test(generateInitialLetterBoard.name, () => {
    const targetWord = "a";
    const expected1 = ["_"];
    expect(generateInitialLetterBoard(targetWord)).toEqual(expected1);
    const input2 = "apple";
    const expected2 = ["_", "_", "_", "_", "_"];
    expect(generateInitialLetterBoard(input2)).toEqual(expected2);
});

test(updateLetterBoard.name + " when blank", () => {
    const letterBoard = ["_", "_", "_", "_", "_"];
    const targetWord = "apple";
    const guess = "a";
    const expected = ["a", "_", "_", "_", "_"];
    updateLetterBoard(letterBoard, targetWord, guess);
    expect(letterBoard).toEqual(expected);
});

test("test for partially filled letterBoard", () => {
    const letterBoard = ["a", "_", "_", "_", "_"];
    const targetWord = "apple";
    const guess = "l";
    const expected = ["a", "_", "_", "l", "_"];
    updateLetterBoard(letterBoard, targetWord, guess);
    expect(letterBoard).toEqual(expected);
});

test("test for letter that occurs more than once", () => {
    const letterBoard = ["_", "_", "_", "_", "_"];
    const targetWord = "apple";
    const guess = "p";
    const expected = ["_", "p", "p", "_", "_"];
    updateLetterBoard(letterBoard, targetWord, guess);
    expect(letterBoard).toEqual(expected);
});

test(letterBoardIsComplete.name, () => {
    expect(letterBoardIsComplete("_pple".split(""))).toBe(false);
    expect(letterBoardIsComplete("apple".split(""))).toBe(true);
    expect(letterBoardIsComplete("".split(""))).toBe(true);
    expect(letterBoardIsComplete("i".split(""))).toBe(true);
    expect(letterBoardIsComplete("mississip_i".split(""))).toBe(false);
    expect(letterBoardIsComplete("mi__i__i__i".split(""))).toBe(false);
});
