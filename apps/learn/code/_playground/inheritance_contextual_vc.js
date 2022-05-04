import util from 'util';
import { Utils } from '/Users/WAW/Documents/Projects/telegram-bots/Classes/_Node Standard Modules/zionUtil.js';

// quando lo si assegna normalmente, vc continua a mostrare i suggerimenti contestuali
let ciao = util;

// anche quando si utilizza Object.assing vc continua a mostrare i
// suggerimenti

class o {
  boo() {}
}
let oo = new o();

let b = {
  boomit: () => {},
};
Object.assign(b, util);

// b.console.log(b);

// inherit via prototype
let utilPrototype = oo.prototype;
// zionUtil.console.log(utilPrototype);

// provo ad importare Utils da zion per fare log e vedere risultato di prototyp
console.log(Utils.prototype);
