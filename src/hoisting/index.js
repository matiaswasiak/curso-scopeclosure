// Example 1: Function Hoisting
// Functions are hoisted completely, so they can be called before their declaration.
nameOfDog();

function nameOfDog() {
  // Example 2: Variable Hoisting
  // Variables are hoisted, but their initialization is not.
  // So, at this point, `elmo` is hoisted but it's `undefined` because it's not initialized yet.
  console.log(elmo); // undefined
}

// Now we declare and initialize `elmo`.
// This initialization is not hoisted, it happens exactly here, after the function call.
var elmo = "Elmito";

// If we call the function again, now it can access the initialized `elmo`.
nameOfDog(); // "Elmito"

// Example 3: Hoisting with `let` and `const`
// `let` and `const` are also hoisted, but accessing them before initialization throws an error.
console.log(myLetVar); // ReferenceError: myLetVar is not defined
let myLetVar = 5;

// Example 4: Function Expression Hoisting
// Function expressions are not hoisted, so calling them before their declaration throws an error.
myFuncExp(); // TypeError: myFuncExp is not a function

var myFuncExp = function () {
  console.log("Hello, world!");
};
