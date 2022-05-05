import crypto from 'crypto';
console.log(crypto.constructor === Object); // true

class ZionCrypto {}
const zionCrypto = new ZionCrypto();
Object.assign(zionCrypto, crypto);
console.log(zionCrypto);
