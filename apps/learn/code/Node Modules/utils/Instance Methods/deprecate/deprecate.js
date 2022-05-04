import util from 'util'
/**
 * util.debug(section)
Alias for util.debuglog. Usage allows for readability of that doesn't imply logging when only using util.debuglog().enabled.
 * 
 * util.deprecate(fn, msg[, code])
 * @param {Function} fn The function that is being deprecated.
 * @param {String} msg A warning message to display when the deprecated function is invoked.
 * @param {String} code deprecation code. See the list of deprecated APIs for a list of codes.
 * @return The deprecated function wrapped to emit a warning.

const util = require('util');

exports.obsoleteFunction = util.deprecate(() => {
  // Do something here.
}, 'obsoleteFunction() is deprecated. Use newShinyFunction() instead.');

When called, util.deprecate() will return a function that will emit a DeprecationWarning using the 'warning' event. The warning will be emitted and printed to stderr the first time the returned function is called. After the warning is emitted, the wrapped function is called without emitting a warning.

If the same optional code is supplied in multiple calls to util.deprecate(), the warning will be emitted only once for that code.
 */
const fn1 = util.deprecate(() => { 'ciao' }, 'someMessage', 'DEP0001');
const fn2 = util.deprecate(() => { 'olalala' }, 'someOtherMessage', 'DEP0001');
fn1(); // Emits a deprecation warning with code DEP0001
fn2(); // Does not emit a deprecation warning because it has the same code
/**
If either the --no-deprecation or --no-warnings command-line flags are used, or if the process.noDeprecation property is set to true prior to the first deprecation warning, the util.deprecate() method does nothing.

If the --trace-deprecation or --trace-warnings command-line flags are set, or the process.traceDeprecation property is set to true, a warning and a stack trace are printed to stderr the first time the deprecated function is called.

If the --throw-deprecation command-line flag is set, or the process.throwDeprecation property is set to true, then an exception will be thrown when the deprecated function is called.

The --throw-deprecation command-line flag and process.throwDeprecation property take precedence over --trace-deprecation and process.traceDeprecation.
 */