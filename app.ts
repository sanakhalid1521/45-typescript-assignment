let personName: str = '';

personName = prompt("what is ypur name") || ''; 

if(personName !== null && personName !== '')
 {
    alert(`hello ${personName}, would you like learn python today?`)
}
else{
    alert('you have to fill your name')
}