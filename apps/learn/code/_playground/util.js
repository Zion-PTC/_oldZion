import util from 'util';

class NewUtils {
  constructor() {
    this.ucraini;
  }
  mosca() {
    return console.log('trattativa');
  }
}

function augment(rec, giv) {
  for (let methodName in giv) {
    rec.prototype[methodName] = giv[methodName];
  }
}

augment(NewUtils, util);
// let newUtil = NewUtils(); // error cause
// NewUtils cannot be constructed

console.log(NewUtils.prototype); // same as util

let newUtil2 = {};
// augment(newUtil2, util); TypeError: Cannot set
// properties of undefined (setting '_errnoException')
// NewUtils.inspect(newUtil2); TypeError: NewUtils.inspect is not a function

class Comunisti {
  constructor() {}
  sayBoo(arg) {
    return console.log(arg);
  }
}

Comunisti.prototype.inspect = util.inspect;

let rolex = new Comunisti();
newUtil2.a = 1;
rolex.sayBoo(rolex); // Comunisti {}
console.log(rolex.inspect(newUtil2)); // { a: 1 }

augment(Comunisti, util);
let offensiva = new Comunisti();

let conte = [];
for (let meth in util) {
  conte.push(meth);
}
class Golosa {}
Golosa.prototype[conte[3]] = util[3];
console.log(conte[3]); // callbackify
let sport = new Golosa();
// sport.callbackify();

function betterAugment(rec, giv) {
  for (let method in giv) {
    rec.prototype[method] = giv.method;
  }
}

class BetterUtil {}

betterAugment(BetterUtil, util);
let armi = new BetterUtil();
// armi.callbackify(); // TypeError: armi.callbackify is not a function
// BetterUtil.prototype.callbackify(); // TypeError: armi.callbackify is not a function
