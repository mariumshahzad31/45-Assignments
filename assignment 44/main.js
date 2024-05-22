function Sandwiches() {
    var types = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        types[_i] = arguments[_i];
    }
    console.log("Following are the types of sandwiches:");
    for (var _a = 0, types_1 = types; _a < types_1.length; _a++) {
        var type = types_1[_a];
        console.log("- " + type);
    }
    console.log("Enjoy eating sandwiches!\n");
}
// Call the function three times with different numbers of arguments
Sandwiches("Chicken sandwich", "Cheese sandwich");
Sandwiches("American sandwich", "Beef sandwich", "Bologna sandwich");
Sandwiches("Fat sandwich", "Crab sandwich");
