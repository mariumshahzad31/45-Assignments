//function called show_magicians that takes an array of strings as input
function show_magicians(magicians) {
    // Iterate over each magician in the array
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        // Print the name of the magician
        console.log(magician);
    }
}
// Create an array of magician names
var magician_names = ["Harry", "Pan", "Lowry", "Cia"];
// Call the show_magicians function and pass the array of magician names as an argument
show_magicians(magician_names);
