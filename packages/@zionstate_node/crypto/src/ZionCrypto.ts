import crypto from 'crypto';

export default class ZionCrypto {
  static quickSha1HexAString(string: string) {
    return crypto.createHash('sha1').update(string).digest('hex');
  }
  static quickSha1HexAnObj(object: object) {
    return crypto
      .createHash('sha1')
      .update(JSON.stringify(object))
      .digest('hex');
  }
}
