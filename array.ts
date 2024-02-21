const countryName: string[] = ['Pakistan', 'CANADA','Japan', 'America','Germany'];
console.log("list of country");
countryName.forEach((country, index) =>{
    console.log(`${index + 1}.${country}`);
});

// Define an array to store programming languages
const programmingLanguages: string[] = ["JavaScript", "Python", "Java", "C++", "TypeScript"];

// Print out each programming language in the array
console.log("List of programming languages:");
programmingLanguages.forEach((language, index) => {
    console.log(`${index + 1}. ${language}`);
});

// Define an array to store car brands
const carBrands: string[] = ["Toyota", "Honda", "Ford", "BMW", "Mercedes-Benz"];

// Print out each car brand in the array
console.log("List of car brands:");
carBrands.forEach((brand, index) => {
    console.log(`${index + 1}. ${brand}`);
});
