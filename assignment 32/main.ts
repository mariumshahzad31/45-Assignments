// Make a list of current users
const current_users: string[] = ["daman", "marium", "ali", "uzair", "amna"];

// Make a list of new users
const new_users: string[] = ["shaz", "zain", "ammar", "shanza", "ali"];

// Loop through the new users to check if the username is available
new_users.forEach(new_user => {
  // Check if the username already exists
  const isUsernameTaken = current_users.some(current_user =>
    current_user.toLowerCase() === new_user.toLowerCase()
  );

  // Print message 
  if (isUsernameTaken) {
    console.log(`Sorry, ${new_user} is already taken. Please enter a new username.`);
  } else {
    console.log(`Congratulations, ${new_user} is available!`);
  }
});
