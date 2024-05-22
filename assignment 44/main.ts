function Sandwiches(...types: string[]): void {
    console.log("Following are the types of sandwiches:");
    for (let type of types) {
        console.log("- " + type);
    }
    console.log("Enjoy eating sandwiches!\n");
}

// Call the function three times with different numbers of arguments
Sandwiches("Chicken sandwich", "Cheese sandwich");
Sandwiches("American sandwich", "Beef sandwich", "Bologna sandwich");
Sandwiches("Fat sandwich", "Crab sandwich");
