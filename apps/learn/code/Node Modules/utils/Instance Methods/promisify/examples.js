import util from 'util';

let promFoo = util.promisify((callback) => {
  return callback(null, 'iii');
});
promFoo().then((e) => console.log(e));
