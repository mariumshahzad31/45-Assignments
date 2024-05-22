let guestList: string[] = ['ali', 'ahmed', 'zain'];

for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear Mr. ${guestList[i]},\n\nIt is our pleasure to invite you to our party.\n\nThank You!\n\n`);
}

let absentGuest = 'ahmed'; 
let newGuest = 'uzair';

guestList[0] = newGuest;

console.log(`Mr. ${absentGuest} is not coming to the party.`);


