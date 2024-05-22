// Make a list of current users
var current_users = ["daman", "marium", "ali", "uzair", "amna"];
// Make a list of new users
var new_users = ["shaz", "zain", "ammar", "shanza", "ali"];
// Loop through the new users to check if the username is available
new_users.forEach(function (new_user) {
    // Check if the username already exists
    var isUsernameTaken = current_users.some(function (current_user) {
        return current_user.toLowerCase() === new_user.toLowerCase();
    });
    // Print message 
    if (isUsernameTaken) {
        console.log("Sorry, ".concat(new_user, " is already taken. Please enter a new username."));
    }
    else {
        console.log("Congratulations, ".concat(new_user, " is available!"));
    }
});
