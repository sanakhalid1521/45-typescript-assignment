"use strict";
// Strings
let fruit = 'apple';
// Tests for equality and inequality with strings
console.log("Is fruit == 'apple'? I predict True.");
console.log(fruit == 'apple');
console.log("Is fruit != 'banana'? I predict True.");
console.log(fruit != 'banana');
// Tests using the lower case function
let upperCaseFruit = 'APPLE';
console.log("Is upperCaseFruit.toLowerCase() === 'apple'? I predict True.");
console.log(upperCaseFruit.toLowerCase() === 'apple');
// Numerical tests
let x = 5;
let y = 10;
// Equality and inequality
console.log("Is x == 5? I predict True.");
console.log(x == 5);
console.log("Is y != 5? I predict True.");
console.log(y != 5);
// Greater than and less than
console.log("Is y > x? I predict True.");
console.log(y > x);
console.log("Is x < y? I predict True.");
console.log(x < y);
// Greater than or equal to and less than or equal to
console.log("Is x >= 5? I predict True.");
console.log(x >= 5);
console.log("Is y <= 10? I predict True.");
console.log(y <= 10);
// Tests using "and" and "or" operators
let age = 25;
let hasLicense = true;
console.log("Is age > 18 and hasLicense? I predict True.");
console.log(age > 18 && hasLicense);
console.log("Is age < 18 or hasLicense? I predict True.");
console.log(age < 18 || hasLicense);
// Test whether an item is in an array
let colors = ['red', 'blue', 'green'];
console.log("Is 'red' in colors? I predict True.");
console.log(colors.includes('red'));
// Test whether an item is not in an array
console.log("Is 'yellow' not in colors? I predict True.");
console.log(!colors.includes('yellow'));
