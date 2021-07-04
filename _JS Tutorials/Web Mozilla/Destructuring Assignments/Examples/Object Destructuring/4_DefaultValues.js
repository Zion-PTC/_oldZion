// ==== DEFAULT VALUES

// A variable can be assigned a default, in the case that
// the value unpacked from the object is undefined.

const {a = 10, b = 5} = {a: 3};

console.log(a, b);