/**
 * @title Array.prototype.join()
The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
 * @syntax
    join()
    join(separator)
 * @param {Array} array an array or array-like object
 * @param {String} separator Specifies a string to separate each pair of adjacent elements of the array. The separator is converted to a string if necessary. If omitted, the array elements are separated with a comma (","). If separator is an empty string, all elements are joined without any characters in between them.
 * @returns {String} A string with all array elements joined. If arr.length is 0, the empty string is returned.
 * @description The string conversions of all array elements are joined into one string.
 */
console.clear();
let join = (array, separator) => {
  return array.join(separator);
};
console.log('//// EXAMPLES \\\\\\\\');
/**
 * @example1 Joining an array four different ways
The following example creates an array, a, with three elements, then joins the array four times: using the default separator, then a comma and a space, then a plus and an empty string.
 */
console.log('Joining an array four different ways');
console.log('///// Array.prototype.join() \\\\\\\\\\');
console.log('Titles array:');
let titles = ['This', 'That', 'Those'];
console.table(titles);
console.table({ ['titles.join()']: titles.join() });
console.table({ ["titles.join('')"]: titles.join('') });
console.table({ ["titles.join('-')"]: titles.join('-') });
console.table({ ["titles.join(', ')"]: titles.join(', ') });

console.log('Joining an array-like object');
/**
The following example joins array-like object (arguments), by calling Function.prototype.call on Array.prototype.join.
 */
function f() {
  let joinedArguments =
    Array.prototype.join.call(arguments);
  return joinedArguments;
}
let joinMixedValues = f(1, 'a', true);
console.table({ ['Joined mixed values']: joinMixedValues });
