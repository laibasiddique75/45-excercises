//lower case
let personName:string ="laiba"
console.log("lowercase:",personName.toLowerCase());
//uper case
console.log("uppercase:",personName.toUpperCase());
//title case
console.log("titlecase:",personName.replace(/\bw/g,c =>c.toUpperCase()));