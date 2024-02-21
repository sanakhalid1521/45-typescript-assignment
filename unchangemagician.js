"use strict";
let magician_names = ["Afzal Afridi", "Zarku khan", "Munawar khan", "Teller"];
// Call the function to make magicians great and store the result in a separate array
let great_magicians = make_great([...magician_names]);
// Call the function to show original magician's names
console.log("Original Magicians:");
show_magicians(magician_names);
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    let great_magicians = [];
    for (let magician of magicians) {
        great_magicians.push("the Great " + magician);
    }
    return great_magicians;
}
// Call the function to show magician's names with "the Great" added
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
