//describe_city function with a default parameter for country
function describe_city(city: string, country: string = "Unknown"): void {
    console.log(`${city} is in ${country}.`);
  }
  
  // Call the function for three different cities
  describe_city("Islamabad", "Pakistan");
  describe_city("Istanbul", "Turkey");
  describe_city("Paris"); // Calling with default country
  