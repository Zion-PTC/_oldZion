// ==== ASSIGNING THE REST OF AN ARRAY TO A VARIABLE

// When destructuring an array, you can unpack and assign
// the remaining part of it to a variable using the rest
// pattern:

const [a, ...b] = [1,2,3];
console.log(a,b);

// Be aware that a SyntaxError will be thrown if a trailing
// comma is used on the right-hand side of a rest element:

// const [a, ...b,] = [1, 2, 3];

// SyntaxError: rest element may not have a trailing comma
// Always consider using rest operator as the last element