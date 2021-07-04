// ==== COMBINED ARRAY AND OBJECT DESTRUCTURING

// Array and Object destructuring can be combined. Say you
// want the third element in the array props below, and then
// you want the name property in the object, you can do the
// following

const props = [
  { id: 1, name: 'Fizz' },
  { id: 2, name: 'Buzz' },
  { id: 3, name: 'FizzBuzz' },
];

const [, , { name }] = props;

console.log(name);