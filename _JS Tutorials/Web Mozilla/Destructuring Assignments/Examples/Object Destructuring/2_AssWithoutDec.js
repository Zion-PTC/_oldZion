// ==== ASSIGNMENT WITHOUT DECLARATION

// A variable can be assigned its value with destructuring
// separate from its declaration.

let a, b;

({a, b} = {a:1, b:2});

console.clear()
console.log(a, b);

// Note: The parentheses ( ... ) around the assignment
// statement are required when using object literal
// destructuring assignment without a declaration.

// {a, b} = {a: 1, b: 2} is not valid stand-alone syntax, as
// the {a, b} on the left-hand side is considered a block
// and not an object literal.

// However, ({a, b} = {a: 1, b: 2}) is valid, as is const
// {a, b} = {a: 1, b: 2}

// Your ( ... ) expression needs to be preceded by a
// semicolon or it may be used to execute a function on the
// previous line.