function show_magicians(magicians : string[]){
    magicians.forEach(name  => console.log(name));
   
}
function make_great(magicians : string[]){
return magicians.map(name => `The Great ${name}`);
}

let magicians_name = ["Harry Poter","laiba","bisma"];

let copy_magician_name = magicians_name.slice();

let copy_great_magicians = make_great(copy_magician_name );
show_magicians(magicians_name);
show_magicians(copy_great_magicians);