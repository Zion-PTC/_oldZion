// ==== ASSIGNEMENTS SEPARATE FROM DECLARATION

// A variable can be assigned its value via
// destructuring, separate from the variable's
// declaration.

let a, b;

[a, b] = [1, 2];

console.log(a, b);

// In an array destructuring from an array
// of length N specified on the right-hand
// side of the assignment, if the number of
// variables specified on the left-hand side
// of the assignment is greater than N, only
// the first N variables are assigned values.
//The values of the remaining variables will
// be undefined.

const foo = ["one", "two"];

const [x, y, z, w] = foo;

console.log(x, y, z, w);
