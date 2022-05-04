import util from 'util'
/**
 * @title util.formatWithOptions(inspectOptions, format[, ...args])
 * @param {Object}
 * @param {String}
This function is identical to util.format(), except in that it takes an inspectOptions argument which specifies options that are passed along to util.inspect().
 */
console.table({['util.formatWithOptions({ colors: true }, \'See object %O\', { foo: 42 });']:util.formatWithOptions({ colors: true }, 'See object %O', { foo: 42 })});