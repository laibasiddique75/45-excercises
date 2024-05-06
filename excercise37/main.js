"use strict";
function make_shirt(size = "Large", printMessage = "I Love Typescript") {
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirts`);
}
// bydefault
make_shirt();
// medium size
make_shirt("Medium");
// small size 
make_shirt("Small", "I Love JavaScript");
