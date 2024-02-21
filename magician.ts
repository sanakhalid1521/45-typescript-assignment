

let magician_names: string[] = ["Afzal Afridi", "Zarku khan", "Munawar khan", "Teller"];

// Call the function to show magician's names
show_magicians(magician_names);

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}