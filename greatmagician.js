"use strict";
let magician_names = ["Afzal Afridi", "Zarku khan", "Munawar khan", "Teller"];
// Call the function to make magicians great
make_great(magician_names);
// Call the function to show magician's names
show_magicians(magician_names);
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
