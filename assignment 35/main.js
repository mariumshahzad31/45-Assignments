// Array of animals
var animals = ["turtle", "cat", "rabbit"];
// Print each animal name using a for loop
console.log("Printing animal names:");
for (var i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
// Print a statement about each animal
console.log("\nPrinting statements about each animal:");
for (var i = 0; i < animals.length; i++) {
    console.log("A ".concat(animals[i], " would make a great pet."));
}
// Print a statement about the common characteristic
console.log("\nAny of these animals would make a great pet,I'll enjoy alot with them");
