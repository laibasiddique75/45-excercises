"use strict";
function makeSandwich(...items) {
    console.log("\n Making a sandwich with the following items : \n ");
    items.forEach(singleItem => console.log(singleItem));
    console.log("\n Now enjoy sandwich");
}
makeSandwich("Chicken", "Cheese", "Mayo", "Ketchup");
makeSandwich("Bread", "Butter");
