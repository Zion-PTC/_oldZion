import util from 'util'
import fs from 'fs'
/**
 * @title util.getSystemErrorMap()
 * @return Returns a Map of all system error codes available from the Node.js API. The mapping between error codes and error names is platform-dependent. See Common System Errors for the names of common errors.
 */
fs.access('file/that/does/not/exist', (err) => {
  const errorMap = util.getSystemErrorMap();
  const name = errorMap.get(err.errno);
  console.error(name);  // ENOENT
});