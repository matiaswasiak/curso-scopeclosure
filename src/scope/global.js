// Variables

var a; // declaration
a = 10; // assignment
var b = 20; // declaration + assignment
var a = 10; // re-declaration

// Global Scope
var fruit = "apple"; // global scope

function printFruit() {
  console.log(fruit);
}

printFruit(); // apple

function countries() {
  var country = "India"; // local scope
  console.log(country);
}

countries(); // India
console.log(country); // ReferenceError: country is not defined
