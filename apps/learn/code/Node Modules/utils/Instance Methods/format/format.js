import util from 'util'
/**
 * util.format(format[, ...args])
 * @param {String} format A printf-like format string.
 * @return: <string> The formatted string
The util.format() method returns a formatted string using the first argument as a printf-like format string which can contain zero or more format specifiers. Each specifier is replaced with the converted value from the corresponding argument. Supported specifiers are:

  • %s: String will be used to convert all values except BigInt, Object and -0. BigInt values will be represented with an n and Objects that have no user defined toString function are inspected using util.inspect() with options { depth: 0, colors: false, compact: 3 }.
  • %d: Number will be used to convert all values except BigInt and Symbol.
  • %i: parseInt(value, 10) is used for all values except BigInt and Symbol.
  • %f: parseFloat(value) is used for all values expect Symbol.
  • %j: JSON. Replaced with the string '[Circular]' if the argument contains circular references.
  • %o: Object. A string representation of an object with generic JavaScript object formatting. Similar to util.inspect() with options { showHidden: true, showProxy: true }. This will show the full object including non-enumerable properties and proxies.
  • %O: Object. A string representation of an object with generic JavaScript object formatting. Similar to util.inspect() without options. This will show the full object not including non-enumerable properties and proxies.
  • %c: CSS. This specifier is ignored and will skip any CSS passed in.
  • %%: single percent sign ('%'). This does not consume an argument.
If a specifier does not have a corresponding argument, it is not replaced:
 */
console.table({['util.format(\'%s:$s\', \'foo\')']:util.format('%s:$s', 'foo')});
/**
Values that are not part of the format string are formatted using util.inspect() if their type is not string.

If there are more arguments passed to the util.format() method than the number of specifiers, the extra arguments are concatenated to the returned string, separated by spaces:
 */
console.table({['util.format(\'%s:%s\', \'foo\', \'bar\', \'baz\')']:util.format('%s:%s', 'foo', 'bar', 'baz')});
/**
If the first argument does not contain a valid format specifier, util.format() returns a string that is the concatenation of all arguments separated by spaces:
 */
console.table({['util.format(1, 2, 3)']:util.format(1, 2, 3)});
/**
If only one argument is passed to util.format(), it is returned as it is without any formatting:
 */
console.table({['util.format(\'%% %s\')']:util.format('%% %s')});
/**
util.format() is a synchronous method that is intended as a debugging tool. Some input values can have a significant performance overhead that can block the event loop. Use this function with care and never in a hot code path.
 */