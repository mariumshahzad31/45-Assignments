function Car(manufacturer: string, model: string, ...other: { [key: string]: any }[]): object {
    let car: { manufacturer: string, model: string, [key: string]: any } = {
        manufacturer: manufacturer,
        model: model
    };

    // Loop through the options provided and add them to the car object
    for (let option of other) {
        for (let key in option) {
            car[key] = option[key];
        }
    }

    return car;
}

// Call the function with required information and additional options
let myCar = Car("Land Cruiser", "Shen", { color: "Red" }, { year: 2022 });

// Print the object to ensure all information was stored correctly
console.log(myCar);
