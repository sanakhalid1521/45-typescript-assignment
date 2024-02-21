"use strict";
function make_shirt(size = "Large", message = "I love TypeScript") {
    console.log(`Creating a ${size} T-Shirt with the message: "${message}"`);
}
// Making a large shirt with the default message
make_shirt();
// Making a medium shirt with the default message
make_shirt("Medium");
// Making a shirt of any size with a different message
make_shirt("Small", "Hello, World!");
