"use strict";
let userNames = ["Laiba", "Bisma", "Kareena", "Rida", "Admin"];
userNames.forEach(oneUser => {
    if (oneUser === "Admin") {
        console.log(`Hello ${oneUser}, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${oneUser}, thank you for loggin in again.`);
    }
});
