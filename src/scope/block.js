function fruits() {
  if (true) {
    var fruit1 = "apple"; // function scope
    let fruit2 = "banana"; // block scope
    const fruit3 = "kiwi"; // block scope
  }
  console.log(fruit1);
  console.log(fruit2); // ReferenceError: fruit2 is not defined
  console.log(fruit3); // ReferenceError: fruit3 is not defined
}

console.log(fruit1); // ReferenceError: fruit1 is not defined

fruits(); // apple
