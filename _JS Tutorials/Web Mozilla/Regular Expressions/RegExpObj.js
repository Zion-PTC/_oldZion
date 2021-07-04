// ========== REGEXP OBJECT ==========

// The RegExp object is used for matching text with a
// pattern.

// For an introduction to regular expressions, read the
// Regular Expressions chapter in the JavaScript Guide.

// ====== DESCRIPTION

// ==== LITERAL NOTATION AND CONSTRUCTOR

// There are two ways to create a RegExp object: a literal
// notation and a constructor.

// * The literal notation's parameters are enclosed between
//   slashes and do not use quotation marks.
// * The constructor function's parameters are not enclosed
//   between slashes but do use quotation marks.

// The following three expressions create the same regular
// expression object:

// literal notation
let re = /ab+c/i;
// constructor with string pattern as first argument
let re = new RegExp('ab+c', 'i')
// constructor with regular expression literal as first
// argument (Starting with ECMAScript 6)
let re = new RegExp(/ab+c/, 'i')

// The literal notation results in compilation of the
// regular expression when the expression is evaluated. Use
// literal notation when the regular expression will remain
// constant. For example, if you use literal notation to
// construct a regular expression used in a loop, the
// regular expression won't be recompiled on each iteration.

// The constructor of the regular expression object—for
// example, new RegExp('ab+c')—results in runtime
// compilation of the regular expression. Use the
// constructor function when you know the regular expression
// pattern will be changing, or you don't know the pattern
// and obtain it from another source, such as user input.

// ==== FLAGS IN CONSTRUCTOR

// Starting with ECMAScript 6, new RegExp(/ab+c/, 'i') no
// longer throws a TypeError ("can't supply flags when
// constructing one RegExp from another") when the first
// argument is a RegExp and the second flags argument is
// present. A new RegExp from the arguments is created
// instead.

// When using the constructor function, the normal string
// escape rules (preceding special characters with \ when
// included in a string) are necessary.

// For example, the following are equivalent:

let re = /\w+/
let re = new RegExp('\\w+')


