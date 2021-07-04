// ==== PARSING AN ARRAY RETURNED FROM A FUNCTION

// It's always been possible to return an array
// from a function. Destructuring can make working
// with an array return value more concise.

// In this exammple, f() returns the values [1,2]
// as its output, which can be parsed in a single
// line with destructuring

function f() {
  return [1, 2];
}

let a, b;

[a, b] = f();

console.log(a, b);