/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects */

const previouslyMaxSafeInteger = 9007199254740991
const nonSafeInteger = 9007199254740991n

const alsoHuge = BigInt(9007199254740991)
// ↪ 9007199254740991n

const hugeString = BigInt("9007199254740991")
// ↪ 9007199254740991n

const hugeHex = BigInt("0x1fffffffffffff")
// ↪ 9007199254740991n

const hugeOctal = BigInt("0o377777777777777777")
// ↪ 9007199254740991n

const hugeBin = BigInt("0b11111111111111111111111111111111111111111111111111111")
// ↪ 9007199254740991n

console.log('////// BigInt Examples ///////');
console.table({
  previouslyMaxSafeInteger, 'is-safe': Number.isSafeInteger(previouslyMaxSafeInteger),
  'to locale': previouslyMaxSafeInteger.toLocaleString(),
  nonSafeInteger, 'is-safe2': Number.isSafeInteger(nonSafeInteger),
  alsoHuge, hugeString, hugeHex, hugeOctal, hugeBin
})

console.log('When tested against typeof, a BigInt value (bigint primitive) will give "bigint"');

typeof 1n === 'bigint'           // true
typeof BigInt('1') === 'bigint'  // true

/**
 * A BigInt value can also be wrapped in an Object:
 */
typeof Object(1n) === 'object'  // true

/**
 * Operators
 * The following operators may be used with BigInt values or object-wrapped BigInt values:
 * + * - % **
 * Bitwise operators are supported as well, except >>> (zero-fill right shift),
 * as every BigInt value is signed.
 * Also unsupported is the unary operator (+), in order to not break asm.js.
 */
const previousMaxSafe = BigInt(Number.MAX_SAFE_INTEGER)
// ↪ 9007199254740991n

const maxPlusOne = previousMaxSafe + 1n
// ↪ 9007199254740992n

const theFuture = previousMaxSafe + 2n
// ↪ 9007199254740993n, this works now!

const multi = previousMaxSafe * 2n
// ↪ 18014398509481982n

const subtr = multi - 10n
// ↪ 18014398509481972n

const mod = multi % 10n
// ↪ 2n

const bigN = 2n ** 54n
// ↪ 18014398509481984n

bigN * -1n
// ↪ -18014398509481984n

/**
 * The / operator also works as expected with whole numbers
 * — but operations with a fractional result will be truncated when used with a BigInt value —
 * they won't return any fractional digits.
 */

const expected = 4n / 2n
// ↪ 2n

const truncated = 5n / 2n
// ↪ 2n, not 2.5n

/**
 * Comparisons
 * A BigInt value is not strictly equal to a Number value, but it is loosely so:
 */

0n === 0
// ↪ false

0n == 0
// ↪ true

/**
 * A Number value and a BigInt value may be compared as usual:
 */

1n < 2
// ↪ true

2n > 1
// ↪ true

2 > 2
// ↪ false

2n > 2
// ↪ false

2n >= 2
// ↪ true

/**
 * BigInt values and Number values may be mixed in arrays and sorted:
 */

const mixed = [4n, 6, -12n, 10, 4, 0, 0n]
// ↪  [4n, 6, -12n, 10, 4, 0, 0n]

mixed.sort() // default sorting behavior
// ↪  [ -12n, 0, 0n, 10, 4n, 4, 6 ]

// mixed.sort((a, b) => a - b)
// won't work since subtraction will not work with mixed types
// TypeError: can't convert BigInt value to Number value

// sort with an appropriate numeric comparator
mixed.sort((a, b) => (a < b) ? -1 : ((a > b) ? 1 : 0))
// ↪  [ -12n, 0, 0n, 4n, 4, 6, 10 ]

/**
 * Note that comparisons with Object-wrapped BigInt values act as with other objects,
 * only indicating equality when the same object instance is compared:
 */

0n === Object(0n)          // false
Object(0n) === Object(0n)  // false

const o = Object(0n)
o === o                    // true

/**
 * @conditionals
 * A BigInt value behaves like a Number value in cases where:
 * it is converted to a Boolean: via the Boolean function;
 * when used with logical operators ||, &&, and !; or
 * within a conditional test like an if statement.
 */

if (0n) {
  console.log('Hello from the if!')
} else {
  console.log('Hello from the else!')
}
// ↪ "Hello from the else!"

0n || 12n // ↪ 12n

0n && 12n // ↪ 0n

Boolean(0n) // ↪ false

Boolean(12n) // ↪ true

!12n // ↪ false

!0n // ↪ true

console.log('/////// STATIC METHODS ////////');
/**
 * Clamps a BigInt value to a signed integer value, and returns that value.
 * BigInt.asIntN(width, bigint);;
 */
let signedIntegerfromBigInt = BigInt.asIntN(2, 100n)
/**
 * Clamps a BigInt value to an unsigned integer value, and returns that value.
 * BigInt.asUintN (width, bigint);
 */
let bitIntAsUnsignedInteger = BigInt.asUintN(6, 100n)
console.table({
  signedIntegerfromBigInt,
  bitIntAsUnsignedInteger
});

console.log('/////// INSTANCE METHODS ////////');
let aBigInt = BigInt(0xffffff)
/**
 * BigInt.prototype.toLocaleString()
 * Returns a string with a language-sensitive representation of this BigInt value.
 * Overrides the Object.prototype.toLocaleString() method.
 */
let bigIntToLocaleString = BigInt(0xfffff).toLocaleString();
/**
 * BigInt.prototype.toString()
 * Returns a string representing this BigInt value in the specified radix (base).
 * Overrides the Object.prototype.toString() method.
 */
let bigIntToString = BigInt(0xffff).toString()
/**
 * BigInt.prototype.valueOf()
 * Returns this BigInt value. Overrides the Object.prototype.valueOf() method.
 */
let bigIntValueOf = BigInt(0xffffff).valueOf()
console.table({
  aBigInt,
  bigIntToLocaleString,
  bigIntToString,
  bigIntValueOf
});
/**
 * //// Coercion ////
 * Because coercing between Number values and BigInt values can lead to loss of precision,
 * the following are recommended:
 * Only use a BigInt value when values greater than 2^53 are reasonably expected.
 * Don't coerce between BigInt values and Number values.
 */
/**
 * Cryptography
 * The operations supported on BigInt values are not constant-time,
 * and are thus open to timing attacks.
 * JavaScript BigInts are therefore not well-suited for use in cryptography.
 */
/**
 * Use within JSON
 * Using JSON.stringify() with any BigInt value will raise a TypeError,
 * as BigInt values aren't serialized in JSON by default.
 * However, you can implement your own toJSON method:
 */
BigInt.prototype.toJSON = function () { return this.toString() }
let stringifiedBigInt = JSON.stringify(BigInt(1))
console.table({
  stringifiedBigInt
});
/**
 * Examples
 * Calculating Primes
 */
/**
 * Returns true if the passed BigInt value is a prime number
 * @param {*} p is the number which has to be checked.
 * @returns true if the passed argument is a prime number, false the argument is not a prime.
 */
function isPrime(p) {
  for (let i = 2n; i * i <= p; i++) {
    if (p % i === 0n) return false;
  }
  return true
}

/**
 * Takes a BigInt value as an argument, returns nth prime number as a BigInt value
 * @param {*} nth 
 * @returns 
 */
function nthPrime(nth) {
  let maybePrime = 2n
  let prime = 0n

  while (nth >= 0n) {
    if (isPrime(maybePrime)) {
      nth--
      prime = maybePrime
    }
    maybePrime++
  }

  return prime
}

console.table({'nth':nthPrime(20n)});
// ↪ 73n