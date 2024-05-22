// Make an array of usernames including admin
var usernames = ["admin", "zain", "meeru", "arfa", "gul"];
// print greetings
usernames.forEach(function (username) {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
});
