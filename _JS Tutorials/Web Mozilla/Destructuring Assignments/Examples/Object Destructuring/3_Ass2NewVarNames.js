// ==== ASSIGNING TO NEW VARIABLE NAMES

// A property can be unpacked from an object and assigned to
// a variable with a different name than the object
// property.

const o = {p: 42, q:true};
const {p:foo, q:bar} = o;

console.log(foo, bar);

// Here, for example, const {p: foo} = o takes from the
// object o the property named p and assigns it to a local
// variable named foo.