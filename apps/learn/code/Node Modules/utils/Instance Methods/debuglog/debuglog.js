import util from 'util'
/**
 * @title util.debuglog(section[, callback])
 * @param {String} section <string> A string identifying the portion of the application for which the debuglog function is being created.
 * @param {Function} callback <Function> A callback invoked the first time the logging function is called with a function argument that is a more optimized logging function.
 * @returns <Function> The logging function
 */
function debuglogFn(section, callback) {
  return util.debuglog(section, [callback])
}
/**
 * @description
The util.debuglog() method is used to create a function that conditionally writes debug messages to stderr based on the existence of the NODE_DEBUG environment variable. If the section name appears within the value of that environment variable, then the returned function operates similar to console.error(). If not, then the returned function is a no-op.
 */
const debuglog = util.debuglog('foo')
debuglog('Hello from foo [%d]', 123);
/**
If this program is run with NODE_DEBUG=foo in the environment, then it will output something like:

FOO 3245: hello from foo [123]

where 3245 is the process id. If it is not run with that environment variable set, then it will not print anything.

The section supports wildcard also:
 */
const debuglog2 = util.debuglog('foo-bar');
debuglog2('hi there, it\'s foo-bar [%d]', 2333);
/**
if it is run with NODE_DEBUG=foo* in the environment, then it will output something like:

FOO-BAR 3257: hi there, it's foo-bar [2333]

Multiple comma-separated section names may be specified in the NODE_DEBUG environment variable: NODE_DEBUG=fs,net,tls.

The optional callback argument can be used to replace the logging function with a different function that doesn't have any initialization or unnecessary wrapping.
 */
let debuglog3 = util.debuglog('foo-internals', (debug) => {
  debuglog3 = debug
})
debuglog3('hi there this is the third type of debuglog [%d]', 1)
/**
 * @property debuglog().enabled
The util.debuglog().enabled getter is used to create a test that can be used in conditionals based on the existence of the NODE_DEBUG environment variable. If the section name appears within the value of that environment variable, then the returned value will be true. If not, then the returned value will be false.
 */
const enabled = util.debuglog('foo').enabled;
if (enabled) { console.log('hello from froo [%d]', 123); }
/**
If this program is run with NODE_DEBUG=foo in the environment, then it will output something like:

hello from foo [123]
 * 
*/