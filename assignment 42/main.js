// Function to format city and country
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
// Function to add "the Great" to each magician's name
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great ".concat(magicians[i]);
    }
}
// Function to show magicians
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Call city_country function with city-country pairs and print the result
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Istanbul", "Turkey"));
console.log(city_country("Tokyo", "Japan"));
// Create an array of magician names
var magician_names = ["Hary", "Carry", "Cia", "Henry"];
// Call make_great function to modify the array of magician names
make_great(magician_names);
// Call show_magicians function to see the modified list of magicians
show_magicians(magician_names);
