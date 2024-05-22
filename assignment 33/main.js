// ordinal numbers: numbers which define position of something in series
// Store the numbers 1 through 9 in an array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("following is the proper ordinal ending for each number: ");
// Loop through the array
numbers.forEach(function (number) {
    // Use if-else chain to print the proper ordinal ending for each number
    if (number === 1) {
        console.log("".concat(number, "st"));
    }
    else if (number === 2) {
        console.log("".concat(number, "nd"));
    }
    else if (number === 3) {
        console.log("".concat(number, "rd"));
    }
    else {
        console.log("".concat(number, "th"));
    }
});
