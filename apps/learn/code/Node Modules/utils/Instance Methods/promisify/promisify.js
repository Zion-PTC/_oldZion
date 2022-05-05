/**
 * util.promisify(original)
 * @param {Function} Takes a function following the common error-first callback style, i.e. taking an (err, value) => ... callback as the last argument.
 * @return {Function} returns a version that returns promises
 */

import util from 'util';
import fs from 'fs';

const stat = util.promisify(fs.stat);
stat('.')
  .then((stats) => {
    console.log(stats);
    // do something with 'stats'
  })
  .catch((error) => {
    // handle error.
  });
/**
Or, equivalently using aync functions.
 */
async function callStat() {
  const stats = await stat('.');
  console.log(`This directory is owned by ${stats.uid}`);
}
callStat();
/**
promisify() assumes that original is a function taking a callback as its final argument in all cases. If original is not a function, promisify() will throw an error. If original is a function but its last argument is not an error-first callback, it will still be passed an error-first callback as its last argument.

Using promisify() on class methods or other methods that use this may not work as expected unless handled specially:
 */

class Foo {
  constructor() {
    this.a = 42;
  }

  bar(callback) {
    callback(null, this.a);
  }
}

const foo = new Foo();

const naiveBar = util.promisify(foo.bar);
// TypeError: Cannot read property 'a' of undefined
// naiveBar().then(a => console.log(a));

naiveBar.call(foo).then((a) => console.log(a)); // '42'

const bindBar = naiveBar.bind(foo);
bindBar().then((a) => console.log(a)); // '42'

/**
 * Custom promisified functions
Using the util.promisify.custom symbol one can override the return value of util.promisify():
 */

function doSomething(foo, callback) {
  // ...
}

doSomething[util.promisify.custom] = (foo) => {
  return getPromiseSomehow();
};

const promisified = util.promisify(doSomething);
console.log(promisified === doSomething[util.promisify.custom]);
// prints 'true'

/**
This can be useful for cases where the original function does not follow the standard format of taking an error-first callback as the last argument.

For example, with a function that takes in (foo, onSuccessCallback, onErrorCallback):
 */

doSomething[util.promisify.custom] = (foo) => {
  return new Promise((resolve, reject) => {
    doSomething(foo, resolve, reject);
  });
};

/**
If promisify.custom is defined but is not a function, promisify() will throw an error.
 */
