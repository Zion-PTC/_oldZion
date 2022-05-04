import util from 'util'
import fs from 'fs'
/**
 * @title util.getSystemErrorName(err)
 * @param {Number} err
 * @return {String} Returns the string name for a numeric error code that comes from a Node.js API. The mapping between error codes and error names is platform-dependent. See Common System Errors for the names of common errors.
 */
fs.access('file/that/does/not/exist', (err) => {
  const name = util.getSystemErrorName(err.errno);
  console.error(name);  // ENOENT
});