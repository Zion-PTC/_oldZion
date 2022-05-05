/**
 * @definition The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.
 * @description
In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:
  • JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
  • JavaScript arrays are not associative arrays and so, array elements cannot be accessed using strings as indexes, but must be accessed using integers as indexes.
  • JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.
  • JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
 * @constructor
  Array()
    Creates a new Array object.
 */

/**
 * @title Array() constructor
 * The Array() constructor is used to create Array objects.
 */
/**
 * literal constructor
 * @param {any} el1
 * @param {any} el2
 * @param {any} el3
 * @returns an array of the given elements
 */
let literalConstructor = (el1, el2, el3) => {
  return [el1, el2, el3];
};
/**
 * construct from elements
 * @param {any} el1
 * @param {any} el2
 * @param {any} el3
 * @returns an array of the given elements
 */
let constructFromElements = (el1, el2, el3) => {
  return new Array(el1, el2, el3);
};
/**
 *
 * @param {Number} arrayLength If the only argument passed to the Array constructor is an integer between 0 and 2^32 - 1 (inclusive), this returns a new JavaScript array with its length property set to that number (Note: this implies an array of arrayLength empty slots, not slots with actual undefined values). If the argument is any other number, a RangeError exception is thrown.
 * @returns an array with length equal to the value passed to the constructor
 */
let constructFromArrayLength = (arrayLength) => {
  return new Array(arrayLength);
};
/**
 * @example1 Array literal notation
Arrays can be created using the literal notation:
 */
console.log('\nArray literal notation');
let fruits = ['Apple', 'Banana'];
console.log('Array length:', fruits.length);
console.table(fruits);
/**
 * @example2 Array constructor with a single parameter
Arrays can be created using a constructor with a single number parameter. An array with its length property set to that number and the array elements are empty slots.
 */
console.log('\nArray constructor with a single parameter');
let fruitsFromLength = new Array(2);
console.table({
  constructorUsed: '' + fruitsFromLength.constructor,
  lengthOfFruitsFromLength: fruitsFromLength.length,
  valueAtIndex0: fruitsFromLength[0],
});
/**
 * @example3 Array constructor with multiple parameters
If more than one argument is passed to the constructor, a new Array with the given elements is created.
 */

console.log('\nArray constructor with multiple parameters');
let fruitsFromConstructor = new Array('Apple', 'Banana');
console.table(fruitsFromConstructor);

/**
 * ////// Static properties \\\\\\\
 */
console.log('\n////// Static properties \\\\\\\\\\\\');
const array = [];
const {
  at, //
  concat, //
  copyWithin, //
  entries, //
  every, //
  fill, //
  filter,
  find, //
  findIndex,
  flat,
  flatMap,
  forEach,
  includes,
  indexOf,
  join, //
  keys,
  lastIndexOf,
  length,
  map,
  pop,
  push,
  reduce,
  reduceRight,
  reverse,
  shift,
  slice,
  some,
  sort, //
  splice,
  toLocaleString,
  toString,
  unshift,
  values,
} = array;

/**
 * ////// Instance properties \\\\\\\
 */
console.log('\n////// Instance properties \\\\\\\\\\\\');

/**
 * ////// Instance methods \\\\\\\
 */
console.log('\n////// Instance methods \\\\\\\\\\\\');
