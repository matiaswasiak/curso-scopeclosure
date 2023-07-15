const myGlobal = 0;

function func() {
  const myNumber = 1;
  console.log(myGlobal);

  function parent() {
    const inner = 2;
    console.log(myNumber, myGlobal);

    function child() {
      console.log(inner, myNumber, myGlobal);
    }

    return child();
  }

  return parent();
}

func();

// What is a closure?
// A closure is a function that has access to its outer function scope even after the outer function has returned.

// What is a lexical scope?
// Lexical scope means that in a nested group of functions, the inner functions have access to the variables and other resources of their parent scope.

// What is a private variable?
// Private variables are those variables that are accessible within the function only or we can say private variables are those variables that are not accessible outside the function.

// What is a module pattern?
// The Module pattern is used to mimic the concept of classes (since JavaScript doesn’t natively support classes) so that we can store both public and private methods and variables inside a single object — similar to how classes are used in other programming languages like Java or Python.

// What's the use of closures?
// Closures are useful because they let you associate some data (the lexical environment) with a function that operates on that data. This has obvious parallels to object-oriented programming, where objects allow you to associate some data (the object's properties) with one or more methods.
