console.clear();

const animalStrings = [
  "cat",
  "dog",
  "elephant",
  "rabbit",
  "lion",
  "tiger",
  "horse",
  "giraffe",
  "zebra",
  "penguin",
  "polar bear",
  "panda",
  "koala",
  "kangoroo",
  "monkey",
  "sloth",
  "hippo",
  "rhino",
];

const hippoExists = animalStrings.includes("hippo");
console.log("hippoExists", hippoExists)

// Hint: You can pass the starting index as second parameter.
const startIndex = 5;
const catStartingFromIndexFiveExists = animalStrings.slice(startIndex).find((animal) => animal == "cat") !==undefined;
console.log("catStartingFromIndexFiveExists", catStartingFromIndexFiveExists)

// Hint: Besides the array method, check out the string method `startsWith()`.
const firstAnimalStartingWithLetterP = animalStrings.find((animal) => animal.startsWith("p"));
console.log("firstAnimalStartingWithLetterP", firstAnimalStartingWithLetterP)

const indexOfGiraffe = animalStrings.findIndex((animal) => animal == "giraffe");
console.log("indexOfGiraffe", indexOfGiraffe)

// Note:
// - Sorting strings is slightly more complicated than sorting numbers.
// - You will need if-statements and return values of -1, 1, and 0.
// - Check out MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// Hint: There is no need to upper-/lowercase the strings before sorting them.
// Hint: sort() mutates the original array, which is bad.
// -> Use animals.slice().sort(...) to make a copy.

const animalsSortedAlphabetically = animalStrings.slice().sort();
console.log("animalsSortedAlphabetically", animalsSortedAlphabetically)

/*
const strings = ["Xbox", "PlayStation", "GameBoy"];

strings.sort((a, b) => {
  const nameA = a.toLowerCase();
  const nameB = b.toLowerCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
});

console.log(strings); // ['GameBoy', 'PlayStation', 'Xbox']
*/

// Hint: Guess what? There is a string method called `endsWith()`.
const anyAnimalEndsWithLetterZ = animalStrings.some((animal) => animal.endsWith("z"));
console.log("anyAnimalEndsWithLetterZ", anyAnimalEndsWithLetterZ)

const everyAnimalHasMoreThanTwoLetters = animalStrings.every((animal) => animal.length > 2);
console.log("everyAnimalHasMoreThanTwoLetters", everyAnimalHasMoreThanTwoLetters)

// Hint: There are several ways to go here. Let's focus on two options:
// Option 1: Concatenate all characters with `reduce()` and check for the `length` property of the result.
// Option 2: Use `map()` to create an array with the length values of all strings,
// 				then sum them up with `reduce()` (keyword: method chaining)

/*
const sumOfAllAnimalCharacters = animalStrings.reduce((a, b) => a + b).length;
console.log("sumOfAllAnimalCharacters", sumOfAllAnimalCharacters)
*/

const sumOfAllAnimalCharacters = animalStrings.map((animal) => animal.length).reduce((sum, length) => sum + length, 0);
console.log("sumOfAllAnimalCharacters", sumOfAllAnimalCharacters)

export {
  hippoExists,
  catStartingFromIndexFiveExists,
  firstAnimalStartingWithLetterP,
  indexOfGiraffe,
  animalsSortedAlphabetically,
  anyAnimalEndsWithLetterZ,
  everyAnimalHasMoreThanTwoLetters,
  sumOfAllAnimalCharacters,
};
