/// <reference types="node" />
import crypto from "crypto";
export default class ZionCrypto {
    static crypto: typeof crypto;
    static quickSha1HexAString(string: string): string;
    static quickSha1HexAnObj(object: object): string;
    static globalObject(): ObjectConstructor;
}
