import { expect } from 'chai';
import Mocha from 'mocha';
import crypto from 'crypto';
import { zionUtil } from '@zionstate/zion-util';

const testRunner = new Mocha({ slow: 1000 });
testRunner.suite.emit('pre-require', global, 'nofile', testRunner);
var suiteRun = testRunner.run();
process.on('exit', (code) => {
  process.exit(suiteRun.stats.failures > 0);
});
let log = zionUtil.debuglog('log');

describe(`CRYPTO MODULE NODE`, () => {
  describe(`costruttore`, () => {
    it(`il costruttore di 'crypto' è un oggetto`, () => {
      expect(crypto.constructor === Object).to.be.true;
    });
  });
  describe(`Classe Cypher`, () => {
    const Cipher = crypto.Cipher;
    const Duplex = Cipher.Duplex;
    const PassThrough = Cipher.PassThrough;
    const Readable = Cipher.Readable;
    const Stream = Cipher.Stream;
    const Transform = Cipher.Transform;
    const Writable = Cipher.Writable;
    describe(`Class Duplex`, () => {
      it(``, () => {});
    });
  });
});
