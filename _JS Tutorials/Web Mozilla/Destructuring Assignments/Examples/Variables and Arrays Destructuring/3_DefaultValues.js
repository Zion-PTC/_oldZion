// ==== DEFAULT VALUES

// A variable can be assigned a default,
// in the case that the value unpacked
// from the array is undefined.

let a, b;

[a = 5, b = 7] = [1];

console.log(a, b);
