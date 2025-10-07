const { sumArray, countWords, findMax, isDivisible } = require('../js/main');

describe("Tests for sumArray", () => {

  test("array of positive numbers", () => {
    expect(sumArray([1, 2, 3, 10, 99])).toBe(115);
  });

  test("array of negative numbers", () => {
    expect(sumArray([-1, -2, -3, -10, -99])).toBe(-115);
  });

  test("array including 0", () => {
    expect(sumArray([0, 1, 2, 0, 3])).toBe(6);
  });

});

describe("Tests for countWords", () => {

  test("normal text string", () => {
    expect(countWords("Hello world Jest")).toBe(3);
  });

  test("string with spaces at start and end", () => {
    expect(countWords("   Hello world   ")).toBe(2);
  });

  test("empty string", () => {
    expect(countWords("")).toBe(0);
  });

  test("string with consecutive spaces between words", () => {
    expect(countWords("Hello   world   Jest")).toBe(3);
  });

});

describe("Tests for findMax", () => {

  test("array of positive numbers", () => {
    expect(findMax([1, 2, 3, 10, 99])).toBe(99);
  });

  test("array of negative numbers", () => {
    expect(findMax([-1, -2, -3, -10, -99])).toBe(-1);
  });

  test("empty array", () => {
    expect(findMax([])).toBeNull();
  });

  test("array where all numbers are equal", () => {
    expect(findMax([5, 5, 5, 5])).toBe(5);
  });

});

describe("Tests for isDivisible", () => {

  test("divisible numbers", () => {
    expect(isDivisible(10, 2)).toBe(true);
  });

  test("non-divisible numbers", () => {
    expect(isDivisible(10, 3)).toBe(false);
  });

  test("divisor is 0", () => {
    expect(isDivisible(10, 0)).toBe("No se puede dividir entre cero");
  });

  test("negative numbers as input", () => {
    expect(isDivisible(-10, 2)).toBe(true);
    expect(isDivisible(-10, 3)).toBe(false);
  });

});
