function greeting() {
  let userName = "Matias";
  console.log(userName);

  if (userName === "Matias") {
    console.log(`Hello, ${userName}`);
  }
}

greeting(); // Matias
console.log(userName); // ReferenceError: userName is not defined
