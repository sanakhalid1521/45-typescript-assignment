"use strict";
let car = 'subaru';
// Test 1
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
// Test 2
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');
// Test 3
console.log("Is car != 'toyota'? I predict True.");
console.log(car != 'toyota');
// Test 4
console.log("Is car !== 'toyota'? I predict True.");
console.log(car !== 'toyota');
// Test 5
console.log("Is car.length > 0? I predict True.");
console.log(car.length > 0);
// Test 6
console.log("Is car.startsWith('sub')? I predict True.");
console.log(car.startsWith('sub'));
// Test 7
console.log("Is car.endsWith('ru')? I predict True.");
console.log(car.endsWith('ru'));
// Test 8
console.log("Is car.includes('bar')? I predict False.");
console.log(car.includes('bar'));
// Test 9
console.log("Is car.toUpperCase() === 'SUBARU'? I predict False.");
console.log(car.toUpperCase() === 'SUBARU');
// Test 10
console.log("Is car === undefined? I predict False.");
console.log(car === undefined);
