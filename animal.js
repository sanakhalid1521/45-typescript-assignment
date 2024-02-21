"use strict";
let animals = ['dog', 'cat', 'rabbit'];
// Use a for loop to print the name of each animal
for (let animal of animals) {
    console.log(animal);
}
console.log(); // Add an empty line for separation
// Modify the for loop to print a statement about each animal
for (let animal of animals) {
    console.log(`A ${animal} would make a great pet.`);
}
console.log(); // Add an empty line for separation
// Add a line at the end of the program stating what these animals have in common
console.log("Any of these animals would make a great pet!");
