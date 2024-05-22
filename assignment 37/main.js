// Define the make_shirt function with default parameters
function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("You have ordered a ".concat(size, "-sized shirt with the message: \"").concat(message, "\"."));
}
// Call the function to create a large shirt with the default message
make_shirt();
// Call the function to create a medium shirt with the default message
make_shirt("Medium");
// Call the function to create a shirt of any size with a different message
make_shirt("Small", "I'm a typescript user");
