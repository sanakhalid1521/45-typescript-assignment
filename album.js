"use strict";
function make_album(artist, title, tracks) {
    let album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Creating three different albums and printing their information
// Creating albums for four different artists
console.log(make_album("Atif Aslam", "Jal Pari", 10));
console.log(make_album("Nusrat Fateh Ali Khan", "The Very Best of Nusrat Fateh Ali Khan"));
console.log(make_album("Ali Zafar", "Huqa Pani", 12));
