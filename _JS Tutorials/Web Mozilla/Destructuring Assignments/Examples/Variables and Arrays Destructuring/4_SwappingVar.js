// ==== SWAPPING VARIABLES

// Two variables values can be swapped
// in one destructuring expression.

// Without destructuring assignment,
// swapping two values requires a temporary
// variable (or, in some low-level languages,
// the XOR-swap trick).

let a = 1;
let b = 3;

[a, b] = [b, a];

console.log(a, b);

const arr = [1, 2, 3, 4];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr);
