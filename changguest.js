"use strict";
let guest_list = ['Imran khan', 'Asif zardari', 'Nawaz shareef'];
for (let i = 0; i < guest_list.length; i++) {
    console.log('dear Mr.  ' + guest_list[i] + ',\n\nit is our pleasure to invite you in our party. \n\n thank you!\n\n');
}
let absent_guest = 'Imran khan';
let new_guest = 'kamran Tessori';
guest_list[0] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log('dear Mr.  ' + guest_list[i] + ',\n\nit is our pleasure to invite you in our party. \n\n thank you!\n\n');
}
console.log(`Mr., ${absent_guest}, is not coming to the party`);
