// Equality Test
console.log("Equality test with strings:", "mango" === "mango"); //true
console.log("Equality test with strings:", "mango" !== "mango"); //false
//Inequality test
console.log("Inequality test with strings:", "car" !== "cycle"); //true
console.log("Inequality test with strings:", "car" !== "car"); //false
// Testing lowercase function
console.log("Lowercase function test:", "HEHE".toLowerCase() === "HEHE"); //true
console.log("Lowercase function test:", "HEHE" === "HEHE"); //false
// Numerical tests involving equality 
console.log("Equality test with numbers:", 6 === 6); //true
console.log("Equality test with numbers:", 6 !== 6); //false
// Numerical tests involving inequality 
console.log("Inequality test with numbers:", 2 !== 4); //true
console.log("Inequality test with numbers:", 2 === 4); //false
//greater than test 
console.log("Greater than test:", 35 > 6); //true
console.log("Greater than test:", 35 > 6); //false
//less than test
console.log("Less than test:", 9 < 80); //true
console.log("Less than test:", 80 < 9); //false
//greater than or equal to test
console.log("Greater than or equal to test:", 10 >= 10); //true
console.log("Greater than or equal to test:", 90 >= 100); //false
//less than or equal to
console.log("Less than or equal to test:", 5 <= 10); // true
console.log("Less than or equal to test:", 10 <= 9); //false
// Tests of "AND" operator
console.log("And operator test:", true && true); //true
console.log("And operator test:", true && false); //false
// Tests of  "OR" operator
console.log("Or operator test:", true || false); //true
console.log("Or operator test:", false || false); //false
// Test whether an item is in an array
var fruits = ["Apple", "Banana", "Mango"];
console.log("Test 'Mango' in the array:", fruits.includes("Mango")); //true
console.log("Test 'Mango' in the array:", fruits.includes("Orange")); //false
// Test whether an item is not in an array
console.log("Testing 'Kiwi' is not in array:", !fruits.includes("Orange")); //true
console.log("Testing 'Kiwi' is not in array:", !fruits.includes("Mango")); //false
