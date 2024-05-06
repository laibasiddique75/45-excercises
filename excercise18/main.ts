let placeToVisit : string [] = ["london","dubai","paris","australia","china","japan"];
console.log(" Original Order:" , placeToVisit);

console.log("Alphabetical Order:", placeToVisit.slice().sort());

console.log("Original order after sorting:" , placeToVisit);

console.log("Reverse alphabetical order:", placeToVisit.slice().sort().reverse());

console.log("Original order after reverse sorting:" , placeToVisit);

placeToVisit.reverse();
console.log("Reverse order:" , placeToVisit);

placeToVisit.reverse();
console.log("Back to original order:" , placeToVisit);

console.log("Sorted in  alphabetical order:", placeToVisit.slice().sort().reverse());

console.log("Sorted in reverse alphabetical order:", placeToVisit.slice().sort().reverse());






