var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Define the make_album function
function make_album(artist_name, album_title, num_tracks) {
    var album = {
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
var album1 = make_album('Atif Aslam', 'Album2');
var album2 = make_album('Hasan Raheem', 'Album3', 7);
var album3 = make_album('Nusrat Fateh Ali Khan', 'Album1', 5);
// Printing each album
console.log(album3);
console.log(album2);
console.log(album1);
// Function to make the magicians great
function make_great(magicians) {
    var great_magicians = [];
    // Loop through the magicians array and add "the Great" to each magician's name
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        great_magicians.push("the Great ".concat(magician));
    }
    return great_magicians;
}
// Original array of magician names
var magicians = ["Jack", "Robert", "Tia", "Refin"];
// Call make_great function with a copy of the array of magician names
var great_magicians = make_great(__spreadArray([], magicians, true));
// Show the original array of magician names
console.log("Original Magicians:");
console.log(magicians);
// Show the array with "the Great" added to each magician's name
console.log("Great Magicians:");
console.log(great_magicians);
