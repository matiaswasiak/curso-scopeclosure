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
