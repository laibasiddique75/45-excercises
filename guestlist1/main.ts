import { log } from "console";

let guestList : string [] = ["rida","bisma","kareena"];
let unableAttend : string = guestList.splice(0,1)[0];
console.log(`${unableAttend} not invited for dinner`);
guestList.push("laiba");
guestList.forEach(guest => {
  console.log(`Dear ${guest}, you are invited for dinner`);
  
}
)
