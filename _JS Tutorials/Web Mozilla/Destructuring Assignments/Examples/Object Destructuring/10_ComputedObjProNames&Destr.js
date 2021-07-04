// ==== COMPUTED OBJECT PROPERTY NAMES AND DESTRUCTURING

// Computed property names, like on object literals, can be
// used with destructuring.

let key = 'z';
let {[key]:foo} = {z: 'bar'}

console.log(foo);