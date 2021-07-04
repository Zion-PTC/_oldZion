// ==== REST IN OBJECT DESTRUCTURING

// The Rest/Spread Properties for ECMAScript proposal (stage
// 4) adds the rest syntax to destructuring. Rest properties
// collect the remaining own enumerable property keys that
// are not already picked off by the destructuring pattern.

let {a,b, ...rest} = {a: 10, b:20, c: 30, d:40}

console.log(a, b, rest);