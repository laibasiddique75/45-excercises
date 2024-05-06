"use strict";
let apple = "apple";
let uppercaseApple = "APPLE";
let ten = 10;
let twenty = 20;
console.log("Is apple is equal to apple");
console.log(apple == "apple");
console.log("\n Is apple is not equal to apple");
console.log(apple !== "apple");
// lowercase
console.log("\n Is APPLE is equal to apple after conerting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("\n Is APPLE is not equal to apple after conerting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");
// numerical tests
console.log("\n Is ten is equal to twenty?");
console.log(ten == twenty);
console.log("\n Is ten is not equal to twenty?");
console.log(ten != twenty);
console.log("\n Is ten is greater than zero?");
console.log(ten > 0);
console.log("\n Is twenty is less than ten");
console.log(twenty < 10);
console.log("\n Is ten is greater than or equal to 5?");
console.log(ten >= 5);
console.log("\n Is twenty is less than or equal to 10?");
console.log(twenty <= 10);
