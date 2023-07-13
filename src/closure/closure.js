function greeting() {
  let username = "Matias";

  return function displayUsername() {
    console.log(`Hello ${username}`);
  };
}

const greet = greeting();
console.log(greet);
console.log(greet());
