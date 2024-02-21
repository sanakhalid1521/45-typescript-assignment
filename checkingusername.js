"use strict";
let current_users = ['Ali', 'Kashif', 'Dawood', 'Ejaz', 'Ahmed'];
// Define the list of new users
let new_users = ['Ahmed', 'shan', 'Dawood', 'Ejaz', 'Asad'];
// Loop through the new_users list to check for uniqueness
for (let new_user of new_users) {
    // Convert the current user names to lowercase for case-insensitive comparison
    let lower_current_users = current_users.map(user => user.toLowerCase());
    // Check if the lowercase version of the new user name is in the lowercase version of the current users
    if (lower_current_users.includes(new_user.toLowerCase())) {
        console.log(`Sorry, the username '${new_user}' is already taken. Please choose a different username.`);
    }
    else {
        console.log(`Congratulations! The username '${new_user}' is available.`);
    }
}
