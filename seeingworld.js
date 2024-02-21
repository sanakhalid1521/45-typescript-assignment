"use strict";
// Original list of places to visit
let placesVisit = ["Lahore", "Muree", "Karachi", "Islamabad", "Peshawar"];
// Print original order
console.log("Original Order:", placesVisit);
// Print alphabetical order without modifying the original list
console.log("Alphabetical Order:", [placesVisit].sort());
// Confirm original order
console.log("Original Order:", placesVisit);
// Print reverse alphabetical order without modifying the original list
console.log("Reverse Alphabetical Order:", [...placesVisit].sort().reverse());
// Confirm original order
console.log("Original Order:", placesVisit);
// Reverse the order of the list
placesVisit.reverse();
console.log("Reversed Order:", placesVisit);
// Reverse the order again to get back to the original order
placesVisit.reverse();
console.log("Back to Original Order:", placesVisit);
// Sort the list in alphabetical order
placesVisit.sort();
console.log("Sorted in Alphabetical Order:", placesVisit);
// Sort the list in reverse alphabetical order
placesVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in Reverse Alphabetical Order:", placesVisit);
