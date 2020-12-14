// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

// Nested functions have the ability to access variables that are located outward from them as in they are in a scope that holds themselves. A function cannot access a variable if it is located further inward such as a variable created in a function that is created inside it's own scope.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
function summation(param1) {
  let counter = 0;
  for(let i = 1; i <= param1; i++) {
    counter += i;
  }
  return counter;
}
console.log(summation(4));