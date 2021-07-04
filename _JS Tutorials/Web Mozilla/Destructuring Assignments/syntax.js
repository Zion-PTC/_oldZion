let a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

({ a, b } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20

// Stage 4(finished) proposal
({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 });
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}

// DESCRIPTION
// The object and array literal expressions provide
// an easy way to create ad hoc packages of data.

const x = [1, 2, 3, 4, 5];

// The destructuring assignment uses similar syntax,
// but on the left-hand side of the assignment to
// define what values to unpack from the sourced variable

const [y, z] = x;
console.log(y); // 1
console.log(z); // 2

// Similarly, you can destructure arrays on the
// left-hand side of the assignment

const [firstElement, secondElement] = list;
// is equivalent to:
// const firstElement = list[0];
// const secondElement = list[1];
