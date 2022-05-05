/**
 * util.isDeepStrictEqual(val1, val2)
 * @param {any} val1
 * @param {any} val2
 * @return {Boolean} true if there is deep strict equality between val1 and val2. Otherwise, returns false.
 * See assert.deepStrictEqual() for more information about deep strict equality.
 */

import util from 'util'
let a = 0
let b = 0

console.log(util.isDeepStrictEqual(a, b));