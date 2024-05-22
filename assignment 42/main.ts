// Function to format city and country
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Function to add "the Great" to each magician's name
function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `the Great ${magicians[i]}`;
    }
}

// Function to show magicians
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Call city_country function with city-country pairs and print the result
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Istanbul", "Turkey"));
console.log(city_country("Tokyo", "Japan"));

// Create an array of magician names
let magician_names: string[] = ["Hary", "Carry", "Cia", "Henry"];

// Call make_great function to modify the array of magician names
make_great(magician_names);

// Call show_magicians function to see the modified list of magicians
show_magicians(magician_names);
