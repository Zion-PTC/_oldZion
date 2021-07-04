// ==== THE PROTOTYPE CHAIN IS LOOKED UP WHEN THE OBJECT IS DECONSTRUCTED

// When deconstructing an object, if a property is not
// accessed in itself, it will continue to look up along the
// prototype chain.

let obj = { self: '123' };
obj.__proto__.prot = '456';
const { self, prot } = obj
console.log(self, prot);