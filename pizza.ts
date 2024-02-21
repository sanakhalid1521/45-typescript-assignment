// Store the names of favorite pizzas in an array
let pizzas: string[] = ['Fajita', 'Pepperoni', 'BBQ Chicken'];

// Use a for loop to print the name of each pizza
for (let pizza of pizzas) {
    console.log(pizza);
}

console.log(); // Add an empty line for separation

// Modify the for loop to print a sentence using the name of the pizza
for (let pizza of pizzas) {
    console.log(`I like ${pizza} pizza.`);
}

console.log(); // Add an empty line for separation

// Add a line at the end of the program stating how much you like pizza
console.log("I really love pizza!");
