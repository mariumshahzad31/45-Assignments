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
var album1 = make_album('Atif Aslam', 'Album3');
var album2 = make_album('Hasan Raheem', 'Album2', 7);
var album3 = make_album('Nusrat Fateh Ali Khan', 'Album1', 5);
// Printing each album
console.log(album3);
console.log(album2);
console.log(album1);
