// Make an array of usernames including admin
const usernames: string[] = ["admin", "zain", "meeru", "arfa", "gul"];

// print greetings
usernames.forEach(username => {
  if (username === "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
});
