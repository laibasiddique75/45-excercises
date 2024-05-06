let guestList : string []=["bisma","kareena","laiba"];
console.log("Great news! we found a bigger dinner table");

// unshift()
guestList.unshift("karishma");

// splice()
guestList.splice(Math.floor(guestList.length/2),0, "mehak");


// push
guestList.push("areeba");

guestList.forEach(guest => {
    console.log(`Dear ${guest} ,you all are invited to dinner.`);
    
})
