"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guestList = ["rida", "bisma", "kareena"];
let unableAttend = guestList.splice(0, 1)[0];
console.log(`${unableAttend} not invited for dinner`);
guestList.push("laiba");
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you are invited for dinner`);
});
