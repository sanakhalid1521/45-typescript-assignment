let guest_list: string[] = ['Imran khan', 'Asif zardari', 'Nawaz shareef'];

for(let i=0; i<guest_list.length; i++){
    console.log('dear Mr.  ' + guest_list[i] + ',\n\nit is our pleasure to invite you in our party. \n\n thank you!\n\n')
}

let absent_guest: string = 'Imran khan';
let new_guest: string = 'kamran Tessori';

guest_list[0] = new_guest;

for(let i=0; i<guest_list.length; i++){
    console.log('dear Mr.  ' + guest_list[i] + ',\n\nit is our pleasure to invite you in our party. \n\n thank you!\n\n')
}
console.log(`Mr., ${absent_guest}, is not coming to the party`);
