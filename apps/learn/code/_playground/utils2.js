import util from 'util';

class Util {}

Util.prototype.callbackify = util.callbackify;
let newUtil = new Util();
function name() {}
newUtil.callbackify(name);

console.log(util.constructor === Object);
