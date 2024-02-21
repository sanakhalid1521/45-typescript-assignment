"use strict";
let alien_color1 = 'green';
if (alien_color1 == 'green') {
    console.log("Player just earned 5 points.");
}
//Version 2 (Fails the if test, no output):
let alien_color2 = 'yellow';
if (alien_color2 == 'green') {
    console.log("Player just earned 5 points.");
}
let alien_color3 = 'red';
if (alien_color3 === 'green') {
    console.log("Player just earned 5 points.");
}
