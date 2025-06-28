"use strict";

// adds all numbers in the array
function sumOfArray(arr) {
  if (Array.isArray(arr)) {
    let sum = 0;
    // loop and check
    for (let i = 0; i < arr.length; i++) {
      // get from array
      const newNum = arr[i];

      if (typeof newNum !== "number" || !Number.isFinite(newNum)) {
        return null;
      }
      // if (typeof newNum === "number" && Number.isFinite(newNum)) {
      // Add
      sum += newNum;
    }
    return sum;
  }
  // If the input is not an array, return 0
  return 0;
}

// Reverse the string

function reverseString(str) {
  // Returns an empty string if the value is NOT a string
  if (typeof str !== "string") return "";
  try {
    // split string into characters, then reverse and rejoin them
    return str.split("").reverse().join("");
    // Catch any errors to return an empty string
  } catch (e) {
    return "";
  }
}

// find the max number

function findMax(arr) {
  // Return null if empty or not an array
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  // Set the staring point with no max number
  let maxNumber = null;
  // loop
  for (let i = 0; i < arr.length; i++) {
    // gets the value
    const valueOf = arr[i];
    if (
      typeof valueOf === "number" &&
      // Is it a real number?
      Number.isFinite(valueOf)
    ) {
      // If greater than current max
      if (maxNumber === null || valueOf > maxNumber) {
        // Set the new max number
        maxNumber = valueOf;
      }
    }
  }
  return maxNumber;
}

// count the vowels in a string

function countVowels(str) {
  // if not a string, return 0
  if (typeof str !== "string") {
    return 0;
  }

  const theVowels = new Set(["a", "e", "i", "o", "u"]);
  let countVowels = 0;
  // best for output
  let lowercaseVowels = str.toLowerCase();

  // Loop/look through each letter in the string

  for (let i = 0; i < lowercaseVowels.length; i++) {
    if (theVowels.has(lowercaseVowels[i])) {
      countVowels++;
    }
  }
  return countVowels;
}

// Testing

// Sum
test("Sum Test Pass", () => {
  expect(sumOfArray([23, 77, 56, 45, 89])).toBe(290);
});

test("Sum Test Fail Values", () => {
  expect(sumOfArray([10, 5, 23])).toBe(33);
});

test("Sum Test Fail String", () => {
  expect(sumOfArray(["bob", 17, 33, 22, 89])).toBe(161);
});

// Reverse
test("Reverse Test Pass", () => {
  expect(reverseString("developer")).toBe("repoleved");
});

test("Reverse Test Fail String", () => {
  expect(reverseString("tacos")).toBe("sacot");
});

test("Reverse Test Fail Number", () => {
  expect(reverseString("twilight")).toBe("thg1liwt");
});

// Max Number
test("Greatest Number Test Pass", () => {
  expect(findMax([350, 125, 351, 465, 210])).toBe(465);
});

test("Greatest Number Test Fail", () => {
  expect(findMax[(35, 4, 89, 170, 45)]).toBe(4);
});

test("Greates Number Test Negative Number Fail", () => {
  expect(findMax[(-19, -1, -34, -5, -9)]).toBe(-9);
});

// Vowel counting
test("Counting Vowels Pass", () => {
  expect(countVowels("supercalifragilisticexpialidocious")).toBe(16);
});

test("Counting Vowels Fail", () => {
  expect(countVowels("audio")).toBe(2);
});

// Interesting here, if you enter 0 it passes since there are no vowels in the data..which is actually true..
test("Counting Vowels Non Number Fail", () => {
  expect(countVowels("938765")).toBe(3);
});
