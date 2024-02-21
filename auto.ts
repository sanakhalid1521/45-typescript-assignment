const car = storeCarInfo('Toyota', 'Camry', 'color:', blue, 'year:',2022);


function storeCarInfo(manufacturer: string, model: string, extras: { [key: string]: any }): { [key: string]: any } {
    const carInfo: { [key: string]: any } = {
        manufacturer: manufacturer,
        model: model
    };

    // Add extra information to the car object
    for (const key in extras) {
        carInfo[key] = extras[key];
    }

    return carInfo;
}
console.log(car);
