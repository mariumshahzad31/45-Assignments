//function called show_magicians that takes an array of strings as input
function show_magicians(magicians: string[]): void {
    // Iterate over each magician in the array
    for (let magician of magicians) {
        // Print the name of the magician
        console.log(magician);
    }
}

// Create an array of magician names
let magician_names: string[] = ["Harry", "Pan", "Lowry", "Cia"];

// Call the show_magicians function and pass the array of magician names as an argument
show_magicians(magician_names);
