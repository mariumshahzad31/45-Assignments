// Define the make_shirt function with default parameters
function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`You have ordered a ${size}-sized shirt with the message: "${message}".`);
  }
  
  // Call the function to create a large shirt with the default message
  make_shirt();
  
  // Call the function to create a medium shirt with the default message
  make_shirt("Medium");
  
  // Call the function to create a shirt of any size with a different message
  make_shirt("Small", "I'm a typescript user");
  