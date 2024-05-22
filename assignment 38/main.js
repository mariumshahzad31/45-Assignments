//describe_city function with a default parameter for country
function describe_city(city, country) {
    if (country === void 0) { country = "Unknown"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Call the function for three different cities
describe_city("Islamabad", "Pakistan");
describe_city("Istanbul", "Turkey");
describe_city("Paris"); // Calling with default country
