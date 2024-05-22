//string equality test
console.log("Equality test with strings:", "mango" === "mango"); // true
console.log("Equality test with strings:", "mango" !== "mango"); // false

// Inequality tests
console.log("Inequality test with strings:", "red" !== "pink"); // true
console.log("Inequality test with strings:", "red" === "pink"); // false

// Lowercase function tests
console.log("Lowercase function test:", "HEHE".toLowerCase() === "hehe"); // true
console.log("Lowercase function test:", "hehe" === "HEHE"); // false

// Numerical tests involving equality
console.log("Equality test with numbers:", 6 === 6); // true
console.log("Equality test with numbers:", 6 !== 6); // false

// Numerical tests involving inequality
console.log("Inequality test with numbers:", 2 !== 4); // true
console.log("Inequality test with numbers:", 2 === 4); // false

// Greater than test
console.log("Greater than test:", 35 > 6); // true

// Less than test
console.log("Less than test:", 9 < 80); // true

// Greater than or equal to test
console.log("Greater than or equal to test:", 10 >= 10); // true

// Tests of "AND" operator
console.log("And operator test:", true && true); // true

// Tests of "OR" operator
console.log("Or operator test:", true || false); // true

// Test whether an item is in an array
const fruits: string[] = ["Apple", "Banana", "Mango"];
console.log("Test 'Mango' in the array:", fruits.includes("Mango")); // true

// Test whether an item is not in an array
console.log("Testing 'Orange' is not in the array:", !fruits.includes("Orange")); // true
