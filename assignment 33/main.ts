// ordinal numbers: numbers which define position of something in series
// Store the numbers 1 through 9 in an array
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(`following is the proper ordinal ending for each number: `);

// Loop through the array
numbers.forEach(number => {
  // Use if-else chain to print the proper ordinal ending for each number
  if (number === 1) {
    console.log(`${number}st`);
  } else if (number === 2) {
    console.log(`${number}nd`);
  } else if (number === 3) {
    console.log(`${number}rd`);
  } else {
    console.log(`${number}th`);
  }
});
