interface Album {
    artist: string;
    title: string;
    tracks?: number; // Optional property for number of tracks
}

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
