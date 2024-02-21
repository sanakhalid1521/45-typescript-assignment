"use strict";
let guest_list = ['Imran khan', 'Asif zardari', 'Nawaz shareef'];
// for(let i=0; i<guest_list.length; i++){
//     console.log('dear Mr.  ' + guest_list[i] + ',\n\nit is our pleasure to invite you in our party. \n\n thank you!\n\n')
// }
let absent_guest = 'Imran khan';
let new_guest = 'kamran Tessori';
guest_list[0] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log('dear Mr.  ' + guest_list[i] + ',\n\nit is our pleasure to invite you in our party. \n\n thank you!\n\n');
}
console.log(`Mr., ${absent_guest}, is not coming to the party`);
console.log('good news! we find big table so we are inviting 3 more guests');
guest_list.unshift('sir zia khan');
guest_list.splice(2, 0, 'maryam nawaz');
guest_list.push('bilawal bhutto');
for (let i = 0; i < guest_list.length; i++) {
    console.log('dear Mr.  ' + guest_list[i] + ',\n\nit is our pleasure to invite you in our party. \n\n thank you!\n\n');
}
