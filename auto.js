"use strict";
const car = storeCarInfo('Toyota', 'Camry', 'color:', blue, 'year:', 2022);
function storeCarInfo(manufacturer, model, extras) {
    const carInfo = {
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
