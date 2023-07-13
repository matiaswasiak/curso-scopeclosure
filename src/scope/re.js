// ==================================================
// ||        ||    var     ||   let   ||   const   ||
// ==================================================
// ||  scope ||  function  ||  block  ||   block   ||
// ==================================================
// ||  hoist ||    yes     ||   no    ||    no     ||
// ==================================================
// ||  redec ||    yes     ||   no    ||    no     ||
// ==================================================
// ||  reasg ||    yes     ||   yes   ||    no     ||
// ==================================================

var firstName; // undefined
firstName = "Matias"; // "Matias"
console.log(firstName); // "Matias"

var otherName = "Agustin"; // declaration + initialization
otherName = "Agus"; // reassignment
console.log(otherName); // "Agus"

var secondName = "David"; // declaration + initialization
var secondName = "Dave"; // redeclaration
console.log(secondName); // "Dave"

// let
let fruit = "apple"; // declaration + initialization
fruit = "banana"; // reassignment
console.log(fruit); // "banana"

let fruit = "banana"; // SyntaxError: Identifier 'fruit' has already been declared

// const
const animal = "dog";
animal = "cat";
console.log(animal); // TypeError: Assignment to constant variable.

const vehicles = [];
vehicles.push("🚗");
console.log(vehicles); // ["🚗"]

vehicles.pop();
console.log(vehicles); // []
