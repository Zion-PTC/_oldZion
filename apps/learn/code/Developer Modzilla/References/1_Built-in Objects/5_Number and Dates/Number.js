/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects */

///// STATIC PROPERTIES
const epsilon        = Number.EPSILON
const maxSafeInteger = Number.MAX_SAFE_INTEGER
const biggestNum     = Number.MAX_VALUE
const smallestNum    = Number.MIN_VALUE
const infiniteNum    = Number.POSITIVE_INFINITY
const negInfiniteNum = Number.NEGATIVE_INFINITY
const notANum        = Number.NaN
console.table({
  epsilon, maxSafeInteger,
  biggestNum, smallestNum, infiniteNum,
  negInfiniteNum, notANum
})
///// STATIC METHODS
let isNan            = Number.isNaN(notANum)
let isFiniteIt       = Number.isFinite(infiniteNum)
let isInteger        = Number.isInteger(smallestNum)
let isSafeInteger    = Number.isSafeInteger(biggestNum)
let parseFloatIt     = Number.parseFloat("1000")
let parseIntIt       = Number.parseInt('01',2)
console.table({
  isNan, isFiniteIt, isInteger, isSafeInteger, parseFloatIt, parseIntIt
})

///// INSTANCE METHODS
let f = new Number;
console.log(f);

let h = Number(7)
console.log('Number:',h);

/**
 * Number.prototype.toExponential(fractionDigits)
 * Express the number in exponential notation
 */
let g = 345623452
let exp2 = g.toExponential() // prints 3.45623452e+8
let exp3 = g.toExponential(2) // prints 3.46e+8
console.log('toExponential:', exp2, exp3);

/* Returns a string representing the number in fixed-point notation. */
let u = 3.234234252
let fixed = u.toFixed()
console.log("fixed:",fixed); // returns 3

/**
 * Number.prototype.toExponential(fractionDigits)
 * Returns a string with a language sensitive representation of this number.
 * Overrides the Object.prototype.toLocaleString() method.
 */
let ls = g.toLocaleString()
console.log('toLocaleString:', ls);

/**
 * Number.prototype.toPrecision(precision)
 * Returns a string representing the number to a specified precision
 * in fixed-point or exponential notation.
 */
let tp = u.toPrecision(5)
let tp2 = g.toPrecision(5)
let tp3 = g.toPrecision(15)
console.table({tp, tp2, tp3});

/**
 * @syntax Number.prototype.toString([radix])
 * @return a string representing the specified object in the specified radix ("base").
 * @overrides the Object.prototype.toString() method.
 */
let num = 64
let ts1 = num.toString(2)
let ts2 = num.toString(10)
console.table({ num, ts1, ts2});

/**
 * @syntax Number.prototype.valueOf()
 * @return the primitive value of the specified object.
 * @overrides the Object.prototype.valueOf() method.
 */
let value = 10
console.table({'value-of':value.valueOf()})