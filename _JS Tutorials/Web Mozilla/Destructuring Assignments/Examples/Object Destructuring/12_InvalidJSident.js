// ==== INVALID JAVASCRIPT IDENTIFIER AS A PROPERTY NAME

// Destructuring can be used with property names that are
// not valid JavaScript identifiers by providing an
// alternative identifier that is valid.

const foo = { 'fizz-buzz': true };
const { 'fizz-buzz' : fizzBuzz } = foo;
console.log(fizzBuzz);