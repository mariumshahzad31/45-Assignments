// Array of my favorite pizza names
const favoritePizzas: string[] = ["arabic ranch", "creamy tikka", "BBQ Chicken"];

// Print each pizza name using a for loop
console.log("Printing pizza names:");
for (let i = 0; i < favoritePizzas.length; i++) {
  console.log(favoritePizzas[i]);
}

// Print a sentence for each pizza using its name
console.log("\nPrinting pizza preferences:");
for (let i = 0; i < favoritePizzas.length; i++) {
  console.log(`I like ${favoritePizzas[i]} pizza.`);
}

// Additional line stating how much you like pizza
console.log("\nI really love to eat pizza!");
