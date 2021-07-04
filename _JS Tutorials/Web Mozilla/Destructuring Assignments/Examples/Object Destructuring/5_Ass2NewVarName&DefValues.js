// ==== ASSIGNING TO NEW VARIABLES NAMES AND PROVIDING DEFAULT VALUES

// A property can be both

// * Unpacked from an object and assigned to a variable with a different name.
// * Assigned a default value in case the unpacked value is undefined.

const {a:aa = 10, b:bb = 5} = {a:3};
console.log(aa,bb);