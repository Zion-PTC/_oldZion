import crypto from "crypto";

type cryptotype = typeof crypto;
export default class ZionCrypto {
  static crypto = crypto;
  static quickSha1HexAString(string: string) {
    return crypto.createHash("sha1").update(string).digest("hex");
  }
  static quickSha1HexAnObj(object: object) {
    return crypto
      .createHash("sha1")
      .update(JSON.stringify(object))
      .digest("hex");
  }
  static globalObject() {
    return Object.defineProperty(Object, "getHash", {
      value: function () {
        return ZionCrypto.quickSha1HexAString(
          this.prototype.constructor.toString()
        );
      },
    });
  }
}
