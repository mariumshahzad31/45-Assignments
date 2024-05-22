function Car(manufacturer, model) {
    var other = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        other[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    // Loop through the options provided and add them to the car object
    for (var _a = 0, other_1 = other; _a < other_1.length; _a++) {
        var option = other_1[_a];
        for (var key in option) {
            car[key] = option[key];
        }
    }
    return car;
}
// Call the function with required information and additional options
var myCar = Car("Land Cruiser", "Shen", { color: "Red" }, { year: 2022 });
// Print the object to ensure all information was stored correctly
console.log(myCar);
