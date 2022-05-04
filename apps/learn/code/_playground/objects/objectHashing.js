import ZionCrypto from '/Users/WAW/Documents/Projects/telegram-bots/Classes/ZionCrypto.js';

class Element {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  getUp() {
    return 'getUp';
  }
}

let a = new Element(1, 2);
let b = new Element(1, 2);
let c = new Element(1, 3);
for (let key in a) {
  console.log(a[key]);
}

let hash1 = ZionCrypto.quickSha1HexAnObj(a);
let hash2 = ZionCrypto.quickSha1HexAnObj(b);
let hash3 = ZionCrypto.quickSha1HexAnObj(c);
console.log(hash1);
console.log(hash2);
console.log(hash3);
