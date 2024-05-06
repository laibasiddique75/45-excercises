"use strict";
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
let magicians_name = ["Harry Poter", "laiba", "bisma"];
let great_magicians = make_great(magicians_name);
show_magicians(great_magicians);
