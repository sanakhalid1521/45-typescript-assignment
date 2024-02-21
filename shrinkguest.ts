let guest_list: string[] = ['Imran', 'Asif', 'Ali'];

console.log('good news! we find big table so we are inviting 3 more guests');

//guest_list.unshift('sir zia khan');

guest_list.splice(2,  0, 'maryam');
guest_list.push('bilal');

for(let i=0; i<guest_list.length; i++){
    console.log('dear Mr.  ' + guest_list[i] + ',\n\nit is our pleasure to invite you in our party. \n\n thank you!\n\n')
}
console.log('\nsorry we can not arrange big table, only two people will be invited.' );
while (guest_list.length > 2) {
    const removedGuest: string = guest_list.pop()!;
    console.log(`Sorry ${removedGuest}, I can't invite you to dinner.`);
}
for(let i=0; i<guest_list.length; i++){
    console.log('dear Mr.  ' + guest_list[i] + ',\n\nyou are to invited. \n\n thank you!\n\n')
}

guest_list.splice(0,2);
console.log(guest_list);