// Define the Album interface
interface Album {
    artist: string;
    title: string;
    tracks?: number; // Optional property for number of tracks
}

// Define the make_album function
function make_album(artist_name: string, album_title: string, num_tracks?: number): Album {
    let album: Album = {
        artist: artist_name,
        title: album_title
    };

    // If num_tracks is provided, add it to the album object
    if (num_tracks !== undefined) {
        album.tracks = num_tracks;
    }

    return album;
}

// Creating three albums
let album1: Album = make_album('Atif Aslam', 'Album2');
let album2: Album = make_album('Hasan Raheem', 'Album3', 7);
let album3: Album = make_album('Nusrat Fateh Ali Khan', 'Album1', 5);

// Printing each album
console.log(album3);
console.log(album2);
console.log(album1);

// Function to make the magicians great
function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];

    // Loop through the magicians array and add "the Great" to each magician's name
    for (let magician of magicians) {
        great_magicians.push(`the Great ${magician}`);
    }

    return great_magicians;
}

// Original array of magician names
let magicians: string[] = ["Jack", "Robert", "Tia", "Refin"];

// Call make_great function with a copy of the array of magician names
let great_magicians: string[] = make_great([...magicians]);

// Show the original array of magician names
console.log("Original Magicians:");
console.log(magicians);

// Show the array with "the Great" added to each magician's name
console.log("Great Magicians:");
console.log(great_magicians);


