var guestList = ['ali', 'ahmed', 'zain'];
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear Mr. ".concat(guestList[i], ",\n\nIt is our pleasure to invite you to our party.\n\nThank You!\n\n"));
}
var absentGuest = 'ahmed';
var newGuest = 'uzair';
guestList[0] = newGuest;
console.log("Mr. ".concat(absentGuest, " is not coming to the party."));
