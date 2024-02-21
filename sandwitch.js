"use strict";
// Call the function with different ingredients for Pakistani sandwiches
make_sandwich(["Chicken Boti", "Green Chutney", "Tomato", "Onion", "Lettuce"]);
//make_sandwich(["Beef Seekh Kabab", "Mint Chutney", "Cucumber", "Capsicum", "Onion"]);
function make_sandwich(items) {
    console.log("Making a  sandwich with the following items:");
    for (let item of items) {
        console.log("- " + item);
    }
    console.log("Enjoy your sandwich!");
}
